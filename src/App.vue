<template>
  <v-app>
    <v-main>
      <ScoreBoard />
      <Submission />
    </v-main>
  </v-app>
</template>

<script>
import ScoreBoard from './components/ScoreBoard.vue'
import Submission from './components/Submission.vue'

export default {
  name: 'App',
  components: {
    ScoreBoard,
    Submission
  },
  };
</script>
