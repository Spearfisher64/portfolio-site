import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
    return (
        <section id="iletisim" className="px-6 py-24">
            <div className="mx-auto max-w-6xl rounded-3xl border bg-muted/30 p-8 md:p-10">
                <div className="grid gap-10 md:grid-cols-2">
                    <div>
                        <p className="mb-3 text-sm text-muted-foreground">İletişim</p>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Birlikte çalışalım
                        </h2>
                        <p className="mt-4 max-w-md text-muted-foreground">
                            Bir proje fikriniz varsa veya markanız için modern bir website
                            oluşturmak istiyorsanız benimle iletişime geçebilirsiniz.
                        </p>

                        <div className="mt-8 space-y-3 text-sm text-muted-foreground">
                            <p>
                                <span className="font-medium text-foreground">E-posta:</span>{" "}
                                egeolgun@example.com
                            </p>
                            <p>
                                <span className="font-medium text-foreground">WhatsApp:</span>{" "}
                                Yakında eklenecek
                            </p>
                        </div>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <Input placeholder="Ad Soyad" />
                        </div>

                        <div>
                            <Input type="email" placeholder="E-posta" />
                        </div>

                        <div>
                            <Input placeholder="Marka / İşletme Adı" />
                        </div>

                        <div>
                            <Textarea
                                placeholder="Projenizden kısaca bahsedin"
                                className="min-h-32"
                            />
                        </div>

                        <Button className="w-full">Mesaj Gönder</Button>
                    </form>
                </div>
            </div>
        </section>
    );
}