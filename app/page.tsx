import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/ContactSection';

export default function Home() {
    return (
        /* O pt-32 empurra o conteúdo para baixo da navbar fixa. 
           Ajuste o valor conforme necessário */
        <main className="min-h-screen flex flex-col pt-20 md:pt-28">
            
            <section id="home">
                <Hero />
            </section>

            {/* ID sem acento para o link #serviços funcionar corretamente no HTML */}
            <section id="serviços">
                <Services />
            </section>

            <section id="galeria">
                <Gallery />
            </section>

            <Testimonials /> 

            <section id="contato">
                <Contact/>
            </section>
        </main>
    );
}