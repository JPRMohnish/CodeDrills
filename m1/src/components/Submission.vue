<template>
  <v-app>
    <v-main>
      <SubDetail :subHeaders="subHeaders" :subDetails="subDetails" />
      <TestCases :testHeaders="testHeaders" :testDetails="testDetails" />
      <Editor :cmOptions="cmOptions" :code="code" />
    </v-main>
  </v-app>
</template>

<script>
import Editor from './Editor.vue'
import SubDetail from './SubDetail.vue'
import TestCases from './TestCases.vue'
export default {
  name: 'Submission',

  components: {
    Editor,
    SubDetail,
    TestCases
  },

  data: () => ({
      subHeaders: [],
      subDetails: [],
      testHeaders: [],
      testDetails: [],
      code: '#include<bits/stdc++.h>\nusing namespace std;\nint main() {\n \treturn 0; \n}',
      cmOptions: {
        tabSize: 4,
        mode: 'text/x-c++src',
        theme: 'base16-dark',
        lineNumbers: true,
        readOnly: 'nocursor',
        line: true,
      }
  }),
  created() {
    this.testHeaders = [
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
    ];
    this.testDetails = [
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
    ];
    const params = new URLSearchParams(window.location.search);

    this.subHeaders = [
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
    ];
    this.subDetails = [
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
  }
};
</script>
<style>
.succ {
  color: #4caf50;
}
.dang {
  color: #f44336;
}
</style>