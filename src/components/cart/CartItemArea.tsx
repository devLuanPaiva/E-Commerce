import CartItemAreaProps from "@/interfaces/CartItemArea.interface";
import { IconMinus, IconPlus, IconX } from "@tabler/icons-react";
import Image from "next/image";

export default function CartItemArea(props: CartItemAreaProps) {
    return (
        <article className="flex items-center gap-5 bg-zinc-900 rounded-md overflow-hidden">
            <figure className="relative w-28 h-28">
                <Image
                    src={props.item.product.image}
                    alt={props.item.product.name}
                    fill
                    className="object-cover"
                />
            </figure>
            <section className="flex flex-col justify-center flex-1">
                <h3 className="text-xl font-bold">{props.item.product.name}</h3>
                <p className="text-sm text-zinc-400">{props.item.product.description}</p>
                <div className="flex items-center gap-2 text-zinc-400 text-lg font-bold">
                    <p>
                        {props.item.product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                    </p>
                    <IconX size={20} />
                    <p>
                        {props.item.amount}
                    </p>
                    <p>=</p>
                    <p className="text-yellow-500">
                        {(props.item.product.price * props.item.amount).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                    </p>
                </div>
            </section>
            <section className="flex gap-2 items-center px-5">
                <button onClick={() => props.decremente?.(props.item)}>
                    <IconMinus />
                </button>
                <p className="flex px-4 py-2 rounded-md bg-black">
                    {props.item.amount}
                </p>
                <button onClick={() => props.incremente?.(props.item)}>
                    <IconPlus />
                </button>
            </section>
        </article>
    )
}