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
        >
        <template v-slot:item.score="{ item }">
         
           <strong>{{item.score}}</strong>

          </template>
          <template v-slot:item.A="{ item }">
          <a target="_blank" :href="`submission?id=${item.subA}`" :class="[item.A?'succ': 'dang']">
           {{item.A}}
          </a>
          </template>
          <template v-slot:item.B="{ item }">
          <a target="_blank" :href="`submission?id=${item.subB}`" :class="[item.B?'succ': 'dang']">
           {{item.B}}
          </a>
          </template>
          <template v-slot:item.C="{ item }">
          <a target="_blank" :href="`submission?id=${item.subC}`" :class="[item.C?'succ': 'dang']">
           {{item.C}}
          </a>
          </template>
          <template v-slot:item.D="{ item }">
          <a target="_blank" :href="`submission?id=${item.subD}`" :class="[item.D?'succ': 'dang']">
           {{item.D}}
          </a>
          </template>
          <template v-slot:item.E="{ item }">
          <a target="_blank" :href="`submission?id=${item.subC}`" :class="[item.E?'succ': 'dang']">
           {{item.E}}
          </a>
          </template>
        </v-data-table>
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
a {
  text-decoration: none;
  font-weight: 700;
}
.succ {
  color: #4caf50;
}
.dang {
  color: #f44336;
}
</style>