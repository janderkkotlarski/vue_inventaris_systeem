<script setup lang="ts">
import ProductForm from '../components/ProductForm.vue';

import {router} from '../../../router/index.ts';
import {getProductById, updateProduct} from '../store.ts';
import {useRoute} from 'vue-router';
import type {Product} from '../../../components/constants.ts';

const submitText = 'Aanpassen';

const route = useRoute();

const ident = parseInt(route.params.id as string);

const product = getProductById(ident);

const editProduct = (prod: Product) => {
    updateProduct(prod);
    router.push('/');
};

const annulment = () => {
    router.push('/');
};
</script>

<template>
    Pas product {{ product.name }} aan:
    <br />
    <ProductForm @submit="editProduct" @annul="annulment" :product="product" :submit-text="submitText" />
</template>
