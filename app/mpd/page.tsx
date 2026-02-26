"use client";

import { motion } from "framer-motion";
import { FileText, Download, ExternalLink, ShieldCheck } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const generalInfo = [
    { sno: 1, info: "Name of the School", detail: "Vidya Vihar Convent High School" },
    { sno: 2, info: "Affiliation No.", detail: "To be updated" },
    { sno: 3, info: "School Code", detail: "To be updated" },
    { sno: 4, info: "Complete Address", detail: "Chandrapur, Maharashtra, India" },
    { sno: 5, info: "Principal Name", detail: "To be updated" },
    { sno: 6, info: "School Email ID", detail: "vidyaviharchanda@gmail.com" },
    { sno: 7, info: "Contact Details", detail: "+91 9850066667" },
];

const documentsInfo = [
    { sno: 1, document: "Copies of Affiliation / Upgradation Letter", status: "Available" },
    { sno: 2, document: "Copies of Societies / Trust / Company Registration", status: "Available" },
    { sno: 3, document: "Copy of No Objection Certificate (NOC)", status: "Available" },
    { sno: 4, document: "Copies of Recognition Certificate under RTE Act", status: "Available" },
    { sno: 5, document: "Copy of Valid Building Safety Certificate", status: "Available" },
    { sno: 6, document: "Copy of Valid Fire Safety Certificate", status: "Available" },
    { sno: 7, document: "Copy of Valid Water, Health and Sanitation Certificates", status: "Available" },
    { sno: 8, document: "Copy of DEO Certificate", status: "Available" },
];

const resultAcademics = [
    { sno: 1, info: "Fee Structure of the School", detail: "Available on Request" },
    { sno: 2, info: "Annual Academic Calendar", detail: "Available on Request" },
    { sno: 3, info: "List of School Management Committee (SMC)", detail: "Available" },
    { sno: 4, info: "List of Parents Teachers Association (PTA) Members", detail: "Available" },
    { sno: 5, info: "Last Three Year Result of Board Examination", detail: "100% Pass Rate" },
];

const staffInfo = [
    { sno: 1, info: "Principal", detail: "Post Graduate + B.Ed" },
    { sno: 2, info: "Total No. of Teachers", detail: "64+" },
    { sno: 3, info: "PGT", detail: "As per CBSE norms" },
    { sno: 4, info: "TGT", detail: "As per CBSE norms" },
    { sno: 5, info: "PRT", detail: "As per CBSE norms" },
    { sno: 6, info: "Teachers Section Ratio", detail: "1:30 (Approx)" },
];

const infrastructure = [
    { sno: 1, info: "Total Campus Area", detail: "As per CBSE norms" },
    { sno: 2, info: "No. and Size of Classrooms", detail: "Well-ventilated, modern classrooms" },
    { sno: 3, info: "No. and Size of Laboratories", detail: "Physics, Chemistry, Biology, Computer Labs" },
    { sno: 4, info: "Internet Facility", detail: "Yes (High-speed Broadband)" },
    { sno: 5, info: "No. of Girls Toilets", detail: "As per CBSE norms" },
    { sno: 6, info: "No. of Boys Toilets", detail: "As per CBSE norms" },
    { sno: 7, info: "Library", detail: "Yes – Fully Stocked" },
    { sno: 8, info: "Playground", detail: "Yes – Spacious" },
];

function MPDTable({
    data,
    columns,
}: {
    data: Array<Record<string, string | number>>;
    columns: { key: string; label: string }[];
}) {
    return (
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <Table>
                <TableHeader>
                    <TableRow className="bg-secondary/50 hover:bg-secondary/50">
                        {columns.map((col) => (
                            <TableHead
                                key={col.key}
                                className="font-heading font-bold text-foreground text-sm py-4"
                            >
                                {col.label}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((row, i) => (
                        <TableRow
                            key={i}
                            className="hover:bg-secondary/30 transition-colors"
                        >
                            {columns.map((col) => (
                                <TableCell key={col.key} className="py-4 text-sm">
                                    {col.key === "status" ? (
                                        <Badge
                                            variant="secondary"
                                            className="bg-school-green/10 text-school-green border-school-green/20"
                                        >
                                            {String(row[col.key])}
                                        </Badge>
                                    ) : (
                                        String(row[col.key])
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default function MPDPage() {
    return (
        <>
            {/* Page Hero */}
            <section className="relative overflow-hidden pt-20 pb-16">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 left-1/3 w-80 h-80 bg-school-purple/8 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-school-gold/8 rounded-full blur-3xl" />
                </div>
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-school-green/10 text-school-green border border-school-green/20 text-sm font-medium">
                            <ShieldCheck className="w-4 h-4" />
                            CBSE Compliance
                        </div>
                        <h1 className="font-heading text-4xl lg:text-5xl font-extrabold">
                            Mandatory Public{" "}
                            <span className="text-gradient">Disclosure</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            As per CBSE requirements, the following information is made
                            available for public access in line with transparency and
                            accountability standards.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* MPD Content */}
            <section className="py-16">
                <div className="max-w-5xl mx-auto px-6">
                    <Tabs defaultValue="general" className="space-y-8">
                        <TabsList className="flex flex-wrap gap-2 bg-transparent justify-center h-auto p-0">
                            {[
                                { value: "general", label: "General Info" },
                                { value: "documents", label: "Documents" },
                                { value: "results", label: "Results & Academics" },
                                { value: "staff", label: "Staff" },
                                { value: "infrastructure", label: "Infrastructure" },
                            ].map((tab) => (
                                <TabsTrigger
                                    key={tab.value}
                                    value={tab.value}
                                    className="rounded-full px-5 py-2.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg border border-border data-[state=active]:border-transparent transition-all"
                                >
                                    {tab.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        <TabsContent value="general">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <MPDTable
                                    data={generalInfo}
                                    columns={[
                                        { key: "sno", label: "S.No." },
                                        { key: "info", label: "Information" },
                                        { key: "detail", label: "Details" },
                                    ]}
                                />
                            </motion.div>
                        </TabsContent>

                        <TabsContent value="documents">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <MPDTable
                                    data={documentsInfo}
                                    columns={[
                                        { key: "sno", label: "S.No." },
                                        { key: "document", label: "Document" },
                                        { key: "status", label: "Status" },
                                    ]}
                                />
                            </motion.div>
                        </TabsContent>

                        <TabsContent value="results">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <MPDTable
                                    data={resultAcademics}
                                    columns={[
                                        { key: "sno", label: "S.No." },
                                        { key: "info", label: "Information" },
                                        { key: "detail", label: "Details" },
                                    ]}
                                />
                            </motion.div>
                        </TabsContent>

                        <TabsContent value="staff">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <MPDTable
                                    data={staffInfo}
                                    columns={[
                                        { key: "sno", label: "S.No." },
                                        { key: "info", label: "Information" },
                                        { key: "detail", label: "Details" },
                                    ]}
                                />
                            </motion.div>
                        </TabsContent>

                        <TabsContent value="infrastructure">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <MPDTable
                                    data={infrastructure}
                                    columns={[
                                        { key: "sno", label: "S.No." },
                                        { key: "info", label: "Information" },
                                        { key: "detail", label: "Details" },
                                    ]}
                                />
                            </motion.div>
                        </TabsContent>
                    </Tabs>

                    {/* Download Notice */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 bg-school-gold/10 border border-school-gold/20 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                    >
                        <div className="w-12 h-12 rounded-xl bg-school-gold/20 flex items-center justify-center flex-shrink-0">
                            <FileText className="w-6 h-6 text-school-gold" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-heading font-bold text-sm mb-1">
                                Need Official Documents?
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                For official copies of any documents mentioned above, please
                                contact the school office directly at{" "}
                                <a
                                    href="tel:+919850066667"
                                    className="text-school-purple dark:text-school-cyan font-medium hover:underline"
                                >
                                    +91 9850066667
                                </a>{" "}
                                or email{" "}
                                <a
                                    href="mailto:vidyaviharchanda@gmail.com"
                                    className="text-school-purple dark:text-school-cyan font-medium hover:underline"
                                >
                                    vidyaviharchanda@gmail.com
                                </a>
                                .
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
