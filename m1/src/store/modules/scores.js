const state = {
  problems : ['A', 'B', 'C', 'D', 'E'],
  search : '',
  headers: [
    {
      text: 'Rank',
      align: 'start',
      value: 'rank'
    },
    {
    text: 'Participants',
    sortable: false,
    value: 'name',
    },
    {
      text: 'Score',
      value: 'score'
    },
    {
      text: 'A',
      value: 'A',
    },
    {
      text: 'B',
      value: 'B'
    },
    {
      text: 'C',
      value: 'C'
    },
    {
      text: 'D',
      value: 'D'
    },
    {
      text: 'E',
      value: 'E'
    }
],
 values: [
    {
      name: 'Harry',
      rank: 1,
      score: 3,
      A: 1,
      subA: 101001,
      B: 0,
      subB: 101002,
      C: 0,
      subC: 101003,
      D: 1,
      subD: 101004,
      E: 1,
      subE: 101005
    },
    {
      name: 'Ron',
      rank: 2,
      score: 3,
      A: 0,
      subA: 101011,
      B: 1,
      subB: 101012,
      C: 1,
      subC: 101013,
      D: 1,
      subD: 101014,
      E: 0,
      subE: 101015
    },
    {
      name: 'Hermoine',
      rank: 3,
      score: 3,
      A: 1,
      subA: 101021,
      B: 1,
      subB: 101022,
      C: 0,
      subC: 101023,
      D: 1,
      subD: 101024,
      E: 0,
      subE: 101025
    },
  ]
};

const getters = {
  values: state => state.values,
  headers: state => state.headers,
  problems: state => state.problems,
  search: state => state.search
};

const actions = {
  
};

const mutations = {
  
};

export default {
  state,
  getters,
  actions,
  mutations
};