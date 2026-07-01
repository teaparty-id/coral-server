import PlanRepository from "~~/submodule/coraline/app/utils/database/repositories/plan.repository";
import { generateIPaymuSeed } from "~~/server/utils/ipaymu";
import { hmacSHA256 } from "../../../utils/cipher";

export default defineEventHandler(async (event) => {
  const signature = getHeader(event, "X-Signature");

  if (!signature) {
    throw createError({
      status: 401,
    });
  }

  const seed = generateIPaymuSeed();
  const body = await readBody(event);
  delete body.signature;

  const sortedKeys = Object.keys(body).sort();
  const sortedData: any = {};
  for (const key of sortedKeys) {
    sortedData[key] = body[key];
  }

  const signatureData = await hmacSHA256(seed.va, JSON.stringify(sortedData));
  if (signature != signatureData) {
    throw createError({
      status: 401,
    });
  }

  return {
    success: true,
    data: sortedData,
  };
});
