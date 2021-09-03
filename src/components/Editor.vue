<template>
  <v-app>
    <v-main>
      <div class = "code-snippet">
        <codemirror
        ref="cmEditor"
        :value="code"
        :options="cmOptions"
       />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/clike/clike'
import 'codemirror/theme/base16-dark.css'
// import base style
import 'codemirror/lib/codemirror.css'
export default {
  name: 'Editor',

  components: {
    codemirror
  },
  props: {
    code: String,
    cmOptions: Object,
  }
};
</script>

<style scoped>
  .code-snippet{
    margin: 20px 5%;
  }
</style>