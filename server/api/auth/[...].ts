import Google from "@auth/core/providers/google";
import Twitter from "@auth/core/providers/twitter";
import GithubProvider from "@auth/core/providers/github";
import CredentialsProvider from "@auth/core/providers/credentials";
import type { AuthConfig } from "@auth/core/types";
import { NuxtAuthHandler } from "#auth";
import PostgresAdapter from "@auth/pg-adapter";
import { createPool, sql } from "@vercel/postgres";
import * as argon2 from "argon2";
import validator from "validator";
import { v4 as uuidv4 } from "uuid";

const runtimeConfig = useRuntimeConfig();

const pool = createPool();

export const authOptions: AuthConfig = {
  secret: runtimeConfig.authJs.secret,
  adapter: PostgresAdapter(pool),
  pages: {
    signIn: "/auth",
    signOut: "/dashboard",
    error: "/auth",
    verifyRequest: "/auth",
    newUser: "/auth/register",
  },
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
        if (!validator.isEmail(credentials.email)) return null;

        const user = (
          await sql`SELECT id, name, email, password FROM users WHERE email = ${credentials.email}`
        ).rows[0];

        if (!user) return null;

        if (!(await argon2.verify(user.password, credentials.password)))
          return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ user }) {
      const session = await PostgresAdapter(pool).createSession?.({
        expires: new Date(Date.now() + 2592000),
        sessionToken: uuidv4(),
        userId: user.id,
      });

      return { id: session?.sessionToken };
    },
    async session({ session: defaultSession, user }) {
      const session: Session = {
        user: user,
        expires: defaultSession.expires,
      };

      return session;
    },
  },
  jwt: {
    async encode({ token }) {
      return token?.id as unknown as string;
    },
    async decode() {
      return null;
    },
  },
};

export default NuxtAuthHandler(authOptions, runtimeConfig);
