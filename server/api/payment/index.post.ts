import ky from "ky";
import { z } from "zod";
import { generateIPaymuSeed } from "~~/server/utils/ipaymu";
import PlanRepository from "~~/submodule/coraline/app/utils/database/repositories/plan.repository";
import SubscriptionRepository from "~~/submodule/coraline/app/utils/database/repositories/subscription.repository";

const schema = z.object({
  productId: z.string(),
});

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, schema.parse);
  const session = await requireUserSession(event);

  // Check active subscription
  const subs = await SubscriptionRepository.findStatusByUserId(session.user.id, "active");
  if (subs) {
    throw createError({
      status: 403,
      statusMessage: "currently subscription still active",
    });
  }

  const product = await PlanRepository.getJoinPriceById(body.productId);
  if (product.length <= 0) {
    throw createError({
      status: 404,
      message: "product not found",
    });
  }

  const seed = generateIPaymuSeed();
  const timestamp = generateTimestamp();
  const plan = product[0];
  const formData = {
    name: session.user.name,
    email: session.user.email,
    phone: session.user.phone || "088888888888",
    amount: plan?.plan_prices?.price,
    notifyUrl: "https://coraline.biz.id/api/payment/cb/notify",
    comments: plan?.plans.description!,
    referenceId: `INV${timestamp}-${session.user.id}`,
    paymentMethod: "qris",
    paymentChannel: "mpm",
    product: [plan?.plans.name!],
    qty: [1],
    price: [plan?.plan_prices?.price],
    returnUrl: "https://coraline.biz.id",
    feeDirection: "BUYER",
  };

  const signature = await generateIPaymuSignature({ apiKey: seed.key, method: "POST", va: seed.va, body: formData });
  const res = await ky
    .post("https://sandbox.ipaymu.com/api/v2/payment/direct", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        signature: signature.signature,
        va: seed.va,
        timestamp: timestamp,
      },
      json: formData,
      redirect: "follow",
    })
    .json();

  const anyRes = res as any;
  if (anyRes.Success) {
    await SubscriptionRepository.purchase({
      userId: session.user.id!,
      planId: plan?.plans.id!,
      priceId: plan?.plan_prices?.id!,
      externalId: formData.referenceId,
      amount: plan?.plan_prices?.price!,
    });
  } else {
    throw createError({
      status: anyRes.Status || 500,
      message: anyRes.Message || "Unknown error occured",
    });
  }

  return {
    success: true,
    data: res,
  };
});
