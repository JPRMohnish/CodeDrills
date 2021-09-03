import Vue from 'vue'
import vuetify from './plugins/vuetify'
import VueCodemirror from 'vue-codemirror'
import ScoreBoard from './components/ScoreBoard.vue'
import Submission from './components/Submission.vue'
import 'codemirror/lib/codemirror.css'
import store from './store/';

Vue.config.productionTip = false
Vue.use(VueCodemirror, /* {
  options: { theme: 'base16-dark', ... },
  events: ['scroll', ...]
} */);
const NotFound = { template: '<p>Page not found</p>' }
const routes= {
  // dynamic segments start with a colon
  '/scoreboard': ScoreBoard ,
  '/submission': Submission 
}

new Vue({
  vuetify,
  store,
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
}).$mount('#app')
