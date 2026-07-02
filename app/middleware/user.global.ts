export default defineNuxtRouteMiddleware(async (to, from) => {
  await $fetch("/api/auth/refresh");
});
