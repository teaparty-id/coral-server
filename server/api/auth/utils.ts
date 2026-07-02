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

  async function refreshUserSession(username?: string) {
    const session = await getUserSession(event);
    username = username || session.user?.name;

    if (username) {
      const data = await UserRepository.findByUsername(username);
      if (!data) {
        return {
          ok: false,
          status: 404,
          message: "account not found",
        };
      }

      const subs = await SubscriptionRepository.findStatusByUserId(data?.id, "active");
      await setUserSession(event, {
        user: {
          id: data.id,
          name: data.name,
          email: data.email,
          plan: subs?.plans?.code,
        },
      });
    }

    return {
      ok: true,
    };
  }

  return {
    validateCredentials,
    refreshUserSession,
  };
}
