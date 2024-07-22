'use client'
import CartItemArea from "@/components/cart/CartItemArea";
import EmpityCart from "@/components/cart/EmpityCart";
import TotalCart from "@/components/cart/TotalCart";
import Page from "@/components/template/Page";
import useCart from "@/hooks/useCart";


export default function PageCart() {
    const { items, increment, decrement } = useCart()
    console.log(items)
    return (
        <Page className=" flex flex-col gap-10">
            {items?.length === 0 ? (
                <EmpityCart />
            ) : (
                <>
                    <section className="flex flex-col gap-5">
                        {items?.map((item) => (
                            <CartItemArea
                                key={item.product.id}
                                item={item}
                                incremente={(item) => increment && increment(item.product)}
                                decremente={(item) => decrement && decrement(item.product)}
                            />
                        ))}
                    </section>
                    <TotalCart items={items} />
                </>
            )}
        </Page>
    )
}