<template>
  <section class="hero min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200">
    <div class="hero-content max-w-7xl flex-col lg:flex-row-reverse gap-16">
      <div class="flex-1 hidden md:block">
        <div class="hover-3d">
          <figure class="rounded-2xl">
            <NuxtImg src="/android-chrome-512x512.png"></NuxtImg>
          </figure>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div class="flex-1">
        <div class="badge badge-primary badge-lg mb-5">Sistem Billing PS4 Generasi Baru</div>

        <h1 class="text-5xl lg:text-7xl font-black leading-tight">
          Kendalikan
          <span class="text-primary"> Seluruh Rental PS4 </span>
          Dari Satu Dashboard
        </h1>

        <p class="py-8 text-lg opacity-80 max-w-2xl">
          Coraline menghubungkan sistem billing langsung ke konsol PlayStation. Tidak perlu relay listrik, HDMI switch,
          ataupun perangkat pemutus daya.
        </p>

        <div class="flex flex-wrap gap-4">
          <NuxtLink to="#download">
            <button class="btn btn-primary btn-lg">Mulai Sekarang</button>
          </NuxtLink>
        </div>

        <div class="flex flex-wrap gap-4 mt-8">
          <div class="badge badge-outline">Tanpa Cut Power</div>

          <div class="badge badge-outline">Billing Otomatis</div>

          <div class="badge badge-outline">Monitoring Real-time</div>
        </div>
      </div>
    </div>
  </section>
</template>
