<script setup lang="ts">
useSeoMeta({
  title: "Refund Policy - Coraline",
});

const sections = [
  {
    id: "general",
    title: "Ketentuan Refund",
    content: [
      "Coraline menyediakan pengembalian dana dalam kondisi tertentu.",
      "Pengembalian dana mengikuti kebijakan yang berlaku.",
    ],
  },
  {
    id: "activation",
    title: "Aktivasi Layanan",
    content: ["Layanan yang telah berhasil diaktifkan tidak dapat direfund."],
  },
  {
    id: "failure",
    title: "Kegagalan Aktivasi",
    content: ["Refund dapat diberikan apabila terjadi kegagalan sistem."],
  },
  {
    id: "request",
    title: "Pengajuan Refund",
    content: ["Permintaan refund maksimal 7 hari setelah pembayaran.", "Bukti transaksi wajib disertakan."],
  },
  {
    id: "excluded",
    title: "Kondisi yang Tidak Direfund",
    content: [
      "Salah membeli paket.",
      "Layanan telah digunakan.",
      "Pelanggaran syarat dan ketentuan.",
      "Gangguan perangkat pengguna.",
    ],
  },
];
</script>

<template>
  <section class="py-24">
    <div class="container max-w-7xl mx-auto px-6">
      <LegalHeader
        title="Ketentuan Pengembalian Dana"
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

              <ul class="mt-5 space-y-4">
                <li v-for="item in section.content" :key="item" class="opacity-80 leading-8">
                  {{ item }}
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>
