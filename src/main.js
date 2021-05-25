import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import i18n from './i18n/i18n'
import vuetify from './plugins/vuetify'
import * as VueGoogleMaps from 'gmap-vue'
import '@/styles/global.scss'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: '',
  },
})

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App),
}).$mount('#app')
