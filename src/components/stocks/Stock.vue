<template>
    <v-card outlined shaped >
        <v-card-title>
            {{ stock.name }} (Price {{ stock.price }})
        </v-card-title>
        <v-row>
            <v-col>
                <input type="number" placeholder="Quantity" v-model="quantity">
            </v-col>
            <v-col>
                <v-btn>Buy</v-btn>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0,
        }
    }
}
</script>