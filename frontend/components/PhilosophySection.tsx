import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { HeartHandshake, CloudSun, Users, Scale, ArrowRight, Play, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import ScrollReveal from './ScrollReveal';
import { useInView } from 'framer-motion';

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
            desc: "Las organizaciones solo ecolan su impacto cuando su gente se desarrolla. Potencio ambos aspectos para que la transformación sea auténtica y duradera."
        },
        {
            icon: <Scale className="w-[40px] h-[40px] text-keicy-teal" />,
            title: "Justicia como brújula",
            desc: "Mi motor es reducir desigualdades: uso mi expertise para que más personas y comunidades accedan a oportunidades reales de crecimiento."
        }
    ];

    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false); // Enable sound by default
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);

    // Detect if the video container is in view
    const isInView = useInView(containerRef, {
        amount: 0.6 // Trigger when 60% of the video is visible
    });

    useEffect(() => {
        if (videoRef.current) {
            if (isInView) {
                // Try to play with current mute state (unmuted by default now)
                videoRef.current.play().catch(err => {
                    console.log("Autoplay with sound might be blocked, trying muted...", err);
                    if (videoRef.current) {
                        videoRef.current.muted = true;
                        setIsMuted(true);
                        videoRef.current.play();
                    }
                });
            } else {
                videoRef.current.pause();
            }
        }
    }, [isInView]);

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            const newMuted = !isMuted;
            videoRef.current.muted = newMuted;
            setIsMuted(newMuted);

            // If we're unmuting and it's not playing, maybe play it
            if (!newMuted && !isPlaying) {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    return (
        <section className="w-full bg-[#0097b2] py-[80px] px-4 md:px-[60px] font-primary relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-[60px] items-center">

                {/* Video Column */}
                <ScrollReveal direction="left" distance={80} delay={0.1}>
                    <div
                        ref={containerRef}
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

                        {/* Mute/Unmute Button Overlay */}
                        <div
                            className="absolute bottom-6 right-6 z-30 bg-[#0e5587]/80 p-4 rounded-full text-white hover:bg-[#0e5587] transition-colors"
                            onClick={toggleMute}
                        >
                            {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                        </div>

                        {/* Video */}
                        <div className="absolute inset-0">
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover"
                                src="/wp-content/uploads/2025/01/VIDEO-2024-10-25-12-30-14.mp4"
                                loop
                                muted={isMuted}
                                playsInline
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                            />
                        </div>
                    </div>
                </ScrollReveal>

                {/* Content Column */}
                <div className="flex flex-col gap-[30px] md:gap-[40px] text-white">

                    {/* Intro Text */}
                    <ScrollReveal direction="right" delay={0.2}>
                        <div className="text-[20px] md:text-[28px] lg:text-[32px] leading-[1.2] tracking-normal mb-2">
                            <p>
                                <span className="font-bold italic">Economista y experta en cooperación internacional.</span> <span className="font-medium italic">Sé que el cambio duradero requiere estrategia clara y equipos fuertes. Trabajo en ambos frentes porque solo así se transforman comunidades.</span>
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Feature List */}
                    <div className="flex flex-col gap-[20px] md:gap-[25px]">
                        {features.map((item, index) => (
                            <ScrollReveal key={index} direction="right" delay={0.3 + index * 0.1}>
                                <div className="flex gap-[20px] items-start">
                                    {/* Icon Box */}
                                    <div className="bg-white rounded-[15px] w-[60px] h-[60px] md:w-[70px] md:h-[70px] shrink-0 flex items-center justify-center shadow-md">
                                        {React.cloneElement(item.icon as any, { className: "w-[30px] h-[30px] md:w-[36px] md:h-[36px] text-keicy-teal" })}
                                    </div>

                                    {/* Text */}
                                    <div className="flex flex-col gap-0.5">
                                        <h3 className="text-[22px] md:text-[26px] font-bold leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-snug tracking-tight opacity-95">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Buttons */}
                    <ScrollReveal direction="up" delay={0.8} scale={0.9} className="flex flex-col sm:flex-row gap-6 justify-end items-center mt-2">
                        <Button
                            asChild
                            className="bg-white text-keicy-navy hover:bg-gray-100 text-[18px] md:text-[20px] font-bold py-[24px] md:py-[28px] px-[30px] md:px-[40px] rounded-[20px] shadow-lg transition-all hover:scale-105"
                        >
                            <Link href="/contacto">
                                Contáctame
                            </Link>
                        </Button>

                        <Link
                            href="/sobre-mi"
                            className="text-white text-[18px] md:text-[20px] font-bold flex items-center gap-2 hover:translate-x-2 transition-transform"
                        >
                            Más sobre mi <ArrowRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
                        </Link>
                    </ScrollReveal>

                </div>

            </div>
        </section>
    );
}
