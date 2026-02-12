import React from 'react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';
import AnimatedCounter from './AnimatedCounter';

export default function NewsletterSection() {
    return (
        <section className="w-full bg-[#0097b2] py-[60px] md:py-[80px] px-6 md:px-[40px] font-['Red_Hat_Display',sans-serif] relative overflow-hidden text-white flex flex-col items-center">
            <div className="max-w-[1240px] w-full mx-auto flex flex-col gap-[60px]">

                {/* Header Content */}
                <div className="flex flex-col gap-[40px] items-start w-full">
                    {/* Title */}
                    <ScrollReveal direction="left" delay={0.1} className="w-full">
                        <div className="flex flex-col font-bold leading-[0.9] md:leading-[92px] text-[40px] md:text-[80px] lg:text-[96px] tracking-[1.44px] whitespace-normal md:whitespace-nowrap">
                            <p className="mb-0">Suscríbete a</p>
                            <p className="md:ml-[120px]">Brújula de impacto</p>
                        </div>
                    </ScrollReveal>

                    {/* Description */}
                    <ScrollReveal direction="up" delay={0.3} className="w-full">
                        <div className="text-[20px] md:text-[30px] lg:text-[36px] font-medium italic">
                            <p className="leading-[1.2] md:leading-[40px] text-left">
                                <span className="font-bold italic">Es una newsletter gratuita para profesionales del sector social</span>
                                <span> que se sienten perdidos por la saturación de información. Cada miércoles ofrece herramientas prácticas, guías y reflexiones basadas en experiencia real para ayudarles a avanzar en su carrera y proyectos con claridad, estructura y propósito, sin perder la esencia de su trabajo.</span>
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Subtitle / Closing */}
                    <ScrollReveal direction="right" delay={0.4} className="w-full flex justify-end">
                        <p className="text-[24px] md:text-[36px] font-medium italic leading-[40px]">
                            Espero que te sirva.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Form and Counter */}
                <div className="flex flex-col items-center justify-center gap-[40px] w-full">
                    {/* Unified Input Bar */}
                    <ScrollReveal direction="up" delay={0.5} className="w-full flex justify-center">
                        <div className="bg-white flex items-center p-1 md:p-[6px] pl-[20px] md:pl-[30px] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full max-w-[846px] h-[72px] md:h-[84px]">
                            <input
                                type="email"
                                placeholder="Ingresa tu correo electrónico"
                                className="flex-1 bg-transparent border-none outline-none text-keicy-navy text-[16px] md:text-[20px] font-bold placeholder:text-[#d1d0cf] w-full"
                            />
                            <Button
                                className="bg-[#0e5587] hover:bg-[#0c4a75] text-white font-bold text-[16px] md:text-[20px] h-full px-[20px] md:px-[40px] rounded-[18px] transition-all whitespace-nowrap"
                            >
                                Quiero Suscribirme
                            </Button>
                        </div>
                    </ScrollReveal>

                    {/* Subscriber Counter */}
                    <ScrollReveal direction="right" delay={0.6} className="w-full flex justify-end">
                        <div className="text-right text-white font-bold italic text-[24px] md:text-[36px] leading-[1.1] md:leading-[40px]">
                            <p className="mb-0"><AnimatedCounter value={3000} suffix="+" /></p>
                            <p>personas suscritas</p>
                        </div>
                    </ScrollReveal>
                </div>

            </div>
        </section>
    );
}
