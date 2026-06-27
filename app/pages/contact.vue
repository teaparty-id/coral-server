<template>
  <section class="py-24">
    <div class="container max-w-6xl mx-auto px-6">
      <LegalHeader title="Hubungi Kami" description="Tim Coraline siap membantu Anda." />

      <div class="grid lg:grid-cols-3 gap-6">
        <div class="card bg-primary text-primary-content shadow-xl">
          <div class="card-body">
            <h2 class="text-2xl font-bold">Email</h2>

            <p>support@coraline.biz.id</p>
          </div>
        </div>

        <div class="card bg-secondary text-secondary-content shadow-xl">
          <div class="card-body">
            <h2 class="text-2xl font-bold">WhatsApp</h2>

            <p>+62 817-7984-3361</p>
          </div>
        </div>

        <div class="card bg-accent text-accent-content shadow-xl">
          <div class="card-body">
            <h2 class="text-2xl font-bold">Alamat Usaha</h2>

            <p>
              Kabat, Banyuwangi<br />
              Jawa Timur, Indonesia
            </p>
          </div>
        </div>
      </div>

      <div class="hero bg-base-200 rounded-box mt-10">
        <div class="hero-content text-center py-16">
          <div>
            <h2 class="text-3xl font-bold">Butuh Bantuan?</h2>

            <p class="py-4 opacity-70">Hubungi tim Coraline kapan saja.</p>

            <NuxtLink to="https://wa.me/6281779843361">
              <button class="btn btn-primary">Hubungi Kami</button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
