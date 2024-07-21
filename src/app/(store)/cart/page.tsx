'use client'
import Page from "@/components/template/Page";
import CartContext from "@/context/CartContext";
import { useContext } from "react";


export default function PageCart(){
    const {num} = useContext(CartContext)
    return(
        <Page>
            <h1>Carrinho</h1>
            <p>Conteúdo do carrinho</p>
            <p>Quantidade de itens: {num}</p>
        </Page>
    )
}