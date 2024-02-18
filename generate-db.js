import { sql } from '@vercel/postgres';

(async () => {
  /* DROP TABLES */
  await sql`DROP TABLE IF EXISTS users;`;

  /* CREATE TABLES */
  await sql`CREATE TABLE users
    (
      id SERIAL,
      name TEXT,
      email TEXT UNIQUE,
      image TEXT,
      password TEXT,
    
      PRIMARY KEY (id)
    );`

  /* END EXECUTION */
  return;
})();