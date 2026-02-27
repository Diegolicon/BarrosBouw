"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from "next/image";

// Estilos do Swiper
import 'swiper/css';
import 'swiper/css/pagination';

const StarIcon = () => (
    <svg className="w-3 h-3 text-[#c5a47e]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.09l6.572-.955L10 0l2.939 6.135 6.572.955-4.756 4.455 1.123 6.545z" />
    </svg>
);

const testimonialsData = [
    {
        id: 1,
        name: "Sanne de Vries",
        role: "Eigenaresse",
        location: "Amsterdam",
        projectImage: "/images/imagem1_avatar.jpeg", 
        review: "Uitstekend werk! Het team heeft mijn badkamer volledig gerenoveerd. Het resultaat overtrof alle verwachtingen. Professionaliteit van begin tot eind!"
    },
    {
        id: 2,
        name: "Bram Bakker",
        role: "Architect",
        location: "Utrecht",
        projectImage: "/images/banheiro10.jpeg",
        review: "Prachtig werk! De keuken is vakkundig geplaatst met oog voor detail. Alles is netjes achtergelaten en de afwerking is top. Erg tevreden!"
    },
    {
        id: 5,
        name: "Thomas de Boer",
        role: "Klant",
        location: "Leiden",
        projectImage: "/images/comentario1.jpeg",
        review: "Ik was erg onder de indruk van de kwaliteit en de snelheid waarmee het werk werd uitgevoerd. De aandacht voor detail in de afwerking maakt echt een verschil in onze nieuwe badkamer."
    },
    {
        id: 3,
        name: "Anouk Jansen",
        role: "Designer",
        location: "Rotterdam",
        projectImage: "/images/novobanheiro.jpeg",
        review: "Prachtig resultaat! De installatie verliep vlekkeloos met veel oog voor detail. Alles werd keurig achtergelaten en de afwerking is van absoluut topniveau. Zeer tevreden!"
    },
    
    // --- NOVOS ITENS ADICIONADOS ABAIXO ---
    
    {
        id: 6,
        name: "Sophie Molenaar",
        role: "Designer",
        location: "Den Haag",
        projectImage: "/images/comentario2.jpeg",
        review: "Een betrouwbaar team dat zijn beloftes nakomt. Het schilderwerk aan de deur is fantastisch geworden. Een echte aanrader voor elke renovatie!"
    },
    {
        id: 4,
        name: "Lars Visser",
        role: "Huiseigenaar",
        location: "Haarlem",
        projectImage: "/images/stuck.jpeg",
        review: "Geweldig stucwerk! De muren zijn perfect glad en strak afgewerkt. Het team werkte netjes e tudo foi rápido. Echt vakmanschap van hoog niveau!"
    }
];

export default function Testimonials() {
    return (
        <section className="bg-[#0f0f0f] py-24" id="depoimentos">
            <div className="container mx-auto px-6">
                
                <header data-aos="fade-up" className="mb-20 text-center">
                    <span className="text-[#c5a47e] text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                        Feedback
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter uppercase">
                        Wat Onze <span className="text-[#c5a47e]">Klanten Zeggen</span>
                    </h2>
                    <div className="w-24 h-1 bg-[#c5a47e] mx-auto opacity-50"></div>
                </header>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 5000 }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-20 testimonials-swiper"
                    data-aos="fade-up"
                >
                    {testimonialsData.map((item) => (
                        <SwiperSlide key={item.id} className="h-auto">
                            <div className="bg-[#1a1a1a] p-0 rounded-sm h-full flex flex-col border border-white/5 relative group hover:border-[#c5a47e]/30 transition-all duration-500 overflow-hidden">
                                
                                {/* Foto do Projeto - Aumentada (h-72) e sem bordas internas */}
                                {item.projectImage && (
                                    <div className="relative w-full h-72 overflow-hidden">
                                        <Image 
                                            src={item.projectImage} 
                                            alt="Gerealiseerd project"
                                            fill
                                            className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-80"></div>
                                    </div>
                                )}

                                {/* Conteúdo do Card com Padding */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex mb-4 gap-1">
                                        {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                                    </div>
                                    
                                    <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow italic font-light">
                                        "{item.review}"
                                    </p>

                                    {/* Perfil do Cliente - Sem Avatar */}
                                    <div className="pt-6 border-t border-white/5">
                                        <div className="text-left">
                                            <h4 className="font-bold text-white text-xs uppercase tracking-widest">{item.name}</h4>
                                            <p className="text-[10px] text-[#c5a47e] font-medium opacity-80 mt-1">
                                                {item.role} • {item.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx global>{`
                .testimonials-swiper .swiper-pagination-bullet { 
                    background: #333 !important; 
                    opacity: 1;
                    width: 12px;
                    height: 4px;
                    border-radius: 2px;
                    transition: all 0.3s;
                }
                .testimonials-swiper .swiper-pagination-bullet-active { 
                    background: #c5a47e !important; 
                    width: 30px;
                }
            `}</style>
        </section>
    );
}