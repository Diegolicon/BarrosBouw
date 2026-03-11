import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSClient from "@/components/AOSClient";
import FloatingButtons from "@/components/FloatingButtons";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "BARROS BOUW",
    description: "Uw partner voor complete renovaties en bouwprojecten in Nederland.",
    themeColor: "#000000", 
    alternates: {
        canonical: 'https://barrosbouw.nl',
    },
    // O Next.js detectará o icon.png automaticamente na pasta app. 
    // Se quiser garantir, pode adicionar:
    icons: {
      icon: '/icon.png',
      apple: '/icon.png',
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="nl"> {/* Mudei para 'nl' (holandês) para ajudar no SEO local */}
            <body className={inter.className}>
                <Navbar />
                <AOSClient />
                <main>{children}</main>
                <FloatingButtons />
                <Footer />
            </body>
            <GoogleAnalytics gaId="G-LBWXKMN1HK"/>
        </html>
    );
}