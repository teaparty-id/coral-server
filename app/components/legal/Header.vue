<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="text-center mb-20">
    <div class="badge badge-primary badge-lg mb-4">Coraline</div>

    <h1 class="text-5xl md:text-6xl font-black">
      {{ title }}
    </h1>

    <p class="opacity-70 max-w-2xl mx-auto mt-6 text-lg">
      {{ description }}
    </p>
  </div>
</template>
