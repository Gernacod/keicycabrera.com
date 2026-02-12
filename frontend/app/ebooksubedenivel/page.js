'use client';
import React from 'react';
import useLinkInterceptor from '@/hooks/useLinkInterceptor';

const EbookSubeDeNivel = () => {
  useLinkInterceptor();

  const benefits = [
    "Supera la frustración de la búsqueda de empleo en el sector social.",
    "Domina las dinámicas reales del sector humanitario y de desarrollo.",
    "Construye una red profesional sólida que impulse tu carrera.",
    "Claves para destacar en procesos de selección competitivos."
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#184476] py-24 px-4 relative overflow-hidden text-center text-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#1a7383] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 font-bold text-sm mb-8 uppercase tracking-widest border border-white/20">
            Ebook Gratuito
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight uppercase">
            Sube de Nivel en el <br /> <span className="text-[#d6c072]">Sector Social</span> 🚀
          </h1>
          <p className="text-xl md:text-2xl font-light italic text-white/80 max-w-3xl mx-auto leading-relaxed">
            ¡Asciende en el sector social! Domina las claves y alcanza tus metas profesionales con esta guía completa.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gray-50 rounded-[3rem] -rotate-3"></div>
              <div className="relative bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 aspect-[3/4] flex flex-col items-center justify-center text-center">
                <div className="w-32 h-32 bg-[#d6c072] rounded-full flex items-center justify-center text-white text-5xl mb-8 shadow-inner shadow-black/10">
                  <i className="fas fa-book-open"></i>
                </div>
                <h2 className="text-2xl font-black text-[#184476] mb-4">Ebook: Sube de Nivel</h2>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Recurso Gratuito</p>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#184476] rounded-full flex items-center justify-center text-white text-2xl shadow-xl animate-bounce">
                <i className="fas fa-arrow-down"></i>
              </div>
            </div>

            <div className="space-y-10">
              <h3 className="text-3xl font-bold text-gray-900 italic underline decoration-[#d6c072] decoration-4 underline-offset-8">Lo que aprenderás:</h3>
              <ul className="space-y-6">
                {benefits.map((b, i) => (
                  <li key={i} className="flex gap-4 items-start group">
                    <div className="w-8 h-8 rounded-lg bg-green-50 flex-shrink-0 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                      <i className="fas fa-check text-xs"></i>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed font-light">{b}</p>
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 font-light italic bg-gray-50 p-6 rounded-2xl border-l-4 border-[#184476]">
                "Este recurso es el resultado de años de experiencia acompañando a profesionales a dar el salto que necesitan en su carrera social."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Form */}
      <section className="py-24 px-4 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            ¡Consigue tu copia ahora!
          </h2>
          <p className="text-xl text-gray-500 mb-12 italic">
            Completa tus datos y te enviaremos el ebook directamente a tu bandeja de entrada.
          </p>

          <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="text-left space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-4">Tu nombre</label>
                <input
                  type="text"
                  placeholder="Juan Pérez"
                  className="w-full px-8 py-5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#184476] transition-all"
                  required
                />
              </div>
              <div className="text-left space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-4">Correo electrónico</label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full px-8 py-5 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#184476] transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-6 bg-[#184476] text-white font-black text-xl rounded-2xl shadow-xl shadow-gray-300 hover:bg-[#0A4368] transition-all transform hover:scale-[1.03] active:scale-[0.97]"
              >
                Descargar Ebook Gratis <i className="fas fa-cloud-download-alt ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EbookSubeDeNivel;
