'use client';
import React from 'react';
import useLinkInterceptor from '@/hooks/useLinkInterceptor';

const EbookRecaudacion = () => {
  useLinkInterceptor();

  const painPoints = [
    "No sabes por dónde empezar a recaudar fondos.",
    "Te cuesta escalar tus operaciones por falta de recursos.",
    "Sientes inseguridad al momento de crear una estrategia."
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#184476] py-24 px-4 relative overflow-hidden text-center text-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-400 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="inline-block px-6 py-2 bg-[#d6c072] rounded-full text-[#184476] font-black text-sm mb-8 uppercase tracking-widest">
            Guía Estratégica
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight uppercase">
            Recaudación de <br /> <span className="text-[#d6c072]">Fondos</span> 💰
          </h1>
          <p className="text-xl md:text-2xl font-light italic text-white/80 max-w-3xl mx-auto leading-relaxed">
            Domina el arte de la recaudación y transforma tu proyecto social con estrategias que sí funcionan.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">¿Tienes una ONG pero falta presupuesto?</h2>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  Este ebook es la clave para impulsar tus operaciones. Te brinda el paso a paso detallado para armar una estrategia sólida y sostenible.
                </p>
              </div>

              <div className="bg-orange-50 p-8 rounded-[2rem] border border-orange-100">
                <h3 className="text-xl font-bold text-orange-800 mb-6 flex items-center gap-2">
                  <i className="fas fa-exclamation-circle"></i> Sientes que:
                </h3>
                <ul className="space-y-4">
                  {painPoints.map((p, i) => (
                    <li key={i} className="flex gap-3 items-center text-orange-900/80 font-medium">
                      <i className="fas fa-times-circle text-orange-400"></i> {p}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-2xl font-black text-[#184476] italic">
                ¡Es momento de cambiar esa realidad! 🚀
              </p>
            </div>

            <div className="order-1 md:order-2 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#d6c072] to-[#184476] rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <div className="w-16 h-16 bg-[#d6c072] rounded-full flex items-center justify-center text-white text-2xl rotate-12 shadow-lg">
                    <i className="fas fa-dollar-sign"></i>
                  </div>
                </div>
                <div className="w-40 h-56 bg-gray-50 rounded-xl mb-8 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-4 text-gray-300">
                  <i className="fas fa-book-open text-5xl"></i>
                  <span className="text-[10px] uppercase font-black tracking-widest">Ebook Recaudación</span>
                </div>
                <h2 className="text-2xl font-black text-[#184476]">Estrategia de Fondos</h2>
                <p className="mt-4 text-gray-500 font-light max-w-xs">Guía completa para el diseño e implementación de estrategias efectivas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-[#184476]/5 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            Descarga tu copia gratis
          </h2>
          <p className="text-xl text-gray-500 mb-12 italic">
            Empieza a transformar tu proyecto hoy mismo con herramientas profesionales.
          </p>

          <div className="bg-white p-10 md:p-14 rounded-[4rem] shadow-2xl border border-gray-100 max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#d6c072] via-[#184476] to-[#d6c072]"></div>
            <form className="space-y-8">
              <div className="space-y-4">
                <div className="text-left">
                  <label className="text-xs font-black text-[#184476] uppercase tracking-widest ml-4 mb-2 block">Nombre completo</label>
                  <input
                    type="text"
                    placeholder="Tu nombre real"
                    className="w-full px-8 py-5 bg-gray-50 border-2 border-transparent rounded-3xl focus:border-[#184476] focus:bg-white focus:ring-0 transition-all text-gray-900"
                    required
                  />
                </div>
                <div className="text-left">
                  <label className="text-xs font-black text-[#184476] uppercase tracking-widest ml-4 mb-2 block">Email profesional</label>
                  <input
                    type="email"
                    placeholder="ejemplo@ong.org"
                    className="w-full px-8 py-5 bg-gray-50 border-2 border-transparent rounded-3xl focus:border-[#184476] focus:bg-white focus:ring-0 transition-all text-gray-900"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-6 bg-[#184476] text-white font-black text-xl rounded-3xl shadow-[0_20px_40px_-10px_rgba(24,68,118,0.3)] hover:bg-[#0A4368] hover:shadow-none transition-all transform hover:translate-y-1 active:scale-95"
              >
                ¡Obtener Ebook Ahora! <i className="fas fa-hand-holding-usd ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EbookRecaudacion;
