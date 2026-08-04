import {ref, computed} from 'vue';

import type {Ref} from 'vue';

import type {Product} from '../../components/constants';

//: Ref<Product>
const inventory: Ref<Product[]> = ref([
    {id: 1, name: 'Verscheurde kaart', actualAmount: 10, minimumAmount: 3},
    {id: 2, name: 'Hyperkubuide bol', actualAmount: 7, minimumAmount: 1},
    {id: 3, name: 'Verbeeldingsopslag van 120 Sligrobytes', actualAmount: 54, minimumAmount: 30},
    {id: 4, name: 'Jeuk', actualAmount: 3, minimumAmount: 500},
    {id: 5, name: 'Onzichtbare vriend', actualAmount: 0, minimumAmount: 9001},
    {id: 6, name: 'Omgekeerd vallend water', actualAmount: 37, minimumAmount: 5},
    {id: 7, name: 'Onverbeelding', actualAmount: 7, minimumAmount: 3},
]);

export const getAllInventory = computed(() => inventory.value);

export const getProductById = (id: number) => computed(() => inventory.value.find(product => product.id == id));

export const addProduct = (product: {id: number; name: string; actualAmount: number; minimumAmount: number}) =>
    inventory.value.push(product);

export const updateProduct = () => {};
