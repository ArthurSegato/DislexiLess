export default defineEventHandler(async (event) => {
  try {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const runtimeConfig = useRuntimeConfig();
    const body = await readBody(event);

    if (
      body.name === null ||
      body.name === undefined ||
      body.name.length < 2 ||
      typeof body.name != "string"
    )
      throw new Error(
        "Name is required, must be a string and have more than two characters"
      );

    if (!emailRegex.test(body.email))
      throw new Error("Email address must be valid");

    if (
      body.message === null ||
      body.message === undefined ||
      body.message.length < 2 ||
      typeof body.message != "string"
    )
      throw new Error(
        "Message is required, must be a string and have more than two characters"
      );

    if (body.phone === "" || body.phone === null || body.phone === undefined)
      body.phone = "N/A";

    if (
      body.company === "" ||
      body.company === null ||
      body.company === undefined
    )
      body.company = "N/A";

    fetch(runtimeConfig.contactWebhook, {
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
                value: `${body.Company}`,
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
      message: "Your message has been received",
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
