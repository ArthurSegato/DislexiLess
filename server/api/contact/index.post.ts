import validator from "validator";

export default defineEventHandler(async (event) => {
  try {
    const runtimeConfig = useRuntimeConfig();
    const body = await readBody(event);

    if (!validator.isAlpha(body.name)) throw new Error("Name must be valid");

    if (body.company.length > 0 && !validator.isAlpha(body.company))
      throw new Error("Company must be valid");

    if (!validator.isEmail(body.email))
      throw new Error("Email address must be valid");

    if (body.phone.length > 0 && !validator.isMobilePhone(body.phone))
      throw new Error("Phone address must be valid");

    if (!validator.isAlpha(body.message))
      throw new Error("Message must be valid");

    const request = await fetch(runtimeConfig.webhooks.contact, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [
          {
            fields: [
              {
                name: "Name",
                value: `${body.name}`,
              },
              {
                name: "Company",
                value: `${body.company}`,
              },
              {
                name: "Email",
                value: `${body.email}`,
                inline: true,
              },
              {
                name: "Phone",
                value: `${body.phone}`,
                inline: true,
              },
              {
                name: "Message",
                value: `${body.message}`,
              },
            ],
          },
        ],
      }),
    });

    return {
      message: "We got your message",
    };
  } catch (error) {
    if (error instanceof Error) {
      throw createError({
        statusCode: 400,
        statusMessage: error.message,
      });
    } else return error;
  }
});
