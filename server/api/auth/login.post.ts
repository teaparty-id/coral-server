import { z } from "zod";
import { authUtils } from "./utils";

const schema = z.object({
  username: z.string(),
  password: z.string(),
});

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, schema.parse);

  const validate = await authUtils(event).validateCredentials(body.username, body.password);
  if (!validate.ok) {
    throw createError({
      status: validate.status,
      message: validate.message,
    });
  }

  return {
    success: true,
  };
});
