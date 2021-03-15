import Vue from 'vue'
import App from './App.vue'
// 关闭警告提示
Vue.config.productionTip = false
// 基础样式
import './styles/_var.scss'
// 引入demo-ui组件库
import demoUi from '../packages'
Vue.use(demoUi)



new Vue({
  render: h => h(App),
}).$mount('#app')
