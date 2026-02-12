import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const testimonials = [
    {
        id: 1,
        name: "Roxana Vitali",
        role: "Escala tu impacto social",
        date: "Febrero 2024",
        text: "Me encanto mucho la personalidad de Keicy, siento que a veces en las formaciones online se pierde mucho la calidez y la humanidad en el trato y se sintió muy bien abrir espacio para compartir nuestras experiencias y cómo podemos mejorar cada día más!!",
        image: "/wp-content/uploads/2024/11/oriana.jpg"
    },
    {
        id: 2,
        name: "Luis Torres",
        role: "Formación MERA",
        date: "Octubre 2024",
        text: "Me encantó la clase. Fueron 3 horas de muchísima información, y cada ejemplo le dio muchísimo más valor a todo el contenido. Me gustan las explicaciones sencillas y que todo esté tan bien documentado con bibliografía confiable, así como todas las herramientas que hacen el trabajo un poco más sencillo. Agradezco contar con tu ayuda en este camino.",
        image: "/wp-content/uploads/2024/11/liliana.jpg"
    },
    {
        id: 3,
        name: "Ana García",
        role: "Consultoría Estratégica",
        date: "Enero 2024",
        text: "Excelente profesional. Su enfoque humano y estratégico nos ayudó a redefinir nuestros objetivos y alcanzar un mayor impacto en nuestra comunidad.",
        image: "/wp-content/uploads/2025/04/images-2.jpg"
    }
];

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(1);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="bg-white py-[80px] px-4 overflow-hidden font-primary">
            <div className="max-w-[1440px] mx-auto flex flex-col xl:flex-row items-center justify-between gap-[40px] xl:gap-[100px]">

                {/* Carousel Area */}
                <ScrollReveal direction="left" distance={100} delay={0.1} className="w-full max-w-[800px]">
                    <div className="relative w-full h-[650px] flex items-center justify-center">

                        {/* Prev Button */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-[0px] lg:left-[40px] z-40 p-2 text-keicy-navy hover:scale-110 transition-transform hidden md:block"
                        >
                            <ChevronLeft size={64} strokeWidth={1} />
                        </button>

                        {/* Cards Container */}
                        <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
                            {testimonials.map((item, index) => {
                                let positionClass = '';

                                if (index === currentIndex) {
                                    // Active Card (Luis - 480x600)
                                    positionClass = "z-30 opacity-100 scale-100 translate-x-[60px]";
                                } else if (index === (currentIndex - 1 + testimonials.length) % testimonials.length) {
                                    // Previous Card (Roxana - scaled 0.625 to match 300px width from 480px base)
                                    positionClass = "z-20 opacity-100 scale-[0.625] -translate-x-[180px] grayscale-[0.3]";
                                } else {
                                    positionClass = "z-10 opacity-0 scale-50 pointer-events-none absolute";
                                }

                                return (
                                    <div
                                        key={item.id}
                                        className={cn(
                                            "bg-[#0097b2] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex flex-col p-[30px] text-white absolute transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] origin-center w-[90%] md:w-[480px] h-auto min-h-[500px] md:h-[600px]",
                                            positionClass
                                        )}
                                    >
                                        {/* Content Wrapper */}
                                        <div className="flex flex-col h-full gap-[30px]">
                                            {/* Header: Photo & Name */}
                                            <div className="flex gap-[20px] items-center">
                                                <div className="bg-white p-[8px] rounded-full shrink-0">
                                                    <div className="w-[80px] h-[80px] rounded-full overflow-hidden relative">
                                                        <Image
                                                            src={item.image}
                                                            alt={item.name}
                                                            width={100}
                                                            height={100}
                                                            className="object-cover w-full h-full"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <h3 className="text-[28px] md:text-[32px] font-semibold leading-tight tracking-[0.3859px]">
                                                        {item.name}
                                                    </h3>
                                                    <div className="flex flex-col">
                                                        <p className="text-[18px] md:text-[20px] font-normal tracking-[0.2412px] leading-tight">
                                                            {item.role}
                                                        </p>
                                                        <p className="text-[14px] font-light tracking-[0.1688px] opacity-90">
                                                            {item.date}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Rating */}
                                            <div className="flex gap-[8px]">
                                                {[1, 2, 3, 4, 5].map((s) => (
                                                    <Star key={s} className="w-[24px] h-[24px] fill-[#FDB813] text-[#FDB813]" />
                                                ))}
                                            </div>

                                            {/* Quote */}
                                            <div className="flex-1">
                                                <p className="text-[20px] md:text-[24px] font-medium italic leading-[28px] tracking-[0.48px] line-clamp-[8]">
                                                    “{item.text}”
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={handleNext}
                            className="absolute right-[0px] lg:right-[40px] z-40 p-2 text-keicy-navy hover:scale-110 transition-transform hidden md:block"
                        >
                            <ChevronRight size={64} strokeWidth={1} />
                        </button>

                        {/* Mobile Controls */}
                        <div className="flex md:hidden gap-8 absolute bottom-0 left-0 right-0 justify-center pb-4 z-40">
                            <button onClick={handlePrev}><ChevronLeft size={40} className="text-keicy-navy" /></button>
                            <button onClick={handleNext}><ChevronRight size={40} className="text-keicy-navy" /></button>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Right Text */}
                <ScrollReveal direction="right" distance={100} delay={0.2} className="w-full max-w-[500px]">
                    <div className="flex items-center justify-center w-full text-center xl:text-left shrink-0">
                        <h2 className="text-[40px] md:text-[52px] font-bold leading-[1.1] tracking-[0.6271px] text-keicy-navy">
                            ¿Qué dicen las organizaciones, empresas y estudiantes?
                        </h2>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}
