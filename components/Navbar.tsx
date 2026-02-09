"use client";

import Services from '@/components/Services';

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
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
                isScrolled 
                ? 'bg-[#0f0f0f]/95 backdrop-blur-md py-3 shadow-2xl border-b border-white/5' 
                : 'bg-transparent py-6'
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">

                {/* Logo Estilizado */}
                <Link href="/" className="group">
                    <span className="text-xl md:text-2xl font-black tracking-tighter text-white">
                        <img 
                            src="/images/logo_final.png"
                            className="h-25"/>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8 items-center">
                    {['Home', 'Serviços', 'Galeria', 'Contato'].map((item) => (
                        <Link 
                            key={item}
                            // Lógica: se for Home vai para #home, senão vai para #servicos, #galeria, etc.
                            href={`#${item.toLowerCase()}`} 
                            className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-300 hover:text-[#c5a47e] transition-colors"
                        >
                            {item}
                        </Link>
                    ))}

                    <Link
                        href="https://wa.me/31687111175"
                        className="bg-[#c5a47e] hover:bg-white text-black text-[11px] uppercase tracking-widest font-black py-3 px-6 rounded-sm transition-all duration-300"
                    >
                        Free Estimate
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="text-white p-2 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between items-end">
                            <span className={`h-[2px] bg-[#c5a47e] transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-[9px]' : 'w-6'}`}></span>
                            <span className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`}></span>
                            <span className={`h-[2px] bg-[#c5a47e] transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-[9px]' : 'w-5'}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-[#0f0f0f] z-[-1] flex flex-col items-center justify-center space-y-8 transition-all duration-500 md:hidden ${
                isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
                {['Home', 'Serviços', 'Galeria', 'Contato'].map((item) => (
                    <Link 
                        key={item}
                        href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                        onClick={() => setIsOpen(false)}
                        className="text-2xl uppercase tracking-[0.3em] font-bold text-white hover:text-[#c5a47e]"
                    >
                        {item}
                    </Link>
                ))}
                <Link
                    href="/contato"
                    onClick={() => setIsOpen(false)}
                    className="bg-[#c5a47e] text-black font-black py-4 px-10 uppercase tracking-widest"
                >
                    Free Estimate
                </Link>
            </div>
        </nav>
    );
}