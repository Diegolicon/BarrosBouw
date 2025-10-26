// components/Footer.tsx

import Link from 'next/link';

/* * Documentação do Componente Footer
 * * Objetivo: Exibir o rodapé principal do site em todas as páginas.
*/

// --- ÍCONES DE REDES SOCIAIS (Componentes Internos) ---

const SocialIconFacebook = () => (
    <a
        href="#" // Coloque o link real do seu Facebook aqui
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
        aria-label="Facebook"
    >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.018A9.957 9.957 0 0022 12z" />
        </svg>
    </a>
);

// --- ÍCONE DO INSTAGRAM CORRIGIDO ---
const SocialIconInstagram = () => (
    <a
        href="#" // Coloque o link real do seu Instagram aqui
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
        aria-label="Instagram"
    >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.172.053 1.905.32 2.563.578.729.29 1.34.647 1.95 1.25s.95 1.25.95 1.95c.258.658.525 1.39.578 2.563.07 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.053 1.172-.32 1.905-.578 2.563-.29.729-.647 1.34-1.25 1.95s-1.25.95-1.95.95c-.658.258-1.39.525-2.563.578-1.266.07-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.172-.053-1.905-.32-2.563-.578-.729-.29-1.34-.647-1.95-1.25s-.95-1.25-.95-1.95c-.258-.658-.525-1.39-.578-2.563-.07-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.053-1.172.32-1.905.578-2.563.29-.729.647-1.34 1.25-1.95s1.25-.95 1.95-.95c.658-.258 1.39.525 2.563.578C8.416 2.175 8.796 2.163 12 2.163zm0 1.62c-3.144 0-3.522.012-4.75.07-1.096.05-1.666.29-2.16.48-.52.2-.927.46-1.34.87s-.87.82-.87 1.34c-.19.494-.43 1.064-.48 2.16-.058 1.228-.07 1.606-.07 4.75s.012 3.522.07 4.75c.05 1.096.29 1.666.48 2.16.2.52.46.927.87 1.34s.82.87 1.34.87c.494.19 1.064.43 2.16.48 1.228.058 1.606.07 4.75.07s3.522-.012 4.75-.07c1.096-.05 1.666-.29 2.16-.48.52-.2.927.46 1.34-.87s.87-.82.87-1.34c.19-.494.43-1.064.48-2.16.058-1.228.07-1.606.07-4.75s-.012-3.522-.07-4.75c-.05-1.096-.29-1.666-.48-2.16-.2-.52-.46-.927-.87-1.34s-.82-.87-1.34-.87c-.494-.19-1.064-.43-2.16.48-1.228-.058-1.606-.07-4.75-.07zm0 3.842c-2.62 0-4.75 2.13-4.75 4.75s2.13 4.75 4.75 4.75 4.75-2.13 4.75-4.75-2.13-4.75-4.75-4.75zm0 7.875c-1.72 0-3.125-1.405-3.125-3.125s1.405-3.125 3.125-3.125 3.125 1.405 3.125 3.125-1.405 3.125-3.125 3.125zM16.5 6.375c-.621 0-1.125.504-1.125 1.125s.504 1.125 1.125 1.125 1.125-.504 1.125-1.125S17.121 6.375 16.5 6.375z" />
        </svg>
    </a>
);


// --- COMPONENTE PRINCIPAL ---
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12">
            
            {/* O 'container' centraliza tudo e dá as margens laterais */}
            <div className="container mx-auto px-6">

                {/* --- MUDANÇA NO LAYOUT ---
                  Este 'div' agora controla o bloco de cima.
                  - Em telas pequenas (mobile), é 'text-center'.
                  - Em telas médias (desktop), é 'text-left'.
                  - O 'max-w-md' garante que o texto não fique muito largo.
                  - 'mx-auto' (mobile) e 'md:mx-0' (desktop) controlam 
                    o alinhamento do *bloco inteiro*.
                */}
                <div className="text-center md:text-left max-w-md mx-auto md:mx-0">
                    <div className="flex space-x-4 mt-6 justify-center md:justify-start">
                        <SocialIconFacebook />
                        <SocialIconInstagram />
                    </div>
                </div>

                {/* --- MUDANÇA NO COPYRIGHT ---
                  Este 'div' é separado. A classe 'text-center'
                  garante que o texto de copyright fique sempre centralizado,
                  independentemente do alinhamento do bloco de cima.
                */}
                <div className="border-t border-gray-700 mt-10 pt-8 text-center text-sm">
                    <p>
                        &copy; {new Date().getFullYear()} FC Flooring. Todos os direitos reservados.
                    </p>
                    <p className="mt-1 text-xs">
                        Clone de site feito para fins educacionais.
                    </p>
                </div>
            </div>
        </footer>
    );
}