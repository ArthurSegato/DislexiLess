export default eventHandler(async (event) => {
  // Extract session key from headers
  const key = await getHeader(event, "Authorization");

  // Abort if the session key is not provided
  if (!key)
    throw createError({
      message: "No session keys detected. Please check your request!",
      statusCode: 400,
    });

  // Terminate session
  return await terminateUserSession(key);
});
