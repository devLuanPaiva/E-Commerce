'use client'
import { createContext, useState } from "react";
import ContextCartProps from "@/interfaces/ContextCart.interface";
import CartItem from "@/interfaces/CartItem.interface";
import Product from "@/interfaces/Product.interface";

const CartContext = createContext<ContextCartProps>({} as any);

export function CartProvider(props: any) {
    const [items, setItems] = useState<CartItem[]>([]);

    function increment(product: Product) {
        const index = items.findIndex((i) => i.product.id === product.id);
        if (index === -1) {
            toggledItems([...items, { product, amount: 1 }]);
        } else {
            const newItems = [...items];
            newItems[index].amount++;
            toggledItems(newItems);
        }
    }

    function decrement(product: Product) {
        const newItems = items
            .map((i) => {
                if (i.product.id === product.id) {
                    i.amount--;
                }
                return i
            })
            .filter((i) => i.amount > 0)
        toggledItems(newItems);
    }

    function toggledItems(newItems: CartItem[]) {
        setItems(newItems);
    }
    return (
        <CartContext.Provider
            value={{
                items,
                increment,
                decrement,
                get amountItems() {
                    return items.reduce((total, item) => total + item.amount, 0);
                }
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContext;
