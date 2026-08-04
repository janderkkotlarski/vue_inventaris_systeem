import type {Product} from './constants';

/// Get an array entry of the key has a certain value
export const arrayEntry = (array: any, key: any, value: any) => {
    for (const entry of array) {
        if (entry[key] === value) {
            return entry;
        }
    }

    return null;
};

const voidProduct: Product = {id: -1, name: '', actualAmount: -1, minimumAmount: -1};

export const productEntry = (inventory: Product[], value: number): Product => {
    let product = arrayEntry(inventory, 'id', value);

    if (product === null) {
        product = voidProduct;
    }

    return product;
};
