import {ref, computed} from 'vue';

import type {Product} from '../../components/constants';

//: Ref<Product>
const inventory = ref<Product[]>([
    {id: 1, name: 'Verscheurde kaart', actualAmount: 10, minimumAmount: 3},
    {id: 2, name: 'Hyperkubuide bol', actualAmount: 7, minimumAmount: 1},
    {id: 3, name: 'Verbeeldingsopslag van 120 Sligrobytes', actualAmount: 54, minimumAmount: 30},
    {id: 4, name: 'Jeuk', actualAmount: 3, minimumAmount: 500},
    {id: 5, name: 'Onzichtbare vriend', actualAmount: 0, minimumAmount: 9001},
    {id: 6, name: 'Omgekeerd vallend water', actualAmount: 37, minimumAmount: 5},
    {id: 7, name: 'Onverbeelding', actualAmount: 7, minimumAmount: 3},
]);

export const getAllInventory = computed<Product[]>(() => inventory.value);

export const getProductById = (ident: number) =>
    computed<Product>(() => inventory.value.find(item => item.id === ident) as Product);

export const addProduct = (product: Product) => inventory.value.push(product);

export const updateProduct = (product: Product) => {
    const oldProduct = inventory.value.find(item => item.id === product.id)!;

    oldProduct.name = product.name;
    oldProduct.actualAmount = product.actualAmount;
    oldProduct.minimumAmount = product.minimumAmount;
};
