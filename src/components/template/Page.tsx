import PropsPage from "@/interfaces/PropsPage.interface";
import Header from "./Header";

export default function Page(props: PropsPage) {
    return (
        <div className="flex flex-col">
            <Header />
            <main>{props.children}</main>
        </div>
    )
}