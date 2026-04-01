export function About() {
    return (
        <section id="hakkimda" className="px-6 py-24 md:py-28">
            <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl border bg-muted/20 p-8 md:grid-cols-2 md:p-12">
                <div className="max-w-md">
                    <p className="mb-3 text-sm font-medium text-muted-foreground">Hakkımda</p>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Merhaba, ben Ege.
                    </h2>
                    <p className="mt-4 text-base leading-7 text-muted-foreground">
                        Yazılım mühendisi mezunuyum ve modern web teknolojileriyle sade,
                        hızlı ve kullanıcı dostu web siteleri geliştiriyorum.
                    </p>
                </div>

                <div className="space-y-4 text-base leading-7 text-muted-foreground">
                    <p>
                        Özellikle küçük işletmelerin ve kişisel markaların dijitalde daha
                        profesyonel görünmesini sağlayacak web deneyimleri oluşturmaya
                        odaklanıyorum.
                    </p>
                    <p>
                        Amacım sadece çalışan bir site geliştirmek değil, aynı zamanda
                        markanızı doğru yansıtan güçlü bir dijital vitrin hazırlamak.
                    </p>
                    <p>
                        Temiz tasarım, güçlü yapı ve kullanıcı deneyimi benim için her zaman
                        ön planda.
                    </p>
                </div>
            </div>
        </section>
    );
}