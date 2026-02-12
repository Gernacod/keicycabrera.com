import React from 'react';
import Link from 'next/link';
import { HeartHandshake, CloudSun, Users, Scale, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function PhilosophySection() {
    const features = [
        {
            icon: <HeartHandshake className="w-[40px] h-[40px] text-keicy-teal" />,
            title: "Estrategia técnica y humana",
            desc: "No solo brindo herramientas técnicas, sino que guío a equipos a aplicarlas con propósito, adaptándolas a su realidad y desafíos."
        },
        {
            icon: <CloudSun className="w-[40px] h-[40px] text-keicy-teal" />,
            title: "Del caos a la acción",
            desc: "Trabajo con líderes y organizaciones para convertir ideas dispersas en planes concretos, priorizando lo esencial y definiendo pasos claros."
        },
        {
            icon: <Users className="w-[40px] h-[40px] text-keicy-teal" />,
            title: "Lo colectivo nace de lo individual",
            desc: "Las organizaciones solo escalan su impacto cuando su gente se desarrolla. Potencio ambos aspectos para que la transformación sea auténtica y duradera."
        },
        {
            icon: <Scale className="w-[40px] h-[40px] text-keicy-teal" />,
            title: "Justicia como brújula",
            desc: "Mi motor es reducir desigualdades: uso mi expertise para que más personas y comunidades accedan a oportunidades reales de crecimiento."
        }
    ];

    const [isPlaying, setIsPlaying] = React.useState(false);
    const videoRef = React.useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="w-full bg-[#0097b2] py-[80px] px-4 md:px-[60px] font-primary relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-[60px] items-center">

                {/* Video Column */}
                <div
                    className="w-full h-[400px] md:h-[600px] xl:h-[785px] bg-[#f7f4f1] rounded-[20px] shadow-[-2px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-center relative overflow-hidden group cursor-pointer"
                    onClick={togglePlay}
                >
                    {/* Play/Pause Button Overlay */}
                    <div className={cn(
                        "w-[120px] h-[120px] bg-[#0e5587] rounded-full flex items-center justify-center shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)] z-20 transition-all duration-300",
                        isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                    )}>
                        {isPlaying ? (
                            <div className="w-[50px] h-[50px] flex gap-2 justify-center items-center">
                                <div className="w-[12px] h-full bg-white rounded-sm" />
                                <div className="w-[12px] h-full bg-white rounded-sm" />
                            </div>
                        ) : (
                            <Play className="w-[50px] h-[50px] text-white fill-current ml-2" />
                        )}
                    </div>

                    {/* Video */}
                    <div className="absolute inset-0">
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            src="/wp-content/uploads/2025/01/VIDEO-2024-10-25-12-30-14.mp4"
                            loop
                            playsInline
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                        />
                    </div>
                </div>

                {/* Content Column */}
                <div className="flex flex-col gap-[50px] text-white">

                    {/* Intro Text */}
                    <div className="text-[24px] md:text-[36px] leading-[1.2] tracking-normal mb-4">
                        <p>
                            <span className="font-bold italic">Economista y experta en cooperación internacional.</span> <span className="font-medium italic">Sé que el cambio duradero requiere estrategia clara y equipos fuertes. Trabajo en ambos frentes porque solo así se transforman comunidades.</span>
                        </p>
                    </div>

                    {/* Feature List */}
                    <div className="flex flex-col gap-[30px]">
                        {features.map((item, index) => (
                            <div key={index} className="flex gap-[25px] items-start">
                                {/* Icon Box */}
                                <div className="bg-white rounded-[20px] w-[80px] h-[80px] shrink-0 flex items-center justify-center shadow-md">
                                    {/* We use specific icons but user can swap them. The design uses specific graphic icons, Lucide is a placeholder approximation */}
                                    {item.icon}
                                </div>

                                {/* Text */}
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-[28px] md:text-[32px] font-bold leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-[20px] md:text-[24px] font-medium leading-[26px] tracking-[0.29px] opacity-95">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-end items-center mt-4">
                        <Button
                            asChild
                            className="bg-white text-keicy-navy hover:bg-gray-100 text-[20px] font-bold py-[28px] px-[40px] rounded-[20px] shadow-lg transition-all hover:scale-105"
                        >
                            <Link href="/contacto">
                                Contáctame
                            </Link>
                        </Button>

                        <Link
                            href="/sobre-mi"
                            className="text-white text-[20px] font-bold flex items-center gap-2 hover:translate-x-2 transition-transform"
                        >
                            Más sobre mi <ArrowRight className="w-6 h-6" strokeWidth={3} />
                        </Link>
                    </div>

                </div>

            </div>
        </section>
    );
}
