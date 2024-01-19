import validator from "validator";
import { sql } from "@vercel/postgres";

export default defineEventHandler(async (event) => {
  try {
    // Get request body
    const body = await readBody(event);

    // Valiate Email
    if (!validator.isEmail(body.email))
      throw new Error("Email address must be valid");

    // Search if there is already a user registered in db
    if ((await sql`SELECT id FROM users WHERE email = ${body.email}`).rows[0])
      return true;
    else return false;
  } catch (error) {
    if (error instanceof Error) {
      throw createError({
        statusCode: 400,
        statusMessage: error.message,
      });
    } else return error;
  }
});
