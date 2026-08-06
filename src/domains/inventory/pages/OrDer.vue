<script setup lang="ts">
import {getLowInventory} from '../store.js';

import Order from '../../../components/OrderTable.vue';

const orderList = getLowInventory;
</script>

<template>
    Besteloverzicht
    <br />
    <br />

    <Order :order-list="orderList" />
</template>
