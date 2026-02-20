<template>
  <div class="max-w-2xl mx-auto text-center py-20">
    <h1 class="text-5xl font-black mb-6">About Us</h1>

    <p class="text-xl leading-relaxed opacity-70">
      About Store made by usef mohamed
    </p>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
onMounted(() => console.log('AboutView mounted'));
onUnmounted(() => console.log('AboutView unmounted'));
</script>
