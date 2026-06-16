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

      <div class="flex flex-col w-full justify-center items-center">
        <div class="flex flex-col lg:min-w-2xl max-w-2xl">
          <ul class="steps steps-vertical">
            <li class="step step-primary text-start">Download dan Install Coraline</li>
            <li class="step step-primary text-start">Download Coral-Agent</li>
            <li class="step step-primary text-start">Masukkan coral-agent-ps4.elf ke /data/payloads di PS4</li>
            <li class="step step-primary text-start">
              Jalankan payload dengan Payload Guests atau Payload Launcher Goldhen
            </li>
            <li class="step step-primary text-start">
              (Optional) Atur payload agar otomatis dimuat saat Goldhen dijalankan
            </li>
            <li class="step step-primary text-start">Buka tab Devices pada aplikasi Coraline dan Register device</li>
            <li class="step step-primary text-start">Aplikasi siap digunakan</li>
          </ul>
          <div role="alert" class="alert alert-warning alert-soft">
            <span>Coraline masih dalam tahap pengembangan aktif, laporkan bug jika kamu menemukannya.</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
