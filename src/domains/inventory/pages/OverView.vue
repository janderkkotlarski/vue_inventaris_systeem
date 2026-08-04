<script setup lang="ts">
import {getAllInventory} from '../store.js';

import Inventory from '../../../components/InventoryTable.vue';

const inventoryList = getAllInventory;
</script>

<template>
    Overzicht
    <br />
    <br />

    <Inventory :inventory-list="inventoryList" />
</template>
