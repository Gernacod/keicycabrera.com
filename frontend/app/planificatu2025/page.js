'use client';
import React from 'react';
import useLinkInterceptor from '@/hooks/useLinkInterceptor';

const PlanificaTu2025 = () => {
  useLinkInterceptor();

  const benefits = [
    {
      title: "Conectarte contigo mismo",
      desc: "A través de la rueda de la vida, identificarás tus áreas de oportunidad y fortalezas."
    },
    {
      title: "Adoptar una mentalidad de crecimiento",
      desc: "Aprenderás a ver los desafíos como oportunidades de aprendizaje."
    },
    {
      title: "Establecer metas claras y alcanzables",
      desc: "Utilizarás un formato de planificación de 12 semanas para organizar tus objetivos."
    },
    {
      title: "Maximizar tu tiempo",
      desc: "Obtendrás consejos prácticos para gestionar tu tiempo de manera eficiente."
    },
    {
      title: "Aprovechar el poder de la Inteligencia Artificial",
      desc: "Descubrirás cómo utilizar esta herramienta para potenciar tu planificación."
    }
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
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight uppercase">
            ¡Diseña tu <span className="text-[#d6c072]">2025 ideal</span> <br className="hidden md:block" /> en solo 1 hora!
          </h1>
          <p className="text-xl md:text-2xl font-light italic text-white/80 max-w-3xl mx-auto leading-relaxed">
            Este taller gratuito para profesionales del sector social, humanitario y de desarrollo te proporcionará las herramientas y la inspiración que necesitas para planificar un 2025 lleno de propósito y logros.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-xl relative">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#d6c072] rounded-2xl rotate-12 flex items-center justify-center text-white text-3xl shadow-lg">
              <i className="fas fa-rocket -rotate-12"></i>
            </div>

            <h2 className="text-3xl font-bold text-[#184476] mb-12 text-center mt-4">Descubrirás cómo:</h2>

            <div className="space-y-8">
              {benefits.map((b, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-full bg-white flex-shrink-0 flex items-center justify-center text-[#184476] shadow-md group-hover:bg-[#184476] group-hover:text-white transition-colors">
                    <i className="fas fa-check"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{b.title}</h3>
                    <p className="text-gray-600 leading-relaxed font-light">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Form */}
      <section className="py-24 px-4 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            ¡No esperes más para tomar el control de tu futuro!
          </h2>
          <p className="text-xl text-gray-500 mb-12 italic">
            Llena el formulario abajo y recibirás todo en tu correo 👇🏽
          </p>

          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100 max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="text-left space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-4">Nombre completo</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-8 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#184476] transition-all"
                  required
                />
              </div>
              <div className="text-left space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-4">Correo electrónico</label>
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
                Inscribirme gratis <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PlanificaTu2025;
