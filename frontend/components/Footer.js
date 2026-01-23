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
        <footer id="footer" className="bg-[#184476] text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Column 1: Logo and Bio */}
                    <div className="flex flex-col items-center md:items-start">
                        <Link href="/" className="mb-6">
                            <Image
                                src="/wp-content/uploads/2024/11/Borde-Azul-Blanco.webp"
                                alt="Keicy Cabrera Logo"
                                width={224}
                                height={224}
                                className="w-56 h-auto"
                                style={{ filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.4))' }}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAD8D+JaQAA3AA/uh1JwAA="
                            />
                        </Link>
                        <p className="text-center md:text-left text-sm font-medium leading-relaxed max-w-xs">
                            Econ. y Máster en Cooperación Internacional al Desarrollo: Gestión y Diseño de Proyectos
                        </p>
                        <div className="flex gap-4 mt-8">
                            <a href="https://www.facebook.com/keicycabrerad" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-2 rounded-full hover:bg-white/30 hover:scale-110 transition-transform">
                                <svg className="w-5 h-5 fill-white" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                            </a>
                            <a href="https://www.instagram.com/keicycabrera" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-2 rounded-full hover:bg-white/30 hover:scale-110 transition-transform">
                                <svg className="w-5 h-5 fill-white" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7-29.5 9-99.5 9-132.1s2.7 102.7-9 132.1z"></path></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/keicycabrera/" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-2 rounded-full hover:bg-white/30 hover:scale-110 transition-transform">
                                <svg className="w-5 h-5 fill-white" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Courses */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-xl font-bold mb-6">Cursos</h3>
                        <ul className="space-y-4 text-center md:text-left">
                            <li><Link href="/cursosyclases" className="text-white hover:underline transition-all">Curso de Diseño de Proyectos Sociales</Link></li>
                            <li><Link href="/cursosyclases" className="text-white hover:underline transition-all">Recaudación de Fondos para Proyectos Sociales</Link></li>
                            <li><Link href="/cursosyclases" className="text-white hover:underline transition-all">Introducción a la Gestión Basada en Resultados</Link></li>
                            <li><Link href="/cursosyclases" className="text-white hover:underline transition-all">Sube de Nivel en el Sector Humanitario y de Desarrollo</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-xl font-bold mb-6">Contacto</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 fill-white" viewBox="0 0 512 512"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
                                <span>+58 (412) 565-3886</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 fill-white" viewBox="0 0 512 512"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                                <span>info@keicycabrera.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 fill-white" viewBox="0 0 384 512"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                                <span>Latinoamérica</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/20 mt-12 pt-8 text-center">
                    <p className="text-sm opacity-80">© <strong>Keicy Cabrera – 2024 Derechos reservados.</strong></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
