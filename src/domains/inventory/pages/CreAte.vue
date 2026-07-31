<script setup lang="ts">
import {ref} from 'vue';
import ProductForm from '../components/ProductForm.vue';

import {router} from '../../../router';

import {getAllInventory, addProduct} from '../store';

const product;
</script>

<template>
    Voeg nieuw product {{ product.name }} toe:
    <br />
    <ProductForm />
</template>
