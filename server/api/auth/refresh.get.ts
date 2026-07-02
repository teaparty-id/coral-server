import { authUtils } from "./utils";

export default defineEventHandler(async (event) => {
  return await authUtils(event).refreshUserSession();
});
