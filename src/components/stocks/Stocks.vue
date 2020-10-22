<template>
 <v-container>
     <v-row>
         <v-col v-for="stock in stocks" :key="stock.id">
            <app-stock :stock="stock"></app-stock>
         </v-col>
     </v-row>
     <v-row>
         ストックス
     </v-row>
 </v-container>
</template>

<script>
import Stock from './Stock.vue';
export default {
    components: {
        appStock: Stock,
    },
    computed: {
        stocks() {
            return this.$store.getters.stocks;
        }
    }
}
</script>