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
import {mapGetters} from 'vuex';
import Stock from './Stock.vue';

export default {
    computed: {
        ...mapGetters({
            stocks: 'stockPortfolio',
        })
    },
    components: {
        appStock: Stock,
    }
}
</script>