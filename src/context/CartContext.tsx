'use client'
import { createContext, useState, useMemo, useCallback } from "react";
import ContextCartProps from "@/interfaces/ContextCart.interface";
import CartItem from "@/interfaces/CartItem.interface";
import Product from "@/interfaces/Product.interface";

const CartContext = createContext<ContextCartProps>({} as any);

export function CartProvider(props: any) {
    const [items, setItems] = useState<CartItem[]>([]);

    const increment = useCallback((product: Product) => {
        const index = items.findIndex((i) => i.product.id === product.id);
        if (index === -1) {
            setItems([...items, { product, amount: 1 }]);
        } else {
            const newItems = [...items];
            newItems[index].amount++;
            setItems(newItems);
        }
    }, [items, setItems]);

    const decrement = useCallback((product: Product) => {
        const newItems = items
            .map((i) => {
                if (i.product.id === product.id) {
                    i.amount--;
                }
                return i;
            })
            .filter((i) => i.amount > 0);
        setItems(newItems);
    }, [items, setItems]);

    const value = useMemo(() => ({
        items,
        increment,
        decrement,
        get amountItems() {
            return items.reduce((total, item) => total + item.amount, 0);
        }
    }), [items, increment, decrement]);

    return (
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContext;
