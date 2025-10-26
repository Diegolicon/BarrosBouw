// components/Navbar.tsx

// 1. Precisamos marcar como "client component" para usar Hooks
// (useState, useEffect) no App Router do Next.js
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link'; // Componente do Next.js para links

/* * Documentação do Componente Navbar
 * * Objetivo: Criar um menu de navegação que fica no topo de todas as páginas.
 * * * Funcionalidades:
 * - Fica transparente no topo e sólido (escuro) após rolar a página.
 * - Links de navegação para Home, Serviços, Galeria e Contato.
 * - Botão CTA (Call to Action) "Free Estimate".
 * - Menu "hambúrguer" responsivo para dispositivos móveis.
*/
export default function Navbar() {
    // 2. Estado para controlar o menu mobile (aberto/fechado)
    const [isOpen, setIsOpen] = useState(false);

    // 3. Estado para controlar o fundo do Navbar (transparente/sólido)
    const [isScrolled, setIsScrolled] = useState(false);

    // 4. Efeito (useEffect) para detectar a rolagem da página
    useEffect(() => {
        const handleScroll = () => {
            // window.scrollY > 10 significa "se o usuário rolou mais de 10 pixels"
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Adiciona o "ouvinte" de rolagem quando o componente é montado
        window.addEventListener('scroll', handleScroll);

        // Remove o "ouvinte" quando o componente é desmontado (boa prática)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // O array vazio [] garante que este efeito rode apenas uma vez

    return (
        /* 5. Tag <nav> principal
         * - 'fixed top-0 left-0 w-full': Fixa o menu no topo.
         * - 'z-50': Garante que ele fique acima de outros conteúdos.
         * - 'transition-colors duration-300': Anima a mudança de cor.
         * - Lógica de cor: Se 'isScrolled' for true, usa 'bg-gray-900', senão 'bg-transparent'.
        */
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
                isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo (substitua pelo seu logo) */}
                <Link href="/" className="text-2xl font-bold text-white">
                    BARROS BOUW
                </Link>

                {/* 6. Links de Navegação (Desktop) */}
                {/* 'hidden md:flex' = Escondido em telas pequenas, vira flex em médias/grandes */}
                <div className="hidden md:flex space-x-6 items-center">
                    <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
                    <Link href="/servicos" className="text-gray-300 hover:text-white transition-colors">Serviços</Link>
                    <Link href="/galeria" className="text-gray-300 hover:text-white transition-colors">Galeria</Link>
                    <Link href="/contato" className="text-gray-300 hover:text-white transition-colors">Contato</Link>

                    {/* Botão CTA (Desktop) */}
                    <a
                        href="/contato"
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                    >
                        Free Estimate
                    </a>
                </div>

                {/* 7. Botão do Menu Mobile (Hambúrguer) */}
                {/* 'md:hidden' = Mostrado apenas em telas pequenas/médias */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        {/* Ícone (SVG) - Hambúrguer ou X */}
                        {isOpen ? (
                            // Ícone "X" (fechar)
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Ícone "Hambúrguer" (abrir)
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* 8. Menu Suspenso (Mobile) */}
            {/* Aparece condicionalmente se 'isOpen' for true */}
            {isOpen && (
                <div className="md:hidden bg-gray-900 px-6 pb-4 space-y-2">
                    <Link href="/" className="block text-gray-300 hover:text-white py-2">Home</Link>
                    <Link href="/servicos" className="block text-gray-300 hover:text-white py-2">Serviços</Link>
                    <Link href="/galeria" className="block text-gray-300 hover:text-white py-2">Galeria</Link>
                    <Link href="/contato" className="block text-gray-300 hover:text-white py-2">Contato</Link>

                    {/* Botão CTA (Mobile) */}
                    <a
                        href="/contato"
                        className="block text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 w-full"
                    >
                        Free Estimate
                    </a>
                </div>
            )}
        </nav>
    );
}