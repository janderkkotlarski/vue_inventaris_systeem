<script setup lang="ts">
import {ref} from 'vue';

import type {Product, Order} from '../../../components/library';

const props = defineProps<{
    orderList: Product[];
}>();

const product2order = (prod: Product): Order => {
    return {id: prod.id, product: prod, amount: prod.minimumAmount - prod.actualAmount};
};

// TODO: het lijkt mij gemakkelijker een computed property van orders te maken, waarbij je een array.map functie gebruikt voor de conversie
// van products naar orders
const minimumOrdering = () => {
    let orders: Order[] = [];

    for (const prod of props.orderList) {
        // const order: Order = {id: prod.id, product: prod, amount: prod.minimumAmount - prod.actualAmount};

        orders.push(product2order(prod));
    }

    return orders;
};

const orderMin = () => {
    true;
};

const orders = ref<Order[]>(minimumOrdering());

const emit = defineEmits(['submit']);

const submitOrders = () => {
    emit('submit', '');
};
</script>

<template>
    <table>
        <tr>
            <th>Naam</th>
            <th>Aanwezig</th>
            <th>Minimum</th>
            <th>Bestellen</th>
        </tr>
        <tr v-for="order in orders" :key="order.id">
            <td>{{ order.product.name }}</td>
            <td>{{ order.product.actualAmount }}</td>
            <td>{{ order.product.minimumAmount }}</td>
            <td>
                <input v-model="order.amount" type="number" min="0" />
            </td>
        </tr>
    </table>

    <button type="button" @click="submitOrders">Bestel</button>
</template>
