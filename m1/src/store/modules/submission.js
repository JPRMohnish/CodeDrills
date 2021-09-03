import { URLSearchParams } from "core-js/modules/web.url-search-params";
const params = new URLSearchParams(window.location.search);
const state = {
    code: '#include<bits/stdc++.h>\nusing namespace std;\nint main() {\n \treturn 0; \n}',
    cmOptions: {
        tabSize: 4,
        mode: 'text/x-c++src',
        theme: 'base16-dark',
        lineNumbers: true,
        readOnly: 'nocursor',
        line: true,
    },
    testHeaders : [
        {
          text: 'Test case ID',
          value: 'tcid'
        },
        {
          text: 'Status',
          value: 'status'
        },
        {
          text: 'Time',
          value: 'time'
        },
        {
          text: 'Memory',
          value: 'memory'
        }
    ],
    testDetails : [
        {
          tcid: '0',
          status: 'Correct Answer',
          time: '220 ms',
          memory: '7220 KiB'
        },
        {
          tcid: '1',
          status: 'Correct Answer',
          time: '221 ms',
          memory: '7210 KiB'
        },
        {
          tcid: '2',
          status: 'Correct Answer',
          time: '22 ms',
          memory: '720 KiB'
        },
        {
          tcid: '3',
          status: 'Correct Answer',
          time: '228 ms',
          memory: '7227 KiB'
        },
        {
          tcid: '4',
          status: 'Correct Answer',
          time: '227 ms',
          memory: '7229 KiB'
        }
    ],
    subHeaders : [
        {
          text: 'ID',
          align: 'start',
          value: 'id'
        },
        {
          text: 'Submitted On',
          value: 'subOn'
        },
        {
          text: 'Submitted By',
          value: 'subBy'
        },
        {
          text: 'Problem',
          value: 'problem'
        },
        {
          text: 'Language',
          value: 'lang'
        },
        {
          text: 'Status',
          value: 'status'
        },
        {
          text: 'Time',
          value: 'time'
        },
        {
          text: 'Memory',
          value: 'memory'
        }
    ],
    subDetails : [
        {
          id: params.get('id'),
          subOn: '14/08/2021, 19:59:55',
          subBy: 'Rahul Dugar',
          problem: 'Blizzard Blitz',
          lang: 'C++',
          status: 'Correct Answer',
          time: '220 ms',
          memory: '7552 KiB'
        }
    ]
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
    
  };
  
  const mutations = {
    
  };
  
  export default {
    state,
    getters,
    actions,
    mutations
  };