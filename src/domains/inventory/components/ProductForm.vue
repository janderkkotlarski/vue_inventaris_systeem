<script setup lang="ts">
import {ref} from 'vue';

import type {Product} from '../../../components/constants';

const {product} = defineProps<{
    product: Product;
    submitText: string;
}>();

const productCopy = ref<Product>({...product});

const emit = defineEmits(['submit', 'annul']);

const submitProduct = () => {
    emit('submit', productCopy.value);
};

const annul = () => {
    emit('annul');
};
</script>

<template>
    <label for="name">Naam:</label>
    <input type="text" v-model="productCopy.name" maxlength="100" />
    <br />
    <label for="actualAmount">Aantal:</label>
    <input type="number" v-model.number="productCopy.actualAmount" min="0" max="10000" />
    <br />
    <label for="minimumAmount">Aantal:</label>
    <input type="number" v-model.number="productCopy.minimumAmount" min="0" max="10000" />
    <br />
    <button type="button" @click="submitProduct">{{ submitText }}</button>
    <br />
    <button type="button" @click="annul">Annuleren</button>
</template>
