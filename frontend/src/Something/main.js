import Vue from 'vue'
import Something from './Something.vue'

Vue.config.productionTip = false
new Vue({
  el: "#app",
  render: h => h(Something)
})

