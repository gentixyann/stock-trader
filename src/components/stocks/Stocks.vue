<template>
 <v-container>
     <v-row>
         <v-col v-for="stock in stocks" :key="stock.id">
            <app-stock :stock="stock"></app-stock>
         </v-col>
     </v-row>
 </v-container>
</template>

<script>
import Stock from './Stock.vue';
export default {
    data() {
        return {
            stocks: [
                { id: 1, name: 'BMW', price: 110 },
                { id: 2, name: 'Google', price: 210 },
                { id: 3, name: 'Amazon', price: 250 },
                { id: 4, name: 'Sony', price: 260 },
            ]
        }
    },
    components: {
        appStock: Stock,
    }
}
</script>