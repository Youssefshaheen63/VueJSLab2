<script setup>
import { onMounted, onUnmounted } from 'vue';
import ProductCard from './ProductCard.vue';

defineProps({
  products: Array,
});

onMounted(() => console.log('RelatedProducts mounted'));
onUnmounted(() => console.log('RelatedProducts unmounted'));
</script>

<template>
  <div class="mb-10">
    <h3 class="text-lg font-bold mb-4">Related Products</h3>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-for="product in products" :key="product.id">
        <RouterLink :to="'/product/' + product.id">
          <ProductCard :product="product" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
