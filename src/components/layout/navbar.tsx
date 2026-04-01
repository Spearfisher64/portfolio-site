export function Navbar() {
    return (
        <header className="w-full border-b bg-background/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <div className="text-lg font-semibold">Ege Olgun</div>

                <nav className="hidden gap-6 text-sm md:flex">
                    <a href="#hizmetler" className="transition hover:opacity-70">
                        Hizmetler
                    </a>
                    <a href="#projeler" className="transition hover:opacity-70">
                        Projeler
                    </a>
                    <a href="#hakkimda" className="transition hover:opacity-70">
                        Hakkımda
                    </a>
                    <a href="#iletisim" className="transition hover:opacity-70">
                        İletişim
                    </a>
                </nav>
            </div>
        </header>
    );
}