import React from 'react';
import Image from 'next/image';
import { Plus, Pin, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import ScrollReveal from './ScrollReveal';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function MethodologySection() {
    const trainingPrograms = [
        {
            title: "Introducción al Monitoreo, Evaluación, Rendición de Cuentas y Aprendizaje (MERA)",
            content: "Una visión integral y práctica del sistema MERA, con herramientas aplicables desde el día uno."
        },
        {
            title: "Gestión de Proyectos con MERA y Excel aplicado",
            content: "Aprende a diseñar, implementar y monitorear proyectos sociales con apoyo de herramientas técnicas y de análisis de datos."
        },
        {
            title: "Introducción a la Recaudación de Fondos",
            content: "Fundamentos clave para desarrollar estrategias alineadas con tu propósito y sostenibles en el tiempo."
        },
        {
            title: "Diseño de Proyectos Sociales",
            content: "De la teoría del cambio a la lógica de intervención: convierte tus ideas en propuestas claras, coherentes y financiables."
        },
        {
            title: "Redacción de Reportes para Proyectos Sociales",
            content: "Aprende a estructurar informes técnicos y narrativas de impacto que comuniquen resultados con claridad y conexión."
        },
        {
            title: "Metodologías Ágiles aplicadas al Sector Social",
            content: "Integra principios ágiles para mejorar la coordinación, la innovación y la entrega de valor en tus proyectos."
        }
    ];

    return (
        <section className="w-full bg-[#0097b2] py-[80px] px-6 md:px-[80px] overflow-hidden font-primary">
            <div className="max-w-[1440px] mx-auto flex flex-col gap-[80px]">

                {/* Header */}
                <ScrollReveal direction="up">
                    <div className="text-center text-white">
                        <h2 className="text-[36px] md:text-[52px] font-bold leading-tight">
                            Cómo trabajo: con estrategia, acción y resultados
                        </h2>
                    </div>
                </ScrollReveal>

                {/* Part 1: Strategy Card & Description */}
                <div className="flex flex-col gap-[60px] items-center w-full">
                    <ScrollReveal direction="up" delay={0.1}>
                        <div className="flex flex-col font-semibold justify-center leading-[40px] text-[36px] text-center text-white tracking-[0.4341px]">
                            <h3>Soluciones estratégicas para organizaciones y empresas con impacto</h3>
                        </div>
                    </ScrollReveal>

                    <div className="flex flex-col xl:flex-row gap-[30px] items-center xl:items-start justify-center w-full">
                        {/* Card */}
                        <ScrollReveal direction="left" delay={0.2} scale={0.95} className="w-full max-w-[750px]">
                            <div className="bg-white rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden h-auto flex flex-col gap-[20px] pb-[30px]">
                                <div className="relative w-full aspect-[4/3] md:aspect-video bg-gray-200">
                                    <img
                                        src="/persona-que-prepara-una-presentacion-de-negocios-practicando-frente-un-espejo 1.png"
                                        alt="Diseño de estrategias con propósito"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col gap-[20px] items-center px-[30px] pt-[10px] shrink-0 w-full text-center">
                                    <h4 className="text-keicy-navy text-[32px] md:text-[36px] font-bold leading-tight tracking-[0.4341px]">
                                        Diseño de estrategias con propósito
                                    </h4>
                                    <p className="text-keicy-navy text-[20px] leading-[26px] tracking-[0.2412px] max-w-[90%]">
                                        Diseño estrategias organizacionales o de responsabilidad social (RSE) que reflejan tu misión y se alinean con tus metas, integrando impacto social, sostenibilidad y escalabilidad desde el inicio.
                                    </p>
                                    <div className="mt-4">
                                        <Button className="bg-keicy-navy text-white text-[20px] font-bold py-[28px] px-[45px] rounded-full hover:bg-keicy-navy/90 shadow-lg">
                                            Lo quiero
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Description Text */}
                        <ScrollReveal direction="right" delay={0.4} className="w-full xl:w-[45%]">
                            <div className="flex flex-col items-center justify-center shrink-0 w-full">
                                <div className="text-white text-[24px] md:text-[36px] leading-snug italic font-medium tracking-[0.3859px]">
                                    <p>
                                        <span className="font-bold italic">Acompaño a organizaciones sociales y empresas con propósito a traducir su visión en estructuras sostenibles, estrategias claras y equipos fortalecidos.</span>
                                        <br /><br />
                                        Trabajo desde la ideación hasta la evaluación de proyectos, combinando lo técnico y lo humano. Con metodologías prácticas, contextualizadas y aplicables, aseguro que cada decisión —ya sea programática o estratégica— contribuya al impacto real.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Part 2: Training Formations */}
                <div className="flex flex-col gap-[60px] w-full">
                    <ScrollReveal direction="up">
                        <div className="flex flex-col font-semibold justify-center leading-[1.2] text-[28px] md:text-[36px] text-center text-white tracking-[0.4341px]">
                            <h3>
                                Formaciones estratégicas para profesionales y equipos del sector social,<br />
                                humanitario y de desarrollo
                            </h3>
                        </div>
                    </ScrollReveal>

                    <div className="flex flex-col xl:flex-row gap-[40px] items-center xl:items-start justify-center w-full">
                        {/* Left Text Info */}
                        <div className="flex flex-col gap-[40px] items-end justify-center shrink-0 w-full xl:w-[40%]">
                            <ScrollReveal direction="left" delay={0.2} className="w-full">
                                <div className="text-right text-white tracking-[0.3859px] w-full">
                                    <p className="text-[24px] md:text-[36px] italic leading-[1.2]">
                                        <span className="font-bold italic">Nuestros programas formativos están diseñados para profesionales</span>
                                        {" "}
                                        <span className="font-medium italic">que desean fortalecer sus capacidades en el sector social y también para organizaciones o empresas que quieren formar a sus equipos con enfoque práctico y aplicado. Cada formación puede tomarse de manera individual o adaptarse a las necesidades de equipos específicos.</span>
                                    </p>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal direction="up" delay={0.4} className="flex flex-col w-full gap-[15px] items-end">
                                <div className="text-[20px] md:text-[24px] text-right text-white tracking-[0.2412px] leading-tight italic">
                                    <p className="font-bold mb-1">Abrimos ediciones limitadas durante el año.</p>
                                    <p>También puedes solicitar una versión personalizada para tu organización.</p>
                                </div>
                                <div className="rotate-[-135deg]">
                                    <Pin className="text-white size-8 fill-white" />
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right Accordions */}
                        <div className="w-full xl:max-w-[871px]">
                            <Accordion type="single" collapsible className="flex flex-col gap-4 w-full">
                                {trainingPrograms.map((program, index) => (
                                    <ScrollReveal key={index} direction="right" delay={0.3 + index * 0.1}>
                                        <AccordionItem
                                            value={`item-${index}`}
                                            className="bg-white rounded-[12px] border-none shadow-[0px_2px_10px_rgba(0,0,0,0.08)] px-4 md:px-[30px] overflow-hidden group"
                                        >
                                            <AccordionTrigger
                                                hideIcon
                                                className="hover:no-underline py-5 flex flex-row flex-nowrap items-center justify-between w-full gap-4 group"
                                            >
                                                <span className="text-keicy-navy text-[16px] md:text-[20px] lg:text-[22px] font-bold leading-tight text-left flex-1 min-w-0">
                                                    {program.title}
                                                </span>
                                                <div className="shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-keicy-teal/10 flex items-center justify-center transition-all duration-300 group-data-[state=open]:rotate-45 group-hover:bg-keicy-teal/20">
                                                    <Plus className="w-5 h-5 md:w-6 md:h-6 text-keicy-navy" strokeWidth={3} />
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="pb-6">
                                                <p className="text-keicy-navy text-[15px] md:text-[18px] lg:text-[20px] leading-relaxed opacity-80 border-t border-gray-100 pt-5">
                                                    {program.content}
                                                </p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </ScrollReveal>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
