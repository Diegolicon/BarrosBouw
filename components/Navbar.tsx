"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Fecha o menu se a tela for redimensionada para desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsOpen(false);
        };
        window.addEventListener('resize', handleResize);
        
        // Bloqueia o scroll do corpo quando o menu está aberto
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Serviços', href: '#servicos' },
        { name: 'Galeria', href: '#galeria' },
        { name: 'Contato', href: '#contato' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
                isScrolled 
                ? 'bg-[#0f0f0f]/95 backdrop-blur-md py-3 shadow-2xl' 
                : 'bg-transparent py-6'
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="relative z-[1100]">
                    <img src="/images/logo_final.png" alt="Logo" className="h-16 md:h-20 w-auto" />
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
                <div className="md:hidden relative z-[1100]">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 outline-none">
                        <div className="w-6 h-5 flex flex-col justify-between items-end">
                            <span className={`h-[2px] bg-[#c5a47e] transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-[9px]' : 'w-6'}`}></span>
                            <span className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`}></span>
                            <span className={`h-[2px] bg-[#c5a47e] transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-[9px]' : 'w-5'}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* OVERLAY DO MENU MOBILE - O segredo está aqui */}
            <div className={`fixed inset-0 w-full h-screen bg-[#0f0f0f] z-[1050] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out md:hidden ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <div className="flex flex-col items-center space-y-8">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.href} 
                            onClick={() => setIsOpen(false)}
                            className="text-2xl uppercase tracking-[0.3em] font-bold text-white hover:text-[#c5a47e]"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="https://wa.me/31687111175"
                        onClick={() => setIsOpen(false)}
                        className="bg-[#c5a47e] text-black font-black py-4 px-10 uppercase tracking-widest text-sm"
                    >
                        Free Estimate
                    </Link>
                </div>
            </div>
        </nav>
    );
}