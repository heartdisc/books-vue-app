import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/scss/blog.scss'
import '@/assets/fonts/sr-rojee-np/font.css'
import '@/assets/fonts/sarabun/font.css'
import '@/assets/fonts/ibm-plex/font.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
