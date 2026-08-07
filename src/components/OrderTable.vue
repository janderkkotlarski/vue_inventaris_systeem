<script setup lang="ts">
import {ref} from 'vue';

import type {Product, Order} from './constants';
import {invisChar} from './constants';

// import {router} from '../router';

const props = defineProps<{
    orderList: Product[];
}>();

// const orders = ref<Order[]>([]);

const minimumOrdering = () => {
    let orders: Order[] = [];

    for (const prod of props.orderList) {
        const order: Order = {id: prod.id, product: prod, amount: prod.minimumAmount - prod.actualAmount};

        orders.push(order);
    }

    return orders;
};

const orders = ref<Order[]>(minimumOrdering());
</script>

<template>
    <table>
        <tr>
            <th>Naam</th>
            <th>Aanwezig</th>
            <th>Minimum</th>
            <th>{{ invisChar }}</th>
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
</template>
