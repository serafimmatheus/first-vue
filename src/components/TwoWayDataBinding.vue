<template>
  <div>
    <h1>Two Way Data Binding</h1>

    <form @submit.prevent="handleClick">
      <div>
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          v-model="firstName"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label for="name">Esportes:</label>
        <select v-model="esportes">
          <option value="">Escolha uma opção</option>
          <option value="futebol">Futebol</option>
          <option value="volei">Volei</option>
          <option value="basquete">Basquete</option>
        </select>
      </div>

      <div>
        <input type="radio" id="sim" value="Sim" v-model="aceite" />
        <label for="sim">Sim</label>

        <input type="radio" id="nao" value="Não" v-model="aceite" />
        <label for="nao">Não</label>
      </div>

      <div>
        <input type="checkbox" id="terms" v-model="termos" />
        <label for="terms">Aceita nossos termos?</label>
      </div>

      <div>
        <input type="checkbox" id="futebol" value="futebol" v-model="list" />
        <label for="futebol">Futebol</label>

        <input type="checkbox" id="Volei" value="volei" v-model="list" />
        <label for="Volei">Volei</label>

        <input type="checkbox" id="thai" value="muayThai" v-model="list" />
        <label for="thai">Muay thai</label>
      </div>

      <div>
        <p v-if="esportes === 'futebol'">Você gosta de futebol, legal!</p>
        <p v-else-if="esportes === 'volei'">Você gosta de volei, legal!</p>
        <p v-else-if="esportes === 'basquete'">
          Você gosta de basquete, legal!
        </p>
        <p v-else>Escolha um esporte</p>
      </div>

      <button type="submit">Enviar</button>

      <p>seu nome é: {{ firstName }}</p>
      <p>seu esporte é: {{ esportes }}</p>
      <p>aceite: {{ aceite }}</p>
      <p>termos: {{ termos }}</p>

      <ul>
        <li v-for="item in list" :key="item">{{ item }}</li>
      </ul>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TwoWayDataBinding',

  data() {
    return {
      firstName: '',
      esportes: '',
      aceite: '',
      termos: false,
      list: [],
    }
  },

  methods: {
    handleClick() {
      console.log('clicked')
    },
  },
}
</script>

<style></style>
