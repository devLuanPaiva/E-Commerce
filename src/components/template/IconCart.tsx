import useCart from "@/hooks/useCart";
import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

export default function IconCart(){
    const {amountItems} = useCart()
    return (
        <Link href='/cart'>
            <figure className="flex relative">
                <IconShoppingCart size={32} stroke={1}/>
                <p className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-red-600 rounded-full text-xs flex justify-center items-center">
                    {amountItems}
                </p>
            </figure>
        </Link>
    )
}