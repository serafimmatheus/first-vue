<template>
  <BaseAlert
    v-if="isModalOpen"
    :variant="success"
    :text="text"
    @close="onclose"
  />

  <div class="container">
    <div>Nome: {{ name }}</div>

    <div v-if="accessLevel === 'admin'">Admin</div>
    <div v-else-if="accessLevel === 'marketing'">Marketing</div>
    <div v-else>Usuário</div>

    <div>
      <h2 :class="{ title: isCompleted, title2: !isCompleted }">Titulo</h2>

      <p :class="pClass">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corrupti
        perferendis optio fugiat sint minus officia consectetur nulla. Excepturi
        dolorum ut, atque quisquam rerum ea ducimus adipisci fuga aspernatur
        quam.
      </p>

      <p
        :style="{
          color: isCompleted ? 'green' : 'red',
          fontSize: isCompleted ? '14px' : '12px',
        }"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus modi
        eligendi eveniet cum, necessitatibus quam veritatis. Magnam expedita
        accusantium facere porro eum, sunt cumque! Neque laborum explicabo
        repudiandae quo pariatur.
      </p>
    </div>

    <div class="lista-tarefas">
      <h1>Lista de tarefas</h1>
      <h3>Tarefas não Completadas: {{ showUncompletedTodos.length }}</h3>
      <ul class="card">
        <li
          v-for="obj in showUncompletedTodos"
          v-bind:key="obj.id"
          :class="{ green: obj.completed, 'list-item': true }"
        >
          <h4>{{ obj.title }}</h4>
          <p>Completada: {{ obj.completed }}</p>
        </li>
      </ul>
    </div>

    <div>
      <h3>Tarefas Completadas: {{ showCompletedTodos.length }}</h3>
      <ul class="card">
        <li
          v-for="obj in showCompletedTodos"
          v-bind:key="obj.id"
          :class="{ green: obj.completed, 'list-item': true }"
        >
          <h4>{{ obj.title }}</h4>
          <p>Completada: {{ obj.completed }}</p>
        </li>
      </ul>
    </div>

    <div>
      <h3>Todas as Tarefas: {{ todos.length }}</h3>
      <ul class="card">
        <li
          v-for="obj in todos"
          v-bind:key="obj.id"
          :class="{ green: obj.completed, 'list-item': true }"
        >
          <input type="checkbox" v-model="obj.completed" />
          <h4>{{ obj.title }}</h4>
          <p>Completada: {{ obj.completed }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BaseAlert from '@/components/BaseAlert.vue'

export default {
  components: {
    BaseAlert,
  },
  data() {
    return {
      isModalOpen: true,
      success: 'success',
      text: 'Sucesso: rsrs',
      showHeader: true,
      alert: 'success',
      isCompleted: true,
      name: 'Matheus Serafim',
      accessLevel: 'user',
      todos: [
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false,
        },
        {
          userId: 1,
          id: 2,
          title: 'quis ut nam facilis et officia qui',
          completed: false,
        },
        {
          userId: 1,
          id: 3,
          title: 'fugiat veniam minus',
          completed: false,
        },
        {
          userId: 1,
          id: 4,
          title: 'et porro tempora',
          completed: true,
        },
        {
          userId: 1,
          id: 5,
          title:
            'laboriosam mollitia et enim quasi adipisci quia provident illum',
          completed: false,
        },
      ],

      pClass: ['center', 'center-div', 'title'],
    }
  },

  watch: {
    name() {
      console.log('Name changed')
    },
  },

  computed: {
    showUncompletedTodos() {
      return this.todos.filter((todo) => !todo.completed)
    },

    showCompletedTodos() {
      return this.todos.filter((todo) => todo.completed)
    },
  },

  methods: {
    toggleHeader() {
      this.showHeader = !this.showHeader
    },

    onclose() {
      this.isModalOpen = false
    },
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

.card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
}

.list-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: white;
  background-color: #000;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;
}

.title {
  color: red;
}

.title2 {
  color: blue;
}

.green {
  background-color: green;
}

.center-div {
  width: 200px;
  display: flex;
  margin: 0 auto;
}

.center {
  text-align: center;
}

.lista-tarefas {
  margin-top: 50px;
  margin-bottom: 30px;
}
</style>
