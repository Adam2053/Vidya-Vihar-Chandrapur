"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const kidLeftRef = useRef<HTMLDivElement>(null);
    const kidRightRef = useRef<HTMLDivElement>(null);
    const planeRef = useRef<SVGSVGElement>(null);
    const planeTrailRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Badge
            gsap.from(".hero-badge", {
                y: 20,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out",
                delay: 0.1,
            });

            // Heading words stagger
            gsap.from(".hero-heading-word", {
                y: 60,
                opacity: 0,
                rotateX: -25,
                duration: 0.8,
                stagger: 0.08,
                ease: "power3.out",
                delay: 0.3,
            });

            // Heading highlight special pop
            gsap.from(".hero-heading-highlight", {
                scale: 0.5,
                opacity: 0,
                duration: 0.9,
                ease: "elastic.out(1, 0.5)",
                delay: 0.7,
            });

            // Trust badges
            gsap.from(".hero-trust", {
                y: 20,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out",
                delay: 0.9,
            });

            // Subtext + CTA
            gsap.from(".hero-sub", {
                y: 20,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out",
                delay: 1.0,
            });

            gsap.from(".hero-cta", {
                y: 20,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out",
                delay: 1.1,
            });

            // Left kid slide in
            gsap.from(kidLeftRef.current, {
                x: -80,
                y: 40,
                opacity: 0,
                scale: 0.9,
                duration: 1.1,
                ease: "power3.out",
                delay: 0.5,
            });

            // Right kid slide in
            gsap.from(kidRightRef.current, {
                x: 80,
                y: 40,
                opacity: 0,
                scale: 0.9,
                duration: 1.1,
                ease: "power3.out",
                delay: 0.7,
            });

            // Paper plane animation - flies in and rests
            const planeTl = gsap.timeline({ delay: 1.5 });
            planeTl
                .fromTo(
                    planeRef.current,
                    { x: -120, y: 60, rotation: 25, opacity: 0 },
                    { x: 0, y: 0, rotation: -5, opacity: 1, duration: 1.2, ease: "power2.out" }
                )
                .fromTo(
                    planeTrailRef.current,
                    { scaleX: 0, opacity: 0 },
                    { scaleX: 1, opacity: 0.6, duration: 0.8, ease: "power2.out" },
                    "<0.1"
                )
                .to(planeTrailRef.current, { opacity: 0, duration: 0.6, delay: 0.3 });

            // Gentle hover after landing
            gsap.to(planeRef.current, {
                y: "-=6",
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 3,
            });

            // Kids subtle breathing
            gsap.to(kidLeftRef.current, {
                y: -6,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 2,
            });
            gsap.to(kidRightRef.current, {
                y: -8,
                duration: 3.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 2.5,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden min-h-[95vh] flex items-center bg-background"
        >
            {/* Animated background gradient blobs */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-20 -left-32 w-[500px] h-[500px] bg-school-cyan/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] bg-school-purple/8 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-school-gold/5 rounded-full blur-[80px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16 w-full">
                <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-0 items-center">
                    {/* ─── Left Kid ─── */}
                    <div ref={kidLeftRef} className="hidden lg:flex justify-end pr-8">
                        <div className="relative">
                            <div className="w-[270px] h-[340px] rounded-[2rem] overflow-hidden bg-[#E8E8E8] dark:bg-muted border border-border/50 shadow-lg">
                                <Image
                                    src="/hero-boy.png"
                                    alt="Student"
                                    width={270}
                                    height={340}
                                    className="w-full h-full object-cover object-top"
                                    priority
                                />
                            </div>
                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-2xl px-4 py-2 shadow-xl z-10">
                                <span className="text-2xl font-heading font-extrabold text-school-green">
                                    100%
                                </span>
                                <p className="text-[10px] text-muted-foreground font-medium">
                                    Board Result
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ─── Center Content ─── */}
                    <div className="text-center space-y-6 max-w-xl mx-auto relative">
                        {/* Paper plane SVG */}
                        <svg
                            ref={planeRef}
                            className="absolute -top-4 right-0 z-20 w-12 h-12 text-school-purple dark:text-school-cyan"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                        </svg>
                        {/* Trail */}
                        <div
                            ref={planeTrailRef}
                            className="absolute -top-2 right-12 w-32 h-0.5 bg-gradient-to-l from-school-gold/60 to-transparent z-10 rounded-full origin-right"
                        />

                        {/* Badge */}
                        <div className="hero-badge">
                            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-school-gold/15 text-school-gold border border-school-gold/25 text-sm font-semibold">
                                <Sparkles className="w-4 h-4" />
                                Admissions Open 2025-26
                            </span>
                        </div>

                        {/* Heading */}
                        <h1
                            className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight"
                            style={{ perspective: "800px" }}
                        >
                            <span className="hero-heading-word inline-block">Putting</span>{" "}
                            <span className="hero-heading-word inline-block">your</span>
                            <br />
                            <span className="hero-heading-word inline-block">child&apos;s</span>{" "}
                            <span className="hero-heading-highlight inline-block text-gradient">
                                Future
                            </span>
                            <br />
                            <span className="hero-heading-word inline-block">in</span>{" "}
                            <span className="hero-heading-word inline-block">great</span>{" "}
                            <span className="hero-heading-word inline-block">motion</span>
                        </h1>

                        {/* Trust badges */}
                        <div className="hero-trust flex flex-wrap justify-center items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1.5 bg-secondary px-3 py-1.5 rounded-full">
                                <span className="w-4 h-4 rounded-full bg-school-green/20 text-school-green flex items-center justify-center text-[10px]">✓</span>
                                CBSE Affiliated
                            </span>
                            <span className="flex items-center gap-1.5 bg-secondary px-3 py-1.5 rounded-full">
                                <span className="w-4 h-4 rounded-full bg-school-green/20 text-school-green flex items-center justify-center text-[10px]">✓</span>
                                Expert Faculty
                            </span>
                            <span className="flex items-center gap-1.5 bg-secondary px-3 py-1.5 rounded-full">
                                <span className="w-4 h-4 rounded-full bg-school-green/20 text-school-green flex items-center justify-center text-[10px]">✓</span>
                                Practical Learning
                            </span>
                        </div>

                        {/* Subtext */}
                        <p className="hero-sub text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
                            We don&apos;t just give our students lectures but{" "}
                            <span className="text-foreground font-semibold">
                                real life experiences
                            </span>
                            .
                        </p>

                        {/* CTAs */}
                        <div className="hero-cta flex flex-wrap justify-center gap-4 pt-2">
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-gradient-to-r from-school-purple to-school-maroon text-white hover:opacity-90 px-8 text-sm font-semibold shadow-xl shadow-school-purple/25 hover:shadow-school-purple/40 transition-all duration-300 group"
                                >
                                    Start Learning
                                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Link href="/about">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="rounded-full px-8 text-sm font-semibold border-2 hover:bg-secondary transition-all duration-300"
                                >
                                    Enroll Now ↗
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* ─── Right Kid ─── */}
                    <div ref={kidRightRef} className="hidden lg:flex justify-start pl-8">
                        <div className="relative">
                            <div className="w-[270px] h-[340px] rounded-[2rem] overflow-hidden bg-[#E8E8E8] dark:bg-muted border border-border/50 shadow-lg">
                                <Image
                                    src="/img-girl-new.png"
                                    alt="Student"
                                    width={270}
                                    height={340}
                                    className="w-full h-full object-bottom object-cover object-top"
                                    style={{ objectPosition: "center 15%" }}
                                    priority
                                />
                            </div>
                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl px-4 py-2 shadow-xl z-10">
                                <span className="text-2xl font-heading font-extrabold text-school-purple dark:text-school-cyan">
                                    2500+
                                </span>
                                <p className="text-[10px] text-muted-foreground font-medium">
                                    Happy Students
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats Bar */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { value: "2500+", label: "Students Enrolled", color: "text-school-purple dark:text-school-cyan" },
                        { value: "64+", label: "Expert Teachers", color: "text-school-maroon" },
                        { value: "100%", label: "Board Result", color: "text-school-green" },
                        { value: "30+", label: "Years of Excellence", color: "text-school-gold" },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="hero-cta text-center bg-card border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <p className={`font-heading text-2xl lg:text-3xl font-extrabold ${stat.color}`}>
                                {stat.value}
                            </p>
                            <p className="text-xs text-muted-foreground font-medium mt-1">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
