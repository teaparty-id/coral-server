import PlanRepository from "~~/submodule/coraline/app/utils/database/repositories/plan.repository";

export default defineEventHandler(async (event) => {
  const plans = await PlanRepository.getAllPlans();

  return {
    success: true,
    data: plans,
  };
});
