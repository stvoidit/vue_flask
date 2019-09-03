import Vue from 'vue'
import Index from './Index.vue'
import About from './About.vue'
import TableOne from './TableOne.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  el: "#app",
  render: h => h(Index)
})

