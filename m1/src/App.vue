<template>
  <v-app>
    <v-main>
      <Scores msg="Leader Board" :headers="headers" :values="values" />
      <SubDetail :subHeaders="subHeaders" :subDetails="subDetails" />
      <TestCases :testHeaders="testHeaders" :testDetails="testDetails" />
      <Editor :cmOptions="cmOptions" :code="code" />
    </v-main>
  </v-app>
</template>

<script>
import Scores from './components/Scores.vue'
import Editor from './components/Editor.vue'
import SubDetail from './components/SubDetail.vue'
import TestCases from './components/TestCases.vue'
export default {
  name: 'App',

  components: {
    Scores,
    Editor,
    SubDetail,
    TestCases
  },

  data: () => ({
      headers: [],
      values: [],
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
        // more CodeMirror options...
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
              id: '252719',
              subOn: '14/08/2021, 19:59:55',
              subBy: 'Rahul Dugar',
              problem: 'Blizzard Blitz',
              lang: 'C++',
              status: '	Correct Answer',
              time: '220 ms',
              memory: '7552 KiB'
            }
    ]
      this.headers = [
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
              value: 'A'
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
        ];
      this.values = [
            {
              name: 'Harry',
              rank: 1,
              score: '380',
              A: 100,
              B: 80,
              C: 90,
              D: 100,
              E: 95
            },
            {
              name: 'Ron',
              rank: 2,
              score: '370',
              A: 10,
              B: 90,
              C: 10,
              D: 100,
              E: 100,
            },
            {
              name: 'Hermoine',
              rank: 3,
              score: '360',
              A: 100,
              B: 10,
              C: 100,
              D: 100,
              E: 100,
            },
      ]
  }
};
</script>

<!-- 
Task for 1 september
Generic routing and score board for any number of problems.
Try making submission page with code-mirror editor in vue.js
Fetch Submissions by submission id.
Amd Display Submission Info as in code drills.

Task for 2nd September
StartIntegrating with APIs rather than using mock data.
-->