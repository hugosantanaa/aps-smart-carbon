'use client'

import { MapContext } from "@/context/MapContext"
import { useContext } from "react"
import { X, List, House } from "@phosphor-icons/react"
import { useSelectedLayoutSegments } from "next/navigation"
import Link from "next/link"

export const Sidenav = () => {

    const segment = useSelectedLayoutSegments();
    const { hasOpen, setHasOpen } = useContext(MapContext)

    const routes = [
        { name: "Início", href: "/", current: `${segment}` == "" ? true : false },
        { name: "Pesquisa", href: "/pesquisa", current: `${segment[1]}` === "pesquisa" ? true : false },
        { name: "Sobre nós", href: "/equipe", current: `${segment[1]}` === "equipe" ? true : false },
    ]

    return (
        <nav className="small-notbook:hidden">
            <button onClick={() => setHasOpen(!hasOpen)} className="flex items-center justify-center">
                <List size={32} weight="bold" className="text-white" />
            </button>
            <aside className={`flex flex-col w-full max-w-[220px] sl:max-w-[280px] px-3 py-5 fixed h-screen top-0 right-0 transition-all ease-in duration-300 bg-black-custom ${hasOpen ? "right-0" : "right-[-100%]"}`}>
                <button onClick={() => setHasOpen(!hasOpen)} className="self-end text-white">
                    <X size={32} weight="bold" />
                </button>
                <ul className={`py-5 px-3 flex flex-col gap-2 text-lg font-semibold ${hasOpen ? "" : "hidden"} items-start`}>
                    {routes.map((route, index) => {
                        return (
                            <li key={index} className={`relative text-white ${route.current ? 'font-bold hover:after:opacity-100 hover:after:w-full after:bg-green-custom after:opacity-100 after:w-full' : ' '} after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300 after:opacity-0 after:w-0 after:h-[3px]`}>
                                <Link href={route.href}>
                                    {route.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </aside>
        </nav>
    )
}