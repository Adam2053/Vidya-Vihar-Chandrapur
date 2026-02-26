"use client";

import { motion } from "framer-motion";
import {
    BookOpen,
    FlaskConical,
    Volleyball,
    MonitorPlay,
    Music2,
    Leaf,
    Bus,
    ShieldCheck,
    Utensils,
} from "lucide-react";

const mainFacilities = [
    {
        title: "Library",
        description:
            "The school library is a hub of knowledge, offering a vast collection of books, reference materials, magazines, and digital resources. It is a quiet, comfortable space that encourages a love for reading and independent study. The library is equipped with computers and internet access, allowing students to explore a wide range of online resources. Regular library sessions and activities are organized to develop research skills and foster a culture of reading.",
        icon: BookOpen,
        gradient: "from-school-purple to-indigo-500",
    },
    {
        title: "Science Laboratories",
        description:
            "Our state-of-the-art science laboratories are equipped with modern instruments and apparatus for Physics, Chemistry, and Biology experiments. Students get hands-on experience with practical demonstrations and experiments that reinforce theoretical concepts. Safety protocols are strictly maintained, and trained lab assistants guide students through every experiment.",
        icon: FlaskConical,
        gradient: "from-school-blue to-sky-400",
    },
    {
        title: "Playground & Sports",
        description:
            "The school playground is a large, safe, and well-maintained area designed for outdoor activities and play. It is equipped with age-appropriate play structures, swings, slides, and climbing frames. The playground provides ample space for children to engage in physical activities, socialize, and have fun. Regular supervision ensures safety while developing motor skills and social interactions.",
        icon: Volleyball,
        gradient: "from-school-green to-emerald-500",
    },
    {
        title: "Smart Classrooms",
        description:
            "Technology-enhanced learning environments with digital boards, projectors, and interactive tools that transform traditional teaching into immersive learning experiences. Our smart classrooms encourage collaborative learning, digital literacy, and active student participation through multimedia presentations and educational software.",
        icon: MonitorPlay,
        gradient: "from-school-gold to-amber-500",
    },
];

const additionalFacilities = [
    { title: "Music Room", icon: Music2, color: "text-school-maroon", bg: "bg-school-maroon/10" },
    { title: "Green Campus", icon: Leaf, color: "text-school-green", bg: "bg-school-green/10" },
    { title: "School Transport", icon: Bus, color: "text-school-blue", bg: "bg-school-blue/10" },
    { title: "Security & CCTV", icon: ShieldCheck, color: "text-school-purple", bg: "bg-school-purple/10" },
    { title: "Canteen", icon: Utensils, color: "text-school-orange", bg: "bg-school-orange/10" },
    { title: "Digital Learning", icon: MonitorPlay, color: "text-school-gold", bg: "bg-school-gold/10" },
];

export default function FacilitiesPage() {
    return (
        <>
            {/* Page Hero */}
            <section className="relative overflow-hidden pt-20 pb-16">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 right-1/4 w-80 h-80 bg-school-cyan/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-school-gold/10 rounded-full blur-3xl" />
                </div>
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <span className="text-sm font-medium text-school-gold uppercase tracking-wider">
                            Our Infrastructure
                        </span>
                        <h1 className="font-heading text-4xl lg:text-5xl font-extrabold">
                            World-Class{" "}
                            <span className="text-gradient">Facilities</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Modern infrastructure designed to provide the best learning
                            environment for every student at Vidya Vihar.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main facilities */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 space-y-10">
                    {mainFacilities.map((facility, i) => (
                        <motion.div
                            key={facility.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group"
                        >
                            <div
                                className={`bg-card border border-border rounded-3xl p-8 lg:p-10 hover:shadow-xl transition-all duration-500 grid md:grid-cols-[auto_1fr] gap-8 items-start ${i % 2 === 1 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                <div
                                    className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${facility.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                                >
                                    <facility.icon className="w-10 h-10 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-2xl font-bold mb-3">
                                        {facility.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {facility.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Additional facilities grid */}
            <section className="py-16 bg-secondary/30">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="font-heading text-3xl font-extrabold">
                            Additional <span className="text-gradient">Amenities</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {additionalFacilities.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                whileHover={{ y: -4, scale: 1.02 }}
                                className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
                            >
                                <div
                                    className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mx-auto mb-4`}
                                >
                                    <item.icon className={`w-7 h-7 ${item.color}`} />
                                </div>
                                <h4 className="font-heading font-semibold text-sm">
                                    {item.title}
                                </h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
