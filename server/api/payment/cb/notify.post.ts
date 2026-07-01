import PlanRepository from "~~/submodule/coraline/app/utils/database/repositories/plan.repository";
import { generateIPaymuSeed } from "~~/server/utils/ipaymu";

export default defineEventHandler(async (event) => {
  console.log(readBody(event));
  console.log(getHeaders(event));

  return {
    success: true,
  };
});
