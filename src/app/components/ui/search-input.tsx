"use client"

import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { Input } from "./input"
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
    defaultValue?: string;
    hidenOnSearch?: boolean;
}

export const SearchInput = ({defaultValue, hidenOnSearch}:Props) => {
    const pathname = usePathname();
    const [searchValue, setSearchValue] = useState<string>("");
    const Router = useRouter();

   function handleSearchEnter() {
        if (searchValue !==''){
            Router.push(`/search?q=` + encodeURIComponent(searchValue));
        }
    }

    if(hidenOnSearch && pathname === "/search") return null;

    return (
            <Input
                placeholder="Buscar..."
                icon={faSearch}
                password={false}
                filled={true}
                value={searchValue}
                onChange={t => setSearchValue(t)}
                onEnter={handleSearchEnter}
            />
    )
}