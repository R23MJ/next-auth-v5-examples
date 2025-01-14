import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { getUser } from "./lib/utils";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("credentials", credentials);
        const user = await getUser(
          credentials.username as string,
          credentials.password as string
        );

        return user ?? null;
      },
    }),
    Google,
  ],
});
