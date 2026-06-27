<script setup lang="ts">
const plans = [
  {
    name: "Gratis",
    price: "Rp0",
    period: "/selamanya",
    description: "Coba Coraline tanpa biaya.",
    button: "Mulai Gratis",
    buttonClass: "btn-outline",
    features: ["2 perangkat", "Timer otomatis", "Monitoring dasar", "Laporan harian", "Komunitas support"],
  },
  {
    name: "Starter",
    price: "Rp49.000",
    period: "/bulan",
    description: "Untuk rental kecil yang mulai berkembang.",
    button: "Pilih Paket",
    buttonClass: "btn-outline",
    features: [
      "Hingga 5 perangkat",
      "Monitoring dari mana saja",
      "Fitur FnB",
      "Laporan bulanan",
      "Laporan transaksi",
      "Update gratis",
    ],
  },
  {
    name: "Pro",
    price: "Rp99.000",
    period: "/bulan",
    featured: true,
    description: "Pilihan paling populer untuk rental PlayStation.",
    button: "Mulai Sekarang",
    buttonClass: "btn-primary",
    features: ["Hingga 20 perangkat", "Laporan tahunan", "Statistik lengkap", "Prioritas support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Solusi untuk rental besar dan multi cabang.",
    button: "Hubungi Kami",
    buttonClass: "btn-outline",
    features: ["Perangkat tanpa batas", "Multi cabang", "Dashboard pusat", "API & integrasi", "Support prioritas"],
  },
];
</script>

<template>
  <section class="py-24 bg-base-200">
    <div class="container mx-auto px-6 max-w-7xl">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-black">Harga yang Sesuai untuk Semua Rental</h2>

        <p class="opacity-70 mt-4">Mulai gratis dan tingkatkan paket kapan saja sesuai kebutuhan.</p>
      </div>

      <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-6 transition-all">
        <div v-for="plan in plans" :class="plan.featured && 'aura aura-rainbow'" class="hover:scale-105 transition-all">
          <div
            :key="plan.name"
            class="card bg-base-200 shadow-xl h-full"
            :class="!plan.featured && 'border border-current/10'"
          >
            <div class="card-body">
              <div v-if="plan.featured" class="badge badge-primary badge-lg w-fit">Paling Populer</div>

              <h3 class="text-2xl font-bold mt-2">
                {{ plan.name }}
              </h3>

              <p class="opacity-70 min-h-12">
                {{ plan.description }}
              </p>

              <div class="my-6">
                <span class="text-4xl font-black">
                  {{ plan.price }}
                </span>

                <span class="opacity-60">
                  {{ plan.period }}
                </span>
              </div>

              <ul class="space-y-3 flex-1">
                <li v-for="feature in plan.features" :key="feature" class="flex items-center gap-3">
                  <div class="badge badge-success badge-sm"></div>
                  <span>{{ feature }}</span>
                </li>
              </ul>

              <button class="btn w-full mt-8" :class="plan.buttonClass">
                {{ plan.button }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
