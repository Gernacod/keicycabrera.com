'use client';
import React from 'react';
import useLinkInterceptor from '@/hooks/useLinkInterceptor';

const DiagnosticoCumplimiento = () => {
  useLinkInterceptor();

  const features = [
    {
      icon: "fas fa-file-invoice-dollar",
      title: "Gestión Financiera",
      desc: "Evalúa tus procesos contables y de control de recursos."
    },
    {
      icon: "fas fa-transparency",
      title: "Transparencia",
      desc: "Mide cómo comunicas tus acciones y el uso de fondos."
    },
    {
      icon: "fas fa-balance-scale",
      title: "Ética y Gobierno",
      desc: "Revisa tus políticas internas y estructura de toma de decisiones."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Cumplimiento Legal",
      desc: "Asegúrate de estar al día con las regulaciones vigentes."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#184476] py-24 px-4 relative overflow-hidden text-center text-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 right-20 w-80 h-80 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 font-bold text-sm mb-8 uppercase tracking-widest border border-white/20">
            Herramienta Gratuita
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
            Diagnóstico de <span className="text-[#d6c072]">Cumplimiento</span> <br /> para tu ONG 🔎
          </h1>
          <p className="text-xl md:text-2xl font-light italic text-white/80 max-w-3xl mx-auto leading-relaxed">
            ¿Está tu ONG lista para cumplir con los estándares de los donantes? Descubre en qué nivel de cumplimiento se encuentra tu organización.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#184476]">Evalúa 10 áreas clave en minutos</h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Nuestra <strong>Herramienta de Diagnóstico de Buenas Prácticas para ONGs</strong> te permite identificar fortalezas y detectar oportunidades de mejora en temas esenciales.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Obtén recomendaciones prácticas y puntajes claros que te ayudarán a construir una organización sólida, alineada con los requerimientos de donantes y reguladores.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow group">
                  <div className="w-10 h-10 rounded-xl bg-[#184476] flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    <i className={f.icon}></i>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 font-light">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Form */}
      <section className="py-24 px-4 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
              ¡Descarga la herramienta ahora!
            </h2>
            <p className="text-xl text-gray-500 italic max-w-2xl mx-auto">
              Da el primer paso hacia un cumplimiento efectivo y atrae más donantes con una organización transparente.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100 max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-left space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-4">Nombre</label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full px-8 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#184476] transition-all"
                    required
                  />
                </div>
                <div className="text-left space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-4">Apellido</label>
                  <input
                    type="text"
                    placeholder="Tu apellido"
                    className="w-full px-8 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#184476] transition-all"
                    required
                  />
                </div>
              </div>
              <div className="text-left space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-4">Correo electrónico de contacto</label>
                <input
                  type="email"
                  placeholder="email@ejemplo.com"
                  className="w-full px-8 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#184476] transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-[#184476] text-white font-black text-xl rounded-2xl shadow-xl shadow-gray-300 hover:bg-[#0A4368] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Solicitar Diagnóstico <i className="fas fa-search ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DiagnosticoCumplimiento;
