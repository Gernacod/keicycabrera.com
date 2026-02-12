import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <section
            className="relative w-full h-[650px] md:h-[750px] lg:h-[800px] flex items-center justify-between px-6 md:px-[80px] pt-[80px]"
            style={{ background: 'linear-gradient(178.025deg, rgb(255, 255, 255) 83.804%, rgb(0, 130, 153) 89.215%)' }}
        >
            {/* Left Content */}
            <div className="flex flex-col gap-[30px] lg:gap-[50px] items-start pb-[40px] z-10">
                <div className="flex flex-col gap-[20px] lg:gap-[40px] items-start max-w-[90vw] lg:w-[882px]">

                    {/* Title Section */}
                    <div className="flex flex-col gap-[10px] lg:gap-[30px] items-start">
                        <h1 className="text-[60px] md:text-[90px] lg:text-[124px] font-extrabold leading-[1] lg:leading-[80px] text-keicy-navy tracking-[1.4953px]">
                            Keicy Cabrera
                        </h1>
                        <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-semibold leading-[1] lg:leading-[64px] text-keicy-sand tracking-[0.7718px]">
                            Consultora Internacional
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="w-full lg:w-[697px]">
                        <p className="text-[18px] md:text-[22px] lg:text-[28px] leading-[1.3] lg:leading-[34px] text-keicy-navy">
                            <span className="font-bold italic">Acompaño a organizaciones sociales y empresas con propósito a crecer con estrategia, impacto y humanidad</span>
                            <span className="font-bold italic">.</span>
                            <span className="text-[20px]"> </span>
                            <span className="font-medium italic">A través de consultoría, formación y comunidad, diseño estructuras sostenibles, estrategias medibles y equipos fortalecidos para lograr resultados reales y transformadores.</span>
                        </p>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="bg-keicy-navy flex h-[50px] lg:h-[64px] items-center justify-center px-[30px] lg:px-[40px] py-[10px] lg:py-[16px] rounded-[20px] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer hover:opacity-90 transition-opacity">
                    <p className="font-bold text-[16px] lg:text-[20px] text-center text-white leading-normal">
                        Descubre cómo puedo ayudarte
                    </p>
                </div>
            </div>

            {/* Right Image - Keicy Portrait */}
            <div className="absolute bottom-0 right-[5%] md:right-[8%] lg:right-[10%] h-full flex items-end justify-center pointer-events-none w-full max-w-[720px] pt-[100px]">
                <div className="relative w-full h-full">
                    <Image
                        src="/Keicy Portraits 2-8 1.png"
                        alt="Keicy Cabrera - Consultora Internacional"
                        fill
                        className="object-contain object-bottom"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
