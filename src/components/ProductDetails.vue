<script setup>
import { computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({ product: Object });
const emit = defineEmits(['buy']);

const finalPrice = computed(() => props.product.price - props.product.discount);

onMounted(() => console.log('ProductDetails mounted'));
onUnmounted(() => console.log('ProductDetails unmounted'));
</script>

<template>
  <div class="card lg:card-side bg-base-100 shadow-xl border overflow-hidden">
    <figure class="bg-gray-100 lg:w-1/2 p-8">
      <img :src="product.image" class="rounded-xl object-contain max-h-96" />
    </figure>
    <div class="card-body lg:w-1/2">
      <div class="flex justify-between items-start">
        <h2 class="card-title text-4xl font-extrabold">{{ product.name }}</h2>
        <span v-if="product.stock > 0" class="badge badge-success"
          >In Stock ({{ product.stock }})</span
        >
        <span v-else class="badge badge-error">Out of Stock</span>
      </div>

      <p class="text-lg text-gray-500 my-4">{{ product.description }}</p>

      <div class="flex gap-2 mb-6">
        <span
          v-for="tag in product.tags"
          :key="tag"
          class="badge badge-outline"
          >{{ tag }}</span
        >
      </div>

      <div class="flex items-baseline gap-4 mb-8">
        <span class="text-4xl font-bold text-primary">${{ finalPrice }}</span>
        <span v-if="product.discount" class="line-through text-xl opacity-40"
          >${{ product.price }}</span
        >
      </div>

      <div class="card-actions">
        <button
          class="btn btn-primary btn-lg w-full md:w-fit"
          :disabled="product.stock <= 0"
          @click="emit('buy', product.id)"
        >
          {{ product.stock > 0 ? 'Buy Now' : 'Out of Stock' }}
        </button>
      </div>
    </div>
  </div>
</template>
