<script setup lang="ts">
import type {Order} from '../../../components/library';

const props = defineProps<{
    orderList: Order[];
}>();

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
        <tr v-for="order in orderList" :key="order.id">
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
