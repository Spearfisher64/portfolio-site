"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../mode-toggle";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
    { label: "Hizmetler", href: "#hizmetler" },
    { label: "Projeler", href: "#projeler" },
    { label: "Hakkımda", href: "#hakkimda" },
    { label: "İletişim", href: "#iletisim" },
];

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
                <a href="#" className="text-lg font-semibold tracking-tight">
                    Ege Olgun
                </a>

                <nav className="hidden items-center gap-6 text-sm md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="transition hover:opacity-70"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
                <ModeToggle />
            </div>

            <div className="flex items-center gap-2 md:hidden">
                <ModeToggle />

                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" aria-label="Menüyü aç">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="w-[280px] px-6">
                            <div className="mt-10 flex flex-col gap-6">
                                <div>
                                    <p className="text-lg font-semibold tracking-tight">
                                        Ege Olgun
                                    </p>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Web Designer & Developer
                                    </p>
                                </div>

                                <nav className="flex flex-col gap-3">
                                    {navItems.map((item) => (
                                        <SheetClose asChild key={item.href}>
                                            <a
                                                href={item.href}
                                                className="rounded-xl px-3 py-2 text-sm transition hover:bg-muted"
                                            >
                                                {item.label}
                                            </a>
                                        </SheetClose>
                                    ))}
                                </nav>

                                <div className="pt-4">
                                    <SheetClose asChild>
                                        <Button asChild className="w-full">
                                            <a href="#iletisim">İletişime Geç</a>
                                        </Button>
                                    </SheetClose>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}