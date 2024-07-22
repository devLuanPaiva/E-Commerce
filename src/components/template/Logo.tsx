import Link from "next/link";
import {IconBrandAmazon} from "@tabler/icons-react"

export default function Logo(){
    return (
        <Link href='/'>
            <figure className="flex flex-col items-center mt-1">
                <p className="text-xl leading-4">A Z</p>
                <IconBrandAmazon size={40} stroke={1} className="-mt-2"/>
            </figure>
        </Link>
    )
}