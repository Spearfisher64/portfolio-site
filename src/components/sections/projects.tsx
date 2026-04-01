import { Button } from "@/components/ui/button";

export function Projects() {
    const projects = [
        {
            title: "Diş Kliniği Web Sitesi",
            category: "Kurumsal Website",
            description:
                "Hizmet tanıtımı, doktor bilgileri ve iletişim alanlarını öne çıkaran modern bir kurumsal site tasarımı.",
        },
        {
            title: "Kafe Tanıtım Sitesi",
            category: "Landing Page",
            description:
                "Menü, konum, görseller ve rezervasyon bilgilerini sade bir yapıyla sunan kullanıcı dostu bir website.",
        },
        {
            title: "Emlak Danışmanı Portföyü",
            category: "Kişisel Marka",
            description:
                "Kişisel marka algısını güçlendiren, güven veren ve iletişimi ön plana çıkaran profesyonel bir portföy sitesi.",
        },
    ];

    return (
        <section id="projeler" className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 max-w-2xl">
                    <p className="mb-3 text-sm text-muted-foreground">Projeler</p>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Örnek çalışmalar
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Farklı ihtiyaçlara yönelik hazırladığım örnek proje konseptleri.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="group overflow-hidden rounded-2xl border bg-background shadow-sm transition hover:-translate-y-1"
                        >
                            <div className="aspect-[16/10] bg-muted" />

                            <div className="p-6">
                                <p className="text-sm text-muted-foreground">{project.category}</p>
                                <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
                                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                    {project.description}
                                </p>

                                <div className="mt-5">
                                    <Button variant="outline" size="sm">
                                        İncele
                                    </Button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}