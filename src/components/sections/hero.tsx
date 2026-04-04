"use client";

import { Monitor, Rocket, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export function Hero() {
    const highlights = [
        {
            title: "Modern",
            description: "Temiz, sade ve profesyonel arayüz tasarımı",
            icon: Monitor,
        },
        {
            title: "Hızlı",
            description: "Performans odaklı ve akıcı kullanıcı deneyimi",
            icon: Rocket,
        },
        {
            title: "Mobil Uyumlu",
            description: "Tüm cihazlarda sorunsuz çalışan responsive yapı",
            icon: Smartphone,
        },
    ];

    return (
        <section className="relative overflow-hidden px-6 py-28 md:py-36">
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-muted opacity-60 blur-3xl dark:opacity-30" />
                <div className="absolute bottom-10 left-10 h-40 w-40 rounded-full bg-muted/80 blur-3xl dark:bg-muted/40" />
                <div className="absolute right-10 top-24 h-52 w-52 rounded-full bg-muted/60 blur-3xl dark:bg-muted/30" />
            </div>

            <motion.div className="mx-auto max-w-4xl text-center"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}>
                <div className="mb-6 inline-flex items-center rounded-full border bg-background/80 px-4 py-1.5 text-sm text-muted-foreground shadow-sm backdrop-blur">
                    Ege Olgun · Web Designer & Developer
                </div>

                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    İşletmeniz için sade, modern ve güven veren web siteleri geliştiriyorum.
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg md:text-xl">
                    Küçük işletmeler, kişisel markalar ve profesyoneller için hızlı,
                    mobil uyumlu ve kullanıcı dostu web siteleri tasarlıyor ve geliştiriyorum.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button size="lg" asChild>
                        <a href="#projeler">Projelerimi İncele</a>
                    </Button>

                    <Button size="lg" variant="outline" asChild>
                        <a href="#iletisim">İletişime Geç</a>
                    </Button>
                </div>

                <div className="mt-14 grid gap-4 rounded-3xl border bg-background/70 p-4 shadow-sm backdrop-blur md:grid-cols-3 md:p-6">
                    {highlights.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="rounded-2xl border bg-background/80 p-5 text-left"
                            >
                                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-muted">
                                    <Icon className="h-5 w-5" />
                                </div>

                                <p className="text-lg font-semibold">{item.title}</p>
                                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}