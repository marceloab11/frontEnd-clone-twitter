"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const SingninForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogar(){
        router.replace("/home");
    }
    return(
        <>
            <Input 
                placeholder="Digite seu e-mail"
                onChange={t => setEmail(t)}
                value={email}
                />

                <Input 
                password={true}
                placeholder="Digite sua senha"
                value={password}
                onChange={t => setPassword(t)}
                />
                <Button
                 text="Entrar"
                  onClick={handleLogar}
                    size={1}
                  />
        </>
    )
}