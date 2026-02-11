import React from 'react';
import Image from 'next/image';

const imgWhatsapp = "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/brands/whatsapp.svg";

export default function CommunitySection() {
    return (
        <section className="w-full px-4 md:px-[80px] py-[60px] bg-white">
            <div className="bg-[#0e5587] rounded-[20px] px-8 md:px-[40px] py-[60px] flex flex-col md:flex-row items-center justify-between gap-[40px]">

                {/* Left Content */}
                <div className="flex flex-col gap-[30px] items-start text-white max-w-[689px]">
                    <h2 className="text-[40px] md:text-[52px] font-bold leading-[1.1] tracking-[0.6271px]">
                        Porque nadie transforma el mundo en soledad
                    </h2>
                    <p className="text-[24px] md:text-[36px] leading-[1.2]">
                        <span className="font-bold italic">Co-Humanidad:</span>{" "}
                        <span className="font-medium italic">Un espacio para profesionales y organizaciones del sector social y humanitario.</span>
                    </p>
                </div>

                {/* Right Content - Button & Count */}
                <div className="flex flex-col gap-[40px] items-center md:items-end">
                    {/* WhatsApp Button */}
                    <a
                        href="https://wa.me/your-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25d366] h-[72px] flex items-center justify-center gap-[10px] px-[40px] py-[10px] rounded-[20px] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)] hover:bg-[#20bd5c] transition-colors whitespace-nowrap"
                    >
                        <div className="relative w-6 h-6 invert brightness-0">
                            <Image
                                src={imgWhatsapp}
                                alt="WhatsApp"
                                width={24}
                                height={24}
                            />
                        </div>
                        <span className="text-white text-[20px] font-bold">Unirme a la comunidad</span>
                    </a>

                    {/* Stats */}
                    <div className="text-white text-right">
                        <p className="text-[36px] font-bold italic leading-[1] mb-1">1700+</p>
                        <p className="text-[36px] font-bold italic leading-[1]">personas conectadas</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
