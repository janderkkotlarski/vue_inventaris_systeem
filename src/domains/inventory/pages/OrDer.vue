<script setup lang="ts">
import {computed} from 'vue';

import {getAllInventory} from '../store.js';

import {router} from '../../../router/index.ts';

import OrderTable from '../components/OrderTable.vue';

const products = getAllInventory;

const ordering = () => {
    router.push({name: 'inventory.overview'});
};
</script>

<template>
    Besteloverzicht
    <br />
    <br />

    <OrderTable @submit="ordering" :order-list="orderList" />
</template>
