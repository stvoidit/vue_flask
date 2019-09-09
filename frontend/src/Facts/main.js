import Vue from 'vue'
import Facts from './Facts.vue'

Vue.config.productionTip = false
new Vue({
  el: "#app",
  render: h => h(Facts)
})

