import { getRandomValues, subtle } from "uncrypto";
import * as argon2 from "argon2";

// Constants
const AES_GCM_KEY_LENGTH = 256;
const IV_LENGTH = 12;

// Retrieve .env variables
const runtimeConfig = useRuntimeConfig();

// Encrypts data using symmetric encryption (AES-GCM)
export const encryptSymmetric = async (data: string) => {
  try {
    // Get encryption key
    const key = runtimeConfig.crypto.key;

    // Generate a random 96-bit initialization vector (IV)
    const iv = getRandomValues(new Uint8Array(IV_LENGTH));

    // Encode the data using UTF-8 encoding
    const encodedData = new TextEncoder().encode(data);

    // Prepare the secret key for encryption
    const secretKey = await subtle.importKey(
      "raw",
      Buffer.from(key, "base64"),
      {
        name: "AES-GCM",
        length: AES_GCM_KEY_LENGTH,
      },
      true,
      ["encrypt", "decrypt"]
    );

    // Encrypt the data using the secret key and IV
    const encryptedData = await subtle.encrypt(
      {
        name: "AES-GCM",
        iv,
      },
      secretKey,
      encodedData
    );

    // Return the encrypted data and the IV encoded in base64
    return {
      cipher: Buffer.from(encryptedData).toString("base64"),
      iv: Buffer.from(iv).toString("base64"),
    };
  } catch (error) {
    console.error("Error encrypting data:", error);
    throw error;
  }
};

// Decrypts data using symmetric decryption (AES-GCM)
export const decryptSymmetric = async (cipher: string, iv: string) => {
  try {
    // Get encryption key
    const key = runtimeConfig.crypto.key;

    // Prepare the secret key for decryption
    const secretKey = await subtle.importKey(
      "raw",
      Buffer.from(key, "base64"),
      {
        name: "AES-GCM",
        length: AES_GCM_KEY_LENGTH,
      },
      true,
      ["encrypt", "decrypt"]
    );

    // Decrypt the encrypted data using the secret key and IV
    const data = await subtle.decrypt(
      {
        name: "AES-GCM",
        iv: Buffer.from(iv, "base64"),
      },
      secretKey,
      Buffer.from(cipher, "base64")
    );

    // Decode the decrypted data using UTF-8 encoding and return it
    return new TextDecoder().decode(data);
  } catch (error) {
    console.error("Error decrypting data:", error);
    throw error;
  }
};

// Generates a hash using the Argon2 password hashing algorithm
export const generateHash = async (data: string) => {
  try {
    return await argon2.hash(data);
  } catch (error) {
    console.error("Error generating hash:", error);
    throw error;
  }
};

// Verifies a hash against the provided data
export const verifyHash = async (hash: string, data: string) => {
  try {
    return await argon2.verify(hash, data);
  } catch (error) {
    console.error("Error verifying hash:", error);
    throw error;
  }
};
