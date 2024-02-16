import { H3Event, EventHandlerRequest } from "h3";
import validator from "validator";

const runtimeConfig = useRuntimeConfig();

export interface User {
  name: string;
  email: string;
  password: string;
}

const handleRegister = async (event: H3Event<EventHandlerRequest>) => {
  const { name, email, password } = await readBody(event);

  // Validate Name
  if (name === undefined || !validator.isAlpha(name))
    throw createError({ message: "Name must be valid!", statusCode: 422 });

  // Validate Email
  if (email === undefined || !validator.isEmail(email))
    throw createError({ message: "Email must be valid!", statusCode: 422 });

  // Validate Password
  if (password === undefined || !validator.isStrongPassword(password))
    throw createError({ message: "Password must be valid!", statusCode: 422 });

  // Hash and salt password
  const hash = await generateHash(password);

  await createUser({
    name: await encryptSymmetric(name),
    email,
    password: await encryptSymmetric(hash),
  });

  return {
    message: "Successfully registered!",
  };
};

const handleLogIn = async (event: H3Event<EventHandlerRequest>) => {
  const session = await useAuthSession(event);
  const { email, password } = await readBody(event);

  // Validate Email
  if (email === undefined || !validator.isEmail(email))
    throw createError({ message: "Email must be valid!", statusCode: 422 });

  // Validate Password
  if (password === undefined || !validator.isStrongPassword(password))
    throw createError({ message: "Password must be valid!", statusCode: 422 });

  const user = await findUserByEmail(email);

  if (!user) {
    throw createError({
      message: "User not found! Please register.",
      statusCode: 401,
    });
  }

  const passwordHash = await decryptSymmetric(
    user.password.cipher,
    user.password.iv
  );

  if (await verifyHash(passwordHash, password)) {
    throw createError({
      message: "Incorrect password!",
      statusCode: 401,
    });
  }

  await session.update({
    id: user.id,
    name: user.name,
    email: user.email,
  });

  return session;
};

const handleLogOut = async (event: H3Event<EventHandlerRequest>) => {
  const session = await useAuthSession(event);
  await session.clear();
  return {
    message: "Successfully logged out!",
  };
};

const handleSession = async (event: H3Event<EventHandlerRequest>) => {
  return (await useAuthSession(event)).data;
};

export default defineEventHandler(async (event) => {
  try {
    switch (event.context.params!._) {
      case "register":
        await handleRegister(event);
        break;
      case "login":
        await handleLogIn(event);
        break;
      case "logout":
        await handleLogOut(event);
        break;
      case "session":
        await handleSession(event);
        break;
      default:
        throw new Error("Route not allowed");
    }
    return;
  } catch (error) {
    if (error instanceof Error) {
      throw createError({
        statusCode: 400,
        statusMessage: error.message,
      });
    } else return error;
  }
});
