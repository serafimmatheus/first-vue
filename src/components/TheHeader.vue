<template>
  <header>
    <img v-bind:src="src" v-bind:alt="imgAlt" />
    <h1>Header</h1>
  </header>
</template>

<script>
export default {
  data() {
    return {
      imgAlt: 'Matheus Serafim',
      src: 'https://placehold.co/120x60@2x.png',
    }
  },
}
</script>

<style></style>
