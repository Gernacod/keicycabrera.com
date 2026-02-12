'use client';
import React from 'react';
import useLinkInterceptor from '@/hooks/useLinkInterceptor';

const EbookDisenoDeProyectos = () => {
  useLinkInterceptor();

  const features = [
    {
      title: "Impacto Real",
      desc: "Diseña proyectos que respondan a las necesidades reales de las comunidades."
    },
    {
      title: "Sostenibilidad",
      desc: "Aprende a crear estructuras que perduren en el tiempo."
    },
    {
      title: "Metodología Paso a Paso",
      desc: "Desde la idea inicial hasta la formulación técnica del proyecto."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#184476] py-24 px-4 relative overflow-hidden text-center text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-300 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="inline-block px-5 py-2 border-2 border-[#d6c072] rounded-full text-[#d6c072] font-black text-sm mb-8 uppercase tracking-[0.2em]">
            Metodología Social
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight uppercase">
            Diseña tu <span className="text-[#d6c072]">Proyecto Social</span> 🎨
          </h1>
          <p className="text-xl md:text-2xl font-light italic text-white/80 max-w-3xl mx-auto leading-relaxed">
            Convierte tus ideas en proyectos reales con impacto positivo. La guía definitiva para el sector social.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gray-50 rounded-[4rem] group-hover:bg-gray-50 transition-colors duration-500"></div>
              <div className="relative aspect-square bg-white rounded-[3.5rem] shadow-2xl border border-gray-100 flex flex-col items-center justify-center p-12 overflow-hidden">
                <div className="w-full h-full border-4 border-dashed border-gray-100 rounded-[2.5rem] flex flex-col items-center justify-center text-center gap-6">
                  <div className="w-24 h-24 bg-[#d6c072] rounded-3xl flex items-center justify-center text-white text-4xl shadow-xl transform rotate-3">
                    <i className="fas fa-paint-brush"></i>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-[#184476]">Módulo de Diseño</h3>
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Recurso de Formación</p>
                  </div>
                </div>
                <div className="absolute bottom-10 right-10">
                  <i className="fas fa-rocket text-4xl text-[#184476]/20"></i>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">¿Tienes una idea pero no sabes cómo plasmarla?</h2>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  Muchos sueños se quedan en el camino por falta de una estructura técnica. Este ebook te da las herramientas para que tu visión se convierta en un plan de acción concreto y profesional.
                </p>
              </div>

              <div className="grid gap-6">
                {features.map((f, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100 group">
                    <div className="w-14 h-14 rounded-2xl bg-white flex-shrink-0 flex items-center justify-center text-[#184476] text-xl shadow-sm group-hover:bg-[#184476] group-hover:text-white transition-colors">
                      <i className={`fas ${i === 0 ? 'fa-heart' : i === 1 ? 'fa-leaf' : 'fa-list-ol'}`}></i>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-gray-900">{f.title}</h4>
                      <p className="text-gray-500 font-light">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            ¡Toma acción hoy!
          </h2>
          <p className="text-xl text-gray-500 mb-12 italic max-w-2xl mx-auto">
            Descarga gratis tu guía completa y comienza a crear proyectos que transformen el mundo.
          </p>

          <div className="bg-white p-8 md:p-14 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-100 max-w-2xl mx-auto relative group">
            <div className="absolute -top-1 -left-1 -right-1 h-3 bg-[#d6c072] rounded-t-[4rem]"></div>
            <form className="space-y-6 mt-4">
              <div className="text-left space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-4">Nombre</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-8 py-5 bg-gray-50 border-none rounded-3xl focus:ring-2 focus:ring-[#d6c072] transition-all"
                  required
                />
              </div>
              <div className="text-left space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-4">Empresa / ONG (Opcional)</label>
                <input
                  type="text"
                  placeholder="Nombre de tu organización"
                  className="w-full px-8 py-5 bg-gray-50 border-none rounded-3xl focus:ring-2 focus:ring-[#d6c072] transition-all"
                />
              </div>
              <div className="text-left space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-4">Email</label>
                <input
                  type="email"
                  placeholder="tu@correo.com"
                  className="w-full px-8 py-5 bg-gray-50 border-none rounded-3xl focus:ring-2 focus:ring-[#d6c072] transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-6 bg-[#184476] text-white font-black text-xl rounded-3xl shadow-xl shadow-gray-300 hover:bg-[#d6c072] hover:text-[#184476] hover:shadow-orange-200 transition-all transform hover:scale-[1.02] active:scale-95 mt-4"
              >
                Descargar Guía de Diseño <i className="fas fa-magic ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EbookDisenoDeProyectos;
