<script setup>
import { onMounted, onUnmounted } from 'vue';
import ProductCard from '@/components/ProductCard.vue';
import Carousel from '@/components/Carousel.vue';

const props = defineProps({
  products: Array,
});

onMounted(() =>
  console.log(`HomeView mounted — ${props.products.length} products loaded`),
);
onUnmounted(() => console.log('HomeView unmounted'));
</script>

<template>
  <div>
    <Carousel />
    <h2 class="text-3xl font-bold mb-8">Our Products</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="product in products" :key="product.id">
        <RouterLink :to="'/product/' + product.id">
          <ProductCard :product="product" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
