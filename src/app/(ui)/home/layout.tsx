import { Nav } from "@/app/components/nav/nav-item";
import { NavLogout } from "@/app/components/nav/nav-logout";
import { NavMyProfile } from "@/app/components/nav/nav-myprofile";
import { Logo } from "@/app/components/ui/logo";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHome, faPerson } from "@fortawesome/free-solid-svg-icons";

type Props = {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return(
        <main className="min-h-screen flex justify-center mx-auto max-w-7xl">
            <section className="flex lg:flex flex-col sticky top-0 h-screen w-72 px-3 border-r-2 border-gray-900">
                <div className="flex-1 mt-6">
                    <Logo size={24} />
                    <nav className="mt-11 flex flex-col gap-6">
                        <Nav
                            label="Home"
                            icon={faHome}
                            href="/home"
                            active={true}
                        />
                        <Nav
                            label="Perfil"
                            icon={faUser}
                            href="/profile"
                            active={true}
                        />
                    </nav>
                </div>
                <div className="mb-6 flex flex-col gap-4">
                    <NavLogout />
                    <NavMyProfile />
                </div>
            </section>
            <section className="flex-1 max-w-lg">
                {children}
            </section>
            <aside className="hidden lg:flex flex-col gap-6 sticky top-0 h-fit w-96 px-8 py-6 border-l-2 border-gray-900">direita</aside>
        </main>
  );
}