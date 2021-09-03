<template>
    <div class="score-board">
        <h1> {{msg}} </h1>
        <div :key="problem" v-for="problem in  problems" class='problems'>
          {{problem}}
        </div>
         <v-card>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search with 'N:name' to search for participant or 'P:problem Name' to search for participants who solved the problem with given problem name"
              single-line
              hide-details
            ></v-text-field>
            </v-card-title>
            <v-data-table
            :headers="headers"
            :items="values"
            :sort-by="['rank']"
            :sort-desc="[false, true]"
            multi-sort
            :custom-filter="filterOnly"
            :search="search"
            class="elevation-1"
            id="scores"
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
         </v-card>
    </div>
</template>
<script>
export default {
  name: 'Scores',
  props: {
    msg: String,
    headers: Array,
    values: Array,
    problems: Array,
    search: String,
    filterOnly: Function
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
.problems {
  display: none;
}
</style>