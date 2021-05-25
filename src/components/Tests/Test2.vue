<template>
  <div class="tests-test2">
    <div class="tests-test2__title font-weight-bold text-subtitle-1 mb-4">Test 2</div>
    <h1 class="tests-test2__h1 text-h5 mb-6" :style="{ color }">Ce titre peut changer de couleur</h1>
    <v-btn id="change-color" @click="changeColor"> Changer la couleur </v-btn>
  </div>
</template>

<script>
export default {
  name: 'TestsTest2',
  data() {
    return {
      color: '',
    }
  },
  methods: {
    changeColor() {
      this.color = 'green'
    },
  },
}
</script>

<style lang="scss" scoped>
.tests-test2 {
  flex: 1;
}
</style>
