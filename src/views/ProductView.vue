<script setup>
import { computed, onMounted, onUnmounted } from 'vue';
import ProductDetails from '@/components/ProductDetails.vue';
import RelatedProducts from '@/components/RelatedProducts.vue';

const props = defineProps({ id: String, products: Array });
const emit = defineEmits(['buy']);

const product = computed(() =>
  props.products.find((p) => p.id === parseInt(props.id)),
);

const related = computed(() =>
  props.products.filter((p) => p.id !== parseInt(props.id)),
);

onMounted(() => console.log(`ProductView mounted for ID: ${props.id}`));
onUnmounted(() => console.log('ProductView unmounted'));
</script>

<template>
  <div v-if="product" class="space-y-16">
    <ProductDetails :product="product" @buy="(id) => emit('buy', id)" />

    <div class="divider">Explore More</div>
    <RelatedProducts :products="related" />
  </div>
  <div v-else class="text-center py-20">
    <h2 class="text-2xl font-bold">Product not found!</h2>
    <RouterLink to="/" class="btn btn-primary mt-4">Back Home</RouterLink>
  </div>
</template>
