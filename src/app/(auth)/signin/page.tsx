import { SingninForm } from "@/app/components/auth/singnin-form";
import { Logo } from "@/app/components/ui/logo";
import Link from "next/link";

export default function Page(){
    return(
        <div className="max-w-lg mx-auto mt-12 px-6"> 
            <Logo size={56} />
            <h1 className="text-2xl mt-10">Entre na sua conta</h1>
            <div className="mt-10 flex flex-col gap-6">
                <SingninForm />
            </div>
            <div className="mt-10 flex flex-col justify-center items-center gap-1">
                <p className="text-gray-500">Ainda não tem uma conta?</p>
                <Link href="/signup">
                    <p>Cadastre-se</p>
                </Link>
                    
            </div>
        </div>
    )
}