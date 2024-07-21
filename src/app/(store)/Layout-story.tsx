'use client'
import { CartProvider } from "@/context/CartContext";

export default function LayoutStore(props: any) {
    return <CartProvider> {props.children} </CartProvider>
}