'use client'
import CardProduct from "@/components/product/CardProduct";
import Page from "@/components/template/Page";
import product from "@/data/constants/Products.contants";

export default function Home() {

  return (
    <Page>
      <section className="flex gap-5 justify-around flex-wrap">
        {product.map((product) =>(
          <CardProduct key={product.id} product={product}/>
        ))}
      </section>
    </Page>
  );
}
