import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="flex min-h-[85vh] items-center justify-center px-6">
            <div className="mx-auto max-w-3xl text-center">
                <p className="mb-4 text-sm text-muted-foreground">
                    Web Designer & Developer
                </p>

                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                    İşletmeler için modern, hızlı ve mobil uyumlu web siteleri geliştiriyorum.
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                    Küçük işletmeler, kişisel markalar ve profesyoneller için sade, güven veren
                    ve kullanıcı dostu web siteleri tasarlıyor ve geliştiriyorum.
                </p>

                <div className="mt-8 flex items-center justify-center gap-4">
                    <Button asChild>
                        <a href="#projeler">Projelerimi İncele</a>
                    </Button>

                    <Button variant="outline" asChild>
                        <a href="#iletisim">İletişime Geç</a>
                    </Button>
                </div>
            </div>
        </section>
    );
}