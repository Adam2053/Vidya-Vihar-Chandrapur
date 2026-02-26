"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
    { src: "/gallery-playground.jpg", alt: "School Playground & Campus", caption: "Our Campus", tag: "Campus" },
    { src: "/gallery-classroom.jpg", alt: "Smart Classroom with computers", caption: "Smart Classrooms", tag: "Academics" },
    { src: "/gallery-library.jpg", alt: "School Library with books", caption: "Library", tag: "Learning" },
    { src: "/gallery-assembly.jpg", alt: "Morning Assembly", caption: "Morning Assembly", tag: "Culture" },
];

export function Gallery() {
    const sectionRef = useRef<HTMLElement>(null);
    const [activeIdx, setActiveIdx] = useState(0);

    const next = () => setActiveIdx((prev) => (prev + 1) % galleryImages.length);
    const prev = () => setActiveIdx((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".gallery-header-line", {
                scrollTrigger: {
                    trigger: ".gallery-header-line",
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: "power3.out",
            });

            gsap.from(".gallery-grid-item", {
                scrollTrigger: {
                    trigger: ".gallery-grid",
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                y: 60,
                opacity: 0,
                scale: 0.92,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Auto advance
    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section ref={sectionRef} className="py-24 overflow-hidden relative bg-[#FDF8F3] dark:bg-[#13101a]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                    <div className="space-y-3">
                        <div className="gallery-header-line flex items-center gap-2 text-school-maroon dark:text-school-gold">
                            <Camera className="w-5 h-5" />
                            <span className="text-sm font-semibold uppercase tracking-widest">
                                Campus Life
                            </span>
                        </div>
                        <h2 className="gallery-header-line font-heading text-3xl lg:text-5xl font-extrabold text-foreground leading-tight">
                            A glimpse into our{" "}
                            <span className="text-gradient">campus</span>
                        </h2>
                        <p className="gallery-header-line text-muted-foreground max-w-md text-base">
                            Explore our world-class facilities, vibrant campus life, and the spaces where future leaders are shaped.
                        </p>
                    </div>
                    <div className="gallery-header-line flex items-center gap-3">
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full w-10 h-10 border-2"
                            onClick={prev}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full w-10 h-10 border-2"
                            onClick={next}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                {/* Bento Grid Gallery */}
                <div className="gallery-grid grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5 auto-rows-[220px] lg:auto-rows-[260px]">
                    {/* Hero / feature image - large */}
                    <div className="gallery-grid-item md:col-span-7 md:row-span-2 relative rounded-[1.5rem] overflow-hidden group cursor-pointer">
                        <Image
                            src={galleryImages[activeIdx].src}
                            alt={galleryImages[activeIdx].alt}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 58vw"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                        {/* Caption */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-3">
                                {galleryImages[activeIdx].tag}
                            </span>
                            <h3 className="font-heading text-2xl lg:text-3xl font-extrabold text-white drop-shadow-lg">
                                {galleryImages[activeIdx].caption}
                            </h3>
                        </div>

                        {/* Progress dots */}
                        <div className="absolute top-5 right-5 flex gap-2">
                            {galleryImages.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIdx(i)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === activeIdx
                                            ? "bg-white scale-125 shadow-lg"
                                            : "bg-white/40 hover:bg-white/60"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Side thumbnails */}
                    {galleryImages
                        .filter((_, i) => i !== activeIdx)
                        .slice(0, 3)
                        .map((img, i) => {
                            const originalIdx = galleryImages.findIndex((g) => g.src === img.src);
                            return (
                                <div
                                    key={img.src}
                                    className={`gallery-grid-item md:col-span-5 relative rounded-[1.5rem] overflow-hidden group cursor-pointer ${i === 0 ? "md:row-span-1" : ""
                                        }`}
                                    onClick={() => setActiveIdx(originalIdx)}
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, 42vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Label on hover */}
                                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider">
                                            {img.tag}
                                        </span>
                                        <p className="text-white font-heading font-bold text-base mt-2 drop-shadow-lg">
                                            {img.caption}
                                        </p>
                                    </div>

                                    {/* Subtle border highlight on hover */}
                                    <div className="absolute inset-0 rounded-[1.5rem] border-2 border-white/0 group-hover:border-white/30 transition-colors duration-500 pointer-events-none" />
                                </div>
                            );
                        })}
                </div>
            </div>
        </section>
    );
}
