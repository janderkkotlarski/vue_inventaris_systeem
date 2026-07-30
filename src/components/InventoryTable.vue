<script setup>
import {router} from '../router';

const props = defineProps({
    inventoryList: {type: Object, default: null},
});
</script>

<template>
    <table>
        <tr>
            <th>Naam</th>
            <th>Aanwezig</th>
            <th>Minimum</th>
        </tr>
        <tr v-for="entry in props.inventoryList" :key="entry.id">
            <td>{{ entry.name }}</td>
            <td>{{ entry.actualAmount }}</td>
            <td>{{ entry.minimumAmount }}</td>
        </tr>
    </table>
</template>
