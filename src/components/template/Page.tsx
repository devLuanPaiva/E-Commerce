'use client'
import PropsPage from "@/interfaces/PropsPage.interface";
import Header from "./Header";

export default function Page(props: PropsPage) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className={`w-[80vw] mx-auto ${props.className ?? ''} py-10 flex-1`}>
                {props.children}
            </main>
        </div>
    )
}