<script setup>
import { computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  product: Object,
});

const finalPrice = computed(() => {
  return props.product.price - props.product.discount;
});

onMounted(() => console.log('ProductCard mounted'));
onUnmounted(() => console.log('ProductCard unmounted'));
</script>

<template>
  <div class="card bg-base-200 shadow">
    <figure class="p-4">
      <img :src="product.image" />
    </figure>

    <div class="card-body text-center">
      <h2 class="font-bold">{{ product.name }}</h2>

      <p>
        ${{ finalPrice }}
        <span v-if="product.discount" class="line-through text-sm opacity-50">
          ${{ product.price }}
        </span>
      </p>

      <span v-if="product.discount" class="badge bg-red-400/10">
        -{{ product.discount }}$
      </span>
    </div>
  </div>
</template>
