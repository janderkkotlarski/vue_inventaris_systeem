<script setup lang="ts">
import ProductForm from '../components/ProductForm.vue';

import {router} from '../../../router/index.ts';
import {getProductById, updateProduct} from '../store.ts';
import {useRoute} from 'vue-router';

const route = useRoute();

const ident = parseInt(route.params.id.replace(':', ''));

const product = getProductById(ident);

const editProduct = prod => {
    updateProduct();
    router.push('/');
};
</script>

<template>
    Pas product {{ product.name }} aan:
    <br />
    <ProductForm @submit="editProduct" :product="product" :submit-text="submitText" />
</template>
