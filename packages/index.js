// 导入组件
import Button from './button/button.vue'

// 存储组件
const components = [
    Button
]

// 全局导入
const install = Vue=>{
    if(install.installed) return;
    components.map(component=>{
        Vue.component(component.name,component)
    })
}

// 全局校验
if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}

export default {
    install,
    // 单独组件
    Button
}