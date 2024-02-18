import { sql } from "@vercel/postgres";

export interface RetrievedUserData {
  id: string;
  name: string;
  email: string;
  image: string;
  password: string;
}

export interface StoredUserData {
  name: string;
  email: string;
  password: string;
}

// Save the user to the database
export const createUser = async (user: StoredUserData) => {
  await sql`INSERT INTO users (name, email, password) 
            VALUES (${user.name}, ${user.email}, ${user.password});`;
};

export const findUserByEmail = async (
  email: string
): Promise<RetrievedUserData | false> => {
  // Search for the user's data in the database based on their email
  const { rows } =
    await sql`SELECT id, name, email, image, password FROM users WHERE email = ${email}`;

  // If no user with the given email is found, return false
  if (!rows.length) return false;
  // If a user is found, return their encrypted data
  else
    return {
      id: rows[0].id,
      name: rows[0].name,
      email: rows[0].email,
      image: rows[0].image,
      password: rows[0].password,
    };
};

// Check if a user with the given email exists in the database
export const emailExistsInDatabase = async (
  email: string
): Promise<boolean> => {
  return (await sql`SELECT EXISTS (SELECT 1 FROM users WHERE email = ${email})`)
    .rows[0].exists;
};
