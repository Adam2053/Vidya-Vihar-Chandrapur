"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const planeRef = useRef<SVGSVGElement>(null);
    const planeTrailRef = useRef<HTMLDivElement>(null);
    const kidLeftRef = useRef<HTMLDivElement>(null);
    const kidRightRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const trustRef = useRef<HTMLDivElement>(null);
    const subtextRef = useRef<HTMLParagraphElement>(null);
    const decorRef = useRef<HTMLDivElement>(null);
    const statsBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Initial states
            gsap.set([".hero-heading-word", ".hero-heading-highlight"], {
                y: 80,
                opacity: 0,
                rotateX: -15,
            });
            gsap.set(badgeRef.current, { y: 30, opacity: 0, scale: 0.8 });
            gsap.set(subtextRef.current, { y: 30, opacity: 0 });
            gsap.set(ctaRef.current, { y: 40, opacity: 0 });
            gsap.set(trustRef.current, { y: 30, opacity: 0 });
            gsap.set(kidLeftRef.current, { x: -80, opacity: 0, scale: 0.9 });
            gsap.set(kidRightRef.current, { x: 80, opacity: 0, scale: 0.9 });
            gsap.set(planeRef.current, { x: -200, y: 100, opacity: 0, rotation: 20, scale: 0.3 });
            gsap.set(planeTrailRef.current, { opacity: 0 });
            gsap.set(".decor-item", { scale: 0, opacity: 0 });
            gsap.set(statsBarRef.current, { y: 60, opacity: 0 });

            // Sequence
            tl.to(badgeRef.current, { y: 0, opacity: 1, scale: 1, duration: 0.6 }, 0.2)
                .to(
                    ".hero-heading-word",
                    { y: 0, opacity: 1, rotateX: 0, duration: 0.8, stagger: 0.08 },
                    0.3
                )
                .to(
                    ".hero-heading-highlight",
                    { y: 0, opacity: 1, rotateX: 0, duration: 0.9 },
                    0.5
                )
                .to(subtextRef.current, { y: 0, opacity: 1, duration: 0.6 }, 0.8)
                .to(ctaRef.current, { y: 0, opacity: 1, duration: 0.6 }, 0.9)
                .to(trustRef.current, { y: 0, opacity: 1, duration: 0.5 }, 1.0)
                // Kids slide in
                .to(kidLeftRef.current, { x: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.4)" }, 0.6)
                .to(kidRightRef.current, { x: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.4)" }, 0.75)
                // Paper plane flies in
                .to(
                    planeRef.current,
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.3,
                    },
                    1.3
                )
                .to(
                    planeRef.current,
                    { x: -50, y: 30, rotation: -15, duration: 0.5, ease: "power2.in" },
                    1.4
                )
                .to(
                    planeRef.current,
                    { x: 60, y: -40, rotation: 10, duration: 0.6, ease: "power2.out" },
                )
                .to(
                    planeRef.current,
                    { x: 140, y: -10, rotation: -5, duration: 0.5, ease: "power2.inOut" },
                )
                .to(
                    planeRef.current,
                    { x: 50, y: -30, rotation: 5, duration: 0.5, ease: "power2.inOut" },
                )
                .to(
                    planeRef.current,
                    {
                        x: 0,
                        y: -8,
                        rotation: -5,
                        scale: 0.9,
                        duration: 0.6,
                        ease: "back.out(2)",
                    },
                )
                // Trail
                .to(planeTrailRef.current, { opacity: 0.6, duration: 0.3 }, 1.5)
                .to(planeTrailRef.current, { opacity: 0, duration: 0.8 }, 3.2)
                // Decorative items pop in
                .to(
                    ".decor-item",
                    { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(2)" },
                    1.2
                )
                // Stats bar
                .to(statsBarRef.current, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, 1.6);

            // Floating decorations continuous
            gsap.to(".decor-float-1", {
                y: -15,
                rotation: 10,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
            gsap.to(".decor-float-2", {
                y: 12,
                rotation: -8,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 0.5,
            });
            gsap.to(".decor-float-3", {
                y: -10,
                x: 8,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 1,
            });
            gsap.to(".decor-float-4", {
                y: 18,
                rotation: 15,
                duration: 3.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 0.8,
            });

            // Paper plane gentle hover after landing
            gsap.to(planeRef.current, {
                y: "-=6",
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 4,
            });

            // Kids subtle breathing animation
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
            className="relative overflow-hidden min-h-[95vh] flex items-center bg-[var(--background)]"
        >
            {/* Animated background gradient blobs */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-20 -left-32 w-[500px] h-[500px] bg-school-cyan/15 rounded-full blur-[100px] decor-float-1" />
                <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] bg-school-purple/10 rounded-full blur-[100px] decor-float-2" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-school-gold/8 rounded-full blur-[80px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16 w-full">
                <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-4 lg:gap-0 items-center">
                    {/* Left Kid */}
                    <div ref={kidLeftRef} className="hidden lg:flex justify-end pr-8">
                        <div className="relative">
                            <div className="w-[280px] h-[350px] rounded-[2rem] overflow-hidden bg-school-orange/10 border-2 border-school-orange/20">
                                <Image
                                    src="/kid-boy-1.png"
                                    alt="Student"
                                    width={280}
                                    height={350}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            {/* Floating badge on kid */}
                            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-2xl px-4 py-2 shadow-xl decor-item">
                                <span className="text-2xl font-heading font-extrabold text-school-green">
                                    100%
                                </span>
                                <p className="text-[10px] text-muted-foreground font-medium">
                                    Board Result
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Center content */}
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
                            className="absolute -top-2 right-12 w-32 h-0.5 bg-gradient-to-l from-school-gold/60 to-transparent z-10 rounded-full"
                        />

                        {/* Badge */}
                        <div ref={badgeRef}>
                            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-school-gold/15 text-school-gold border border-school-gold/25 text-sm font-semibold">
                                <Sparkles className="w-4 h-4" />
                                Admissions Open 2025-26
                            </span>
                        </div>

                        {/* Heading */}
                        <h1
                            ref={headingRef}
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
                        <div ref={trustRef} className="flex flex-wrap justify-center items-center gap-3 text-xs text-muted-foreground">
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
                                Free For All
                            </span>
                        </div>

                        {/* Subtext */}
                        <p ref={subtextRef} className="text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
                            We don&apos;t just give our students lectures but{" "}
                            <span className="text-foreground font-semibold">
                                real life experiences
                            </span>
                            .
                        </p>

                        {/* CTAs */}
                        <div ref={ctaRef} className="flex flex-wrap justify-center gap-4 pt-2">
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

                    {/* Right Kid */}
                    <div ref={kidRightRef} className="hidden lg:flex justify-start pl-8">
                        <div className="relative">
                            <div className="w-[280px] h-[350px] rounded-[2rem] overflow-hidden bg-school-gold/10 border-2 border-school-gold/20">
                                <Image
                                    src="/kid-girl-1.png"
                                    alt="Student"
                                    width={280}
                                    height={350}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl px-4 py-2 shadow-xl decor-item">
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

                {/* Decorative floating items */}
                <div ref={decorRef} className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Basketball */}
                    <div className="decor-item decor-float-1 absolute top-24 left-[8%] hidden lg:block">
                        <div className="w-12 h-12 rounded-full bg-school-orange/20 flex items-center justify-center text-2xl">
                            🏀
                        </div>
                    </div>
                    {/* Target */}
                    <div className="decor-item decor-float-2 absolute top-32 right-[12%] hidden lg:block">
                        <div className="w-10 h-10 rounded-full bg-school-maroon/20 flex items-center justify-center text-xl">
                            🎯
                        </div>
                    </div>
                    {/* Star */}
                    <div className="decor-item decor-float-3 absolute bottom-40 left-[15%] hidden lg:block">
                        <div className="w-8 h-8 rounded-full bg-school-gold/20 flex items-center justify-center text-lg">
                            ⭐
                        </div>
                    </div>
                    {/* Rocket */}
                    <div className="decor-item decor-float-4 absolute top-20 left-[40%] hidden lg:block">
                        <div className="w-10 h-10 rounded-full bg-school-blue/15 flex items-center justify-center text-xl">
                            🚀
                        </div>
                    </div>
                    {/* Book */}
                    <div className="decor-item decor-float-2 absolute bottom-32 right-[10%] hidden lg:block">
                        <div className="w-10 h-10 rounded-full bg-school-green/20 flex items-center justify-center text-xl">
                            📚
                        </div>
                    </div>
                    {/* Paint */}
                    <div className="decor-item decor-float-1 absolute bottom-24 right-[35%] hidden lg:block">
                        <div className="w-9 h-9 rounded-full bg-school-purple/15 flex items-center justify-center text-lg">
                            🎨
                        </div>
                    </div>
                </div>

                {/* Stats bar at bottom */}
                <div ref={statsBarRef} className="mt-14 lg:mt-20 max-w-4xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: "🎓", value: "2500+", label: "Students enrolled across all grades", color: "bg-school-orange/10 border-school-orange/20" },
                            { icon: "👩‍🏫", value: "64+", label: "Expert teachers shaping futures", color: "bg-school-purple/10 border-school-purple/20" },
                            { icon: "🏆", value: "100%", label: "Board result year after year", color: "bg-school-green/10 border-school-green/20" },
                            { icon: "📖", value: "25+", label: "Years of educational excellence", color: "bg-school-gold/10 border-school-gold/20" },
                        ].map((stat) => (
                            <div
                                key={stat.value}
                                className={`flex items-center gap-3 p-4 rounded-2xl border ${stat.color} stat-card`}
                            >
                                <div className="text-2xl">{stat.icon}</div>
                                <div>
                                    <p className="font-heading font-extrabold text-lg leading-tight">
                                        {stat.value}
                                    </p>
                                    <p className="text-[11px] text-muted-foreground leading-tight">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
