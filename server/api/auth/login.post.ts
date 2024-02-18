import validator from "validator";

export default eventHandler(async (event) => {
  const { email, password } = await readBody(event);

  // Validate Email
  if (email === undefined || !validator.isEmail(email))
    throw createError({
      message: "Please enter a valid email address.",
      statusCode: 400,
    });

  // Validate Password
  if (password === undefined || !validator.isStrongPassword(password))
    throw createError({
      message: "Please enter a valid password.",
      statusCode: 400,
    });

  const user = await findUserByEmail(email);

  if (!user) {
    throw createError({
      message:
        "User not found. It seems you haven't registered yet. Please sign up to access our services!",
      statusCode: 404,
    });
  }

  if (await !verifyHash(user.password, password)) {
    throw createError({
      message:
        "Invalid credentials. Please double-check your email and password.",
      statusCode: 401,
    });
  }

  const sessionKey = await createUserSession({
    id: user.id,
    name: user.name,
    email: user.email,
    image: user.image,
  });

  return sessionKey;
});
