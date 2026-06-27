<script setup lang="ts">
useSeoMeta({
  title: "Syarat & Ketentuan - Coraline",
});

const sections = [
  {
    id: "usage",
    title: "Penggunaan Layanan",
    content:
      "Coraline merupakan sistem manajemen rental PlayStation yang digunakan untuk mengelola perangkat, waktu bermain, transaksi, dan monitoring perangkat. Pengguna wajib menggunakan layanan sesuai hukum yang berlaku.",
  },
  {
    id: "account",
    title: "Registrasi dan Akun",
    content:
      "Pengguna wajib memberikan informasi yang benar dan akurat saat mendaftar. Pengguna bertanggung jawab penuh atas keamanan akun dan password yang digunakan.",
  },
  {
    id: "subscription",
    title: "Paket dan Langganan",
    content:
      "Coraline menyediakan paket gratis dan paket berlangganan dengan batasan fitur yang berbeda. Pengguna dapat melakukan perubahan paket sesuai ketentuan yang berlaku.",
  },
  {
    id: "payment",
    title: "Pembayaran",
    content:
      "Pembayaran dilakukan melalui metode pembayaran yang tersedia. Biaya administrasi dari penyedia pembayaran dapat dibebankan kepada pengguna.",
  },
  {
    id: "privacy",
    title: "Data dan Privasi",
    content:
      "Coraline menjaga kerahasiaan data pengguna dan tidak membagikan data kepada pihak ketiga tanpa persetujuan pengguna.",
  },
  {
    id: "restriction",
    title: "Batasan Penggunaan",
    content:
      "Pengguna dilarang menggunakan layanan untuk aktivitas ilegal, manipulasi sistem, maupun tindakan yang merugikan pengguna lain.",
  },
  {
    id: "termination",
    title: "Penghentian Layanan",
    content:
      "Coraline berhak menangguhkan atau menghentikan layanan apabila ditemukan pelanggaran terhadap syarat dan ketentuan.",
  },
  {
    id: "changes",
    title: "Perubahan Ketentuan",
    content:
      "Coraline dapat mengubah syarat dan ketentuan sewaktu-waktu dan akan mengumumkannya melalui website atau aplikasi.",
  },
  {
    id: "support",
    title: "Kontak dan Dukungan",
    content: "Pengguna dapat menghubungi tim Coraline melalui kontak resmi yang tersedia pada website.",
  },
];
</script>

<template>
  <section class="py-24">
    <div class="container max-w-7xl mx-auto px-6">
      <LegalHeader
        title="Syarat & Ketentuan"
        description="Dengan menggunakan layanan Coraline, Anda menyetujui seluruh ketentuan yang berlaku."
      />

      <div class="grid lg:grid-cols-[280px_1fr] gap-10">
        <aside class="hidden lg:block">
          <div class="sticky top-32">
            <div class="card bg-base-200 shadow">
              <div class="card-body">
                <h2 class="font-bold text-lg mb-4">Daftar Isi</h2>

                <ul class="menu p-0">
                  <li v-for="(section, index) in sections" :key="section.id">
                    <a :href="`#${section.id}`">
                      {{ index + 1 }}.
                      {{ section.title }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>

        <div class="space-y-8">
          <section
            v-for="(section, index) in sections"
            :id="section.id"
            :key="section.id"
            class="card bg-base-200 shadow scroll-mt-28"
          >
            <div class="card-body">
              <h2 class="text-3xl font-black">
                {{ index + 1 }}.
                {{ section.title }}
              </h2>

              <p class="opacity-80 leading-8 mt-4">
                {{ section.content }}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>
