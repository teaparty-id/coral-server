<script setup lang="ts">
const features = [
  {
    icon: "material-symbols:electric-bolt-rounded",
    title: "Tanpa Modul Tambahan",
    desc: "Coraline dapat digunakan tanpa modul pemutus daya atau HDMI.",
  },
  {
    icon: "material-symbols:schedule-rounded",
    title: "Manajemen Waktu Otomatis",
    desc: "Atur durasi bermain, waktu tambahan, dan penghentian sesi secara otomatis.",
  },
  {
    icon: "material-symbols:devices-rounded",
    title: "Multi Perangkat",
    desc: "Kelola banyak konsol atau perangkat sekaligus dalam satu dashboard.",
  },
  {
    icon: "material-symbols:cloud-sync-rounded",
    title: "Sinkronisasi Real-time",
    desc: "Perubahan status perangkat dan transaksi diperbarui secara langsung.",
  },
  {
    icon: "material-symbols:receipt-long-rounded",
    title: "Riwayat Transaksi Lengkap",
    desc: "Semua transaksi, topup, dan aktivitas pelanggan tersimpan dengan rapi dan mudah ditelusuri.",
  },
  {
    icon: "material-symbols:shield-rounded",
    title: "Keamanan Data",
    desc: "Data pengguna dan konfigurasi sistem disimpan dengan aman menggunakan autentikasi modern.",
  },
  {
    icon: "material-symbols:phone-android-rounded",
    title: "Responsif di Semua Perangkat",
    desc: "Antarmuka Coraline nyaman digunakan melalui komputer, tablet, maupun smartphone.",
  },
  {
    icon: "material-symbols:palette",
    title: "Antarmuka Modern",
    desc: "Desain yang bersih dan intuitif membuat pengelolaan rental menjadi lebih mudah dan cepat.",
  },
];
</script>

<template>
  <section class="py-24">
    <div class="lg:container mx-auto lg:px-6 max-w-6xl">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-black">Fitur Unggulan Coraline</h2>
      </div>

      <div class="bg-primary lg:shadow lg:shadow-primary flex flex-col gap-12 p-12 rounded-2xl text-white">
        <div><h2 class="text-3xl font-bold">Semua Yang Dibutuhkan Untuk Bisnis Rental Professional</h2></div>
        <div class="flex flex-wrap gap-6">
          <div
            v-for="feature in features"
            class="group card card-border min-h-46 border-secondary bg-linear-to-br from-secondary to-primary max-w-md overflow-hidden transition-all hover:scale-105"
          >
            <figure
              class="flex justify-center items-center pl-6 absolute rotate-12 right-0 bottom-0 transition-all group-hover:rotate-5 group-hover:scale-120"
            >
              <Icon
                :name="feature.icon"
                size="168"
                class="text-secondary/70 group-hover:text-secondary transition-all"
              ></Icon>
            </figure>
            <div class="card-body flex flex-col z-10">
              <h2 class="text-xl font-medium">
                {{ feature.title }}
              </h2>
              <div>
                {{ feature.desc }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
