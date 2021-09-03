<template>
    <v-container fluid fill-width pa-2 class="ma-15 mr-15">
      <v-row pa-0>
        <v-col cols="12"
        >
          <v-card
            width="90vw"
          >
            <v-card-title class="text-h5">
              Test Cases
            </v-card-title> 
             <v-data-table
            :headers="testHeaders"
            :items="testDetails"
            hide-default-footer
            class="elevation-1"
            >
            <template v-slot:item.status="{ item }" >
            <label :class="[item.status === 'Correct Answer'?'succ': 'dang']"> {{item.status}} </label>
            </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'TestCases    ',
    props: {
        testHeaders: Array,
        testDetails: Array
    }
};
</script>
