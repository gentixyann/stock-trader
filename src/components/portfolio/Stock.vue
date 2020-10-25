<template>
    <v-card outlined shaped class="pa-4">
        <v-card-title>
            {{ stock.name }} (Price {{ stock.price }}) | Quantity: {{ stock.quantity }}
        </v-card-title>
        <v-row>
            <v-col>
                <input 
                type="number" 
                placeholder="Quantity" 
                v-model="quantity" 
                >
            </v-col>
            <v-col>
                <v-btn @click="sellStock">
                    Sell
                </v-btn>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0,
            overNumber: true,
        }
    },
    methods: {
        ...mapActions([
            'sellStock'
        ]),
       sellStock() {
           const order = {
               stockId: this.stock.id,
               stockPrice: this.stock.price,
               quantity: this.quantity,
           };
           console.log(order);
           this.sellStock();
       }
    },
}
</script>