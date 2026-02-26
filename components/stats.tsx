"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Stats() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Text staggered reveal 
            gsap.from(".empower-text", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: "power3.out",
            });

            // Image entrance
            gsap.from(".empower-image-wrapper", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    toggleActions: "play none none none",
                },
                x: 80,
                opacity: 0,
                scale: 0.9,
                duration: 1,
                ease: "power3.out",
                delay: 0.2,
            });

            // Floating decorations 
            gsap.from(".empower-float", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    toggleActions: "play none none none",
                },
                scale: 0,
                opacity: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: "back.out(2)",
                delay: 0.6,
            });

            // Stats pill slide up
            gsap.from(".empower-stats-pill", {
                scrollTrigger: {
                    trigger: ".empower-stats-pill",
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
                y: 40,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out",
                delay: 0.5,
            });

            // Curved arrow draw-in
            gsap.from(".curved-arrow", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                scale: 0.5,
                duration: 0.6,
                ease: "power2.out",
                delay: 0.8,
            });

            // Subtle floating animation for decorations 
            gsap.to(".float-bob-1", {
                y: -10,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
            gsap.to(".float-bob-2", {
                y: 8,
                x: -5,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
            gsap.to(".float-bob-3", {
                y: -6,
                x: 4,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 lg:py-28 relative overflow-hidden bg-[#FDF8F3] dark:bg-[#1a1520]">
            {/* Subtle dot pattern background */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
                <svg width="100%" height="100%">
                    <pattern id="empower-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="currentColor" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#empower-dots)" />
                </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left - Text Content */}
                    <div className="space-y-6 max-w-lg">
                        <div className="empower-text">
                            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-card border border-border text-xs font-semibold uppercase tracking-wider text-foreground shadow-sm">
                                Admission on going
                            </span>
                        </div>

                        <h2 className="empower-text font-heading text-4xl lg:text-[3.4rem] font-extrabold leading-[1.08] text-foreground">
                            Empower your kids
                            <br />
                            to think be{" "}
                            <span className="text-school-maroon italic">smarter</span>
                            <br />
                            <span className="text-school-maroon italic">and sharper</span>
                        </h2>

                        <p className="empower-text text-muted-foreground leading-relaxed text-base lg:text-lg max-w-sm">
                            Encourage kids to think critically, be creative, and
                            solve problems for a better future.
                        </p>

                        <div className="empower-text flex items-center gap-6 pt-2">
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-school-purple to-school-maroon text-white text-sm font-bold shadow-lg shadow-school-purple/20 hover:shadow-school-purple/40 hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 group"
                            >
                                Get Educated
                                <span className="text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                                    ↗
                                </span>
                            </a>

                            {/* Curved arrow pointing to kid image */}
                            <svg className="curved-arrow hidden lg:block w-16 h-10 text-school-maroon/60" viewBox="0 0 80 40" fill="none">
                                <path d="M5 35 C 20 35, 30 5, 70 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" strokeDasharray="4 3" />
                                <path d="M65 3 L72 8 L63 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            </svg>
                        </div>
                    </div>

                    {/* Right - Kid Image with Accent Shape + Floaters */}
                    <div className="empower-image-wrapper relative mt-10 lg:mt-0 flex justify-center lg:justify-end">
                        <div className="relative">
                            {/* Blue accent shape behind the kid */}
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[260px] h-[320px] lg:w-[300px] lg:h-[370px] rounded-[2rem] bg-gradient-to-b from-school-cyan/50 to-school-blue/40 dark:from-school-cyan/30 dark:to-school-blue/25 -rotate-3" />

                            {/* Kid image - naturally anchored at bottom without clipping content */}
                            <div className="relative w-[250px] h-[310px] lg:w-[290px] lg:h-[360px] z-10">
                                <Image
                                    src="/kid-girl-1.png"
                                    alt="Happy student"
                                    fill
                                    className="object-cover object-bottom scale-[1.2] drop-shadow-2xl"
                                    sizes="(max-width: 768px) 250px, 290px"
                                    style={{transform: "translatey(-35px)", left:"2rem"}}
                                />
                            </div>

                            {/* Floating heart decoration */}
                            <div className="empower-float float-bob-1 absolute -top-4 right-0 lg:-right-8 z-20 w-11 h-11 rounded-full bg-red-500 flex items-center justify-center text-white text-lg shadow-lg shadow-red-500/30">
                                ❤️
                            </div>

                            {/* Floating globe at far right */}
                            <div className="empower-float float-bob-2 absolute top-1/4 -right-14 lg:-right-20 z-20 w-14 h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden shadow-lg border-2 border-white/50 dark:border-white/20">
                                <div className="w-full h-full bg-gradient-to-br from-green-400 via-blue-500 to-blue-700 flex items-center justify-center text-2xl">
                                    🌍
                                </div>
                            </div>

                            {/* Small floating star */}
                            <div className="empower-float float-bob-3 absolute bottom-20 -left-8 lg:-left-12 z-20 w-8 h-8 rounded-full bg-school-gold flex items-center justify-center text-sm shadow-md">
                                ⭐
                            </div>

                            {/* Stats pill - floating at bottom */}
                            <div className="empower-stats-pill absolute -bottom-8 -right-4 lg:-bottom-6 lg:-right-16 z-30 bg-card border border-border rounded-2xl px-5 py-4 shadow-xl flex items-center gap-5">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-heading font-extrabold text-lg leading-tight text-emerald-700 dark:text-emerald-400">2500+</p>
                                        <p className="text-[10px] text-muted-foreground leading-tight">Students enrolled</p>
                                    </div>
                                </div>

                                <div className="w-px h-10 bg-border" />

                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-orange-100 dark:bg-orange-900/40 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="3" />
                                            <circle cx="12" cy="5" r="1.5" fill="currentColor" />
                                            <circle cx="19" cy="12" r="1.5" fill="currentColor" />
                                            <circle cx="5" cy="12" r="1.5" fill="currentColor" />
                                            <circle cx="12" cy="19" r="1.5" fill="currentColor" />
                                            <circle cx="17" cy="7" r="1" fill="currentColor" />
                                            <circle cx="7" cy="7" r="1" fill="currentColor" />
                                            <circle cx="17" cy="17" r="1" fill="currentColor" />
                                            <circle cx="7" cy="17" r="1" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-heading font-extrabold text-lg leading-tight text-orange-600 dark:text-orange-400">64+</p>
                                        <p className="text-[10px] text-muted-foreground leading-tight">Teachers in the School</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
