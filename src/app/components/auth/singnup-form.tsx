"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const SingnupForm = () => {
    const router = useRouter();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogar(){
        router.replace("/signin");
    }
    return(
        <>
            <Input 
                placeholder="Digite seu nome"
                onChange={t => setNome(t)}
                value={nome}
                />

                <Input 
                placeholder="Digite seu e-mail"
                value={email}
                onChange={t => setEmail(t)}
                />
                <Input 
                password={true}
                placeholder="Digite sua senha"
                value={password}
                onChange={t => setPassword(t)}
                />
                <Button
                 text="Criar conta"
                  onClick={handleLogar}
                    size={1}
                  />
        </>
    )
}