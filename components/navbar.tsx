"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
    Moon,
    Sun,
    Menu,
    X,
    Phone,
    Mail,
    GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/facilities", label: "Facilities" },
    { href: "/mpd", label: "MPD" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Top contact bar */}
            <div className="bg-school-purple text-white text-sm py-2 hidden md:block">
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <a
                            href="tel:+919850066667"
                            className="flex items-center gap-2 hover:text-school-gold transition-colors"
                        >
                            <Phone className="w-3.5 h-3.5" />
                            +91 9850066667
                        </a>
                        <a
                            href="mailto:vidyaviharchanda@gmail.com"
                            className="flex items-center gap-2 hover:text-school-gold transition-colors"
                        >
                            <Mail className="w-3.5 h-3.5" />
                            vidyaviharchanda@gmail.com
                        </a>
                    </div>
                    <span className="flex items-center gap-2 text-school-gold font-medium">
                        <GraduationCap className="w-4 h-4" />
                        Love • Joy • Service
                    </span>
                </div>
            </div>

            {/* Main navbar */}
            <motion.nav
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-background/80 backdrop-blur-xl shadow-lg shadow-school-purple/5 border-b border-border"
                    : "bg-background/60 backdrop-blur-md"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <Image
                                src="/logo.png"
                                alt="Vidya Vihar Convent High School Logo"
                                width={56}
                                height={56}
                                className="w-14 h-14 object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                                priority
                            />
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-sm font-heading font-bold leading-tight text-gradient">
                                Vidya Vihar
                            </h1>
                            <p className="text-xs text-muted-foreground font-medium leading-tight">
                                Convent High School
                            </p>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${pathname === link.href
                                    ? "text-primary-foreground bg-primary"
                                    : "text-foreground/70 hover:text-foreground hover:bg-secondary"
                                    }`}
                            >
                                {link.label}
                                {pathname === link.href && (
                                    <motion.div
                                        layoutId="navIndicator"
                                        className="absolute inset-0 bg-primary rounded-full -z-10"
                                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Right actions */}
                    <div className="flex items-center gap-3">
                        {/* Theme toggle */}
                        {mounted && (
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="rounded-full w-10 h-10 hover:bg-school-gold/20"
                                id="theme-toggle"
                            >
                                <AnimatePresence mode="wait">
                                    {theme === "dark" ? (
                                        <motion.div
                                            key="sun"
                                            initial={{ rotate: -90, scale: 0 }}
                                            animate={{ rotate: 0, scale: 1 }}
                                            exit={{ rotate: 90, scale: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Sun className="w-5 h-5 text-school-gold" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="moon"
                                            initial={{ rotate: 90, scale: 0 }}
                                            animate={{ rotate: 0, scale: 1 }}
                                            exit={{ rotate: -90, scale: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Moon className="w-5 h-5 text-school-purple" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </Button>
                        )}

                        {/* CTA */}
                        <Link href="/contact" className="hidden md:block">
                            <Button className="rounded-full bg-gradient-to-r from-school-purple to-school-maroon text-white hover:opacity-90 px-6 shadow-lg shadow-school-purple/20 hover:shadow-school-purple/40 transition-all duration-300">
                                Admissions →
                            </Button>
                        </Link>

                        {/* Mobile menu */}
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild className="lg:hidden">
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <Menu className="w-5 h-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-80 bg-background p-0">
                                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                                <div className="flex flex-col h-full">
                                    <div className="p-6 border-b border-border">
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src="/logo.png"
                                                alt="Logo"
                                                width={44}
                                                height={44}
                                                className="w-11 h-11 object-contain"
                                            />
                                            <div>
                                                <p className="font-heading font-bold text-sm">
                                                    Vidya Vihar
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    Convent High School
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <nav className="flex-1 p-4 space-y-1">
                                        {navLinks.map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                onClick={() => setOpen(false)}
                                                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${pathname === link.href
                                                    ? "bg-primary text-primary-foreground"
                                                    : "hover:bg-secondary text-foreground/70 hover:text-foreground"
                                                    }`}
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </nav>
                                    <div className="p-6 border-t border-border">
                                        <Link href="/contact" onClick={() => setOpen(false)}>
                                            <Button className="w-full rounded-full bg-gradient-to-r from-school-purple to-school-maroon text-white">
                                                Admissions Open →
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </motion.nav>
        </>
    );
}
