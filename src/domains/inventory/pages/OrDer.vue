<script setup lang="ts">
import {getLowInventory} from '../store.js';

import {router} from '../../../router/index.ts';

import Order from '../components/OrderTable.vue';

const orderList = getLowInventory;

const ordering = () => {
    router.push({name: 'inventory.overview'});
};
</script>

<template>
    Besteloverzicht
    <br />
    <br />

    <Order @submit="ordering" :order-list="orderList" />
</template>
