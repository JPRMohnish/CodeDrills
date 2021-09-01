import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
Vue.config.productionTip = false
Vue.use(VueCodemirror, /* {
  options: { theme: 'base16-dark', ... },
  events: ['scroll', ...]
} */);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
