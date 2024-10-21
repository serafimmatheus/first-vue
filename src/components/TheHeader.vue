<template>
  <header>
    <div class="container">
      <div class="content">
        <div class="avatar">
          <img v-bind:src="src" v-bind:alt="imgAlt" />
          <h1>Matheus Serafim</h1>
        </div>

        <nav>
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/form-page">Formulário</router-link> |
          <router-link to="/two-way-data-binding"
            >Two Way Data Binding</router-link
          >
          |
          <router-link to="/computed-properties"
            >Computed Properties</router-link
          >
        </nav>
      </div>
    </div>
  </header>

  <router-view />
</template>

<script>
export default {
  data() {
    return {
      imgAlt: 'Matheus Serafim',
      src: 'https://github.com/serafimmatheus.png',
    }
  },
}
</script>

<style>
.container {
  width: 100%;
  max-width: 1280px;
  padding: 0 20px;
  margin: 0 auto;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.avatar {
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }

  h1 {
    font-size: 1rem;
  }
}
</style>
