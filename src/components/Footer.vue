<template>
  <footer class="footer footer-center bg-gray-200 p-4 mt-6">
    <div class="mx-auto text-xl font-bold text-center py-4">
      By usef mohamed
    </div>
  </footer>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(() => console.log('Footer mounted'));
onUnmounted(() => console.log('Footer unmounted'));
</script>
