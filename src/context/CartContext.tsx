'use client'
import { createContext, useState, useMemo, useCallback, useEffect } from "react";
import ContextCartProps from "@/interfaces/ContextCart.interface";
import CartItem from "@/interfaces/CartItem.interface";
import Product from "@/interfaces/Product.interface";
import useSessionStorage from "@/hooks/useSessionStorage";

const CartContext = createContext<ContextCartProps>({} as any);

export function CartProvider(props: any) {
    const [items, setItems] = useState<CartItem[]>([]);
    const { set, get } = useSessionStorage()

    useEffect(() => {
        const cart = get('cart')
        if (cart) {
            setItems(cart)
        }
    }, [get])
    const toggleItems = useCallback((newItems: CartItem[]) => {
        setItems(newItems)
        set('cart', newItems)
    }, [setItems, set])
    const increment = useCallback((product: Product) => {
        const index = items.findIndex((i) => i.product.id === product.id);
        if (index === -1) {
            toggleItems([...items, { product, amount: 1 }]);
        } else {
            const newItems = [...items];
            newItems[index].amount++;
            toggleItems(newItems);
        }
    }, [items, toggleItems]);

    const decrement = useCallback((product: Product) => {
        const newItems = items
            .map((i) => {
                if (i.product.id === product.id) {
                    i.amount--;
                }
                return i;
            })
            .filter((i) => i.amount > 0);
        toggleItems(newItems);
    }, [items, toggleItems]);

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
