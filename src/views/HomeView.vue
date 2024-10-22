<template>
  <div class="container">
    <div class="content">
      <h1>Produtos</h1>
      <p>Os melhores preços de eletronicos, você só encontra aqui.</p>

      <section class="content-products">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </section>
    </div>
  </div>

  <TheCart v-if="cart.length > 0" />
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import TheCart from '@/components/TheCart.vue'
export default {
  name: 'HomeView',
  components: {
    ProductCard,
    TheCart,
  },

  data() {
    return {
      products: [],
      cart: [],
    }
  },

  created() {
    this.getProductStorage()
    this.getCartProductStorage()
  },

  methods: {
    async getProductStorage() {
      this.$store.dispatch('getProducts').then(() => {
        this.products = this.$store.state.products
      })
    },

    async getCartProductStorage() {
      this.cart = this.$store.state.cart
    },
  },
}
</script>

<style scoped>
.content {
  margin-top: 60px;
}

.content-products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
</style>
