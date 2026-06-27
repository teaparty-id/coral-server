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
        <h2 class="text-5xl font-black">Masih Menggunakan Modul Putus Daya?</h2>
      </div>

      <div class="flex justify-center mb-16">
        <div class="aura aura-dual text-error">
          <div class="card bg-base-100 card-border">
            <div class="card-body p-12">
              <div class="flex justify-center items-center gap-4 max-w-xl">
                <div><Icon name="uil:ban" class="text-5xl lg:text-7xl"></Icon></div>
                <h2 class="text-xl lg:text-4xl">Beresiko Merusak Media Penyimpanan dan IC HDMI</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center space-y-4">
        <p class="opacity-70 mt-4">Masalah klasik yang hampir dialami semua rental PlayStation.</p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="problem in problems" :key="problem" class="alert shadow-lg min-h-24">
            <span>{{ problem }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
