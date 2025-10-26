// app/page.tsx

// 1. Nossas importações de componentes
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials'; // <-- Importamos os Depoimentos

/*
 * Documentação da Página Home
 * Esta é a página principal (rota "/") do nosso site.
*/
export default function Home() {
    return (
        <main className="min-h-screen flex-col items-center justify-between">

            {/* Seção 1: Hero */}
            <Hero />

            {/* Seção 2: Serviços */}
            <Services />

            {/* Seção 3: Galeria */}
            <Gallery />

            {/* Seção 4: Depoimentos */}
            <Testimonials /> {/* <-- Adicionamos os Depoimentos aqui */}

            {/* PRÓXIMOS PASSOS:
        A última parte seria o Rodapé (Footer).
      */}
            {/* <Footer /> */}
        </main>
    );
}