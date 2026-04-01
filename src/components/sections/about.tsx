export function About() {
    return (
        <section id="hakkimda" className="px-6 py-24">
            <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
                <div>
                    <p className="mb-3 text-sm text-muted-foreground">Hakkımda</p>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Merhaba, ben Ege.
                    </h2>
                </div>

                <div className="space-y-4 text-muted-foreground">
                    <p>
                        Yazılım mühendisi mezunuyum ve modern web teknolojileriyle sade,
                        hızlı ve kullanıcı dostu web siteleri geliştiriyorum.
                    </p>
                    <p>
                        Özellikle küçük işletmelerin ve kişisel markaların dijitalde daha
                        profesyonel görünmesini sağlayacak web deneyimleri oluşturmaya
                        odaklanıyorum.
                    </p>
                    <p>
                        Amacım sadece çalışan bir site geliştirmek değil, aynı zamanda
                        markanızı doğru yansıtan güçlü bir dijital vitrin hazırlamak.
                    </p>
                </div>
            </div>
        </section>
    );
}