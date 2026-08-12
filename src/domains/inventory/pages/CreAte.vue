<script setup lang="ts">
import {ref} from 'vue';
import ProductForm from '../components/ProductForm.vue';

import type {Product} from '../../../components/constants.ts';

import {router} from '../../../router';

import {getAllInventory, addProduct} from '../store';

const endID = getAllInventory.value[getAllInventory.value.length - 1].id;

const submitText = 'Toevoegen';

// TODO: ik zou er voor kiezen de logica van de id aan de store over te laten, dus onderstaand product zonder id
// te maken. In de definitie van Product zou ik id optioneel maken.
const product = ref<Product>({
    id: endID + 1,
    name: '',
    actualAmount: 0,
    minimumAmount: 0,
});

const pushProduct = (prod: Product) => {
    addProduct(prod);
    router.push({name: 'inventory.overview'});
};

const annulment = () => {
    router.push({name: 'inventory.overview'});
};
</script>

<template>
    Voeg nieuw product {{ product.name }} toe:
    <br />
    <ProductForm @submit="pushProduct" @annul="annulment" :product="product" :submit-text="submitText" />
</template>
