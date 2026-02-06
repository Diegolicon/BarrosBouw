// app/page.tsx
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/ContactSection';

export default function Home() {
    return (
        <main className="min-h-screen flex-col items-center justify-between">
            {/* O Hero geralmente é o "Home" */}
            <section id="home">
                <Hero />
            </section>

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