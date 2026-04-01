import { ArrowUpRight, MonitorSmartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Projects() {
    const projects = [
        {
            title: "Diş Kliniği Web Sitesi",
            category: "Kurumsal Website",
            description:
                "Hizmet tanıtımı, doktor bilgileri ve iletişim alanlarını öne çıkaran modern ve güven veren kurumsal bir site konsepti.",
        },
        {
            title: "Kafe Tanıtım Sitesi",
            category: "Landing Page",
            description:
                "Menü, konum, görseller ve rezervasyon bilgilerini sade bir yapıyla sunan kullanıcı dostu bir website tasarımı.",
        },
        {
            title: "Emlak Danışmanı Portföyü",
            category: "Kişisel Marka",
            description:
                "Kişisel marka algısını güçlendiren, güven veren ve iletişimi ön plana çıkaran profesyonel bir portföy sitesi.",
        },
    ];

    return (
        <section id="projeler" className="px-6 py-24 md:py-28">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 max-w-2xl">
                    <p className="mb-3 text-sm font-medium text-muted-foreground">Projeler</p>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Örnek çalışmalar
                    </h2>
                    <p className="mt-4 text-base leading-7 text-muted-foreground">
                        Farklı ihtiyaçlara yönelik hazırladığım örnek proje konseptleri.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            className="group overflow-hidden rounded-3xl border bg-background shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden border-b bg-muted/40">
                                <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-muted" />

                                <div className="absolute left-4 top-4 flex gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
                                </div>

                                <div className="absolute inset-0 flex items-center justify-center p-6">
                                    <div className="w-full max-w-[220px] rounded-2xl border bg-background/90 p-4 shadow-md backdrop-blur">
                                        <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                                            <MonitorSmartphone className="h-4 w-4" />
                                            <span>Canlı Önizleme</span>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="h-3 w-3/4 rounded-full bg-muted" />
                                            <div className="h-3 w-full rounded-full bg-muted" />
                                            <div className="h-3 w-2/3 rounded-full bg-muted" />
                                        </div>

                                        <div className="mt-4 grid grid-cols-2 gap-2">
                                            <div className="h-16 rounded-xl bg-muted" />
                                            <div className="h-16 rounded-xl bg-muted" />
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute bottom-4 right-4 rounded-full border bg-background/80 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                                    0{index + 1}
                                </div>
                            </div>

                            <div className="p-6">
                                <p className="text-sm text-muted-foreground">{project.category}</p>
                                <h3 className="mt-2 text-xl font-semibold tracking-tight">
                                    {project.title}
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                    {project.description}
                                </p>

                                <div className="mt-6">
                                    <Button variant="outline" size="sm" className="group/btn">
                                        İncele
                                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
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