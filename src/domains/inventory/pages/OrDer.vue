<script setup lang="ts">
import {getLowInventory} from '../store.js';

import {router} from '../../../router/index.ts';

import OrderTable from '../components/OrderTable.vue';

const orderList = getLowInventory;

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
