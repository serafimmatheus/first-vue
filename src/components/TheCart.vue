<template>
  <div class="modal">
    <h1>Carrinho</h1>
    <div class="cart">
      <div class="cart-products">
        <CartProduct
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
      <div class="cart-total">
        <h2>Total</h2>
        <p>R$ {{ $store.getters.total }}</p>
        <button>Finalizar compra</button>
      </div>
    </div>
  </div>
</template>

<script>
import CartProduct from './ProductCard.vue'

export default {
  name: 'TheCart',
  components: {
    CartProduct,
  },

  data() {
    return {
      products: [],
    }
  },

  created() {
    this.getCartStorage()
  },

  computed: {
    // total() {
    //   return this.products.reduce((acc, product) => acc + product.price, 0)
    // },
  },

  methods: {
    getCartStorage() {
      this.products = this.$store.state.cart
    },

    checkout() {
      this.$store.commit('checkout')
      this.products = []
    },
  },
}
</script>

<style scoped>
.modal {
  position: absolute;
  z-index: 99;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  border-left: 1px solid #000;
  max-width: 600px;
  background-color: #fff;
}

.cart {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cart-products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.cart-total {
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

button {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}
</style>
