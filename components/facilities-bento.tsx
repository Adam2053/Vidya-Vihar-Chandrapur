"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    BookOpen,
    FlaskConical,
    Volleyball,
    MonitorPlay,
    Music2,
    Leaf,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const facilities = [
    {
        title: "Library",
        description:
            "A vast collection of books, references, and digital resources encouraging independent study and a love for reading.",
        icon: BookOpen,
        gradient: "from-school-purple to-purple-400",
        span: "md:col-span-2",
    },
    {
        title: "Science Labs",
        description: "Modern physics, chemistry, and biology labs for hands-on experiments.",
        icon: FlaskConical,
        gradient: "from-school-blue to-sky-400",
        span: "",
    },
    {
        title: "Sports Complex",
        description: "Large, safe playground with equipment for physical activities and team sports.",
        icon: Volleyball,
        gradient: "from-school-green to-emerald-400",
        span: "",
    },
    {
        title: "Smart Classrooms",
        description: "Digital boards, projectors, and interactive tools that bring every lesson to life with active participation.",
        icon: MonitorPlay,
        gradient: "from-school-gold to-amber-400",
        span: "md:col-span-2",
    },
    {
        title: "Music Room",
        description: "Explore instruments, vocals, and performing arts.",
        icon: Music2,
        gradient: "from-school-maroon to-rose-400",
        span: "",
    },
    {
        title: "Green Campus",
        description: "Eco-friendly campus with gardens and sustainable practices.",
        icon: Leaf,
        gradient: "from-school-green to-lime-500",
        span: "",
    },
];

export function FacilitiesBento() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".facilities-header-line", {
                scrollTrigger: { trigger: ".facilities-header", start: "top 85%", toggleActions: "play none none none" },
                y: 40,
                opacity: 0,
                duration: 0.7,
                stagger: 0.12,
                ease: "power3.out",
            });

            gsap.from(".facility-card", {
                scrollTrigger: { trigger: ".facility-card", start: "top 85%", toggleActions: "play none none none" },
                y: 60,
                opacity: 0,
                scale: 0.95,
                duration: 0.7,
                stagger: 0.1,
                ease: "power3.out",
            });

            // Hover magnetic effect
            document.querySelectorAll(".facility-card").forEach((card) => {
                card.addEventListener("mouseenter", () => {
                    gsap.to(card, { y: -8, duration: 0.3, ease: "power2.out" });
                });
                card.addEventListener("mouseleave", () => {
                    gsap.to(card, { y: 0, duration: 0.4, ease: "power2.out" });
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-secondary/30 relative overflow-hidden" id="facilities-preview">
            <div className="max-w-7xl mx-auto px-6">
                <div className="facilities-header text-center space-y-3 mb-14">
                    <span className="facilities-header-line block text-sm font-medium text-school-gold uppercase tracking-wider">
                        World-class Infrastructure
                    </span>
                    <h2 className="facilities-header-line font-heading text-3xl lg:text-4xl font-extrabold">
                        Most Popular School{" "}
                        <span className="text-gradient">Facilities</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {facilities.map((facility) => (
                        <div
                            key={facility.title}
                            className={`facility-card group ${facility.span}`}
                        >
                            <div className="relative h-full bg-card border border-border rounded-3xl p-7 hover:shadow-2xl hover:shadow-school-purple/5 transition-all duration-500 overflow-hidden cursor-pointer">
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${facility.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`}
                                />
                                <div className="relative z-10 flex flex-col h-full">
                                    <div
                                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${facility.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <facility.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="font-heading font-bold text-xl mb-3">{facility.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                                        {facility.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
