<script setup lang="ts"></script>

<template>
  <!-- Landing Page -->
  <div
    class="flex flex-col min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200 p-4 lg:p-8 flex items-center justify-center"
  >
    <Logo class="text-4xl lg:text-7xl py-7" />

    <div class="grid grid-cols-1 bg-base-100 shadow-2xl rounded-3xl overflow-hidden w-full max-w-6xl">
      <!-- INFO -->
      <div class="order-2 lg:order-1 p-6 lg:p-10 flex flex-col justify-center gap-2">
        <div class="flex flex-col gap-2 pb-7">
          <p class="text-xl font-bold">Timer & Kasir Rental PlayStation</p>
          <p>
            Kelola waktu bermain, transaksi, dan perangkat PS4 dalam satu dashboard. Cepat, sederhana, dan dapat diakses
            dari mana saja.
          </p>
        </div>

        <FAQ />
      </div>
    </div>
  </div>
</template>
