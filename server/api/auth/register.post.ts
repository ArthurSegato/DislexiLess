import validator from "validator";
import { sql } from "@vercel/postgres";
import * as argon2 from "argon2";

const generateRandomCode = () => {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
  }

  return code;
};

export default defineEventHandler(async (event) => {
  try {
    // Get request body
    const body = await readBody(event);

    // Valiate Name
    if (!validator.isAlpha(body.name)) throw new Error("Name must be valid");

    // Valiate Email
    if (!validator.isEmail(body.email))
      throw new Error("Email address must be valid");

    // Valiate Password
    if (!validator.isStrongPassword(body.password))
      throw new Error("Password must be valid");

    // Hash the password
    const passwordHash = await argon2.hash(body.password);

    // Save user in db
    await sql`INSERT INTO users (name, email, password)
              VALUES (${body.name}, ${body.email}, ${passwordHash});`;

    // Get id of the created user
    const getId = await sql`SELECT id FROM users WHERE email = ${body.email}`;

    // Register CredentialsProvider account in db
    await sql`INSERT INTO accounts ("userId", type, provider, "providerAccountId")
              VALUES (${getId.rows[0].id}, 'credentials', 'credentials',  1337);`;

    return {
      message: "Your account has been created",
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
