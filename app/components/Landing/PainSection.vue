<script setup lang="ts">
const problems = [
  "PS4 mati mendadak karena relay listrik",
  "Kabel timer dan HDMI semakin rumit",
  "Sulit memantau banyak konsol sekaligus",
  "Pencatatan transaksi masih manual",
  "Tidak bisa memonitor dari luar rental",
  "Kesulitan mengelola banyak cabang",
];
</script>

<template>
  <section class="py-24">
    <div class="container mx-auto px-6 max-w-6xl">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-black">Masih Menggunakan Timer Relay?</h2>

        <p class="opacity-70 mt-4">Masalah klasik yang hampir dialami semua rental PlayStation.</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="problem in problems" :key="problem" class="alert shadow-lg min-h-24">
          <span>{{ problem }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
