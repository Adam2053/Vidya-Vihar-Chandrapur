"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export function CTABanner() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".cta-card", {
                scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" },
                y: 60,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            gsap.from(".cta-text-line", {
                scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none none" },
                y: 30,
                opacity: 0,
                duration: 0.7,
                stagger: 0.12,
                ease: "power3.out",
                delay: 0.3,
            });

            gsap.from(".cta-image-side", {
                scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" },
                x: -60,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            gsap.from(".cta-doodle", {
                scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none none" },
                scale: 0,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "back.out(2)",
                delay: 0.6,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="cta-card relative rounded-[2rem] overflow-hidden shadow-2xl">
                    <div className="grid lg:grid-cols-[45%_55%] min-h-[320px]">
                        {/* Left - Image with green background */}
                        <div className="cta-image-side relative bg-[#1E6B4A] overflow-hidden min-h-[220px] lg:min-h-full">
                            <Image
                                src="/gallery-classroom.jpg"
                                alt="Students learning"
                                fill
                                className="object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 1024px) 100vw, 45vw"
                            />
                            {/* Green overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#1E6B4A]/40 to-transparent" />
                        </div>

                        {/* Right - Yellow info card */}
                        <div className="relative bg-[#FACC15] dark:bg-[#EAB308] p-8 sm:p-10 lg:p-14 flex flex-col justify-center overflow-hidden">
                            {/* Doodle illustrations */}
                            <div className="absolute top-6 right-6 lg:top-8 lg:right-10 cta-doodle">
                                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="text-[#2563EB] opacity-80">
                                    <rect x="25" y="15" width="22" height="45" rx="4" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.15" />
                                    <circle cx="36" cy="25" r="5" fill="currentColor" fillOpacity="0.3" />
                                    <path d="M30 8 L36 2 L42 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M28 62 L36 68 L44 62" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <circle cx="55" cy="20" r="3" fill="#6366F1" fillOpacity="0.6" />
                                    <circle cx="60" cy="35" r="2" fill="#3B82F6" fillOpacity="0.4" />
                                    <path d="M55 50 L65 45 L60 60" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                                </svg>
                            </div>

                            <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 cta-doodle opacity-50">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <path d="M10 40 C 15 20, 35 20, 40 40" stroke="#1E3A5F" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
                                    <circle cx="25" cy="15" r="8" stroke="#1E3A5F" strokeWidth="1.5" fill="none" />
                                    <path d="M22 13 L25 10 L28 13" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                                </svg>
                            </div>

                            {/* Upcoming Event Badge */}
                            <div className="cta-text-line mb-5">
                                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 text-[#1E6B4A] text-xs font-bold uppercase tracking-wider shadow-sm">
                                    Upcoming Event
                                </span>
                            </div>

                            {/* Heading */}
                            <h2 className="cta-text-line font-heading text-3xl sm:text-4xl lg:text-[2.8rem] font-extrabold text-[#1a1a2e] leading-[1.1] mb-4 max-w-md">
                                Building children
                                <br />
                                one at a time
                            </h2>

                            {/* Subtext */}
                            <p className="cta-text-line text-[#1a1a2e]/70 text-base lg:text-lg mb-6 max-w-sm font-medium">
                                Coolness Flows from the Fountains
                                of Knowledge.
                            </p>

                            {/* Date + CTA */}
                            <div className="cta-text-line flex flex-wrap items-center gap-4">
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm shadow-sm">
                                    <CalendarDays className="w-4 h-4 text-red-500" />
                                    <span className="text-sm font-bold text-[#1a1a2e]">
                                        07 March 2025
                                    </span>
                                </div>

                                <Link href="/contact">
                                    <Button className="rounded-full bg-gradient-to-r from-school-purple to-school-maroon text-white hover:opacity-90 px-6 shadow-lg shadow-school-purple/20 hover:shadow-school-purple/40 transition-all duration-300">
                                        Learn More
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
