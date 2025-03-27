type Props = {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return(
        <main className="min-h-screen flex justify-center mx-auto max-w-7xl">
            <section className="hidden lg:flex sticky">esquerda</section>
            <section className="flex-1 max-w-lg">
                {children}
            </section>
            <aside>direita</aside>
        </main>
  );
}