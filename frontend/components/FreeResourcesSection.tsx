import React from 'react';
import { Button } from '@/components/ui/button';

export default function FreeResourcesSection() {
    const resources = [
        { title: "Sube de nivel en el sector social", type: "ebook" },
        { title: "Estrategia de recaudación de fondos", type: "ebook" },
        { title: "Pasos para diseñar un proyecto social", type: "ebook" },
        { title: "Pasos para redactar un reporte", type: "ebook" }
    ];

    return (
        <section className="bg-[#0097b2] content-stretch flex flex-col gap-[40px] items-start px-[20px] md:px-[40px] py-[60px] relative shrink-0 w-full" id="recursos">
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                <div className="flex flex-col font-['Red_Hat_Display'] font-bold justify-center leading-[0] relative shrink-0 text-[32px] md:text-[52px] text-center text-white tracking-[0.6271px] w-full">
                    <p className="leading-[54px] whitespace-pre-wrap">Recursos gratuitos</p>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
                    <div className="flex flex-col font-['Red_Hat_Display'] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] md:text-[36px] text-center text-white tracking-[0.4341px] w-full max-w-[1200px]">
                        <p className="leading-[40px] whitespace-pre-wrap">Aquí encuentras herramientas que no son de relleno: son el resultado de años de experiencia, sistematización y trabajo con cientos de personas y organizaciones como la tuya.</p>
                    </div>
                </div>
            </div>

            <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full">
                <div className="content-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[30px] relative w-full">
                    {resources.map((res, i) => (
                        <div key={i} className="bg-white flex flex-col gap-[20px] md:gap-[30px] h-[280px] md:h-[328px] items-center justify-center overflow-clip p-[20px] relative rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full transition-transform hover:scale-[1.02]">
                            <div className="flex flex-col font-['Red_Hat_Display'] font-semibold justify-center leading-[30px] md:leading-[40px] relative shrink-0 text-[24px] md:text-[36px] text-[#0e5587] text-center tracking-[0.4341px] w-full h-[60%] flex items-center justify-center px-4">
                                <p className="whitespace-pre-wrap">{res.title}</p>
                            </div>
                            <div className="flex flex-col font-['Red_Hat_Display'] font-normal justify-center leading-[0] relative shrink-0 text-[16px] md:text-[20px] text-[#0e5587] text-center tracking-[0.2412px] w-full uppercase font-bold tracking-[2px]">
                                <p className="leading-[26px] whitespace-pre-wrap">{res.type}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <Button className="bg-[#0e5587] hover:bg-[#0a4a75] h-[64px] items-center justify-center overflow-clip px-[40px] py-[16px] relative rounded-[20px] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 text-white font-['Red_Hat_Display'] font-bold text-[20px] transition-all">
                    Más recursos gratuitos
                </Button>
            </div>
        </section>
    );
}
