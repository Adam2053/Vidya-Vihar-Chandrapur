"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eye, Target, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function VisionMission() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".vm-header-line", {
                scrollTrigger: { trigger: ".vm-header", start: "top 85%", toggleActions: "play none none none" },
                y: 40,
                opacity: 0,
                duration: 0.7,
                stagger: 0.12,
                ease: "power3.out",
            });

            gsap.from(".vm-card-left", {
                scrollTrigger: { trigger: ".vm-card-left", start: "top 80%", toggleActions: "play none none none" },
                x: -80,
                opacity: 0,
                rotateY: 10,
                duration: 0.9,
                ease: "power3.out",
            });

            gsap.from(".vm-card-right", {
                scrollTrigger: { trigger: ".vm-card-right", start: "top 80%", toggleActions: "play none none none" },
                x: 80,
                opacity: 0,
                rotateY: -10,
                duration: 0.9,
                delay: 0.15,
                ease: "power3.out",
            });

            // Parallax on blobs
            gsap.to(".vm-blob-1", {
                y: -40,
                scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 2 },
            });
            gsap.to(".vm-blob-2", {
                y: 30,
                scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 2 },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-school-purple/5 rounded-full blur-3xl vm-blob-1" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-school-cyan/5 rounded-full blur-3xl vm-blob-2" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="vm-header text-center space-y-3 mb-14">
                    <span className="vm-header-line block text-sm font-medium text-school-gold uppercase tracking-wider flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4" /> Our Foundation
                    </span>
                    <h2 className="vm-header-line font-heading text-3xl lg:text-4xl font-extrabold">
                        Our <span className="text-gradient">Vision</span> and{" "}
                        <span className="text-gradient">Mission</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="vm-card-left group">
                        <div className="relative h-full bg-gradient-to-br from-school-purple/5 to-school-cyan/5 border border-school-purple/10 dark:border-school-cyan/10 rounded-3xl p-8 lg:p-10 hover:shadow-2xl hover:shadow-school-purple/10 transition-all duration-500 overflow-hidden">
                            <div className="absolute -top-12 -right-12 w-40 h-40 bg-school-purple/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-school-purple to-school-maroon flex items-center justify-center mb-6 shadow-lg shadow-school-purple/20">
                                    <Eye className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-heading text-2xl font-bold mb-4">Our Vision</h3>
                                <p className="text-muted-foreground leading-relaxed text-base">
                                    To be a centre of academic excellence and holistic development,
                                    nurturing students to become responsible, compassionate, and
                                    innovative global citizens who contribute positively to society
                                    through the values of{" "}
                                    <span className="text-foreground font-semibold">Love, Joy, and Service</span>.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="vm-card-right group">
                        <div className="relative h-full bg-gradient-to-br from-school-gold/5 to-school-orange/5 border border-school-gold/10 rounded-3xl p-8 lg:p-10 hover:shadow-2xl hover:shadow-school-gold/10 transition-all duration-500 overflow-hidden">
                            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-school-gold/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-school-gold to-school-orange flex items-center justify-center mb-6 shadow-lg shadow-school-gold/20">
                                    <Target className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-heading text-2xl font-bold mb-4">Our Mission</h3>
                                <ul className="space-y-3 text-muted-foreground text-base">
                                    {[
                                        "To provide a stimulating learning environment that fosters intellectual curiosity and creative thinking.",
                                        "To develop strong moral character and social responsibility through value-based education.",
                                        "To empower every student with life skills and confidence to succeed in a rapidly changing world.",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="w-2 h-2 rounded-full bg-school-gold mt-2 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
