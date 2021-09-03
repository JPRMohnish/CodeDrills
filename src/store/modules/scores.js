import axios from 'axios';

const state = {
  problems : [],
  search : '',
  headers: [],
 values: []
};

const getters = {
  values: state => state.values,
  headers: state => state.headers,
  problems: state => state.problems,
  search: state => state.search
};

const actions = {
  async fetchScores({commit}) {
    let response = await axios.get('http://localhost:3001/scoreboard?id=12345',{
      headers:{
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': ['POST','GET'],
        'Access-Control-Allow-Headers': ['Content-Type', 'Authorization']
      }
    });
    response = response.data;
    commit('setProblems', response.problems);
    commit('setHeaders', response.headers);
    commit('setValues', response.values);
    commit('setSearch', response.search);
  }
};

const mutations = {
  setProblems: (state, problems) => (state.problems = problems),
  setHeaders: (state, headers) => (state.headers = headers),
  setValues: (state, values) => (state.values = values),
  setSearch: (state, search) => (state.search = search)
};

export default {
  state,
  getters,
  actions,
  mutations
};