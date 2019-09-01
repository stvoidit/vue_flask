import Vue from 'vue'
import Table from './Table.vue'
// import router from '@/router'

Vue.config.productionTip = false

new Vue({
  // router,
  el: "#app",
  render: h => h(Table)
})

