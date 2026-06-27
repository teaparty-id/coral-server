<script setup lang="ts">
const navList = ref([
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Privacy and Security",
    to: "/terms",
  },
  {
    name: "Refund Policy",
    to: "/refund",
  },
  {
    name: "Contact",
    to: "/contact",
  },
]);
</script>

<template>
  <section data-theme="coraline-dark" class="flex justify-center w-full h-max bg-base-100">
    <div class="container h-full py-12">
      <div class="text-current/70">
        <div class="flex flex-col space-y-8 mx-8 lg:mx-0">
          <div class="flex">
            <ul class="flex flex-wrap gap-4">
              <li v-for="item in navList" class="text-sm">
                <NuxtLink :to="item.to">{{ item.name }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="flex flex-col lg:flex-row gap-2 lg:gap-0 justify-between text-sm">
            <span class="text-current/60">Copyright &copy; {{ new Date().getFullYear() }} dickymuliafiqri.</span>
            <span class="text-current/60">Developed with vscode</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
