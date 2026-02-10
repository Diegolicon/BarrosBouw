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
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Função para fechar o menu ao clicar em um link
    const closeMenu = () => setIsOpen(false);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
                isScrolled 
                ? 'bg-[#0f0f0f]/95 backdrop-blur-md py-3 shadow-2xl border-b border-white/5' 
                : 'bg-transparent py-6'
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">

                {/* Logo */}
                <Link href="/" className="relative z-[120]">
                    <img 
                        src="/images/logo_final.png" 
                        alt="Logo"
                        className="h-16 md:h-20 w-auto transition-all" // h-25 costuma ser muito grande, ajustado para h-20
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8 items-center">
                    {['Home', 'Serviços', 'Galeria', 'Contato'].map((item) => (
                        <Link 
                            key={item}
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

                {/* Mobile Toggle - Z-index alto para ficar acima do overlay */}
                <div className="md:hidden relative z-[120]">
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

            {/* Mobile Menu Overlay - Corrigido Z-index e Visibilidade */}
            <div className={`fixed inset-0 bg-[#0f0f0f] z-[110] flex flex-col items-center justify-center space-y-8 transition-all duration-500 md:hidden ${
                isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
            }`}>
                {['Home', 'Serviços', 'Galeria', 'Contato'].map((item) => (
                    <Link 
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={closeMenu}
                        className="text-2xl uppercase tracking-[0.3em] font-bold text-white hover:text-[#c5a47e]"
                    >
                        {item}
                    </Link>
                ))}
                <Link
                    href="https://wa.me/31687111175"
                    onClick={closeMenu}
                    className="bg-[#c5a47e] text-black font-black py-4 px-10 uppercase tracking-widest rounded-sm"
                >
                    Free Estimate
                </Link>
            </div>
        </nav>
    );
}