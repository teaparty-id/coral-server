import { z } from "zod";
import bcrypt from "bcryptjs";
import UserRepository from "~~/submodule/coraline/app/utils/database/repositories/user.repository";
import SubscriptionRepository from "~~/submodule/coraline/app/utils/database/repositories/subscription.repository";
import { User } from "#auth-utils";

const schema = z.object({
  username: z.string(),
  password: z.string(),
});

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, schema.parse);
  const user = await UserRepository.findByUsername(body.username);

  if (user) {
    if (await bcrypt.compare(body.password, user.passwordHash)) {
      let userData: User = {
        id: user.id,
        name: user.name,
        email: user.email,
      };

      const subs = await SubscriptionRepository.findStatusByUserId(user.id, "active");
      if (subs) {
        userData.plan = subs.plans?.code;
      }

      await setUserSession(event, {
        user: userData,
      });
    } else {
      throw createError({
        status: 400,
        message: "username or password invalid",
      });
    }
  } else {
    throw createError({
      status: 404,
      message: "user not found",
    });
  }

  return {
    success: true,
  };
});
