// components/Gallery.tsx
import Link from 'next/link';
import Image from 'next/image';

const galleryData = [
    { id: 1, src: "/images/banheiro.png" },
    { id: 2, src: "/images/pisoAquecido.jpeg" },
    { id: 3,  src: "/images/cozinha.jpeg" },
    { id: 4,  src: "/images/revestimento.jpeg" },
    { id: 5,  src: "/images/armario3.jpeg" },
    { id: 6,  src: "/images/armario2.jpeg" }
];

export default function Gallery() {
    return (
        <section className="bg-[#0a0a0a] text-white py-24" data-aos="fade-up">
            <div className="container mx-auto px-6 text-center">

                <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">
                    Galeria de <span className="text-[#c5a47e]">Projetos</span>
                </h2>

                <p className="text-lg text-gray-400 mb-16 max-w-xl mx-auto">
                    A excelência da engenharia holandesa aplicada em cada detalhe.
                </p>

                {/* Retornado para o GRID original */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryData.map((item, index) => (
                        <div
                            key={item.id}
                            data-aos="zoom-in" 
                            data-aos-delay={index * 100}
                            // Mantido aspect-[4/3] para forçar o retângulo horizontal
                            className="relative overflow-hidden group aspect-[4/3] bg-[#161616] border border-white/5"
                        >
                            {/* Overlay: Mantive o escurecimento no hover, mas SEM O TEXTO (span removido) */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
                            
                            {/* Imagem com FILL e OBJECT-COVER para preencher o grid fixo */}
                            <div className="w-full h-full relative transition duration-700 group-hover:scale-110">
                                <Image 
                                    src={item.src} 
                                    alt={`Projeto ${item.id}`}
                                    fill 
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                            {/* Detalhe de linha dourada */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#c5a47e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-30"></div>
                        </div>
                    ))}
                </div>

                <div className="mt-16" data-aos="fade-up" data-aos-delay="400">
                    <Link
                        href="/galeria"
                        className="inline-block border border-[#c5a47e] text-[#c5a47e] hover:bg-[#c5a47e] hover:text-black font-bold py-4 px-12 rounded-sm text-sm uppercase tracking-[0.2em] transition duration-500"
                    >
                        Explorar Portfólio
                    </Link>
                </div>
            </div>
        </section>
    );
}