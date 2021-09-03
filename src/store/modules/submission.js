import axios from 'axios'
import { URLSearchParams } from "core-js/modules/web.url-search-params";
const params = new URLSearchParams(window.location.search);
const state = {
    cmOptions: {
      tabSize: 4,
      mode: 'text/x-c++src',
      theme: 'base16-dark',
      lineNumbers: true,
      readOnly: 'nocursor',
      line: true,
    },
    code: '#include<bits/stdc++.h>\nusing namespace std;\nint main() {\n \treturn 0; \n}',
    testHeaders : [],
    testDetails : [],
    subHeaders : [],
    subDetails : []
  };
  
  const getters = {
    code: state => state.code,
    cmOptions: state => state.cmOptions,
    subHeaders: state => state.subHeaders,
    subDetails: state => state.subDetails,
    testHeaders: state => state.testHeaders,
    testDetails: state => state.testDetails
  };
  
  const actions = {
    async fetchSubmission({commit}) {
      let response = await axios.get('http://localhost:3001/submission?id='+params.get('id'),{
        headers:{
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': ['POST','GET'],
          'Access-Control-Allow-Headers': ['Content-Type', 'Authorization']
        }
      });
      response = response.data;
      commit('setCode', response.code);
      commit('setSubHeaders', response.subHeaders);
      commit('setSubDetails', response.subDetails);
      commit('setTestHeaders', response.testHeaders);
      commit('setTestDetails', response.testDetails);
    }
  };
  
  const mutations = {
  setCode: (state, code) => (state.code = code),
  setSubHeaders: (state, subHeaders) => (state.subHeaders = subHeaders),
  setSubDetails: (state, subDetails) => (state.subDetails = subDetails),
  setTestHeaders: (state, testHeaders) => (state.testHeaders = testHeaders),
  setTestDetails: (state, testDetails) => (state.testDetails = testDetails),
  };
  
  export default {
    state,
    getters,
    actions,
    mutations
  };