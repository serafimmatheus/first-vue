<template>
  <div>
    <h1>Computed Properties</h1>

    {{ fullName }}
  </div>
</template>

<script>
export default {
  name: 'ComputedProps',
  data() {
    return {
      user: {
        firstName: 'Matheus',
        lastName: 'Serafim',
      },
    }
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`
    },
  },
}
</script>

<style></style>
