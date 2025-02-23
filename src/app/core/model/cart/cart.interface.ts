import { CartProduct } from "./cart-product.interface";
import { User } from "./user.interface";

export interface Cart {
    id: number;
    user: User;
    cartProducts: CartProduct[];
}