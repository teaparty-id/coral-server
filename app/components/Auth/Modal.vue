<script setup lang="ts">
const { opened, mode, close } = useAuthModal();

const loginBody = ref({
  username: "",
  password: "",
});

const registerBody = ref({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  passwordMatch: false,
});

async function doLogin() {
  try {
    const res = await $fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(loginBody.value),
    });

    if (res.success) {
      reloadNuxtApp();
    }
  } catch (e: any) {
    alert(e.data.message);
  }
}

async function doRegister() {
  try {
    const res = await $fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(registerBody.value),
    });

    if (res.success) {
      reloadNuxtApp();
    }
  } catch (e: any) {
    alert(e.data.message);
    console.log(e);
  }
}
</script>

<template>
  <dialog class="modal modal-bottom sm:modal-middle" :class="{ 'modal-open': opened }" ref="modal">
    <div class="modal-box max-w-md border border-base-300 bg-base-200 p-0 overflow-hidden">
      <!-- Header -->
      <div class="bg-gradient-to-r from-primary to-secondary p-6 text-primary-content">
        <h2 class="text-2xl font-bold">
          {{ mode === "login" ? "Selamat Datang" : "Buat Akun Baru" }}
        </h2>

        <p class="mt-1 text-sm opacity-80">
          {{ mode === "login" ? "Masuk ke Coraline Panel" : "Daftar untuk mulai menggunakan Coraline" }}
        </p>
      </div>

      <!-- Body -->
      <div class="p-6">
        <form v-if="mode === 'login'" class="space-y-4" @submit.prevent="doLogin">
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Username</legend>
            <input
              v-model="loginBody.username"
              type="text"
              class="input input-bordered w-full"
              placeholder="username"
            />
          </fieldset>

          <fieldset class="fieldset">
            <legend class="fieldset-legend">Password</legend>
            <input
              v-model="loginBody.password"
              type="password"
              class="input input-bordered w-full"
              placeholder="••••••••"
            />
          </fieldset>

          <button class="btn btn-primary w-full">Masuk</button>
        </form>

        <form v-else class="space-y-4" @submit.prevent="doRegister">
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Username</legend>
            <input
              v-model="registerBody.username"
              type="text"
              class="input input-bordered w-full"
              placeholder="Username"
            />
          </fieldset>

          <fieldset class="fieldset">
            <legend class="fieldset-legend">Email</legend>
            <input
              v-model="registerBody.email"
              type="email"
              class="input input-bordered w-full"
              placeholder="email@example.com"
            />
          </fieldset>

          <fieldset class="fieldset">
            <legend class="fieldset-legend">Password</legend>
            <input
              v-model="registerBody.password"
              type="password"
              class="input input-bordered w-full"
              placeholder="••••••••"
            />
          </fieldset>

          <fieldset class="fieldset">
            <legend class="fieldset-legend">Konfirmasi Password</legend>
            <input
              v-model="registerBody.confirmPassword"
              type="password"
              class="input input-bordered w-full"
              placeholder="••••••••"
              @change="registerBody.passwordMatch = registerBody.password == registerBody.confirmPassword"
            />
            <legend
              v-if="!registerBody.passwordMatch && registerBody.confirmPassword.length > 0"
              class="fieldset-legend text-error"
            >
              Password tidak sama
            </legend>
          </fieldset>

          <button class="btn btn-primary w-full">Daftar</button>
        </form>

        <!-- Switch -->
        <div class="mt-5 text-center text-sm">
          <template v-if="mode === 'login'">
            Belum punya akun?
            <button class="link link-primary font-medium" type="button" @click="mode = 'register'">Daftar</button>
          </template>

          <template v-else>
            Sudah punya akun?
            <button class="link link-primary font-medium" type="button" @click="mode = 'login'">Masuk</button>
          </template>
        </div>
      </div>

      <!-- Close -->
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-3 top-3" @click="close">✕</button>
      </form>
    </div>

    <form method="dialog" class="modal-backdrop" @click="close">
      <button>Tutup</button>
    </form>
  </dialog>
</template>
