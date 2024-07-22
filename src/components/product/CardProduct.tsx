import useCart from "@/hooks/useCart";
import CardProductProps from "@/interfaces/CardProduct.interface";
import Image from "next/image";

export default function CardProduct(props: CardProductProps) {
    const { increment, amountItems } = useCart()
    console.log(amountItems)
    const { name, description, image, price } = props.product
    return (
        <article className="flex flex-col w-72 bg-zinc-900 rounded-lg">
            <figure className="relative w-72 h-52 rounded-t-lg">
                <Image src={image} alt="name" fill className="object-cover rounded-t-lg" />
            </figure>
            <section className="flex-1 flex flex-col gap-4 p-5">
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="flex-1 text-sm text-zinc-400">{description} </p>
                <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold mt-2"> {price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} </span>
                    <button onClick={() => increment && increment(props.product)} className="border rounded-full px-5 py-1 text-sm">
                        Adicionar
                    </button>
                </div>
            </section>

        </article>
    )
}