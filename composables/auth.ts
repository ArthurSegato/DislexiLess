// Export a function named useAuth, which returns the authentication object from the Nuxt application.
export const useAuth = () => useNuxtApp().$auth;

// Export a function named githubLogin, which handles GitHub login.
export const githubLogin = async () => {
  // Retrieve GitHub configuration from runtime config.
  const github = useRuntimeConfig().github;

  // Redirect the user to GitHub OAuth authorization page.
  await navigateTo(
    `https://github.com/login/oauth/authorize?client_id=${github.clientId}&scope=user`
  );
};

// Export a function named authLogin, which handles login with email and password.
export const authLogin = async (email: string, password: string) => {
  // Send a POST request to the authentication API endpoint to login.
  await $fetch("/api/auth/login", {
    method: "POST",
    body: {
      email: email,
      password: password,
    },
  });

  // Clear any previous redirect URL.
  useAuth().redirectTo.value = null;

  // Update the user's session.
  await useAuth().updateSession();

  // Redirect the user to the specified URL or the homepage.
  await navigateTo(useAuth().redirectTo.value || "/");
};

// Export a function named authRegister, which handles user registration.
export const authRegister = async (
  name: string,
  email: string,
  password: string
) => {
  // Send a POST request to the registration API endpoint to register a new user.
  await $fetch("/api/auth/register", {
    method: "POST",
    body: {
      name: name,
      email: email,
      password: password,
    },
  });

  // Log in the user after registration.
  return await authLogin(email, password);
};

// Export a function named authLogout, which handles user logout.
export const authLogout = async () => {
  // Send a POST request to the logout API endpoint to logout the user.
  await $fetch("/api/auth/logout", {
    method: "POST",
  });

  // Update the user's session.
  await useAuth().updateSession();
};
