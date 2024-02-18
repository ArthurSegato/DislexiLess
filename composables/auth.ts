export const useAuth = () => useNuxtApp().$auth;

export const githubLogin = async () => {
  const github = useRuntimeConfig().github;

  await navigateTo(
    `https://github.com/login/oauth/authorize?client_id=${github.clientId}&scope=user`
  );
};

export const authLogin = async (email: string, password: string) => {
  await $fetch("/api/auth/login", {
    method: "POST",
    body: {
      email: email,
      password: password,
    },
  });
  useAuth().redirectTo.value = null;
  await useAuth().updateSession();
  await navigateTo(useAuth().redirectTo.value || "/");
};

export const authRegister = async (
  name: string,
  email: string,
  password: string
) => {
  await $fetch("/api/auth/register", {
    method: "POST",
    body: {
      name: name,
      email: email,
      password: password,
    },
  });
  return await authLogin(email, password);
};

export const authLogout = async () => {
  await $fetch("/api/auth/logout", {
    method: "POST",
  });
  await useAuth().updateSession();
};
