import {ref, computed} from 'vue';

const inventory = ref([
    {id: 1, name: 'Verscheurde kaart', amount: 10, min: 3},
    {id: 2, name: 'Hyperkubuide bol', amount: 7, min: 1},
    {id: 3, name: 'Verbeeldingsopslag van 120 Sligrobytes', amount: 54, min: 30},
    {id: 4, name: 'Jeuk', amount: 2, min: 500},
    {id: 5, name: 'Onzichtbare vriend', amount: 0, min: 9001},
    {id: 6, name: 'Omgekeerd vallend water', amount: 37, min: 5},
    {id: 7, name: 'Onverbeelding', amount: 7, min: 3},
]);

export const getAllInventory = computed(() => inventory.value);
