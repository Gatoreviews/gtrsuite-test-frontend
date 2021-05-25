<template>
  <v-app class="app">
    <TopBar @toggleDrawer="toggleDrawer" />
    <Navigation :drawer="drawer" @toggleDrawer="toggleDrawer" />
    <v-main>
      <v-container fluid class="pa-4 pa-sm-6 app__container">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'App',
  components: {
    TopBar,
    Navigation,
  },
  data: () => ({
    drawer: null,
  }),
  methods: {
    toggleDrawer(bool) {
      if (typeof bool === 'boolean') {
        this.drawer = bool
      } else {
        this.drawer = !this.drawer
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.app {
  &__container {
    height: 100%;
  }
}
</style>
