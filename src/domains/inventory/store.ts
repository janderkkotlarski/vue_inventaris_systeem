import {ref, computed} from 'vue';

const inventory = ref([
    {id: 1, name: 'Verscheurde kaart', actualAmount: 10, minimumAmount: 3},
    {id: 2, name: 'Hyperkubuide bol', actualAmount: 7, minimumAmount: 1},
    {id: 3, name: 'Verbeeldingsopslag van 120 Sligrobytes', actualAmount: 54, minimumAmount: 30},
    {id: 4, name: 'Jeuk', actualAmount: 2, minimumAmount: 500},
    {id: 5, name: 'Onzichtbare vriend', actualAmount: 0, minimumAmount: 9001},
    {id: 6, name: 'Omgekeerd vallend water', actualAmount: 37, minimumAmount: 5},
    {id: 7, name: 'Onverbeelding', actualAmount: 7, minimumAmount: 3},
]);

export const getAllInventory = computed(() => inventory.value);
