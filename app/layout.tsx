import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "SCV Supply Chain Solutions | Optimizing Your Supply Chain for Tomorrow",
    description: "SCV delivers innovative supply chain solutions with confidence, clarity, and insight. We streamline operations, enhance efficiency, and drive growth in a rapidly changing world.",
    keywords: ["supply chain", "logistics", "optimization", "supply chain management", "consulting", "efficiency", "analytics"],
    authors: [{ name: "SCV Supply Chain Solutions" }],
    openGraph: {
        title: "SCV Supply Chain Solutions",
        description: "Optimizing Your Supply Chain for Tomorrow",
        type: "website",
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`font-sans ${plusJakartaSans.className}`}>
            <body className="antialiased">
                <ThemeProvider>
                    <Header />
                    <main className="min-h-screen">
                        {children}
                    </main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
