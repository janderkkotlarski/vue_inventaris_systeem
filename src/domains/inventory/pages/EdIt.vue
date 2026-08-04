<script setup lang="ts">
import ProductForm from '../components/ProductForm.vue';

import {router} from '../../../router/index.ts';
import {getProductById, updateProduct} from '../store.ts';
import {useRoute} from 'vue-router';

const submitText = 'Aanpassen';

const route = useRoute();

const ident = parseInt(route.params.id as string);

const product = getProductById(ident);

const editProduct = () => {
    updateProduct();
    router.push('/');
};
</script>

<template>
    Pas product {{ product.name }} aan:
    <br />
    {{ identityType }}
    <br />
    <ProductForm @submit="editProduct" :product="product" :submit-text="submitText" />
</template>
