import React from 'react';
import { FileText, BookOpen } from 'lucide-react';

export default function InfoproductosSection() {
    return (
        <section className="flex flex-col gap-[40px] items-center justify-center px-[30px] py-[60px] bg-white">
            {/* Header */}
            <div className="flex flex-col gap-[10px] items-start w-full">
                <h2 className="text-[52px] font-bold leading-[54px] text-keicy-navy text-center tracking-[0.6271px] w-full">
                    Infoproductos
                </h2>
                <div className="flex flex-col items-center justify-center w-full">
                    <p className="text-[36px] font-semibold leading-[40px] text-keicy-navy text-center tracking-[0.4341px]">
                        Optimiza tu impacto con herramientas diseñadas para simplificar tu trabajo
                    </p>
                </div>
            </div>

            {/* Info Cards */}
            <div className="flex gap-[80px] items-start">
                {/* Plantillas Card */}
                <div className="flex flex-col gap-[20px] items-center justify-center">
                    <div className="border-[6px] border-keicy-navy border-solid flex flex-col items-center justify-center p-[10px] rounded-full w-[200px] h-[200px]">
                        <FileText className="w-[92px] h-[92px] text-keicy-navy" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[36px] font-semibold leading-[40px] text-keicy-navy text-center tracking-[0.4341px]">
                        Plantillas
                    </h3>
                    <p className="text-[24px] font-medium leading-[26px] text-keicy-navy text-center tracking-[0.2894px] w-[500px]">
                        Herramientas listas para usar y adaptar a tus necesidades. Nuestras plantillas te ayudarán a agilizar procesos clave como formulación de proyectos, presupuestos, informes de impacto y más.
                    </p>
                </div>

                {/* Guías Card */}
                <div className="flex flex-col gap-[20px] items-center">
                    <div className="border-[6px] border-keicy-navy border-solid flex flex-col items-center justify-center p-[10px] rounded-full w-[200px] h-[200px]">
                        <BookOpen className="w-[92px] h-[92px] text-keicy-navy" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[36px] font-semibold leading-[40px] text-keicy-navy text-center tracking-[0.4341px]">
                        Guías
                    </h3>
                    <p className="text-[24px] font-medium leading-[26px] text-keicy-navy text-center tracking-[0.2894px] w-[500px]">
                        Acompañamiento paso a paso para dominar metodologías y buenas prácticas. Con nuestras guías prácticas, aprenderás a diseñar estrategias, medir resultados, captar fondos y fortalecer tu organización.
                    </p>
                </div>
            </div>

            {/* CTA Button */}
            <div className="bg-keicy-navy flex h-[64px] items-center justify-center px-[40px] py-[16px] rounded-[20px] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer hover:opacity-90 transition-opacity">
                <p className="font-bold text-[20px] text-center text-white leading-normal">
                    Quiero un infoproducto
                </p>
            </div>
        </section>
    );
}
