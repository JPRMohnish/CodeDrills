<template>
  <v-app>
    <v-main>
      <Scores msg="LeaderBoard" :headers="headers" :values="values" :problems="problems" :search="search" :filterOnly="filterOnly"/>
    </v-main>
  </v-app>
</template>

<script>
import Scores from './Scores.vue'
import { mapGetters,mapActions } from 'vuex'
export default {
  name: 'ScoreBoard',

  components: {
    Scores,
  },
  computed: mapGetters(['headers', 'values', 'search', 'problems']),
  methods: {
      ...mapActions(['fetchScores']),
      filterOnly(value, search,item) {
        if(search[0] == 'N') {
          search = search.slice(2);
          value = value.toString();
          search = search.toString();
          value.toLowerCase();
          search.toLowerCase();
          return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().indexOf(search) !== -1
        }
        else if(search[0] == 'P') {
          search = search.slice(2);
          search = search.toString();
          return search && item[search]? true : false;
        }
      },
  },
  created() {
    this.fetchScores();
  }
};
</script>

