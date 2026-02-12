'use client';

import { Suspense, useState, useEffect } from 'react';
import { SectionCards } from '@/components/section-cards';
import { EscritorioSkeleton } from '@/components/dashboard-skeleton';
import { motion, AnimatePresence } from 'framer-motion';

function DashboardContent() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="flex flex-1 flex-col gap-6 p-6">
                <div className="flex flex-col gap-1 mb-2">
                    <div className="h-8 w-48 bg-neutral-100 animate-pulse rounded-md" />
                    <div className="h-4 w-64 bg-neutral-100 animate-pulse rounded-md mt-1" />
                </div>
                <EscritorioSkeleton />
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6"
        >
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Panel de Administración</h1>
                    <p className="text-muted-foreground text-sm font-medium">Gestiona y supervisa la actividad global de la plataforma.</p>
                </div>
            </div>

            <div className="grid gap-4">
                <SectionCards />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4">
                    <div className="rounded-xl border border-neutral-100 bg-white text-card-foreground shadow-sm p-6">
                        <h3 className="text-lg font-bold text-neutral-800 mb-4 font-sans">Reportes Recientes</h3>
                        <div className="space-y-4">
                            {[
                                { title: "Reporte Mensual de Actividad", date: "Generado hace 2 días" },
                                { title: "Análisis de Engagement", date: "Generado hace 1 semana" }
                            ].map((report, i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-neutral-50 bg-neutral-50/20 hover:bg-neutral-50 transition-all">
                                    <div>
                                        <p className="text-sm font-bold text-neutral-800">{report.title}</p>
                                        <p className="text-xs text-muted-foreground font-medium">{report.date}</p>
                                    </div>
                                    <button className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg border border-neutral-200 hover:bg-white transition-all shadow-sm">
                                        Ver
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="col-span-3">
                    <div className="rounded-xl border border-neutral-100 bg-white text-card-foreground shadow-sm p-6">
                        <h3 className="text-lg font-bold text-neutral-800 mb-4 font-sans">Métricas Clave</h3>
                        <div className="space-y-3">
                            {[
                                { label: "Usuarios gestionados", value: "456" },
                                { label: "Cursos supervisados", value: "23" },
                                { label: "Reportes generados", value: "12" },
                                { label: "Satisfacción promedio", value: "4.6/5.0" }
                            ].map((metric, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-neutral-50/50">
                                    <span className="text-sm text-neutral-500 font-medium">{metric.label}</span>
                                    <span className="text-sm font-bold text-neutral-900">{metric.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function AdminDashboard() {
    return (
        <Suspense fallback={<EscritorioSkeleton />}>
            <DashboardContent />
        </Suspense>
    );
}
