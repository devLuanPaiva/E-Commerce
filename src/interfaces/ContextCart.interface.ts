import CartItem from "./CartItem.interface";
import Product from "./Product.interface";

export default interface ContextCartProps {
    items: CartItem[]
    amountItems: number;
    increment?: (item: Product) => void 
    decrement?: (item: Product) => void
}