import Vue from 'vue'
import Table from './Table.vue'

Vue.config.productionTip = false
new Vue({
  el: "#app",
  render: h => h(Table)
})

