"use client";

import Link from "next/link";
import Image from "next/image";
import {
    Phone,
    Mail,
    MapPin,
    GraduationCap,
    Heart,
    ArrowUpRight,
    Facebook,
    Instagram,
    Youtube,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const quickLinks = [
    { href: "/about", label: "About Us" },
    { href: "/facilities", label: "Facilities" },
    { href: "/mpd", label: "Mandatory Public Disclosure" },
    { href: "/contact", label: "Contact Us" },
];

const academicLinks = [
    { href: "/facilities", label: "Library" },
    { href: "/facilities", label: "Laboratories" },
    { href: "/facilities", label: "Sports Complex" },
    { href: "/facilities", label: "Smart Classrooms" },
];

export function Footer() {
    return (
        <footer className="relative overflow-hidden">
            {/* Decorative top accent */}
            <div className="h-1 bg-gradient-to-r from-school-purple via-school-gold to-school-maroon" />

            <div className="bg-card border-t border-border">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Brand column */}
                        <div className="space-y-5">
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/logo.png"
                                    alt="Vidya Vihar Logo"
                                    width={56}
                                    height={56}
                                    className="w-14 h-14 object-contain drop-shadow-lg"
                                />
                                <div>
                                    <h3 className="font-heading font-bold text-sm leading-tight">
                                        Vidya Vihar
                                    </h3>
                                    <p className="text-xs text-muted-foreground leading-tight">
                                        Convent High School
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Nurturing young minds with love, joy, and service. Building
                                future leaders through quality education since our founding in
                                Chandrapur.
                            </p>
                            <div className="flex items-center gap-2 text-school-gold font-heading font-semibold text-sm">
                                <GraduationCap className="w-4 h-4" />
                                Love • Joy • Service
                            </div>
                            {/* Social links */}
                            <div className="flex items-center gap-3 pt-2">
                                <a
                                    href="#"
                                    className="w-9 h-9 rounded-lg bg-secondary hover:bg-school-purple hover:text-white flex items-center justify-center transition-all duration-300"
                                >
                                    <Facebook className="w-4 h-4" />
                                </a>
                                <a
                                    href="#"
                                    className="w-9 h-9 rounded-lg bg-secondary hover:bg-school-maroon hover:text-white flex items-center justify-center transition-all duration-300"
                                >
                                    <Instagram className="w-4 h-4" />
                                </a>
                                <a
                                    href="#"
                                    className="w-9 h-9 rounded-lg bg-secondary hover:bg-red-600 hover:text-white flex items-center justify-center transition-all duration-300"
                                >
                                    <Youtube className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-heading font-bold text-sm mb-5 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-school-gold" />
                                Quick Links
                            </h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-200 group"
                                        >
                                            <ArrowUpRight className="w-3.5 h-3.5 text-school-purple dark:text-school-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Facilities */}
                        <div>
                            <h4 className="font-heading font-bold text-sm mb-5 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-school-cyan" />
                                Facilities
                            </h4>
                            <ul className="space-y-3">
                                {academicLinks.map((link, i) => (
                                    <li key={i}>
                                        <Link
                                            href={link.href}
                                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-200 group"
                                        >
                                            <ArrowUpRight className="w-3.5 h-3.5 text-school-purple dark:text-school-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="font-heading font-bold text-sm mb-5 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-school-maroon dark:bg-school-gold" />
                                Contact Us
                            </h4>
                            <ul className="space-y-4">
                                <li>
                                    <a
                                        href="tel:+919850066667"
                                        className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                                    >
                                        <Phone className="w-4 h-4 mt-0.5 text-school-purple dark:text-school-cyan" />
                                        <span>+91 9850066667</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:vidyaviharchanda@gmail.com"
                                        className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <Mail className="w-4 h-4 mt-0.5 text-school-purple dark:text-school-cyan" />
                                        <span>vidyaviharchanda@gmail.com</span>
                                    </a>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                    <MapPin className="w-4 h-4 mt-0.5 text-school-purple dark:text-school-cyan flex-shrink-0" />
                                    <span>
                                        Vidya Vihar Convent High School, Chandrapur, Maharashtra,
                                        India
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Separator className="my-10 bg-border" />

                    {/* Bottom bar */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-muted-foreground">
                            © {new Date().getFullYear()} Vidya Vihar Convent High School,
                            Chandrapur. All rights reserved.
                        </p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                            Made with <Heart className="w-3 h-3 text-school-maroon fill-school-maroon" /> for
                            education
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
