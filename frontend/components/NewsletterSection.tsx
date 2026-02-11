import React from 'react';
import { Button } from '@/components/ui/button';

export default function NewsletterSection() {
    return (
        <section className="w-full bg-[#0097b2] py-[80px] px-4 md:px-[60px] font-primary relative overflow-hidden text-white flex flex-col items-center">
            <div className="max-w-[1240px] mx-auto flex flex-col items-center text-center gap-[30px] md:gap-[40px]">

                {/* Title */}
                <div className="flex flex-col items-center leading-none">
                    <h2 className="text-[50px] md:text-[80px] lg:text-[96px] font-bold tracking-[1.44px] leading-tight">
                        Suscríbete a
                    </h2>
                    <h2 className="text-[50px] md:text-[80px] lg:text-[96px] font-bold tracking-[1.44px] leading-tight">
                        Brújula de impacto
                    </h2>
                </div>

                {/* Description */}
                <div className="max-w-[1100px] text-[20px] md:text-[30px] lg:text-[36px] leading-[1.3] font-medium italic space-y-4">
                    <p>
                        <span className="font-bold">Es una newsletter gratuita para profesionales del sector social</span> que se sienten perdidos por la saturación de información. Cada miércoles ofrece herramientas prácticas, guías y reflexiones basadas en experiencia real para ayudarles a avanzar en su carrera y proyectos con claridad, estructura y propósito, sin perder la esencia de su trabajo.
                    </p>
                </div>

                {/* Subtitle */}
                <div className="w-full flex justify-end max-w-[1100px] mt-4">
                    <p className="text-[24px] md:text-[36px] font-medium italic">
                        Espero que te sirva.
                    </p>
                </div>

                {/* Form Container */}
                <div className="w-full max-w-[1000px] mt-8 flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row gap-4 w-full">
                        <input
                            type="email"
                            placeholder="Ingresa tu correo electrónico"
                            className="flex-1 h-[70px] md:h-[80px] rounded-[15px] px-8 text-[20px] text-keicy-navy outline-none placeholder:text-gray-400 bg-white shadow-inner"
                        />
                        <Button
                            className="bg-[#114E6F] hover:bg-[#0e4460] text-white font-bold text-[20px] h-[70px] md:h-[80px] px-10 rounded-[15px] shadow-lg transition-transform hover:scale-105 w-full md:w-auto shrink-0"
                        >
                            Quiero Suscribirme
                        </Button>
                    </div>

                    {/* Counter */}
                    <div className="flex flex-col items-end w-full pr-4">
                        <p className="text-[28px] md:text-[36px] font-bold italic leading-tight text-right w-full">
                            3000+ <span className="font-normal not-italic">personas suscritas</span>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
