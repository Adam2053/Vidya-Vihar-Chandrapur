"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    CheckCircle,
    MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
    {
        icon: Phone,
        label: "Phone",
        value: "+91 9850066667",
        href: "tel:+919850066667",
        color: "from-school-purple to-school-maroon",
        bg: "bg-school-purple/10",
    },
    {
        icon: Mail,
        label: "Email",
        value: "vidyaviharchanda@gmail.com",
        href: "mailto:vidyaviharchanda@gmail.com",
        color: "from-school-blue to-sky-400",
        bg: "bg-school-blue/10",
    },
    {
        icon: MapPin,
        label: "Address",
        value: "Chandrapur, Maharashtra, India",
        href: "https://maps.google.com/?q=Vidya+Vihar+Convent+High+School+Chandrapur",
        color: "from-school-green to-emerald-400",
        bg: "bg-school-green/10",
    },
    {
        icon: Clock,
        label: "Office Hours",
        value: "Mon - Sat: 8:00 AM - 4:00 PM",
        href: null,
        color: "from-school-gold to-amber-400",
        bg: "bg-school-gold/10",
    },
];

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <>
            {/* Page Hero */}
            <section className="relative overflow-hidden pt-20 pb-16">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 right-1/4 w-80 h-80 bg-school-cyan/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-school-purple/10 rounded-full blur-3xl" />
                </div>
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <span className="text-sm font-medium text-school-gold uppercase tracking-wider">
                            Get in Touch
                        </span>
                        <h1 className="font-heading text-4xl lg:text-5xl font-extrabold">
                            We&apos;d love to{" "}
                            <span className="text-gradient">hear from you</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Whether you have questions about admissions, want to visit our
                            campus, or simply need more information — we&apos;re here to help.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact cards */}
            <section className="py-8">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -4 }}
                            >
                                {item.href ? (
                                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                                        <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 h-full">
                                            <div
                                                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}
                                            >
                                                <item.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">
                                                {item.label}
                                            </p>
                                            <p className="font-heading font-semibold text-sm">
                                                {item.value}
                                            </p>
                                        </div>
                                    </a>
                                ) : (
                                    <div className="bg-card border border-border rounded-2xl p-6 h-full">
                                        <div
                                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}
                                        >
                                            <item.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">
                                            {item.label}
                                        </p>
                                        <p className="font-heading font-semibold text-sm">
                                            {item.value}
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form + Map */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-10">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-card border border-border rounded-3xl p-8 lg:p-10"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-school-purple to-school-maroon flex items-center justify-center shadow-lg">
                                    <MessageCircle className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-xl font-bold">
                                        Send us a Message
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        We&apos;ll get back to you within 24 hours
                                    </p>
                                </div>
                            </div>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-16 text-center"
                                >
                                    <CheckCircle className="w-16 h-16 text-school-green mb-4" />
                                    <h4 className="font-heading text-xl font-bold mb-2">
                                        Message Sent!
                                    </h4>
                                    <p className="text-muted-foreground text-sm">
                                        Thank you for reaching out. We&apos;ll respond shortly.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="John Doe"
                                                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-school-purple/30 focus:border-school-purple outline-none transition-all text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                placeholder="+91 98500 66667"
                                                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-school-purple/30 focus:border-school-purple outline-none transition-all text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="you@example.com"
                                            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-school-purple/30 focus:border-school-purple outline-none transition-all text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Subject
                                        </label>
                                        <select className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-school-purple/30 focus:border-school-purple outline-none transition-all text-sm">
                                            <option>Admission Enquiry</option>
                                            <option>General Query</option>
                                            <option>Fee Structure</option>
                                            <option>Career Opportunities</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            rows={4}
                                            required
                                            placeholder="Tell us how we can help..."
                                            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-school-purple/30 focus:border-school-purple outline-none transition-all text-sm resize-none"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full rounded-xl bg-gradient-to-r from-school-purple to-school-maroon text-white hover:opacity-90 shadow-lg shadow-school-purple/20 group text-base"
                                    >
                                        Send Message
                                        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </form>
                            )}
                        </motion.div>

                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="rounded-3xl overflow-hidden border border-border shadow-lg h-[500px] lg:h-auto"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.5!2d79.2961!3d19.9615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU3JzQxLjQiTiA3OcKwMTcnNDUuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: "500px" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Vidya Vihar Convent High School Location"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
