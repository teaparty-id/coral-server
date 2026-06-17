<template>
  <div class="flex w-full justify-center items-center z-9999 fixed pt-8 px-8">
    <div
      class="grid grid-cols-3 min-w-xs lg:min-w-7xl max-w-7xl min-h-18 backdrop-blur-md rounded-4xl bg-black/30 shadow border border-white/20"
    >
      <div class="flex w-full h-full justify-start items-center px-8">
        <NuxtLink class="text-primary font-black text-3xl">Coraline</NuxtLink>
      </div>
      <div class="flex w-full h-full justify-center items-center">
        <div class="hidden lg:block">
          <div role="alert" class="alert alert-warning alert-soft">
            <span>Early Access</span>
          </div>
        </div>
      </div>
      <div class="flex w-full h-full justify-end items-center px-8">
        <NuxtLink to="#download">
          <div class="btn btn-primary">Download</div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
