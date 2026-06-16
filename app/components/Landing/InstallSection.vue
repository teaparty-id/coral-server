<script setup lang="ts"></script>

<template>
  <section class="py-24" id="download">
    <div class="container mx-auto px-6 max-w-6xl">
      <div class="text-center mb-8">
        <h2 class="text-5xl font-black">Cara Menggunakan Coraline</h2>

        <p class="opacity-70 mt-4">Coraline dirancang untuk bisa digunakan sesederhana mungkin.</p>
      </div>

      <div class="flex flex-col gap-2 items-center mb-8">
        <h2 class="text-xl font-black">Download Links</h2>
        <div class="flex gap-2">
          <NuxtLink to="https://github.com/teaparty-id/releases/releases" target="_blank">
            <div class="btn btn-primary">Coraline</div>
          </NuxtLink>
          <NuxtLink to="https://github.com/teaparty-id/releases/releases/tag/main" target="_blank">
            <div class="btn btn-primary">Coral Agent</div>
          </NuxtLink>
        </div>
      </div>

      <div class="flex w-full justify-center">
        <div class="flex min-w-2xl">
          <ul class="steps steps-vertical">
            <li class="step step-primary">Download dan Install Coraline</li>
            <li class="step step-primary">Download Coral-Agent</li>
            <li class="step step-primary">Masukkan coral-agent-ps4.elf ke /data/payloads di PS4</li>
            <li class="step step-primary">Jalankan payload dengan Payload Guests atau Payload Launcher Goldhen</li>
            <li class="step step-primary">(Optional) Atur payload agar otomatis dimuat saat Goldhen dijalankan</li>
            <li class="step step-primary">Buka tab Devices pada aplikasi Coraline dan Register device</li>
            <li class="step step-primary">Aplikasi siap digunakan</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
