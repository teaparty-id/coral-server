import { z } from "zod";
import PlanRepository from "~~/submodule/coraline/app/utils/database/repositories/plan.repository";
import ky from "ky";
import { generateIPaymuSeed } from "~~/server/utils/ipaymu";

const schema = z.object({
  productId: z.string(),
});

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, schema.parse);
  const session = await requireUserSession(event);

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
    product: [plan?.plans.name!],
    qty: [1],
    price: [plan?.plan_prices?.price],
    description: [plan?.plans.description!],
    returnUrl: "https://coraline.biz.id",
    notifyUrl: "https://coraline.biz.id/api/payment/cb/notify",
    cancelUrl: "https://coraline.biz.id/api/payment/cb/cancel",
    referenceId: `invoice_${timestamp}_${session.user.id}`,
    feeDirection: "BUYER",
    paymentMethod: "qris,va",
    buyerName: session.user.name,
    buyerEmail: session.user.email,
  };

  const signature = await generateIPaymuSignature({ apiKey: seed.key, method: "POST", va: seed.va, body: formData });
  const res = await ky
    .post("https://sandbox.ipaymu.com/api/v2/payment", {
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

  return {
    success: true,
    data: res,
  };
});
