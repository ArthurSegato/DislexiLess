import validator from "validator";
import postgres from "postgres";
import * as argon2 from "argon2";

const sql = postgres(process.env.POSTGRES_URL);

export default defineEventHandler(async (event) => {
  try {
    const runtimeConfig = useRuntimeConfig();
    const body = await readBody(event);

    if (!validator.isAlpha(body.name)) throw new Error("Name must be valid");

    if (!validator.isEmail(body.email))
      throw new Error("Email address must be valid");

    if (!validator.isStrongPassword(body.password))
      throw new Error("Password must be valid");

    const [user] = await sql`SELECT id FROM users WHERE email = ${body.email}`;

    if (user) throw new Error("User already registered.");

    const [user] = await sql`INSERT INTO users (username, password, email)
                VALUES ('new_user', 'password123', 'user@example.com');
    `;

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
