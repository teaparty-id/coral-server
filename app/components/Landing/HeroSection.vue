<script setup lang="ts">
import VueTyping from "@dmncodes/vue-typing";

const typingTextList = ref(["Rental PS4", "Rental PS3", "Rental PS5", "Console"]);
const typingLoop = ref(true);
const typingCaret = ref("_");

function typedText(text: string) {
  if (text == typingTextList.value[typingTextList.value.length - 1]) {
    typingLoop.value = false;
  } else {
    typingLoop.value = true;
    typingCaret.value = "_";
  }
}
</script>

<template>
  <section class="hero min-h-screen bg-linear-to-t from-base-200 to-base-100">
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
          Kendalikan Seluruh
          <span>
            <VueTyping
              :sentences="typingTextList"
              :minTypeSpeed="50"
              :maxTypeSpeed="150"
              :eraseSpeed="100"
              :eraseDelay="2000"
              :writeDelay="0"
              :caret="typingCaret"
              :loop="typingLoop"
              @sentence:typed="typedText"
            />
          </span>
          <!-- <span class="text-primary"> Seluruh Rental PS4 </span> -->
          Dari Satu Dashboard
        </h1>

        <p class="py-8 text-lg opacity-80 max-w-2xl">
          Coraline menghubungkan sistem billing langsung ke konsol PlayStation. Tidak perlu relay listrik, HDMI switch,
          ataupun perangkat pemutus daya.
        </p>

        <div class="flex flex-wrap gap-4">
          <NuxtLink to="#download" class="aura aura-sm text-current">
            <button class="btn btn-lg">Mulai Sekarang</button>
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

<style>
.dmn-typing span.caret {
  color: inherit;
  animation: blink 1s infinite;
}

.dmn-typing span.typing {
  animation: none;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
