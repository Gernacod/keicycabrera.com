import React from 'react';
import Image from 'next/image';
import { Plus, Pin, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
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
                <div className="text-center text-white">
                    <h2 className="text-[36px] md:text-[52px] font-bold leading-tight">
                        Cómo trabajo: con estrategia, acción y resultados
                    </h2>
                </div>

                {/* Part 1: Strategy Card & Description */}
                <div className="flex flex-col gap-[60px] items-center w-full">
                    <div className="flex flex-col font-semibold justify-center leading-[40px] text-[36px] text-center text-white tracking-[0.4341px]">
                        <h3>Soluciones estratégicas para organizaciones y empresas con impacto</h3>
                    </div>

                    <div className="flex flex-col xl:flex-row gap-[30px] items-center xl:items-start justify-center w-full">
                        {/* Card */}
                        <div className="bg-white rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden w-full max-w-[750px] h-auto flex flex-col gap-[20px] pb-[30px]">
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

                        {/* Description Text */}
                        <div className="flex flex-col items-center justify-center shrink-0 w-full xl:w-[45%]">
                            <div className="text-white text-[24px] md:text-[36px] leading-snug italic font-medium tracking-[0.3859px]">
                                <p>
                                    <span className="font-bold italic">Acompaño a organizaciones sociales y empresas con propósito a traducir su visión en estructuras sostenibles, estrategias claras y equipos fortalecidos.</span>
                                    <br /><br />
                                    Trabajo desde la ideación hasta la evaluación de proyectos, combinando lo técnico y lo humano. Con metodologías prácticas, contextualizadas y aplicables, aseguro que cada decisión —ya sea programática o estratégica— contribuya al impacto real.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Part 2: Training Formations */}
                <div className="flex flex-col gap-[60px] w-full">
                    <div className="flex flex-col font-semibold justify-center leading-[1.2] text-[28px] md:text-[36px] text-center text-white tracking-[0.4341px]">
                        <h3>
                            Formaciones estratégicas para profesionales y equipos del sector social,<br />
                            humanitario y de desarrollo
                        </h3>
                    </div>

                    <div className="flex flex-col xl:flex-row gap-[40px] items-center xl:items-start justify-center w-full">
                        {/* Left Text Info */}
                        <div className="flex flex-col gap-[40px] items-end justify-center shrink-0 w-full xl:w-[40%]">
                            <div className="text-right text-white tracking-[0.3859px] w-full">
                                <p className="text-[24px] md:text-[36px] italic leading-[1.2]">
                                    <span className="font-bold italic">Nuestros programas formativos están diseñados para profesionales</span>
                                    {" "}
                                    <span className="font-medium italic">que desean fortalecer sus capacidades en el sector social y también para organizaciones o empresas que quieren formar a sus equipos con enfoque práctico y aplicado. Cada formación puede tomarse de manera individual o adaptarse a las necesidades de equipos específicos.</span>
                                </p>
                            </div>
                            <div className="flex flex-col w-full gap-[15px] items-end">
                                <div className="text-[20px] md:text-[24px] text-right text-white tracking-[0.2412px] leading-tight italic">
                                    <p className="font-bold mb-1">Abrimos ediciones limitadas durante el año.</p>
                                    <p>También puedes solicitar una versión personalizada para tu organización.</p>
                                </div>
                                <div className="rotate-[-135deg]">
                                    <Pin className="text-white size-8 fill-white" />
                                </div>
                            </div>
                        </div>

                        {/* Right Accordions */}
                        <div className="w-full xl:max-w-[871px]">
                            <Accordion type="single" collapsible className="flex flex-col gap-6 w-full">
                                {trainingPrograms.map((program, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`item-${index}`}
                                        className="bg-white rounded-[10px] border-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-4 md:px-[30px] py-1 overflow-hidden"
                                    >
                                        <AccordionTrigger className="hover:no-underline py-4">
                                            <div className="text-left w-full pr-4">
                                                <span className="text-keicy-navy text-[22px] md:text-[28px] lg:text-[32px] font-semibold leading-tight tracking-[0.4341px]">
                                                    {program.title}
                                                </span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-6">
                                            <p className="text-keicy-navy text-[18px] md:text-[24px] lg:text-[28px] leading-relaxed tracking-[0.3376px]">
                                                {program.content}
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
