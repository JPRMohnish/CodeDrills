<template>
    <v-container fluid fill-width pa-2 class="ma-15 mr-15">
      <v-row pa-0>
        <v-col cols="12"
        >
          <v-card
            width="90vw"
          >
            <v-card-title class="text-h5">
              Submission: {{subDetails[0].id}}
            </v-card-title> 
            
        
             <v-data-table
            :headers="subHeaders"
            :items="subDetails"
            hide-default-footer
            class="elevation-1"
            ></v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'SubDetail',
    props: {
        subHeaders: Array,
        subDetails: Array
    }
};
</script>
