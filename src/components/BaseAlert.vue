<template lang="pt-BR">
    <div :class="alertClasses">
        <p>{{ text }}</p>

        <button class="button" @click="onclick">
            <X size="24" />
        </button>
    </div>
</template>

<script>
import { X } from 'lucide-vue-next'

export default {
  name: 'BaseAlert',

  components: {
    X,
  },

  props: {
    variant: {
      type: String,
      default: 'alert',
    },
    text: {
      type: String,
      default: 'Este é um alerta de exemplo.',
    },
  },

  methods: {
    onclick() {
      this.$emit('close')
    },
  },

  computed: {
    alertClasses() {
      return {
        alert: this.variant === 'alert',
        success: this.variant === 'success',
        error: this.variant === 'error',
        warning: this.variant === 'warning',
      }
    },
  },
}
</script>

<style>
.alert {
  position: relative;
  background-color: #dadada;
  color: #000;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
}

.success {
  position: relative;
  background-color: #d4edda;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
}

.error {
  position: relative;
  background-color: #721c24;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
}

.warning {
  position: relative;
  background-color: #f5bf53;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
}

.button {
  position: absolute;
  top: 5px;
  right: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #000;
}
</style>
