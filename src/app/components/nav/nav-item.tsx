"use client"

import { faHome, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { usePathname } from "next/navigation";

type Props = {
    label:string;
    icon:IconDefinition;
    href:string;
    active?:boolean
}

export const Nav = ({label, icon, href, active}:Props) => {
const pathName = usePathname();
const isMe = pathName === href;

    return(
        <Link href={href} className={`flex items-center gap-6 px-3 ${isMe ? 'opacity-100' : 'opacity-40'} hover:opacity-100`}>
            <FontAwesomeIcon
                 icon={icon}
                 className={`size-6 text-white cursor-pointer`}
                 />
            <div className={`text-lg`}>{label}</div>
        </Link>
    )
}