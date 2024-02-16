import { sql } from "@vercel/postgres";

export interface EncryptedUser {
  name: {
    cipher: string;
    iv: string;
  };
  email: string;
  password: {
    cipher: string;
    iv: string;
  };
}

export const createUser = async (user: EncryptedUser) => {
  const { name, email, password } = user;
  // Check if a user with the provided email already exists
  if (!emailExistsInDatabase(email))
    throw createError({ message: "User already exists!", statusCode: 409 });

  // Save the encrypted user data to the database
  await sql`INSERT INTO users (name, iv_name, email, password, iv_password)
    VALUES (${name.cipher}, ${name.iv}, ${email},
            ${password.cipher}, ${password.iv});`;
};

export const findUserByEmail = async (
  email: string
): Promise<EncryptedUser | false> => {
  // Search for the user's data in the database based on their email
  const { rows } = await sql`SELECT name, iv_name, email, password, iv_password
    FROM users WHERE email = ${email}`;

  // If no user with the given email is found, return false
  if (!rows.length) return false;
  // If a user is found, return their encrypted data
  else
    return {
      name: {
        cipher: rows[0].name,
        iv: rows[0].iv_name,
      },
      email: rows[0].email,
      password: {
        cipher: rows[0].password,
        iv: rows[0].iv_password,
      },
    };
};

// Check if a user with the given email exists in the database
export const emailExistsInDatabase = async (
  email: string
): Promise<boolean> => {
  return (await sql`SELECT EXISTS (SELECT 1 FROM users WHERE email = ${email})`)
    .rows[0].exists;
};
