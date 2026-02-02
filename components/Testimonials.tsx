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
        name: "Maria Silva",
        role: "Proprietária",
        location: "Amsterdam",
        avatar: "/perfil1.jpg", 
        projectImage: "/banheiro1.jpg", 
        review: "Excelente trabalho! A equipe reformou completamente meu banheiro. O resultado superou todas as expectativas. Profissionalismo do início ao fim!"
    },
    {
        id: 2,
        name: "Carlos Mendes",
        role: "Arquiteto",
        location: "Utrecht",
        avatar: "/perfil2.jpg",
        projectImage: "/piso1.jpg",
        review: "Trabalho incrível! O novo piso parece fantástico. Mal posso esperar para usá-los novamente em nosso próximo projeto. Altamente recomendado!"
    },
    {
        id: 3,
        name: "Ana Souza",
        role: "Designer",
        location: "Rotterdam",
        avatar: "/perfil3.jpg",
        projectImage: "/cozinha1.jpg",
        review: "Tive uma excelente experiência! Instalação eficiente e equipe muito detalhista. Deixaram a casa impecável e o acabamento é de primeira qualidade."
    }
];

export default function Testimonials() {
    return (
        <section className="bg-[#0f0f0f] py-24" id="depoimentos">
            <div className="container mx-auto px-6 text-center">
                
                <header data-aos="fade-up" className="mb-20">
                    <span className="text-[#c5a47e] text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                        Feedback
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter uppercase">
                        O Que Dizem Nossos <span className="text-[#c5a47e]">Clientes</span>
                    </h2>
                    <div className="w-24 h-1 bg-[#c5a47e] mx-auto opacity-50"></div>
                </header>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={40}
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
                            <div className="bg-[#1a1a1a] p-8 rounded-sm h-full flex flex-col border border-white/5 relative group hover:border-[#c5a47e]/30 transition-all duration-500">
                                
                                {/* Foto do Projeto com Overlay */}
                                {item.projectImage && (
                                    <div className="relative w-full h-56 mb-8 overflow-hidden">
                                        <Image 
                                            src={item.projectImage} 
                                            alt="Projeto realizado"
                                            fill
                                            className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-60"></div>
                                    </div>
                                )}

                                {/* Aspas Decorativas */}
                                <span className="text-4xl text-[#c5a47e] font-serif opacity-20 absolute top-4 right-8 italic group-hover:opacity-100 transition-opacity">“</span>

                                {/* Texto do Depoimento */}
                                <div className="flex mb-4 gap-1">
                                    {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                                </div>
                                
                                <p className="text-gray-400 text-sm leading-relaxed mb-10 flex-grow italic font-light">
                                    "{item.review}"
                                </p>

                                {/* Perfil do Cliente */}
                                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#c5a47e]/50">
                                        <Image 
                                            src={item.avatar} 
                                            alt={item.name}
                                            fill
                                            className="object-cover grayscale"
                                        />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-bold text-white text-xs uppercase tracking-widest">{item.name}</h4>
                                        <p className="text-[10px] text-[#c5a47e] font-medium opacity-80">{item.role} • {item.location}</p>
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