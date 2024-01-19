import validator from "validator";
import { sql } from "@vercel/postgres";
import * as argon2 from "argon2";

export default defineEventHandler(async (event) => {
  try {
    // Get request body
    const body = await readBody(event);

    // Valiate Email
    if (!validator.isEmail(body.email))
      throw new Error("Email address must be valid");

    // Valiate Password
    if (!validator.isStrongPassword(body.password))
      throw new Error("Password must be valid");

    // Hash the password
    const passwordHash = await argon2.hash(body.password);

    // Save user in db
    await sql`UPDATE users SET password = ${passwordHash} WHERE email = ${body.email};`;

    return {
      message: "Your password has been registered",
    };
  } catch (error) {
    if (error instanceof Error) {
      throw createError({
        statusCode: 400,
        statusMessage: error.message,
      });
    } else return error;
  }
});
