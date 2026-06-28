<script setup lang="ts">
useSeoMeta({
  title: "Kebijakan Privasi - Coraline",
});

const sections = [
  {
    id: "collected-data",
    title: "Data yang Kami Kumpulkan",
    content: [
      "Nama dan informasi akun pengguna.",
      "Alamat email dan nomor telepon yang digunakan untuk registrasi.",
      "Informasi perangkat yang terhubung ke Coraline.",
      "Data transaksi dan riwayat penggunaan layanan.",
      "Alamat IP, informasi browser, dan log aktivitas untuk keperluan keamanan.",
      "Data konfigurasi perangkat dan pengaturan sistem yang diperlukan untuk operasional layanan.",
    ],
  },
  {
    id: "data-usage",
    title: "Cara Kami Menggunakan Data",
    content: [
      "Menyediakan dan mengoperasikan layanan Coraline.",
      "Memproses transaksi dan langganan.",
      "Mengirim pemberitahuan terkait akun dan layanan.",
      "Meningkatkan kualitas, keamanan, dan stabilitas sistem.",
      "Mendeteksi dan mencegah penyalahgunaan layanan.",
      "Memenuhi kewajiban hukum yang berlaku.",
    ],
  },
  {
    id: "third-party",
    title: "Berbagi Data dengan Pihak Ketiga",
    content: [
      "Penyedia payment gateway untuk memproses pembayaran.",
      "Penyedia infrastruktur dan layanan cloud yang digunakan oleh Coraline.",
      "Pihak berwenang apabila diwajibkan oleh hukum yang berlaku.",
      "Coraline tidak menjual atau menyewakan data pribadi pengguna kepada pihak ketiga untuk tujuan pemasaran.",
    ],
  },
  {
    id: "security",
    title: "Keamanan Data",
    content: [
      "Data dikirim menggunakan koneksi terenkripsi HTTPS/TLS.",
      "Akses data dibatasi hanya kepada pihak yang berwenang.",
      "Password dan kredensial disimpan menggunakan metode keamanan yang sesuai.",
      "Aktivitas sistem dipantau untuk mendeteksi akses yang tidak sah.",
      "Meskipun demikian, tidak ada sistem yang dapat menjamin keamanan 100%.",
    ],
  },
  {
    id: "retention",
    title: "Penyimpanan dan Retensi Data",
    content: [
      "Data akun disimpan selama akun masih aktif.",
      "Data transaksi dapat disimpan untuk kebutuhan operasional dan audit.",
      "Log aktivitas dapat disimpan untuk tujuan keamanan dan penyelesaian sengketa.",
      "Data tertentu dapat dihapus sesuai ketentuan hukum yang berlaku.",
    ],
  },
  {
    id: "user-rights",
    title: "Hak Pengguna",
    content: [
      "Hak untuk mengakses data pribadi yang disimpan.",
      "Hak untuk memperbarui informasi yang tidak akurat.",
      "Hak untuk meminta penghapusan akun dan data pribadi.",
      "Hak untuk menghubungi Coraline terkait penggunaan data pribadi.",
    ],
  },
  {
    id: "cookies",
    title: "Cookie dan Penyimpanan Lokal",
    content: [
      "Coraline dapat menggunakan cookie atau penyimpanan lokal untuk menjaga sesi login.",
      "Preferensi pengguna seperti tema atau pengaturan tertentu dapat disimpan di perangkat pengguna.",
      "Coraline tidak menggunakan cookie pihak ketiga untuk periklanan.",
    ],
  },
  {
    id: "changes",
    title: "Perubahan Kebijakan Privasi",
    content: [
      "Kebijakan privasi dapat diperbarui sewaktu-waktu.",
      "Perubahan signifikan akan diumumkan melalui website atau aplikasi.",
      "Penggunaan layanan setelah perubahan dianggap sebagai persetujuan terhadap kebijakan yang diperbarui.",
    ],
  },
  {
    id: "contact",
    title: "Kontak",
    content: [
      "Apabila Anda memiliki pertanyaan mengenai kebijakan privasi ini, silakan menghubungi tim Coraline melalui kontak resmi yang tersedia pada website.",
    ],
  },
];
</script>

<template>
  <section class="py-24">
    <div class="container max-w-7xl mx-auto px-6">
      <LegalHeader
        title="Kebijakan Privasi"
        description="Kami berkomitmen menjaga kerahasiaan dan keamanan data pengguna Coraline."
      />

      <div class="grid lg:grid-cols-[280px_1fr] gap-10">
        <aside class="hidden lg:block">
          <div class="sticky top-24">
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
                <li v-for="item in section.content" :key="item" class="leading-8 opacity-80">
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
