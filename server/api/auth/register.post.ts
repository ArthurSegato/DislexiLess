import validator from "validator";

export default eventHandler(async (event) => {
  const { name, email, password } = await readBody(event);

  // Validate Name
  if (!name || !validator.isAlpha(name))
    throw createError({
      message: "Please enter a valid name.",
      statusCode: 400,
    });

  // Validate Email
  if (!email || !validator.isEmail(email))
    throw createError({
      message: "Please enter a valid email address.",
      statusCode: 400,
    });

  // Validate Password
  if (!password || !validator.isStrongPassword(password))
    throw createError({
      message: "Please enter a valid password.",
      statusCode: 400,
    });

  // Check if a user with the provided email already exists
  if (await emailExistsInDatabase(email))
    throw createError({
      message: "User already exists!",
      statusCode: 409,
    });

  // Hash and salt password
  const hash = await generateHash(password);

  // Save user on db
  await createUser({
    name,
    email,
    password: hash,
  });

  return {
    message: "Successfully registered!",
  };
});
