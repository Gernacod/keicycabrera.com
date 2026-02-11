import React from 'react';
import Image from 'next/image';
import { Plus, Pin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

export default function MethodologySection() {
    const trainingPrograms = [
        "Introducción al Monitoreo, Evaluación, Rendición de Cuentas y Aprendizaje (MERA)",
        "Gestión de Proyectos con MERA y Excel aplicado",
        "Introducción a la Recaudación de Fondos",
        "Diseño de Proyectos Sociales",
        "Redacción de Reportes para Proyectos Sociales",
        "Metodologías Ágiles aplicadas al Sector Social"
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
                        <div className="bg-white rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden w-full max-w-[750px] h-auto xl:h-[762px] shrink-0 flex flex-col gap-[20px] pb-[20px]">
                            <div className="relative w-full flex-[1_0_0] min-h-[300px] xl:min-h-0 bg-gray-200">
                                {/* Placeholder image matching design */}
                                <img
                                    src="/wp-content/uploads/2025/04/images-2.jpg"
                                    alt="Strategy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-[20px] items-center p-[20px] shrink-0 w-full">
                                <div className="flex flex-col items-center text-center gap-0">
                                    <h4 className="text-keicy-navy text-[36px] font-semibold leading-[40px] tracking-[0.4341px]">
                                        Diseño de estrategias con propósito
                                    </h4>
                                    <p className="text-keicy-navy/0 text-[20px]">&nbsp;</p>
                                </div>
                                <p className="text-keicy-navy text-[20px] text-center leading-[26px] tracking-[0.2412px] whitespace-pre-wrap max-w-[90%]">
                                    Diseño estrategias organizacionales o de responsabilidad social (RSE) que reflejan tu misión y se alinean con tus metas, integrando impacto social, sostenibilidad y escalabilidad desde el inicio.
                                </p>
                                <div className="bg-keicy-navy flex h-[48px] items-center justify-center px-[30px] py-[10px] rounded-[50px] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer hover:bg-keicy-navy/90 transition-colors">
                                    <span className="text-white text-[20px] font-bold leading-normal">Lo quiero</span>
                                </div>
                            </div>
                        </div>

                        {/* Description Text */}
                        <div className="flex flex-col items-center justify-center shrink-0 w-full max-w-[563px] self-center xl:self-stretch">
                            <div className="text-white text-[36px] leading-[40px] italic font-medium tracking-[0.3859px]">
                                <p>
                                    <span className="font-bold italic text-[36px] leading-[40px]">Acompaño a organizaciones sociales y empresas con propósito a traducir su visión en estructuras sostenibles, estrategias claras y equipos fortalecidos.</span>
                                    <br /><br />
                                    Trabajo desde la ideación hasta la evaluación de proyectos, combinando lo técnico y lo humano. Con metodologías prácticas, contextualizadas y aplicables, aseguro que cada decisión —ya sea programática o estratégica— contribuya al impacto real.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Part 2: Training Formations */}
                <div className="flex flex-col gap-[60px] w-full">
                    <div className="flex flex-col font-semibold justify-center leading-[40px] text-[36px] text-center text-white tracking-[0.4341px]">
                        <h3>
                            Formaciones estratégicas para profesionales y equipos del sector social,<br />
                            humanitario y de desarrollo
                        </h3>
                    </div>

                    <div className="flex flex-col xl:flex-row gap-[30px] items-center xl:items-start justify-center w-full">
                        {/* Left Text Info */}
                        <div className="flex flex-col gap-[30px] items-center justify-center shrink-0 w-full max-w-[551px]">
                            <div className="flex flex-col font-medium italic text-right text-white tracking-[0.3859px] w-full">
                                <p className="whitespace-pre-wrap">
                                    <span className="font-bold italic text-[36px] leading-[40px]">Nuestros programas formativos están diseñados para profesionales</span>
                                    <span className="text-[32px] leading-[44px]"> </span>
                                    <span className="font-medium italic text-[36px] leading-[40px]">que desean fortalecer sus capacidades en el sector social y también para organizaciones o empresas que quieren formar a sus equipos con enfoque práctico y aplicado. Cada formación puede tomarse de manera individual o adaptarse a las necesidades de equipos específicos.</span>
                                </p>
                            </div>
                            <div className="flex flex-col w-full gap-[10px] items-end justify-end">
                                <div className="flex flex-col font-medium italic text-[24px] text-right text-white tracking-[0.2412px] leading-[30px]">
                                    <p className="font-bold mb-0">Abrimos ediciones limitadas durante el año.</p>
                                    <p>También puedes solicitar una versión personalizada para tu organización.</p>
                                </div>
                                <div className="rotate-[-45deg] relative size-[32px]">
                                    <Pin className="text-white w-full h-full fill-white" />
                                </div>
                            </div>
                        </div>

                        {/* Right List */}
                        <div className="flex flex-col gap-[20px] w-full max-w-[871px]">
                            {trainingPrograms.map((program, index) => (
                                <div key={index} className="bg-white rounded-[10px] px-[30px] py-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center gap-[20px] h-auto lg:h-[120px] cursor-pointer hover:shadow-lg transition-all group shrink-0 w-full">
                                    <div className="flex-1 flex flex-col justify-center">
                                        <span className="text-keicy-navy text-[28px] md:text-[32px] lg:text-[36px] font-semibold leading-[40px] tracking-[0.4341px]">
                                            {program}
                                        </span>
                                    </div>
                                    <div className="size-[42px] shrink-0">
                                        <Plus className="text-keicy-navy w-full h-full" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
