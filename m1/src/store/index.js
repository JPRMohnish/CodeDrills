import Vuex from 'vuex';
import Vue from 'vue';
import scores from './modules/scores';
import submission from './modules/submission'
// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    scores,
    submission
  }
});