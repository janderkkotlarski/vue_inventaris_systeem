<script setup lang="ts">
import {ref} from 'vue';

import type {Product} from './constants';
import {invisChar} from './constants';

// import {router} from '../router';

const props = defineProps<{
    orderList: Product[];
}>();

type Order = {
    id: number;
    amount: number;
};

const orders = ref<Order[]>([]);

const minimumOrdering = () => {
    const minOrders: Order[] = [];

    for (const prod of props.orderList) {
        const order: Order = {id: prod.id, amount: prod.minimumAmount - prod.actualAmount};

        minOrders.push(order);
    }

    orders.value = minOrders;
};

minimumOrdering();
</script>

<template>
    <table>
        <tr>
            <th>Naam</th>
            <th>Aanwezig</th>
            <th>Minimum</th>
            <th>{{ invisChar }}</th>
        </tr>
        <tr v-for="product in props.orderList" :key="product.id">
            <td>{{ product.name }}</td>
            <td>{{ product.actualAmount }}</td>
            <td>{{ product.minimumAmount }}</td>
            <td>
                <input v-model="orders[product.id - 1].amount" type="number" min="0" />
            </td>
        </tr>
    </table>
</template>
