import { sql } from '@vercel/postgres';

(async () => {
    /* DROP TABLES */
    await sql`DROP TABLE IF EXISTS verification_token;`;
    await sql`DROP TABLE IF EXISTS accounts;`;
    await sql`DROP TABLE IF EXISTS sessions;`;
    await sql`DROP TABLE IF EXISTS users;`;

    /* CREATE TABLES */
    await sql`CREATE TABLE verification_token
    (
      identifier TEXT NOT NULL,
      expires TIMESTAMPTZ NOT NULL,
      token TEXT NOT NULL,
    
      PRIMARY KEY (identifier, token)
    );`
    await sql`CREATE TABLE accounts
    (
      id SERIAL,
      "userId" INTEGER NOT NULL,
      type VARCHAR(255) NOT NULL,
      provider VARCHAR(255) NOT NULL,
      "providerAccountId" VARCHAR(255) NOT NULL,
      refresh_token TEXT,
      access_token TEXT,
      expires_at BIGINT,
      id_token TEXT,
      scope TEXT,
      session_state TEXT,
      token_type TEXT,
    
      PRIMARY KEY (id)
    );`
    await sql`CREATE TABLE sessions
    (
      id SERIAL,
      "userId" INTEGER NOT NULL,
      expires TIMESTAMPTZ NOT NULL,
      "sessionToken" VARCHAR(255) NOT NULL,
    
      PRIMARY KEY (id)
    );`
    await sql`CREATE TABLE users
    (
      id SERIAL,
      name VARCHAR(255),
      email VARCHAR(255),
      "emailVerified" TIMESTAMPTZ,
      image TEXT,
      password VARCHAR(255),
    
      PRIMARY KEY (id)
    );`

    /* END EXECUTION */
    return;
})();