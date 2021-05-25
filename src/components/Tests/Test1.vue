<template>
  <div class="tests-test1">
    <div class="tests-test1__title font-weight-bold text-subtitle-1 mb-4">Test 1</div>
    <v-text-field v-model="name" label="Nom" solo class="mb-6" hide-details></v-text-field>
    <v-btn @click="formatMsg" class="mb-6" :disabled="btnDisabled"> Formater le message </v-btn>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'TestsTest1',
  data() {
    return {
      name: '',
      message: '',
    }
  },
  computed: {
    btnDisabled() {
      return this.name === ''
    },
  },
  methods: {
    formatMsg() {
      this.message = `Bonjour ${this.name}`
    },
  },
}
</script>

<style lang="scss" scoped>
.tests-test1 {
  flex: 1;
}
</style>
