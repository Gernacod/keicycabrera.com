import React from 'react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
    return (
        <section className="content-stretch flex flex-col gap-[40px] items-center justify-center px-[20px] md:px-[60px] py-[60px] relative shrink-0 w-full bg-white" id="contacto">
            <div className="flex flex-col font-['Red_Hat_Display'] font-bold justify-center leading-[54px] min-w-full relative shrink-0 text-[32px] md:text-[52px] text-[#0e5587] text-center tracking-[0.6271px] w-full max-w-[900px]">
                <p className="mb-0">{`Potencia tu liderazgo y proyectos sociales con una consultoría estratégica internacional. `}</p>
                <p>¿Hablamos?</p>
            </div>

            <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full max-w-[900px]">
                {/* Name and Last Name */}
                <div className="content-stretch flex flex-col md:flex-row gap-[20px] md:gap-[50px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 flex-1 w-full">
                        <div className="flex flex-col font-['Red_Hat_Display'] font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[18px] md:text-[20px] text-[#0e5587] w-full">
                            <p className="leading-[normal] whitespace-pre-wrap">Nombre*</p>
                        </div>
                        <div className="bg-white border border-[#0e5587] border-solid flex h-[60px] md:h-[72px] items-center justify-between overflow-clip pl-[20px] relative rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] w-full">
                            <input
                                type="text"
                                placeholder="Ingresa tu nombre"
                                className="flex-1 bg-transparent border-none outline-none font-['Red_Hat_Display'] font-bold text-[16px] text-[#0e5587] placeholder:text-[#d1d0cf] h-full"
                            />
                        </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 flex-1 w-full">
                        <div className="flex flex-col font-['Red_Hat_Display'] font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[18px] md:text-[20px] text-[#0e5587] w-full">
                            <p className="leading-[normal] whitespace-pre-wrap">Apellido*</p>
                        </div>
                        <div className="bg-white border border-[#0e5587] border-solid flex h-[60px] md:h-[72px] items-center justify-between overflow-clip pl-[20px] relative rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] w-full">
                            <input
                                type="text"
                                placeholder="Ingresa tu apellido"
                                className="flex-1 bg-transparent border-none outline-none font-['Red_Hat_Display'] font-bold text-[16px] text-[#0e5587] placeholder:text-[#d1d0cf] h-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Email and Phone */}
                <div className="content-stretch flex flex-col md:flex-row gap-[20px] md:gap-[50px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 flex-1 w-full">
                        <div className="flex flex-col font-['Red_Hat_Display'] font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[18px] md:text-[20px] text-[#0e5587] w-full">
                            <p className="leading-[normal] whitespace-pre-wrap">Correo Electrónico*</p>
                        </div>
                        <div className="bg-white border border-[#0e5587] border-solid flex h-[60px] md:h-[72px] items-center justify-between overflow-clip pl-[20px] relative rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] w-full">
                            <input
                                type="email"
                                placeholder="Ingresa tu correo electrónico"
                                className="flex-1 bg-transparent border-none outline-none font-['Red_Hat_Display'] font-bold text-[16px] text-[#0e5587] placeholder:text-[#d1d0cf] h-full"
                            />
                        </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 flex-1 w-full">
                        <div className="flex flex-col font-['Red_Hat_Display'] font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[18px] md:text-[20px] text-[#0e5587] w-full">
                            <p className="leading-[normal] whitespace-pre-wrap">Número telefónico</p>
                        </div>
                        <div className="bg-white border border-[#0e5587] border-solid flex h-[60px] md:h-[72px] items-center overflow-clip pl-[20px] relative rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] w-full">
                            <input
                                type="tel"
                                placeholder="Ingresa tu número de contacto"
                                className="flex-1 bg-transparent border-none outline-none font-['Red_Hat_Display'] font-bold text-[16px] text-[#0e5587] placeholder:text-[#d1d0cf] h-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Message */}
                <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['Red_Hat_Display'] font-bold justify-center leading-[0] relative shrink-0 text-[18px] md:text-[20px] text-[#0e5587] w-full">
                        <p className="leading-[normal] whitespace-pre-wrap">En que te puedo ayudar?*</p>
                    </div>
                    <div className="bg-white border border-[#0e5587] border-solid flex h-[158px] items-start justify-between overflow-clip p-[20px] relative rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] w-full">
                        <textarea
                            placeholder="Cuéntame sobre tu proyecto, organización o necesidades específicas..."
                            className="flex-1 bg-transparent border-none outline-none font-['Red_Hat_Display'] font-bold text-[16px] text-[#0e5587] placeholder:text-[#d1d0cf] h-full resize-none"
                        />
                    </div>
                </div>
            </div>

            <Button className="bg-[#0e5587] hover:bg-[#0a4a75] h-[64px] items-center justify-center overflow-clip px-[40px] py-[16px] relative rounded-[20px] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 text-white font-['Red_Hat_Display'] font-bold text-[20px] transition-all">
                Enviar mensaje
            </Button>
        </section>
    );
}
