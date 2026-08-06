<script setup lang="ts">
import type {Product} from './constants';
import {invisChar} from './constants';

import {router} from '../router';

const props = defineProps<{
    inventoryList: Product[];
}>();

const editing = (ident: number) => {
    router.push({name: 'inventory.edit', params: {id: ident}});
};
</script>

<template>
    <table>
        <tr>
            <th>ID</th>
            <th>Naam</th>
            <th>Aanwezig</th>
            <th>Minimum</th>
            <th>{{ invisChar }}</th>
        </tr>
        <tr v-for="product in props.inventoryList" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>
                <input v-model.number="product.actualAmount" type="number" min="0" />
            </td>
            <td>{{ product.minimumAmount }}</td>
            <td><button @click="editing(product.id)">Bewerken</button></td>
        </tr>
    </table>
</template>
