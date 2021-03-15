import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './styles/_var.scss'

import demoUI from './packages'
Vue.use(demoUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
