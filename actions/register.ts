"use server";

import * as z from "zod";
import bcryptjs from "bcryptjs";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }

  // create user
  const { name, email, password } = validateFields.data;
  const hashedPassword: string = await bcryptjs.hash(password, 10);

  // const existingUser = await db.user.findUnique({
  //   where: {
  //     email,
  //   },
  // });

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Invalid credentials" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  //TODO Send verification token email

  return { success: "User created" };
};
