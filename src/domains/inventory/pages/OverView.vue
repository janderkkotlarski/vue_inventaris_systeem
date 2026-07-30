<script setup lang="ts">
import {ref} from 'vue';

import {getAllInventory} from '../store.js';

import Inventory from '../../../components/InventoryTable.vue';

const inventoryList = ref(getAllInventory);
</script>

<template>
    Overzicht
    <br />
    <br />

    <Inventory :inventory-list="inventoryList" />
</template>
