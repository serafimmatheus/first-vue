<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.title" />
    <h2>{{ product.title }}</h2>
    <p>{{ product.description }}</p>
    <p>R$ {{ product.price }}</p>

    <footer>
      <button @click="addToCart">Adicionar ao carrinho</button>
      <button @click="removeToCart">Remover do carrinho</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  methods: {
    addToCart() {
      this.$store.commit('addProductToCart', this.product)
    },

    removeToCart() {
      this.$store.commit('removeProductFromCart', this.product)
    },
  },
  props: {
    product: {
      type: Object,
    },
  },
}
</script>

<style scoped>
.product-card {
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
