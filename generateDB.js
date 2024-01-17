import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL);

await sql`DROP TABLE IF EXISTS verification_token;`;

await sql`DROP TABLE IF EXISTS session;`;

await sql`DROP TABLE IF EXISTS account;`;

await sql`DROP TABLE IF EXISTS users;`;

console.log(await sql`
CREATE TABLE users (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    emailVerified TIMESTAMP,
    image VARCHAR(255),
    hash VARCHAR(255),
    code VARCHAR(255)
);`);

console.log(await sql`
CREATE TABLE account (
    userId VARCHAR(255),
    type VARCHAR(255),
    provider VARCHAR(255),
    providerAccountId VARCHAR(255),
    refresh_token VARCHAR(255),
    access_token VARCHAR(255),
    expires_at INT,
    token_type VARCHAR(255),
    scope VARCHAR(255),
    id_token VARCHAR(255),
    session_state VARCHAR(255),
    CONSTRAINT fk_user FOREIGN KEY(userId) REFERENCES users(id)
);`);
console.log(await sql`
CREATE TABLE session (
    id VARCHAR(255),
    expires TIMESTAMP,
    sessionToken VARCHAR(255),
    userId VARCHAR(255),
    CONSTRAINT fk_user_session FOREIGN KEY(userId) REFERENCES users(id)
);`);

console.log(await sql`
CREATE TABLE verification_token (
    identifier VARCHAR(255),
    token VARCHAR(255),
    expires TIMESTAMP,
    userId VARCHAR(255),
    CONSTRAINT fk_user_verification FOREIGN KEY(userId) REFERENCES users(id)
);`);