<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Header from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

const products = ref([
  {
    id: 1,
    name: 'Cozy Sneakers',
    description: 'High-quality sneakers that go with everything you wear.',
    image: 'https://m.media-amazon.com/images/I/719KjLOSOFL._AC_SX535_.jpg',
    badge: 'NEW',
    price: 120,
    discount: 20,
    stock: 10,
    tags: ['Fashion', 'Casual', 'Sport'],
  },
  {
    id: 2,
    name: 'Running Shoes',
    description: 'Built for speed and comfort on any terrain.',
    image: 'https://m.media-amazon.com/images/I/719KjLOSOFL._AC_SX535_.jpg',
    badge: '',
    price: 90,
    discount: 10,
    stock: 5,
    tags: ['Sport', 'Running'],
  },
  {
    id: 3,
    name: 'Casual Boots',
    description: 'Rugged boots for everyday adventures.',
    image: 'https://m.media-amazon.com/images/I/719KjLOSOFL._AC_SX535_.jpg',
    badge: 'SALE',
    price: 150,
    discount: 0,
    stock: 8,
    tags: ['Casual', 'Winter'],
  },
  {
    id: 4,
    name: 'Flip Flops',
    description: 'Light and breezy for sunny days.',
    image: 'https://m.media-amazon.com/images/I/719KjLOSOFL._AC_SX535_.jpg',
    badge: '',
    price: 30,
    discount: 50,
    stock: 20,
    tags: ['Summer', 'Casual'],
  },
]);

const handleBuy = (productId) => {
  const product = products.value.find((p) => p.id === productId);
  if (product && product.stock > 0) {
    product.stock--;
    console.log(`Bought ${product.name}. Remaining stock: ${product.stock}`);
  }
};

onMounted(() => console.log('App.vue mounted'));
onUnmounted(() => console.log('App.vue unmounted'));
</script>

<template>
  <div class="min-h-screen flex flex-col bg-base-100">
    <Header />
    <main class="flex-grow container mx-auto px-4 py-8">
      <RouterView :products="products" @buy="handleBuy" />
    </main>
    <Footer />
  </div>
</template>
