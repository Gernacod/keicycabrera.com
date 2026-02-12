import React from 'react';
import ScrollReveal from './ScrollReveal';
import AnimatedCounter from './AnimatedCounter';

export default function StatsSection() {
    const stats = [
        { value: 3436, prefix: '+', label: 'Personas formadas' },
        { value: 60, prefix: '+', label: 'Mentorías realizadas' },
        { value: 100, suffix: '%', label: 'satisfacción con el servicio' },
        { value: 16, prefix: '+', label: 'Organizaciones apoyadas' }
    ];

    return (
        <section className="bg-[#0097b2] flex flex-col items-start px-[30px] w-full">
            <div className="bg-white flex flex-col md:flex-row items-center justify-between px-[20px] md:px-[80px] py-[40px] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full text-keicy-navy">
                {stats.map((stat, index) => (
                    <ScrollReveal
                        key={index}
                        delay={index * 0.1}
                        direction="up"
                        distance={30}
                        className="flex flex-col items-center justify-center py-4 md:py-0"
                    >
                        <div className="text-[60px] md:text-[84px] font-bold leading-tight md:leading-[80px] tracking-[1.0129px]">
                            <AnimatedCounter
                                value={stat.value}
                                prefix={stat.prefix}
                                suffix={stat.suffix}
                                delay={index * 0.1 + 0.3} // Start count slightly after Reveal animation
                            />
                        </div>
                        <div className="text-[18px] md:text-[24px] font-semibold text-center leading-tight md:leading-[40px] tracking-[0.2894px] mt-2">
                            {stat.label}
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
