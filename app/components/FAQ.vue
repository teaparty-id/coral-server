<script setup lang="ts">
const faq = ref([
  {
    title: "Apakah ini pengganti perangkat timer rental biasa?",
    desc: "Ya. Sistem ini dirancang untuk menggantikan perangkat timer rental konvensional dengan solusi berbasis web yang dapat diakses dari komputer, laptop, maupun smartphone.",
  },
  {
    title: "Perangkat apa saja yang didukung?",
    desc: "Saat ini sistem mendukung PlayStation 4 yang menggunakan payload client. Dukungan untuk perangkat dan konsol lainnya akan ditambahkan secara bertahap pada pembaruan berikutnya.",
  },
  {
    title: "Apakah layanan ini gratis?",
    desc: "Ya. Tersedia paket gratis dengan batasan tertentu. Jika kebutuhan rental Anda berkembang, tersedia paket berbayar dengan fitur dan kapasitas yang lebih besar.",
  },
  {
    title: "Fitur apa saja yang tersedia?",
    desc: "Sistem menyediakan timer rental, manajemen perangkat, serta dashboard yang mudah digunakan. Fitur lain akan menyusul di pengembangan mendatang.",
  },
  {
    title: "Apakah saya perlu membeli perangkat tambahan?",
    desc: "Tidak. Selama PS4 Anda sudah mendukung payload client yang diperlukan, seluruh pengelolaan dapat dilakukan melalui website tanpa membeli perangkat timer khusus.",
  },
  {
    title: "Apakah data rental saya aman?",
    desc: "Data akun dan aktivitas rental disimpan secara terpusat sehingga dapat diakses kembali kapan saja. Kami terus melakukan pengembangan untuk meningkatkan keamanan dan keandalan sistem.",
  },
]);
</script>

<template>
  <div v-for="data in faq" class="collapse bg-base-100 border border-base-300">
    <input type="radio" name="faq" checked />
    <div class="collapse-title font-semibold">{{ data.title }}</div>
    <div class="collapse-content text-sm">
      {{ data.desc }}
    </div>
  </div>
</template>
