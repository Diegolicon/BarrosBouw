"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        
        // Trava o scroll quando o menu abrir para não "vazar" fundo branco
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Serviços', href: '#servicos' },
        { name: 'Galeria', href: '#galeria' },
        { name: 'Contato', href: '#contato' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
                isScrolled || isOpen
                ? 'bg-[#0f0f0f] shadow-2xl py-3' 
                : 'bg-[#0f0f0f]/10 backdrop-blur-sm py-5' // Substituí transparent por um preto quase invisível
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="relative z-[10001]" onClick={() => setIsOpen(false)}>
                    <img src="/images/logo_final.png" alt="Logo" className="h-14 md:h-16 w-auto object-contain" />
                </Link>

                {/* Desktop */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-300 hover:text-[#c5a47e] transition-colors">
                            {link.name}
                        </Link>
                    ))}
                    <Link href="https://wa.me/31687111175" className="bg-[#c5a47e] hover:bg-white text-black text-[11px] uppercase tracking-widest font-black py-3 px-6 rounded-sm transition-all">
                        Free Estimate
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden relative z-[10001]">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 focus:outline-none">
                        <div className="w-6 h-5 flex flex-col justify-between items-end">
                            <span className={`h-[2px] bg-[#c5a47e] transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-[9px]' : 'w-6'}`}></span>
                            <span className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`}></span>
                            <span className={`h-[2px] bg-[#c5a47e] transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-[9px]' : 'w-5'}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* MENU MOBILE - Forçado Fullscreen e Cor Sólida */}
            <div className={`fixed inset-0 min-h-screen w-full bg-[#0f0f0f] z-[10000] flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
                isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
            }`}>
                <div className="flex flex-col items-center space-y-10">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.href} 
                            onClick={() => setIsOpen(false)}
                            className="text-3xl uppercase tracking-[0.3em] font-bold text-white hover:text-[#c5a47e]"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="https://wa.me/31687111175"
                        onClick={() => setIsOpen(false)}
                        className="bg-[#c5a47e] text-black font-black py-5 px-12 uppercase tracking-widest text-sm rounded-sm"
                    >
                        Free Estimate
                    </Link>
                </div>
            </div>
        </nav>
    );
}