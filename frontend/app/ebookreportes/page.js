'use client';
import React from 'react';
import useLinkInterceptor from '@/hooks/useLinkInterceptor';

const EbookReportes = () => {
  useLinkInterceptor();

  const highlights = [
    "Comunica el impacto real de tus proyectos.",
    "Capta la atención de tus donantes con claridad.",
    "Aprende la estructura técnica de un reporte efectivo.",
    "Inspira confianza y transparencia en tu organización."
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#184476] py-24 px-4 relative overflow-hidden text-center text-white">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1a7383]/30 rounded-full blur-[100px]"></div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#d6c072]/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-lg text-white font-bold text-xs mb-8 uppercase tracking-[0.3em] border border-white/20">
            Guía Profesional
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight uppercase">
            Redacción de <span className="text-[#d6c072]">Reportes</span> 📝
          </h1>
          <p className="text-xl md:text-2xl font-light italic text-white/80 max-w-3xl mx-auto leading-relaxed">
            Aprende a contar la historia de tu impacto y enamora a tus donantes con reportes profesionales y efectivos.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#184476]">Tus resultados merecen ser contados</h2>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  Muchos proyectos sociales fallan en comunicar su valor. Un buen reporte no es solo un resumen de actividades, es una herramienta de fidelización y transparencia.
                </p>
              </div>

              <div className="space-y-4">
                {highlights.map((h, i) => (
                  <div key={i} className="flex gap-4 items-center bg-gray-50 p-5 rounded-2xl border border-gray-100 hover:border-[#184476] transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-white flex-shrink-0 flex items-center justify-center text-[#184476] group-hover:scale-110 transition-transform shadow-sm">
                      <i className="fas fa-check text-xs"></i>
                    </div>
                    <p className="font-medium text-gray-700">{h}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#d9ae7d]/20/50 rounded-[4rem] blur-3xl scale-90"></div>
              <div className="relative bg-white border border-gray-100 p-10 rounded-[3rem] shadow-2xl flex flex-col items-center">
                <div className="w-full aspect-[4/5] bg-[#184476] rounded-2xl flex flex-col items-center justify-center p-8 text-center text-white gap-6 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#d6c072]"></div>
                  <i className="fas fa-file-contract text-6xl opacity-40 group-hover:scale-110 transition-transform"></i>
                  <div className="space-y-2 relative z-10">
                    <h3 className="text-xl font-black">Ebook: Redacción de Reportes</h3>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-[#d6c072]">Descarga Gratuita</p>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12">
            ¡Consigue tu guía completa!
          </h2>

          <div className="bg-white p-8 md:p-14 rounded-[3rem] shadow-xl border border-gray-100 max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="text-left space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4 blockAlpha">Nombre</label>
                <input
                  type="text"
                  placeholder="Tu nombre completo"
                  className="w-full px-8 py-5 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-[#184476] focus:bg-white transition-all outline-none"
                  required
                />
              </div>
              <div className="text-left space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4 block">Email</label>
                <input
                  type="email"
                  placeholder="ejemplo@organizacion.com"
                  className="w-full px-8 py-5 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-[#184476] focus:bg-white transition-all outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-6 bg-[#184476] text-white font-black text-xl rounded-2xl shadow-xl shadow-gray-200 hover:bg-[#0A4368] transition-all transform hover:scale-[1.01] active:scale-[0.99]"
              >
                Solicitar Ebook Gratuito <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
            <p className="mt-8 text-sm text-gray-400 italic">
              "Tus donantes quieren ver el cambio que estás generando. Ayúdalos a verlo con claridad."
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EbookReportes;
