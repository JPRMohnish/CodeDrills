<template>
    <div class="score-board">
        <h1> {{msg}} </h1>
        <v-data-table
        :headers="headers"
        :items="values"
        :sort-by="['rank']"
        :sort-desc="[false, true]"
        multi-sort
        class="elevation-1"
        ></v-data-table>
    </div>
</template>
<script>
export default {
  name: 'Scores',
  props: {
    msg: String,
    headers: Array,
    values: Array
  }
}
</script>
<style scoped>
.score-board {
  margin: 20px 5%;
}
</style>