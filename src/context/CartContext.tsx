'use client'
import { createContext, useState, ReactNode } from "react";
import ContextCartProps from "@/interfaces/ContextCart.interface";

const CartContext = createContext<ContextCartProps>({} as any);

export function CartProvider({ children }: { children: ReactNode }) {
    const [num, setNum] = useState(1);

    return (
        <CartContext.Provider
            value={{
                num,
                increment: () => setNum(num + 1),
                decrement: () => setNum(num - 1),
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;
