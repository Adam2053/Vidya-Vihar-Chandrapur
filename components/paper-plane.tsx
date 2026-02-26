"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function PaperPlane() {
    const planeRef = useRef<HTMLDivElement>(null);
    const trailRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!planeRef.current || !containerRef.current) return;

        const ctx = gsap.context(() => {
            // Paper plane scroll-driven animation
            // The plane flies across the screen as user scrolls down
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 1.5,
                },
            });

            tl.fromTo(
                planeRef.current,
                {
                    x: "-15vw",
                    y: "10vh",
                    rotation: 15,
                    scale: 0.6,
                    opacity: 0,
                },
                {
                    x: "5vw",
                    y: "-5vh",
                    rotation: -10,
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: "power1.inOut",
                }
            )
                .to(planeRef.current, {
                    x: "35vw",
                    y: "3vh",
                    rotation: 8,
                    duration: 1,
                    ease: "sine.inOut",
                })
                .to(planeRef.current, {
                    x: "65vw",
                    y: "-8vh",
                    rotation: -12,
                    scale: 1.1,
                    duration: 1,
                    ease: "sine.inOut",
                })
                .to(planeRef.current, {
                    x: "85vw",
                    y: "2vh",
                    rotation: 5,
                    scale: 0.9,
                    duration: 0.8,
                    ease: "power2.in",
                })
                .to(planeRef.current, {
                    x: "110vw",
                    y: "-5vh",
                    rotation: -8,
                    scale: 0.7,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power2.in",
                });

            // Trail follows with slight delay
            const trailTl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 2,
                },
            });

            trailTl
                .fromTo(
                    trailRef.current,
                    { x: "-20vw", y: "12vh", opacity: 0, scaleX: 0.3 },
                    { x: "0vw", y: "-3vh", opacity: 0.5, scaleX: 1, duration: 1 }
                )
                .to(trailRef.current, { x: "30vw", y: "5vh", opacity: 0.4, duration: 1 })
                .to(trailRef.current, { x: "60vw", y: "-6vh", opacity: 0.3, duration: 1 })
                .to(trailRef.current, { x: "108vw", y: "4vh", opacity: 0, duration: 0.6 });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-32 pointer-events-none -my-16 z-30 overflow-hidden"
        >
            {/* Paper plane */}
            <div ref={planeRef} className="absolute top-1/2 left-0">
                <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="drop-shadow-lg"
                >
                    <defs>
                        <linearGradient id="planeGrad" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#6C3FA0" />
                            <stop offset="100%" stopColor="#00B8D4" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                        fill="url(#planeGrad)"
                    />
                </svg>
                {/* Sparkle particles around plane */}
                <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-school-gold/60 animate-ping" />
                <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 rounded-full bg-school-cyan/60 animate-ping [animation-delay:0.3s]" />
            </div>

            {/* Trail (dashed line) */}
            <div
                ref={trailRef}
                className="absolute top-1/2 left-0 w-40 h-[2px] opacity-0"
            >
                <div className="w-full h-full bg-gradient-to-l from-school-purple/40 via-school-cyan/30 to-transparent rounded-full" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-school-gold/20 to-transparent rounded-full translate-y-1 blur-sm" />
            </div>
        </div>
    );
}
