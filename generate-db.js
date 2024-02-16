import { sql } from '@vercel/postgres';

(async () => {
  /* DROP TABLES */
  await sql`DROP TABLE IF EXISTS users;`;

  /* CREATE TABLES */
  await sql`CREATE TABLE users
    (
      id SERIAL,
      name VARCHAR(255),
      iv_name VARCHAR(255),
      email VARCHAR(255),
      image TEXT,
      password VARCHAR(255),
      iv_password VARCHAR(255),
    
      PRIMARY KEY (id)
    );`

  /* END EXECUTION */
  return;
})();