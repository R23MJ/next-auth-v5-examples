"use server";

import { signIn } from "@/auth";

export async function CredentialsSignIn(formData: FormData) {
  await signIn("credentials", {
    username: formData.get("username"),
    password: formData.get("password"),
    redirect: true,
    redirectTo: "/account",
  });
}
