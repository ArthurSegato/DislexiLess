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
export const retrieveSessionKey = async (): Promise<string> => {
  try {
    // Retrieve the storage mechanism for sessions
    const storage = useStorage("session");

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

export const saveSessionKey = async (key: string): Promise<Object> => {
  try {
    // Retrieve the storage mechanism for sessions
    const storage = useStorage("browser");

    // Save key on localSotrage
    await storage.setItem("key", key);
  } catch (error) {
    throw error;
  }
};
