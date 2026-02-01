// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSClient from "@/components/AOSClient";
import FloatingButtons from "@/components/FloatingButtons"; // 1. Importe o novo componente

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "BARROS BOUW",
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
                
                <AOSClient />

                {/* O {children} é o conteúdo da sua página */}
                <main>
                    {children}
                </main>

                {/* 2. BOTÕES FLUTUANTES (Ficam sobrepostos a tudo) */}
                <FloatingButtons />

                {/* O Footer no final do body */}
                <Footer />
            </body>
        </html>
    );
}