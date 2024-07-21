'use client'
import Page from "@/components/template/Page";
import CartContext from "@/context/CartContext";
import { useContext } from "react";

export default function Home() {
  const { num } = useContext(CartContext);

  return (
    <Page>
      <p>Início {num}</p>
    </Page>
  );
}
