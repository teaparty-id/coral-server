import { z } from "zod";
import bcrypt from "bcryptjs";
import UserRepository from "~~/submodule/coraline/app/utils/database/repositories/user.repository";

const schema = z.object({
  username: z.string().min(3),
  email: z.email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
});

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, schema.parse);
  if (body.password != body.confirmPassword) {
    throw createError({
      status: 400,
    });
  }

  const user = await UserRepository.findByUsernameOrEmail(body.email, body.username);
  if (user) {
    throw createError({
      status: 400,
      message: "username or email already registered",
    });
  } else {
    await UserRepository.create({
      id: crypto.randomUUID(),
      name: body.username,
      email: body.email,
      passwordHash: await bcrypt.hash(body.password, 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  return {
    success: true,
  };
});
