<script setup lang="ts">
import type {Product} from './constants';
const props = defineProps<{
    inventoryList: Product[];
}>();
</script>

<template>
    <table>
        <tr>
            <th>Naam</th>
            <th>Aanwezig</th>
            <th>Minimum</th>
        </tr>
        <tr v-for="product in props.inventoryList" :key="product.id">
            <td>{{ product.name }}</td>
            <td>
                <input v-model.number="product.actualAmount" type="number" min="0" />
            </td>
            <td>{{ product.minimumAmount }}</td>
        </tr>
    </table>
</template>
