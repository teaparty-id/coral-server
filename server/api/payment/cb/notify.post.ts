import PlanRepository from "~~/submodule/coraline/app/utils/database/repositories/plan.repository";
import SubscriptionRepository from "~~/submodule/coraline/app/utils/database/repositories/subscription.repository";
import SubscriptionTransactionRepository from "~~/submodule/coraline/app/utils/database/repositories/subscription-transaction.repository";
import { generateIPaymuSeed, phpKsort } from "~~/server/utils/ipaymu";
import { hmacSHA256 } from "../../../utils/cipher";

export default defineEventHandler(async (event) => {
  const signature = getHeader(event, "X-Signature");

  if (!signature) {
    throw createError({
      status: 401,
      statusMessage: "signature is required",
    });
  }

  const seed = generateIPaymuSeed();
  const body = await readBody(event);
  delete body.signature;
  const sortedData: any = phpKsort(body);

  // https://ipaymu.github.io/docs-ipaymu-api-v2/id/docs/callback#contoh-kode-implementasi
  const stringData = JSON.stringify(sortedData).replace(/\//g, "\\/");
  const signatureData = await hmacSHA256(seed.va, stringData);
  if (signature != signatureData) {
    throw createError({
      status: 401,
      statusMessage: "signature not valid",
      data: {
        signature,
        signatureData,
        orig: body,
        sorted: sortedData,
      },
    });
  }

  const purchase = await SubscriptionRepository.validatePurchase(body.sid);
  if (!purchase) {
    throw createError({
      status: 404,
      statusMessage: "transaction not found",
    });
  }

  return {
    success: true,
  };
});
