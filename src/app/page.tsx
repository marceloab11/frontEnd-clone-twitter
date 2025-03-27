import { redirect } from "next/navigation";
import { Logo } from "./components/ui/logo";

export default function Page(){
  redirect("/home");

  return(
      <div className="flex justify-center items-center min-h-screen">
          <Logo size={80} />
      </div>
  ) 
};