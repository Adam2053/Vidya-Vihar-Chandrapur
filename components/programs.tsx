"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

const programs = [
    {
        title: "Life Skills\nfor Kids",
        image: "/kid-boy-1.png",
        gradient: "from-[#FF6B35] to-[#FF9B6A]",
        textColor: "text-white",
    },
    {
        title: "Imagination\nis power",
        image: "/kid-girl-1.png",
        gradient: "from-[#1E824C] to-[#3ED68A]",
        textColor: "text-white",
    },
    {
        title: "Grow your\nown wings",
        image: "/kid-boy-2.png",
        gradient: "from-[#FBC02D] to-[#FFD54F]",
        textColor: "text-[#3E2762]",
    },
];

const subjects = [
    {
        image: "/kid-girl-3.png",
        title: "Letter Identification",
        subtitle: "Class - Pre School",
        bgBlob: (
            <svg viewBox="0 0 200 200" className="absolute -z-10 w-full h-full scale-[1.3] top-6 left-0 text-[#1da1f2]" fill="currentColor">
                <path d="M45,-75.4C58.8,-68.8,70.9,-56.3,80.3,-41.8C89.6,-27.2,96.3,-10.8,94.3,4.9C92.2,20.5,81.4,35.3,70,48.1C58.6,60.8,46.7,71.5,32.4,78.8C18.2,86,1.6,89.7,-14.2,88.7C-30,87.6,-45.1,81.8,-57.8,71.4C-70.6,61,-81.2,46.1,-87.3,29.3C-93.5,12.5,-95.3,-6,-89.6,-21.8C-83.8,-37.6,-70.6,-50.8,-56.3,-57.7C-41.9,-64.7,-26.4,-65.4,-11.3,-69.8C3.8,-74.1,31.2,-82.1,45,-75.4Z" transform="translate(100 100)" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" fillOpacity="0.1" />
                <path d="M42,-70.4C54.8,-63.8,66.9,-51.3,76.3,-36.8C85.6,-22.2,92.3,-5.8,90.3,9.9C88.2,25.5,77.4,40.3,66,53.1C54.6,65.8,42.7,76.5,28.4,83.8C14.2,91,-2.4,94.7,-18.2,93.7C-34,92.6,-49.1,86.8,-61.8,76.4C-74.6,66,-85.2,51.1,-91.3,34.3C-97.5,17.5,-99.3,-1,-93.6,-16.8C-87.8,-32.6,-74.6,-45.8,-60.3,-52.7C-45.9,-59.7,-30.4,-60.4,-15.3,-64.8C-0.2,-69.1,27.2,-77.1,42,-70.4Z" transform="translate(100 100)" />
            </svg>
        )
    },
    {
        image: "/subject-gk.png",
        title: "General Knowledge",
        subtitle: "Fourth Grade",
        bgBlob: (
            <svg viewBox="0 0 200 200" className="absolute -z-10 w-full h-full scale-[1.35] top-4 left-0 text-[#ff6b35]" fill="currentColor">
                <path d="M49,-77.3C61.4,-68.6,68,-51.3,74.5,-34.5C81,-17.6,87.4,-1.2,85.1,13.8C82.8,28.8,71.8,42.4,59.3,53.3C46.8,64.2,32.7,72.4,16.8,77.4C1,82.4,-16.5,84.1,-32.1,79.2C-47.7,74.3,-61.4,62.8,-71.4,49.1C-81.4,35.4,-87.6,19.4,-88.7,3.1C-89.8,-13.2,-85.8,-29.9,-76.3,-43.3C-66.8,-56.7,-51.9,-66.8,-36.6,-73.4C-21.3,-80.1,-5.7,-83.4,10.6,-83.1C26.9,-82.9,49,-77.3,49,-77.3Z" transform="translate(100 100)" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" fillOpacity="0.1" />
                <path d="M45,-73.3C57.4,-64.6,64,-47.3,70.5,-30.5C77,-13.6,83.4,2.8,81.1,17.8C78.8,32.8,67.8,46.4,55.3,57.3C42.8,68.2,28.7,76.4,12.8,81.4C-3,86.4,-20.5,88.1,-36.1,83.2C-51.7,78.3,-65.4,66.8,-75.4,53.1C-85.4,39.4,-91.6,23.4,-92.7,7.1C-93.8,-9.2,-89.8,-25.9,-80.3,-39.3C-70.8,-52.7,-55.9,-62.8,-40.6,-69.4C-25.3,-76.1,-9.7,-79.4,6.6,-79.1C22.9,-78.9,45,-73.3,45,-73.3Z" transform="translate(100 100)" />
            </svg>
        )
    },
    {
        image: "/subject-globe.png",
        title: "Geography Quiz",
        subtitle: "First Grade",
        bgBlob: (
            <svg viewBox="0 0 200 200" className="absolute -z-10 w-full h-full scale-[1.3] top-8 left-0 text-[#1e824c]" fill="currentColor">
                <path d="M54.5,-69.1C68.9,-54.6,77.5,-34.5,81.9,-13.7C86.3,7.1,86.5,28.5,76,44.5C65.5,60.5,44.3,71.1,23.2,77.4C2.1,83.7,-18.8,85.6,-37.2,79.5C-55.6,73.4,-71.4,59.3,-80.9,41.9C-90.4,24.5,-93.6,3.8,-88.6,-14.8C-83.6,-33.4,-70.4,-49.9,-54.5,-64.1C-38.6,-78.3,-20,-90.1,0.2,-90.3C20.3,-90.6,40.1,-83.6,54.5,-69.1Z" transform="translate(100 100)" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" fillOpacity="0.1" />
                <path d="M50.5,-65.1C64.9,-50.6,73.5,-30.5,77.9,-9.7C82.3,11.1,82.5,32.5,72,48.5C61.5,64.5,40.3,75.1,19.2,81.4C-1.9,87.7,-22.8,89.6,-41.2,83.5C-59.6,77.4,-75.4,63.3,-84.9,45.9C-94.4,28.5,-97.6,7.8,-92.6,-10.8C-87.6,-29.4,-74.4,-45.9,-58.5,-60.1C-42.6,-74.3,-24,-86.1,-3.8,-86.3C16.3,-86.6,36.1,-79.6,50.5,-65.1Z" transform="translate(100 100)" />
            </svg>
        )
    },
    {
        image: "/subject-arts.png",
        title: "Visual Arts Training",
        subtitle: "Sketching Class",
        bgBlob: (
            <svg viewBox="0 0 200 200" className="absolute -z-10 w-full h-full scale-[1.4] top-8 left-0 text-[#fbc02d]" fill="currentColor">
                <path d="M43.7,-76.3C55.4,-67.2,62.6,-51.7,71.1,-37C79.6,-22.3,89.3,-8.4,87.4,4.2C85.5,16.8,72.1,28,62.3,41C52.5,54,46.3,68.8,35.4,76.5C24.5,84.1,8.9,84.6,-5.5,80.7C-19.9,76.8,-33.1,68.5,-45.5,59.3C-57.9,50.1,-69.5,40,-76.9,26.9C-84.3,13.8,-87.5,-2.3,-83.4,-16.5C-79.3,-30.7,-67.9,-43.1,-54.6,-51.7C-41.3,-60.3,-26.1,-65.1,-11.3,-68.7C3.5,-72.3,18.7,-74.7,31.7,-85.2L43.7,-76.3Z" transform="translate(100 100)" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" fillOpacity="0.1" />
                <path d="M39.7,-72.3C51.4,-63.2,58.6,-47.7,67.1,-33C75.6,-18.3,85.3,-4.4,83.4,8.2C81.5,20.8,68.1,32,58.3,45C48.5,58,42.3,72.8,31.4,80.5C20.5,88.1,4.9,88.6,-9.5,84.7C-23.9,80.8,-37.1,72.5,-49.5,63.3C-61.9,54.1,-73.5,44,-80.9,30.9C-88.3,17.8,-91.5,1.7,-87.4,-12.5C-83.3,-26.7,-71.9,-39.1,-58.6,-47.7C-45.3,-56.3,-30.1,-61.1,-15.3,-64.7C-0.5,-68.3,14.7,-70.7,27.7,-81.2L39.7,-72.3Z" transform="translate(100 100)" />
            </svg>
        )
    },
];

export function Programs() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const subjectsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header text word-by-word reveal
            gsap.from(".programs-header-text", {
                scrollTrigger: {
                    trigger: ".programs-header-text",
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
            });

            // Cards stagger with scale & rotation
            gsap.from(".program-card", {
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                y: 80,
                opacity: 0,
                scale: 0.85,
                rotateY: 12,
                duration: 0.9,
                stagger: 0.18,
                ease: "power3.out",
            });

            // Card images parallax
            document.querySelectorAll(".program-card-img").forEach((img) => {
                gsap.to(img, {
                    y: -15,
                    scrollTrigger: {
                        trigger: img,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.5,
                    },
                });
            });

            // Shaping future header - split text reveal
            gsap.from(".shaping-header-line", {
                scrollTrigger: {
                    trigger: ".shaping-header",
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                y: 40,
                opacity: 0,
                duration: 0.7,
                stagger: 0.12,
                ease: "power3.out",
            });

            // Subject cards pop in
            gsap.from(".subject-card", {
                scrollTrigger: {
                    trigger: subjectsRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                y: 40,
                opacity: 0,
                scale: 0.85,
                duration: 0.6,
                stagger: 0.12,
                ease: "back.out(1.7)",
            });

            // Hover interactions for cards
            document.querySelectorAll(".program-card").forEach((card) => {
                const img = card.querySelector(".program-card-img");
                card.addEventListener("mouseenter", () => {
                    gsap.to(card, { y: -12, scale: 1.02, duration: 0.4, ease: "power2.out" });
                    if (img) gsap.to(img, { scale: 1.08, duration: 0.5, ease: "power2.out" });
                });
                card.addEventListener("mouseleave", () => {
                    gsap.to(card, { y: 0, scale: 1, duration: 0.4, ease: "power2.out" });
                    if (img) gsap.to(img, { scale: 1, duration: 0.5, ease: "power2.out" });
                });
            });

            // Subject card hover
            document.querySelectorAll(".subject-card").forEach((card) => {
                card.addEventListener("mouseenter", () => {
                    gsap.to(card, { y: -8, scale: 1.05, duration: 0.3, ease: "power2.out" });
                });
                card.addEventListener("mouseleave", () => {
                    gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-10 right-0 w-40 h-40 bg-school-gold/5 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-0 w-56 h-56 bg-school-cyan/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                    <div className="space-y-3">
                        <h2 className="programs-header-text font-heading text-3xl lg:text-[2.8rem] font-extrabold leading-tight max-w-lg">
                            Smart and clever kids
                            <br />
                            ready to{" "}
                            <span className="text-gradient">fly high!</span>
                        </h2>
                        <p className="programs-header-text text-muted-foreground max-w-md">
                            Learn smartly with us. We teach &apos;One Smart Lesson&apos; at a
                            time!
                        </p>
                    </div>
                    <div className="programs-header-text">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-border hover:bg-card text-sm font-semibold transition-all duration-300 group self-start whitespace-nowrap"
                        >
                            Enroll Now
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Three program cards - CHEST LEVEL kid images */}
                <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    {programs.map((program) => (
                        <div
                            key={program.title}
                            className={`program-card relative rounded-[2rem] overflow-hidden bg-gradient-to-br ${program.gradient} min-h-[400px] cursor-pointer shadow-lg`}
                            style={{ perspective: "600px" }}
                        >
                            {/* Decorative circles */}
                            <div className="absolute top-6 right-6 w-6 h-6 rounded-full bg-white/20" />
                            <div className="absolute top-6 right-16 w-3 h-3 rounded-full bg-white/15" />
                            <div className="absolute bottom-16 left-6 w-4 h-4 rounded-full bg-white/10" />

                            {/* Text overlay */}
                            <div className="absolute top-8 left-8 z-10">
                                <h3
                                    className={`font-heading text-2xl lg:text-3xl font-extrabold ${program.textColor} leading-tight whitespace-pre-line drop-shadow-sm`}
                                >
                                    {program.title}
                                </h3>
                            </div>

                            {/* Kid image - anchored at bottom, growing upward */}
                            <div className="absolute bottom-0 right-0 w-[80%] h-[85%] program-card-img">
                                <Image
                                    src={program.image}
                                    alt={program.title}
                                    fill
                                    className="object-contain object-bottom drop-shadow-2xl"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>

                            {/* Bottom CTA */}
                            <div className="absolute bottom-6 left-8 z-10">
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium border border-white/10">
                                    Learn More <ArrowUpRight className="w-3 h-3" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Shaping Future Section - improved contrast */}
                <div className="shaping-header text-center mb-12 space-y-4">
                    <p className="shaping-header-line text-sm text-school-maroon dark:text-school-gold font-semibold uppercase tracking-widest">
                        We focus on one impactful lesson at a time
                    </p>
                    <h2 className="shaping-header-line font-heading text-3xl lg:text-5xl font-extrabold text-foreground">
                        Shaping the <span className="text-gradient">future</span> of kids
                    </h2>
                    <p className="shaping-header-line text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                        Our curriculum covers a wide range of subjects designed to develop
                        well-rounded, curious, and capable students.
                    </p>
                </div>

                {/* Subject category cards with kid images */}
                <div ref={subjectsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mt-16 pt-8">
                    {subjects.map((subject) => (
                        <div
                            key={subject.title}
                            className="subject-card text-center group cursor-pointer relative"
                        >
                            {/* Graphic Container with SVG Blob & Kid Image */}
                            <div className="relative w-full h-[200px] lg:h-[220px] mb-8 flex justify-center items-end">
                                {subject.bgBlob}

                                <div className="relative w-[140px] h-[170px] lg:w-[165px] lg:h-[200px]">
                                    <Image
                                        src={subject.image}
                                        alt={subject.title}
                                        fill
                                        className="object-contain object-bottom drop-shadow-lg group-hover:scale-110 transition-transform duration-500 ease-out"
                                    />
                                </div>
                            </div>

                            {/* Label card below blob */}
                            <Card className="py-3 px-4 rounded-xl shadow-md border-border/60 bg-card/95 backdrop-blur-sm group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300 items-center text-center">
                                <CardTitle className="font-heading font-extrabold text-base text-foreground leading-snug">
                                    {subject.title}
                                </CardTitle>
                                <Badge variant="secondary" className="text-[11px] px-3 py-0.5 font-medium mx-auto -mt-2">
                                    {subject.subtitle}
                                </Badge>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
