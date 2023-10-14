
import Link from "next/link";
import dynamic from 'next/dynamic';
import HeaderMegaMenu from "./HeaderMegaMenu";


export default function LayOutWithSSR({ children }: { children: any }) {
    return (
        <>
            <HeaderMegaMenu />
            <main>{children}</main>
            {/* <footer>footer</footer> */}
        </>
    )
}