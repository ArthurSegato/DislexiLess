import Google from "@auth/core/providers/google";
import Twitter from "@auth/core/providers/twitter";
import GithubProvider from "@auth/core/providers/github";
import CredentialsProvider from "@auth/core/providers/credentials";
import type { AuthConfig } from "@auth/core/types";
import { NuxtAuthHandler } from "#auth";
import { sql } from "@vercel/postgres";
import * as argon2 from "argon2";

const runtimeConfig = useRuntimeConfig();

export const authOptions: AuthConfig = {
  secret: runtimeConfig.authJs.secret,
  providers: [
    Google({
      clientId: runtimeConfig.google.clientId,
      clientSecret: runtimeConfig.google.clientSecret,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    Twitter({
      clientId: runtimeConfig.twitter.clientId,
      clientSecret: runtimeConfig.twitter.clientSecret,
    }),
    GithubProvider({
      clientId: runtimeConfig.github.clientId,
      clientSecret: runtimeConfig.github.clientSecret,
    }),
    CredentialsProvider({
      async authorize(credentials, req) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        let user = null;

        if (!emailRegex.test(credentials.email)) return null;

        //const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
        user =
          await sql`SELECT id, name, email, hash FROM user WHERE email = ${credentials.email}`;

        if (!(await argon2.verify(user.password, credentials.password)))
          return null;

        if (!user) throw new Error("User was not found.");

        return user;
      },
    }),
  ],
};

export default NuxtAuthHandler(authOptions, runtimeConfig);
