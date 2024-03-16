// Define a Nuxt plugin asynchronously using the defineNuxtPlugin function.
export default defineNuxtPlugin(async (nuxtApp) => {
  // Skip plugin execution when rendering error page.
  if (nuxtApp.payload.error) return {};

  // Fetch the authentication session data from the server.
  const { data: session } = await useFetch("/api/auth/session");

  // Create a computed property to determine if the user is logged in.
  const loggedIn: any = computed(() => !!session.value?.email);

  // Create a reactive reference to store the redirect destination after authentication.
  const redirectTo = useState("authRedirect");

  // Add global route middleware to protect pages requiring authentication.
  addRouteMiddleware(
    "auth",
    (to) => {
      if (to.meta.auth && !loggedIn.value) {
        redirectTo.value = to.path;
        return "/login"; // Redirect to login page if not authenticated.
      }
    },
    { global: true }
  );

  // Watch for changes in user login status and redirect if necessary.
  if (process.client) {
    const currentRoute = useRoute();
    watch(loggedIn, async (loggedIn) => {
      if (!loggedIn && currentRoute.meta.auth) {
        redirectTo.value = currentRoute.path;
        await navigateTo("/login");
      }
    });
  }

  // Redirect to the appropriate page after successful login.
  const currentRoute = useRoute();
  if (loggedIn.value && currentRoute.path === "/login") {
    await navigateTo(redirectTo.value || "/");
  }

  // Provide authentication-related properties and methods to the application.
  return {
    provide: {
      auth: {
        loggedIn,
        session,
        redirectTo,
        updateSession,
      },
    },
  };
});
