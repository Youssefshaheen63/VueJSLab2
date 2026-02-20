<template>
  <div class="navbar bg-primary text-primary-content shadow-lg px-8">
    <div class="flex-1">
      <RouterLink
        to="/"
        class="btn btn-ghost text-xl font-black tracking-tighter"
      >
        STORE
      </RouterLink>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1 font-medium">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/product/1">Product</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(() => console.log('NavBar mounted'));
onUnmounted(() => console.log('NavBar unmounted'));
</script>
