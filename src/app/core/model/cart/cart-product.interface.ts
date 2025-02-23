import { Product } from "./product.interface";

export interface CartProduct{
    id: number;
    product: Product,
    quantity: number,
}