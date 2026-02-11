'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();
    const isDashboard = pathname.startsWith('/dashboard');

    if (isDashboard) return null;

    return (
        <footer id="footer" className="bg-[#0e5587] text-white py-[20px] relative w-full">
            <div className="container mx-auto px-10 py-[40px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] md:gap-[80px]">
                    {/* Column 1: Logo and Bio */}
                    <div className="flex flex-col items-start gap-[30px]" data-node-id="1:1453">
                        <Link href="/" className="h-[94px] relative w-[380px]">
                            <img
                                src="http://localhost:3845/assets/7c0fe06b32ddb2f1648f870986861292c7fcd8b5.png"
                                alt="Keicy Cabrera"
                                className="object-contain w-full h-full"
                            />
                        </Link>
                        <p className="text-left text-[20px] font-['Red_Hat_Display'] font-normal leading-[30px] tracking-[0.2412px] max-w-[424px]">
                            Consultora internacional especializada en liderazgo y fortalecimiento del sector social.
                        </p>
                        <div className="flex gap-[30px] items-start" data-node-id="1:1456">
                            <a href="https://www.facebook.com/keicycabrerad" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform w-[24px] h-[24px]">
                                <img src="http://localhost:3845/assets/93f233160a5bfd7ad03d75975893798425442ea5.svg" alt="Facebook" className="w-full h-full" />
                            </a>
                            <a href="https://www.instagram.com/keicycabrera" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform w-[24px] h-[24px]">
                                <img src="http://localhost:3845/assets/58e52e89f9c3f507e5aede741895fe9b34d6cf24.svg" alt="Instagram" className="w-full h-full" />
                            </a>
                            <a href="https://www.linkedin.com/in/keicycabrera/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform w-[24px] h-[24px]">
                                <img src="http://localhost:3845/assets/b1ddc16000b90d8b7ab6fc63e6004d2d425680c9.svg" alt="Linkedin" className="w-full h-full" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Courses */}
                    <div className="flex flex-col items-start gap-[30px]" data-node-id="1:1466">
                        <h3 className="text-[36px] font-['Red_Hat_Display'] font-semibold tracking-[0.4341px] h-[69px] flex items-center text-white">Cursos</h3>
                        <ul className="flex flex-col gap-[20px] text-[20px] font-['Red_Hat_Display'] font-normal tracking-[0.2412px] text-white">
                            <li><Link href="/cursosyclases" className="text-white hover:text-[#d3be7c] transition-colors leading-[30px]">Excel para MERA</Link></li>
                            <li><Link href="/cursosyclases" className="text-white hover:text-[#d3be7c] transition-colors leading-[30px]">Diseño de proyectos</Link></li>
                            <li><Link href="/cursosyclases" className="text-white hover:text-[#d3be7c] transition-colors leading-[30px]">Fundraising estratégico</Link></li>
                            <li><Link href="/cursosyclases" className="text-white hover:text-[#d3be7c] transition-colors leading-[30px]">Desarrollo profesional</Link></li>
                            <li><Link href="/cursosyclases" className="text-white hover:text-[#d3be7c] transition-colors leading-[30px]">Redacción de informes</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="flex flex-col items-start gap-[30px]" data-node-id="1:1474">
                        <h3 className="text-[36px] font-['Red_Hat_Display'] font-semibold tracking-[0.4341px] h-[69px] flex items-center text-white">Contacto</h3>
                        <ul className="flex flex-col gap-[20px] text-[20px] font-['Red_Hat_Display'] font-normal tracking-[0.2412px] text-white">
                            <li className="flex items-center gap-[6px]">
                                <img src="http://localhost:3845/assets/99fb80bb7b29cefba0ad25603df7fb20b49a08a9.svg" alt="Phone" className="w-[24px] h-[24px]" />
                                <span className="leading-[30px] font-['Red_Hat_Display'] text-white">+58 412 1234567</span>
                            </li>
                            <li className="flex items-center gap-[6px]">
                                <img src="http://localhost:3845/assets/d21b1c79ae99d84930439e06fe2a26c74bef2591.svg" alt="Email" className="w-[24px] h-[24px]" />
                                <span className="leading-[30px] font-['Red_Hat_Display'] text-white">keicy@consultora.com</span>
                            </li>
                            <li className="flex items-center gap-[6px]">
                                <img src="http://localhost:3845/assets/1fffac858d5d9b232a025cd261485357158f9cc1.svg" alt="Location" className="w-[24px] h-[24px]" />
                                <span className="leading-[30px] font-['Red_Hat_Display'] text-white">Latinoamérica</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Note: In the latest Figma nodes (1:1450 - 1:1490), there is no explicit copyright bar. 
                I will remove it to strictly follow the requested designs, or keep it if it's considered a project requirement.
                Based on "Implementa este diseño", I will follow Figma exactly. */}
        </footer>
    );
};

export default Footer;
