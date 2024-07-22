import TotalCartProps from "@/interfaces/TotalCart.interface";

export default function TotalCart(props: TotalCartProps) {
    const total = props.items?.reduce((acc, item) => acc + item.product.price * item.amount, 0)
    return (
        <article className="flex items-center justify-between bg-zinc-900 rounded-md p-7">
            <div className="flex flex-col justify-between">
                <p className="text-zinc-500">Total</p>
                <p className="text-3xl font-bold text-yellow-500">
                    {total?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                </p>
            </div>
            <button className="bg-green-600 px-4 py-2 rounded-md text-xl">Finalizar</button>
        </article>
    )
}