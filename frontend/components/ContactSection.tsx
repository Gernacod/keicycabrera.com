import React from 'react';
import CtaButton from './CtaButton';
import ScrollReveal from './ScrollReveal';

export default function ContactSection() {
    return (
        <section className="content-stretch flex flex-col gap-[40px] items-center justify-center px-[20px] md:px-[60px] py-[60px] relative shrink-0 w-full bg-white" id="contacto">
            <ScrollReveal direction="up" className="w-full max-w-[900px]">
                <div className="flex flex-col font-['Red_Hat_Display'] font-bold justify-center leading-[1.2] min-w-full relative shrink-0 text-[32px] md:text-[52px] text-[#0e5587] text-center tracking-[0.6271px] w-full">
                    <p className="mb-0">{`Potencia tu liderazgo y proyectos sociales con una consultoría estratégica internacional. `}</p>
                    <p>¿Hablamos?</p>
                </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2} scale={0.98} className="w-full max-w-[900px]">
                <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
                    {/* Name and Last Name */}
                    <div className="content-stretch flex flex-col md:flex-row gap-[20px] md:gap-[50px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 flex-1 w-full">
                            <div className="flex flex-col font-['Red_Hat_Display'] font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[18px] md:text-[20px] text-[#0e5587] w-full">
                                <p className="leading-[normal] whitespace-pre-wrap">Nombre*</p>
                            </div>
                            <div className="bg-white border border-[#0e5587] border-solid flex h-[60px] md:h-[72px] items-center overflow-hidden relative rounded-[20px] shadow-[0px_4px_10px_rgba(0,0,0,0.05)] w-full transition-all focus-within:shadow-md focus-within:border-[#0097b2]">
                                <input
                                    type="text"
                                    placeholder="Ingresa tu nombre"
                                    className="flex-1 bg-transparent border-none outline-none font-['Red_Hat_Display'] font-bold text-[16px] text-[#0e5587] placeholder:text-[#d1d0cf] h-full px-[25px]"
                                />
                            </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 flex-1 w-full">
                            <div className="flex flex-col font-['Red_Hat_Display'] font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[18px] md:text-[20px] text-[#0e5587] w-full">
                                <p className="leading-[normal] whitespace-pre-wrap">Apellido*</p>
                            </div>
                            <div className="bg-white border border-[#0e5587] border-solid flex h-[60px] md:h-[72px] items-center overflow-hidden relative rounded-[20px] shadow-[0px_4px_10px_rgba(0,0,0,0.05)] w-full transition-all focus-within:shadow-md focus-within:border-[#0097b2]">
                                <input
                                    type="text"
                                    placeholder="Ingresa tu apellido"
                                    className="flex-1 bg-transparent border-none outline-none font-['Red_Hat_Display'] font-bold text-[16px] text-[#0e5587] placeholder:text-[#d1d0cf] h-full px-[25px]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Email and Phone */}
                    <div className="content-stretch flex flex-col md:flex-row gap-[20px] md:gap-[50px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 flex-1 w-full">
                            <div className="flex flex-col font-['Red_Hat_Display'] font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[18px] md:text-[20px] text-[#0e5587] w-full">
                                <p className="leading-[normal] whitespace-pre-wrap">Correo Electrónico*</p>
                            </div>
                            <div className="bg-white border border-[#0e5587] border-solid flex h-[60px] md:h-[72px] items-center overflow-hidden relative rounded-[20px] shadow-[0px_4px_10px_rgba(0,0,0,0.05)] w-full transition-all focus-within:shadow-md focus-within:border-[#0097b2]">
                                <input
                                    type="email"
                                    placeholder="Ingresa tu correo electrónico"
                                    className="flex-1 bg-transparent border-none outline-none font-['Red_Hat_Display'] font-bold text-[16px] text-[#0e5587] placeholder:text-[#d1d0cf] h-full px-[25px]"
                                />
                            </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 flex-1 w-full">
                            <div className="flex flex-col font-['Red_Hat_Display'] font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[18px] md:text-[20px] text-[#0e5587] w-full">
                                <p className="leading-[normal] whitespace-pre-wrap">Número telefónico</p>
                            </div>
                            <div className="bg-white border border-[#0e5587] border-solid flex h-[60px] md:h-[72px] items-center overflow-hidden relative rounded-[20px] shadow-[0px_4px_10px_rgba(0,0,0,0.05)] w-full transition-all focus-within:shadow-md focus-within:border-[#0097b2]">
                                <input
                                    type="tel"
                                    placeholder="Ingresa tu número de contacto"
                                    className="flex-1 bg-transparent border-none outline-none font-['Red_Hat_Display'] font-bold text-[16px] text-[#0e5587] placeholder:text-[#d1d0cf] h-full px-[25px]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                        <div className="flex flex-col font-['Red_Hat_Display'] font-bold justify-center leading-[0] relative shrink-0 text-[18px] md:text-[20px] text-[#0e5587] w-full">
                            <p className="leading-[normal] whitespace-pre-wrap">En que te puedo ayudar?*</p>
                        </div>
                        <div className="bg-white border border-[#0e5587] border-solid flex h-[158px] items-start overflow-hidden relative rounded-[20px] shadow-[0px_4px_10px_rgba(0,0,0,0.05)] w-full transition-all focus-within:shadow-md focus-within:border-[#0097b2]">
                            <textarea
                                placeholder="Cuéntame sobre tu proyecto, organización o necesidades específicas..."
                                className="flex-1 bg-transparent border-none outline-none font-['Red_Hat_Display'] font-bold text-[16px] text-[#0e5587] placeholder:text-[#d1d0cf] h-full p-[25px] resize-none"
                            />
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4} scale={0.8}>
                <div className="w-full flex justify-center">
                    <CtaButton type="submit">
                        Enviar mensaje
                    </CtaButton>
                </div>
            </ScrollReveal>
        </section>
    );
}
