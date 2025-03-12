<template>
	<div v-if="product">
			<h1>{{ product.name }}</h1>
			<img :src="product.image" alt="Product Image" />
			<p>{{ product.description }}</p>
			<p class="text-danger">Price: ${{ product.price }}</p>
			<button @click="toggleFavorite">
					{{ product.isFavorite ? "Remove from Favorites" : "Add to Favorites" }}
			</button>
	</div>
	<div v-else>
			<p>Loading product details...</p>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const product = ref(null);

// Dummy Product List (Simulating API)
const products = [
	{ id: 1001, name: "Cement", description: "High-quality cement", price: 10, isFavorite: false, image: "https://i.pinimg.com/736x/b1/3a/7f/b13a7f261aaf4b57aa25b7cb931948b2.jpg" },
	{ id: 1002, name: "Bricks", description: "Durable bricks", price: 5, isFavorite: false, image: "https://i.pinimg.com/736x/40/ed/63/40ed63ac0567fcded3d47582126978f0.jpg" },
	{ id: 1003, name: "Steel Rods", description: "Strong steel rods", price: 50, isFavorite: false, image: "https://i.pinimg.com/736x/fb/6f/85/fb6f85af0266aa9fb3eb388eb9cef4e0.jpg" },
];

onMounted(() => {
	const productId = Number(route.params.id); // Convert ID to Number
	product.value = products.find((p) => p.id === productId) || null;
});

const toggleFavorite = () => {
	if (product.value) {
			product.value.isFavorite = !product.value.isFavorite;
	}
};
</script>
