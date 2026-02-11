import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function HeaderFigma() {
    return (
        <header className="fixed top-0 w-full z-[100] pt-[40px] flex justify-center pointer-events-none">
            <div className="bg-white h-[80px] rounded-[50px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] flex items-center gap-[40px] px-[20px] min-w-[1000px] pointer-events-auto">

                {/* Logo */}
                <Link href="/" className="relative w-[176px] h-[72px] flex items-center justify-center overflow-hidden">
                    <Image
                        src="/wp-content/uploads/2023/12/Azul-Sin-Borde.webp"
                        alt="Keicy Cabrera"
                        width={176}
                        height={72}
                        className="object-contain"
                    />
                </Link>

                {/* Navigation */}
                <nav className="flex items-center gap-[30px]">
                    <Link href="/" className="text-[20px] font-bold text-keicy-navy underline decoration-solid leading-[28px] tracking-[0.2411px]">
                        Inicio
                    </Link>
                    <Link href="/sobremi" className="text-[20px] font-bold text-keicy-navy leading-[28px] tracking-[0.2411px] hover:text-keicy-navy/80">
                        Sobre mí
                    </Link>
                    <div className="flex items-center gap-[6px] cursor-pointer group">
                        <span className="text-[20px] font-bold text-keicy-navy leading-[28px] tracking-[0.2411px]">Servicios</span>
                        <ChevronDown className="w-6 h-6 text-keicy-navy" />
                    </div>
                    <Link href="/recursos-gratuitos" className="text-[20px] font-bold text-keicy-navy leading-[28px] tracking-[0.2411px] hover:text-keicy-navy/80">
                        Recursos gratuitos
                    </Link>
                    <Link href="/blog" className="text-[20px] font-bold text-keicy-navy leading-[28px] tracking-[0.2411px] hover:text-keicy-navy/80">
                        Blog
                    </Link>
                </nav>

                {/* CTA Button */}
                <Link href="/escritorio" className="bg-keicy-navy h-[72px] flex items-center justify-center px-[40px] py-[16px] rounded-[20px] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)] hover:bg-[#0a4a75] transition-colors">
                    <span className="text-white text-[20px] font-bold">Acceder</span>
                </Link>

            </div>
        </header>
    );
}
