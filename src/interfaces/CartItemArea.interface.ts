import CartItem from "./CartItem.interface";

export default interface CartItemAreaProps {
    item: CartItem,
    incremente?: (item: CartItem) => void,
    decremente?: (item: CartItem) => void
}