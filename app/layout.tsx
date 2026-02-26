import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const dmSans = DM_Sans({
  variable: "--font-heading-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-sans-var",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vidya Vihar Convent High School | Chandrapur - Love, Joy, Service",
  description:
    "Vidya Vihar Convent High School, Chandrapur – Nurturing young minds with love, joy, and service since inception. Admissions open for the 2025-26 academic session.",
  keywords: [
    "Vidya Vihar",
    "Convent High School",
    "Chandrapur",
    "CBSE School",
    "Best School Chandrapur",
    "Admissions",
  ],
  openGraph: {
    title: "Vidya Vihar Convent High School | Chandrapur",
    description:
      "Best school in Chandrapur – Love, Joy, Service. Admissions open.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${inter.variable} font-sans antialiased overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
