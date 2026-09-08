<script setup lang="ts">
import type {Product, Order} from '../../../components/library';

import {getAllInventory} from '../store.js';

import {router} from '../../../router/index.ts';

import OrderTable from '../components/OrderTable.vue';

const product2order = (prod: Product): Order => {
    return {id: prod.id, product: prod, amount: prod.minimumAmount - prod.actualAmount};
};

const lowInvProducts = getAllInventory.filter(prod => prod.actualAmount < prod.minimumAmount);

// const orderList = lowInvProducts.map(product2order);

const orderList = getAllInventory.filter(prod => prod.actualAmount < prod.minimumAmount).map(product2order);

// const orderList = getAllInventory.filter(prod => prod.actualAmount < prod.minimumAmount);

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
