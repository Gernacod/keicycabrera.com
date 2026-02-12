import React from 'react';
import { FileText, BookOpen } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import CtaButton from './CtaButton';

export default function InfoproductosSection() {
    return (
        <section className="flex flex-col gap-[40px] items-center justify-center px-[30px] py-[60px] bg-white">
            {/* Header */}
            <div className="flex flex-col gap-[20px] items-center text-center w-full mb-[20px]">
                <ScrollReveal direction="up">
                    <h2 className="text-[40px] md:text-[52px] font-bold leading-tight text-keicy-navy tracking-[0.6271px]">
                        Infoproductos
                    </h2>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.2}>
                    <div className="max-w-[800px]">
                        <p className="text-[20px] md:text-[36px] font-semibold leading-[1.2] text-keicy-navy tracking-[0.4341px]">
                            Optimiza tu impacto con herramientas diseñadas para simplificar tu trabajo
                        </p>
                    </div>
                </ScrollReveal>
            </div>

            {/* Info Cards */}
            <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-[80px] items-start">
                {/* Plantillas Card */}
                <ScrollReveal direction="up" delay={0.3} scale={0.9}>
                    <div className="flex flex-col gap-[20px] items-center justify-center">
                        <div className="border-[6px] border-keicy-navy border-solid flex flex-col items-center justify-center p-[10px] rounded-full w-[200px] h-[200px]">
                            <FileText className="w-[92px] h-[92px] text-keicy-navy" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-[36px] font-semibold leading-[40px] text-keicy-navy text-center tracking-[0.4341px]">
                            Plantillas
                        </h3>
                        <p className="text-[24px] font-medium leading-[26px] text-keicy-navy text-center tracking-[0.2894px] max-w-[500px]">
                            Herramientas listas para usar y adaptar a tus necesidades. Nuestras plantillas te ayudarán a agilizar procesos clave como formulación de proyectos, presupuestos, informes de impacto y más.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Guías Card */}
                <ScrollReveal direction="up" delay={0.4} scale={0.9}>
                    <div className="flex flex-col gap-[20px] items-center">
                        <div className="border-[6px] border-keicy-navy border-solid flex flex-col items-center justify-center p-[10px] rounded-full w-[200px] h-[200px]">
                            <BookOpen className="w-[92px] h-[92px] text-keicy-navy" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-[36px] font-semibold leading-[40px] text-keicy-navy text-center tracking-[0.4341px]">
                            Guías
                        </h3>
                        <p className="text-[24px] font-medium leading-[26px] text-keicy-navy text-center tracking-[0.2894px] max-w-[500px]">
                            Acompañamiento paso a paso para dominar metodologías y buenas prácticas. Con nuestras guías prácticas, aprenderás a diseñar estrategias, medir resultados, captar fondos y fortalecer tu organización.
                        </p>
                    </div>
                </ScrollReveal>
            </div>

            {/* CTA Button */}
            <ScrollReveal direction="up" delay={0.6} scale={0.8}>
                <CtaButton>
                    Quiero un infoproducto
                </CtaButton>
            </ScrollReveal>
        </section>
    );
}
