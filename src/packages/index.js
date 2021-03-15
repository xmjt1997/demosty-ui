import Button from './button/button.vue'

const components = [
    Button
]

const install = (Vue)=>{
    if (install.installed) return;
    components.map(c => Vue.component(c.name, c));
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }
  
  export default {
    install,
    Button,
  };