<script setup lang="ts">
useSeoMeta({
  title: "Coraline - Manajemen Timer Rental PS & Kasir",
  description:
    "Coraline adalah aplikasi manajemen timer rental PlayStation dan kasir yang membantu mengelola waktu bermain, transaksi, perangkat PS4/PS5, serta laporan operasional rental secara mudah dan efisien.",

  keywords:
    "rental ps, timer ps, billing ps, kasir rental ps, aplikasi rental playstation, manajemen ps4, manajemen ps5, game center, rental game, timer playstation",

  author: "Coraline",
  applicationName: "Coraline",

  ogTitle: "Coraline - Manajemen Timer Rental PS & Kasir",
  ogDescription:
    "Kelola timer bermain, transaksi kasir, perangkat PlayStation, dan laporan rental dalam satu aplikasi.",
  ogType: "website",
  ogSiteName: "Coraline",

  twitterCard: "summary_large_image",
  twitterTitle: "Coraline - Manajemen Timer Rental PS & Kasir",
  twitterDescription: "Aplikasi timer rental PlayStation dan kasir modern untuk pengelolaan rental yang lebih efisien.",

  robots: "index, follow",
});

useHead({
  htmlAttrs: {
    lang: "id",
  },

  link: [
    {
      rel: "canonical",
      href: "https://coraline.biz.id",
    },
  ],

  meta: [
    {
      name: "theme-color",
      content: "#32a81b",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, viewport-fit=cover",
    },
  ],

  script: [
    {
      type: "application/ld+json",
      textContent: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Coraline",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: "Aplikasi manajemen timer rental PlayStation dan kasir.",
      }),
    },
  ],
});

import { themeChange } from "theme-change";

onMounted(() => {
  themeChange(false);
});
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <Navbar />
    <NuxtPage class="min-h-screen" />
    <Footer class="relative z-9000" />
  </div>

  <AuthModal />
  <PaymentModal />
</template>
