"use client"

import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/navigation"
export const NavLogout = () => {
    const router = useRouter()
    function handleClick() {
        router.replace('/signin')
    }

    return(
        <div onClick={handleClick} className={`flex items-center gap-6 px-3 opacity-50 hover:opacity-100`}>
            <FontAwesomeIcon
                 icon={faArrowRightFromBracket}
                 className={`size-6 text-white cursor-pointer`}
                 />
            <div className={`text-lg`}>Sair</div>
        </div>
    )
}