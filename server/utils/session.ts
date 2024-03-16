/* INTERFACES */
export interface SessionData {
  id: string;
  name: string;
  email: string;
  image: string;
}

export interface SessionKey {
  key: string;
}

/* FUNCTIONS */
export const retrieveUserSession = async (
  key: string
): Promise<SessionData> => {
  try {
    // Retrieve the storage mechanism for sessions
    const storage = useStorage("redis");

    // Retrieve the session data
    const sessionData = await storage.getItem(key);

    // Abort if session is not found
    if (!sessionData)
      throw createError({
        message:
          "No authenticated session was found. Please sign in to access our services!",
        statusCode: 404,
      });

    // Return the session
    return sessionData;
  } catch (error) {
    throw error;
  }
};

export const terminateUserSession = async (key: string): Promise<Object> => {
  try {
    // Retrieve the storage mechanism for sessions
    const storage = useStorage("redis");

    // Abort if session is not found
    if (!(await storage.hasItem(key))) {
      throw createError({
        message: "No authenticated session was found.",
        statusCode: 404,
      });
    }

    // Retrieve the session data
    await storage.removeItem(key, true);

    // Return the session
    return { message: "User logged out successfully." };
  } catch (error) {
    throw error;
  }
};

export const createUserSession = async (
  user: SessionData,
  ttl: number
): Promise<SessionKey> => {
  try {
    // Abort if a user was not provided
    if (!user)
      throw createError({
        message:
          "It is necessary to provide a user in order to start a session.",
        statusCode: 400,
      });

    // Retrieve the storage mechanism for sessions
    const storage = useStorage("redis");

    // Generate session key
    const key = generateSessionKey(user.email);

    // Abort if a user is already authenticated
    if (await storage.hasItem(key)) {
      throw createError({
        message: "The provided user is already authenticated.",
        statusCode: 409,
      });
    }

    // Create session
    await storage.setItem(key, user, {
      ttl,
    });

    // Return session key
    return { key };
  } catch (error) {
    throw error;
  }
};

/* HELPERS */
// Generate a unique key for storing user session data based on the email address
const generateSessionKey = (email: string): string => {
  try {
    // Abort if the email is not provided
    if (!email) {
      throw createError({
        message: "No email received. Unable to generate session key!",
        statusCode: 400,
      });
    }
    // Encoding the email address for safe storage as a key
    return `sessions:user:${encodeURIComponent(email)}`;
  } catch (error) {
    throw error;
  }
};
