import { BriefcaseBusiness, LayoutTemplate, UserSquare2 } from "lucide-react";

export function Services() {
    const services = [
        {
            title: "Kurumsal Web Sitesi",
            description:
                "Markanızı ve hizmetlerinizi profesyonel şekilde sunan modern web siteleri geliştiriyorum.",
            icon: BriefcaseBusiness,
        },
        {
            title: "Landing Page",
            description:
                "Tek bir hizmeti veya kampanyayı öne çıkaran dönüşüm odaklı tek sayfa çözümler hazırlıyorum.",
            icon: LayoutTemplate,
        },
        {
            title: "Portföy / Kişisel Website",
            description:
                "Kişisel markanızı ve çalışmalarınızı güçlü şekilde yansıtan sade ve etkili web siteleri tasarlıyorum.",
            icon: UserSquare2,
        },
    ];

    return (
        <section id="hizmetler" className="px-6 py-24 md:py-28">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 max-w-2xl">
                    <p className="mb-3 text-sm font-medium text-muted-foreground">Hizmetler</p>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Neler sunuyorum?
                    </h2>
                    <p className="mt-4 text-base leading-7 text-muted-foreground">
                        İhtiyacınıza uygun, sade ve etkili web çözümleri sunuyorum.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.title}
                                className="rounded-3xl border bg-background p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
                                    <Icon className="h-5 w-5" />
                                </div>

                                <h3 className="text-xl font-semibold tracking-tight">
                                    {service.title}
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}