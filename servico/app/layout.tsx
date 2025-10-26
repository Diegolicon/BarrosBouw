// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 1. IMPORTE O NAVBAR (já deve estar aqui)
import Navbar from "@/components/Navbar";
// 2. IMPORTE O FOOTER
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "BARROS BOUW",
    description: "Construindo o site fcflooring.pro com Next.js",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>

        {/* O Navbar fica no topo */}
        <Navbar />

        {/* O {children} é o conteúdo da sua página */}
        {children}

        {/* 3. ADICIONE O FOOTER AQUI (no final do body) */}
        <Footer />

        </body>
        </html>
    );
}