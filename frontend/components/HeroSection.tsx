import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <section
            className="relative w-full h-[862px] flex items-center justify-between px-[80px] pt-[120px]"
            style={{ background: 'linear-gradient(178.025deg, rgb(255, 255, 255) 83.804%, rgb(0, 130, 153) 89.215%)' }}
        >
            {/* Left Content */}
            <div className="flex flex-col gap-[50px] items-start pb-[60px]">
                <div className="flex flex-col gap-[40px] items-start w-[882px]">

                    {/* Title Section */}
                    <div className="flex flex-col gap-[30px] items-start whitespace-nowrap">
                        <h1 className="text-[124px] font-extrabold leading-[80px] text-keicy-navy tracking-[1.4953px]">
                            Keicy Cabrera
                        </h1>
                        <h2 className="text-[64px] font-semibold leading-[64px] text-keicy-sand tracking-[0.7718px]">
                            Consultora Internacional
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="w-[697px]">
                        <p className="text-[36px] leading-[40px] text-keicy-navy">
                            <span className="font-bold italic">Acompaño a organizaciones sociales y empresas con propósito a crecer con estrategia, impacto y humanidad</span>
                            <span className="font-bold italic">.</span>
                            <span className="text-[40px]"> </span>
                            <span className="font-medium italic">A través de consultoría, formación y comunidad, diseño estructuras sostenibles, estrategias medibles y equipos fortalecidos para lograr resultados reales y transformadores.</span>
                        </p>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="bg-keicy-navy flex h-[64px] items-center justify-center px-[40px] py-[16px] rounded-[20px] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer hover:opacity-90 transition-opacity">
                    <p className="font-bold text-[20px] text-center text-white leading-normal">
                        Descubre cómo puedo ayudarte
                    </p>
                </div>
            </div>

            {/* Right Image - Keicy Portrait */}
            <div className="flex h-full items-end justify-end w-[408px] shrink-0 pt-[120px]">
                <div className="relative w-[555px] h-[847px] -ml-[200px]">
                    <Image
                        src="/Keicy Portraits 2-8 1.png"
                        alt="Keicy Cabrera - Consultora Internacional"
                        fill
                        className="object-cover"
                        style={{
                            objectPosition: 'left top',
                        }}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
