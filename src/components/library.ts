/// For that neat invisible character that acts like a space but is even better
export const invisChar = '\u2000';

export type Product = {
    id: number;
    name: string;
    actualAmount: number;
    minimumAmount: number;
};

export type Order = {
    id: number;
    product: Product;
    amount: number;
};
