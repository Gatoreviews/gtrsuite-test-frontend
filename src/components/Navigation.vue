<template>
  <v-navigation-drawer app :value="drawer" @input="toggleDrawer">
    <div class="d-flex align-center pa-4">
      <v-img
        alt="GTR Suite Logo"
        contain
        :src="require('@/assets/images/logo-dark.svg')"
        height="32"
        position="center left"
      />
    </div>

    <v-list nav>
      <v-list-item :exact="item.exact" v-for="item in items" :key="item.title" :to="item.route">
        <v-list-item-icon class="mr-4">
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: {
      required: true,
    },
  },
  data: () => ({
    items: [
      { title: 'Accueil', icon: 'mdi-home', route: { name: 'Home' }, exact: true },
      { title: 'Responsive', icon: 'mdi-responsive', route: { name: 'Responsive' }, exact: false },
      { title: 'Tableau', icon: 'mdi-table', route: { name: 'Table' }, exact: false },
      { title: 'Requête & Store', icon: 'mdi-database-clock-outline', route: { name: 'Store' }, exact: false },
      { title: 'Routing', icon: 'mdi-routes', route: { name: 'Routing' }, exact: false },
      { title: 'Composants', icon: 'mdi-video-input-component', route: { name: 'Components' }, exact: false },
      { title: 'Traductions', icon: 'mdi-translate', route: { name: 'Translations' }, exact: false },
      { title: 'Google Maps', icon: 'mdi-map', route: { name: 'Gmap' }, exact: false },
      { title: 'SEO', icon: 'mdi-clipboard-pulse-outline', route: { name: 'Seo' }, exact: false },
      { title: 'Tests', icon: 'mdi-test-tube', route: { name: 'Tests' }, exact: false },
      { title: 'Git', icon: 'mdi-git', route: { name: 'Git' }, exact: false },
    ],
    right: null,
  }),
  methods: {
    toggleDrawer(bool) {
      this.$emit('toggleDrawer', bool)
    },
  },
}
</script>
