import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function BlogSection() {
    const posts = [
        {
            title: "Llegan donantes, pero no se quedan:",
            subtitle: "¿Qué está fallando?",
            description: "¿Has logrado captar la atención de un donante pero después de unos meses se van? Descubre las claves para mantener relaciones duraderas...",
            date: "Diciembre 05, 2024",
            image: "http://localhost:3845/assets/9a5a8e07fbccba87929c64546c5ee58365793777.png",
            main: true
        },
        {
            title: "Mentalidad de cumplimiento: Clave para el crecimiento sostenible",
            date: "Diciembre 05, 2024",
            image: "http://localhost:3845/assets/afb197efb794b8b72ecaff64a05a2ed41d2e9212.png",
            main: false
        },
        {
            title: "Descifrando a los donantes: Lo que realmente buscan",
            date: "Diciembre 05, 2024",
            image: "http://localhost:3845/assets/e25323c60754149194726f53811609dfed1898fa.png",
            main: false
        }
    ];

    return (
        <section className="bg-white content-stretch flex flex-col gap-[40px] items-center justify-center p-[20px] md:p-[60px] relative shrink-0 w-full" id="blog">
            <ScrollReveal direction="up">
                <div className="flex flex-col font-['Red_Hat_Display'] font-bold justify-center leading-[0] relative shrink-0 text-[32px] md:text-[52px] text-[#0e5587] text-center tracking-[0.6271px] whitespace-nowrap">
                    <p className="leading-[54px]">Blog</p>
                </div>
            </ScrollReveal>

            <div className="content-stretch flex flex-col md:flex-row gap-[40px] items-start relative shrink-0 w-full max-w-[1400px]">
                {/* Main Post */}
                <ScrollReveal direction="left" delay={0.2} scale={0.95} className="flex-1 w-full self-stretch h-full">
                    <div className="content-stretch flex flex-col gap-[10px] items-center h-full min-h-[500px] md:min-h-[600px] overflow-clip p-[20px] md:p-[30px] relative rounded-[20px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] group cursor-pointer transition-all">
                        <div className="absolute inset-0 z-0">
                            <img
                                src={posts[0].image}
                                alt=""
                                className="absolute inset-0 object-cover w-full h-full rounded-[20px]"
                                onError={(e) => { (e.target as any).src = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80' }}
                            />
                            <div className="absolute inset-0 bg-[#00242a]/80 rounded-[20px] group-hover:bg-[#00242a]/70 transition-colors" />
                        </div>

                        <div className="relative z-10 content-stretch flex flex-col h-full justify-between items-start w-full gap-4">
                            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
                                <div className="flex flex-col font-['Red_Hat_Display'] font-semibold justify-center leading-[30px] md:leading-[34px] relative shrink-0 text-[24px] md:text-[28px] text-white tracking-[0.3376px] w-full">
                                    <p className="mb-0">{posts[0].title}</p>
                                    <p>{posts[0].subtitle}</p>
                                </div>
                            </div>

                            <div className="flex flex-col font-['Red_Hat_Display'] font-normal justify-center leading-[26px] md:leading-[30px] relative text-[18px] md:text-[24px] text-white/90 tracking-[0.2894px] w-full mt-4">
                                <p className="whitespace-pre-wrap">{posts[0].description}</p>
                            </div>

                            <div className="flex flex-col w-full mt-auto">
                                <Link href="#" className="flex h-[30px] items-center justify-end overflow-clip py-[10px] relative rounded-[50px] shrink-0 w-full group/btn">
                                    <div className="flex flex-col font-['Red_Hat_Display'] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
                                        <p className="decoration-solid leading-[normal] underline group-hover/btn:text-[#d3be7c] transition-colors">Leer Artículo</p>
                                    </div>
                                </Link>
                                <div className="content-stretch flex flex-col gap-[10px] h-[42px] items-start justify-center relative w-full border-t border-white/20 pt-4">
                                    <div className="flex flex-col font-['Red_Hat_Display'] font-normal justify-center leading-[0] relative shrink-0 text-[18px] md:text-[20px] text-center text-white whitespace-nowrap opacity-70">
                                        <p className="leading-[normal]">{posts[0].date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Small Posts */}
                <div className="content-stretch flex flex-col gap-[40px] items-start justify-start flex-1 relative w-full">
                    {posts.slice(1).map((post, i) => (
                        <ScrollReveal key={i} direction="right" delay={0.3 + i * 0.15} scale={1} className="w-full">
                            <div className="content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip p-[20px] md:p-[30px] relative rounded-[20px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] shrink-0 w-full min-h-[250px] group cursor-pointer transition-all">
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={post.image}
                                        alt=""
                                        className="absolute inset-0 object-cover w-full h-full rounded-[20px]"
                                        onError={(e) => { (e.target as any).src = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80' }}
                                    />
                                    <div className="absolute inset-0 bg-[#00242a]/80 rounded-[20px] group-hover:bg-[#00242a]/70 transition-colors" />
                                </div>

                                <div className="relative z-10 content-stretch flex flex-col h-full justify-between items-start w-full gap-4">
                                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
                                        <div className="flex flex-col font-['Red_Hat_Display'] font-semibold justify-center leading-[30px] md:leading-[34px] relative shrink-0 text-[22px] md:text-[28px] text-white tracking-[0.3376px] w-full">
                                            <p className="leading-[34px] whitespace-pre-wrap">{post.title}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col w-full mt-auto">
                                        <Link href="#" className="flex h-[30px] items-center justify-end overflow-clip py-[10px] relative rounded-[50px] shrink-0 w-full group/btn">
                                            <div className="flex flex-col font-['Red_Hat_Display'] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
                                                <p className="decoration-solid leading-[normal] underline group-hover/btn:text-[#d3be7c] transition-colors">Leer Artículo</p>
                                            </div>
                                        </Link>
                                        <div className="content-stretch flex flex-col gap-[10px] h-[42px] items-start justify-center relative w-full border-t border-white/20 pt-4">
                                            <div className="flex flex-col font-['Red_Hat_Display'] font-normal justify-center leading-[0] relative shrink-0 text-[18px] md:text-[20px] text-center text-white whitespace-nowrap opacity-70">
                                                <p className="leading-[normal]">{post.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
