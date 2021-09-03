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
import { mapGetters } from 'vuex'
export default {
  name: 'Submission',

  components: {
    Editor,
    SubDetail,
    TestCases
  },
  computed: mapGetters(['subHeaders', 'subDetails', 'testHeaders', 'testDetails', 'cmOptions', 'code']),
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