<template>
  <div class="container">
    <form @submit.prevent="handleMutationUser" class="card top-60">
      <h1>Perfil</h1>
      <div class="vertical top-20">
        <label for="name">Nome:</label>
        <input type="text" id="name" v-model="name" />
      </div>

      <div class="vertical">
        <label for="email">E-mail:</label>
        <input type="email" id="email" v-model="email" />
      </div>

      <footer>
        <button class="outline" type="button">Cancelar</button>
        <button type="submit">Salvar</button>
      </footer>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.$store.state.user.name,
      email: this.$store.state.user.email,
    }
  },

  methods: {
    handleMutationUser() {
      this.$store.commit('updateUser', {
        name: this.name,
        email: this.email,
      })
    },
  },
}
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.top-60 {
  margin-top: 60px;
}

.top-20 {
  margin-top: 20px;
}

.vertical {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.card {
  background-color: #dddddd;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #000;
  margin-top: 5px;
}

button {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #000;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  margin-top: 10px;
  align-self: flex-end;

  &:hover {
    background-color: #333;
  }

  &.outline {
    background-color: transparent;
    color: #000;
  }
}
</style>
