<template>
  <div class="carousel w-full rounded-3xl h-64 md:h-96 mb-10 shadow-2xl">
    <div id="slide1" class="carousel-item relative w-full">
      <img
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000"
        class="w-full object-cover"
      />
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <button class="btn btn-circle" @click="goToSlide('slide3')">❮</button>
        <button class="btn btn-circle" @click="goToSlide('slide2')">❯</button>
      </div>
    </div>
    <div id="slide2" class="carousel-item relative w-full">
      <img
        src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000"
        class="w-full object-cover"
      />
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <button class="btn btn-circle" @click="goToSlide('slide1')">❮</button>
        <button class="btn btn-circle" @click="goToSlide('slide3')">❯</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

const goToSlide = (slideId) => {
  const element = document.getElementById(slideId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest',
    });
  }
};

onMounted(() => console.log('Carousel mounted'));
onUnmounted(() => console.log('Carousel unmounted'));
</script>
