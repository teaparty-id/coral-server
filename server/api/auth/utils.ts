import UserRepository from "~~/submodule/coraline/app/utils/database/repositories/user.repository";
import SubscriptionRepository from "~~/submodule/coraline/app/utils/database/repositories/subscription.repository";
import { EventHandlerRequest, H3Event } from "h3";
import bcrypt from "bcryptjs";

export function authUtils(event: H3Event<EventHandlerRequest>) {
  async function validateCredentials(username: string, password: string) {
    const user = await UserRepository.findByUsername(username);

    if (user) {
      if (!(await bcrypt.compare(password, user.passwordHash))) {
        return {
          ok: false,
          status: 404,
          message: "account not found",
        };
      }

      await setUserSession(event, {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });

      await refreshUserSession();
      return {
        ok: true,
        status: 200,
      };
    }

    return {
      ok: false,
      status: 500,
      message: "unknown error",
    };
  }

  async function refreshUserSession() {
    const session = await getUserSession(event);

    if (session.user) {
      const data = await UserRepository.findByUsername(session.user.name);
      const subs = await SubscriptionRepository.findStatusByUserId(session.user.id, "active");

      if (data) {
        await setUserSession(event, {
          user: {
            id: data.id,
            name: data.name,
            email: data.email,
            plan: subs?.plans?.code || undefined,
          },
        });
      }
    }

    return {
      success: true,
    };
  }

  return {
    validateCredentials,
    refreshUserSession,
  };
}
