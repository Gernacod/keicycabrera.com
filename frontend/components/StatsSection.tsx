import React from 'react';

export default function StatsSection() {
    const stats = [
        { num: '+3436', label: 'Personas formadas' },
        { num: '+60', label: 'Mentorías realizadas' },
        { num: '100%', label: 'satisfacción con el servicio' },
        { num: '+16', label: 'Organizaciones apoyadas' }
    ];

    return (
        <section className="bg-[#0097b2] flex flex-col items-start px-[30px] w-full">
            <div className="bg-white flex items-center justify-between px-[80px] py-[40px] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full text-keicy-navy whitespace-nowrap">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center justify-center w-[300px]">
                        <div className="text-[84px] font-bold leading-[80px] tracking-[1.0129px]">
                            {stat.num}
                        </div>
                        <div className="text-[24px] font-semibold text-center leading-[40px] tracking-[0.2894px]">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
