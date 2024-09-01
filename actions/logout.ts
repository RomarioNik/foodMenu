"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  // you can do something before user logout
  await signOut({ redirectTo: "/auth/login" });
};
