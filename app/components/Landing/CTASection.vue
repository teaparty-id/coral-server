<template>
  <section
    class="flex relative overflow-hidden justify-center items-center bg-linear-to-t from-15% from-primary to-base-200 text-primary-content min-h-186"
  >
    <!-- Cosmetics -->
    <figure class="lg:hidden absolute bottom-0 -translate-y-5 -translate-x-25">
      <Icon name="mdi:fish" class="text-[84px]"></Icon>
    </figure>
    <figure class="lg:hidden absolute bottom-0 -translate-y-5">
      <Icon name="flowbite:fish-solid" class="text-[84px]"></Icon>
    </figure>
    <figure class="lg:hidden absolute bottom-0 -translate-y-5 translate-x-25">
      <Icon name="mdi:fish" class="text-[84px]"></Icon>
    </figure>

    <div
      class="flex flex-col card bg-transparent text-center lg:text-start lg:border lg:border-base rounded-2xl p-8 overflow-hidden"
    >
      <!-- Content -->
      <div class="card-body z-10">
        <h2 class="text-5xl">Siap Meninggalkan Sistem Timer Lama?</h2>

        <p class="text-xl mt-6">Modernisasi operasional rental PlayStation Anda dengan Coraline.</p>

        <div>
          <NuxtLink to="#download">
            <button class="btn btn-outline btn-lg mt-10" data-theme="coraline-dark">Mulai Sekarang</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
