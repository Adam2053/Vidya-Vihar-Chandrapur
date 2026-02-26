"use client";

import { motion } from "framer-motion";
import {
    Eye,
    Target,
    Heart,
    Star,
    Users,
    BookOpen,
    GraduationCap,
    Award,
    MessageCircle,
} from "lucide-react";

const values = [
    {
        icon: Heart,
        title: "Love",
        description: "We nurture every child with warmth, care, and understanding.",
        color: "text-school-maroon",
        bg: "bg-school-maroon/10",
    },
    {
        icon: Star,
        title: "Joy",
        description: "Learning is a joyful journey of discovery and wonder.",
        color: "text-school-gold",
        bg: "bg-school-gold/10",
    },
    {
        icon: Users,
        title: "Service",
        description: "We inspire students to serve the community selflessly.",
        color: "text-school-blue",
        bg: "bg-school-blue/10",
    },
];

const timeline = [
    {
        year: "Foundation",
        title: "The Beginning",
        description:
            "Vidya Vihar Convent High School was founded in Chandrapur with a vision to provide quality education rooted in values of Love, Joy, and Service.",
    },
    {
        year: "Growth",
        title: "Expanding Horizons",
        description:
            "The school expanded its infrastructure with modern science labs, a comprehensive library, and sports facilities to provide holistic education.",
    },
    {
        year: "Excellence",
        title: "Academic Milestones",
        description:
            "Year after year, the school maintained a stellar 100% board result record, cementing its reputation as the best school in Chandrapur.",
    },
    {
        year: "Present",
        title: "2500+ Students Strong",
        description:
            "Today, with 64+ experienced teachers and state-of-the-art facilities, we continue to shape the future leaders of tomorrow.",
    },
];

export default function AboutPage() {
    return (
        <>
            {/* Page Hero */}
            <section className="relative overflow-hidden pt-20 pb-16">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-school-purple/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-school-cyan/10 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <span className="text-sm font-medium text-school-gold uppercase tracking-wider">
                            About Our Legacy
                        </span>
                        <h1 className="font-heading text-4xl lg:text-5xl font-extrabold">
                            Where{" "}
                            <span className="text-gradient">Dreams</span> Take Flight
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            For years, Vidya Vihar Convent High School has been a beacon of
                            excellence in Chandrapur, nurturing generations of confident and
                            compassionate individuals.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <h2 className="font-heading text-3xl font-extrabold">
                            Our Core <span className="text-gradient">Values</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, i) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                whileHover={{ y: -6 }}
                                className="text-center"
                            >
                                <div className="bg-card border border-border rounded-3xl p-8 hover:shadow-xl transition-all duration-500">
                                    <div
                                        className={`w-16 h-16 rounded-2xl ${value.bg} flex items-center justify-center mx-auto mb-5`}
                                    >
                                        <value.icon className={`w-8 h-8 ${value.color}`} />
                                    </div>
                                    <h3 className="font-heading text-xl font-bold mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        {value.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision & Mission full */}
            <section className="py-16 bg-secondary/30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-card border border-border rounded-3xl p-8 lg:p-10"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-school-purple to-school-maroon flex items-center justify-center mb-6 shadow-lg">
                                <Eye className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="font-heading text-2xl font-bold mb-4">
                                Our Vision
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                To be a centre of academic excellence and holistic development,
                                nurturing students to become responsible, compassionate, and
                                innovative global citizens who contribute positively to society
                                through the values of{" "}
                                <strong className="text-foreground">
                                    Love, Joy, and Service
                                </strong>
                                .
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="bg-card border border-border rounded-3xl p-8 lg:p-10"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-school-gold to-school-orange flex items-center justify-center mb-6 shadow-lg">
                                <Target className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="font-heading text-2xl font-bold mb-4">
                                Our Mission
                            </h3>
                            <ul className="space-y-3 text-muted-foreground leading-relaxed">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-school-gold mt-2 flex-shrink-0" />
                                    Provide a stimulating learning environment fostering intellectual
                                    curiosity and creative thinking.
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-school-gold mt-2 flex-shrink-0" />
                                    Develop strong moral character and social responsibility through
                                    value-based education.
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-school-gold mt-2 flex-shrink-0" />
                                    Empower every student with life skills and confidence to succeed
                                    in a rapidly changing world.
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16">
                <div className="max-w-3xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <h2 className="font-heading text-3xl font-extrabold">
                            Our <span className="text-gradient">Journey</span>
                        </h2>
                    </motion.div>

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-school-purple via-school-gold to-school-cyan" />

                        <div className="space-y-10">
                            {timeline.map((item, i) => (
                                <motion.div
                                    key={item.year}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-6"
                                >
                                    {/* Dot */}
                                    <div className="flex-shrink-0 w-16 flex justify-center">
                                        <div className="w-4 h-4 rounded-full bg-school-purple dark:bg-school-cyan border-4 border-background shadow-lg mt-1.5" />
                                    </div>

                                    {/* Content */}
                                    <div className="bg-card border border-border rounded-2xl p-6 flex-1 hover:shadow-lg transition-shadow">
                                        <span className="text-xs font-semibold text-school-gold uppercase tracking-wider">
                                            {item.year}
                                        </span>
                                        <h4 className="font-heading font-bold text-lg mt-1 mb-2">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Principal's Message */}
            <section className="py-16 bg-secondary/30">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-card border border-border rounded-3xl p-8 lg:p-12 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-school-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-school-purple to-school-maroon flex items-center justify-center">
                                    <MessageCircle className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-xl font-bold">
                                        Principal&apos;s Message
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        A word from our leadership
                                    </p>
                                </div>
                            </div>

                            <blockquote className="text-muted-foreground leading-relaxed text-base italic border-l-4 border-school-gold pl-6">
                                &ldquo;At Vidya Vihar Convent High School, we believe that
                                education is not merely the acquisition of knowledge but the
                                transformation of lives. Our dedicated team of teachers and
                                state-of-the-art facilities ensure that every child who walks
                                through our doors leaves as a confident, compassionate, and
                                capable individual, ready to make a positive impact on the
                                world.&rdquo;
                            </blockquote>
                            <p className="mt-4 font-heading font-semibold text-sm">
                                — The Principal, VVCHS Chandrapur
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
