<script setup lang="ts">
const features = [
  {
    title: "Billing Otomatis",
    desc: "Hitung waktu bermain dan transaksi secara otomatis.",
  },
  {
    title: "Monitoring Konsol",
    desc: "Pantau seluruh PS4 secara real-time.",
  },
  {
    title: "Multi Cabang",
    desc: "Kelola beberapa rental dari satu akun.",
  },
  {
    title: "Laporan Pendapatan",
    desc: "Analisis pemasukan harian hingga bulanan.",
  },
  {
    title: "Remote Management",
    desc: "Akses dari mana saja.",
  },
  {
    title: "Tanpa Perangkat Tambahan",
    desc: "Tidak perlu relay, timer listrik, atau HDMI switch.",
  },
];
</script>

<template>
  <section class="py-24 bg-base-200">
    <div class="container mx-auto px-6">
      <div class="text-center">
        <h2 class="text-5xl font-black">Coraline Menjadi Solusi Terbaik</h2>
      </div>

      <div class="grid lg:grid-cols-3 gap-8 mt-16">
        <div v-for="feature in features" :key="feature.title" class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 class="card-title text-xl">
              {{ feature.title }}
            </h3>

            <p>
              {{ feature.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
