'use client';
// Deployment trigger: 2026-01-23
import React, { useState } from 'react';
import useLinkInterceptor from '@/hooks/useLinkInterceptor';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const Home = () => {
  useLinkInterceptor();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const organizations = [
    { name: 'Save the Children', src: '/wp-content/uploads/2025/04/images.png' },
    { name: 'Fe y Alegría', src: '/wp-content/uploads/2025/04/images-1.png' },
    { name: 'Federación Luterana Mundial', src: '/wp-content/uploads/2025/04/images-3.png' },
    { name: 'Construyendo Futuros', src: '/wp-content/uploads/2025/04/images-2.jpg' },
    { name: 'ASONACOP', src: '/wp-content/uploads/2025/04/img-88-300x300.jpg' },
    { name: 'Fundación Proyecto Maniapure', src: '/wp-content/uploads/2025/04/orglogo.jpg' },
    { name: 'Manos que Dejan Huellas', src: '/wp-content/uploads/2025/04/images-2-300x162.png' },
    { name: 'Fundación Tierra Viva', src: '/wp-content/uploads/2025/04/logo_tierra_viva_full_definicion-1-300x300.jpg' },
    { name: 'FUNDACRECER', src: '/wp-content/uploads/2025/04/images-4.png' }
  ];

  const testimonials = [
    {
      name: "Oriana Venti",
      role: "Participante de Escala tu Impacto Social",
      date: "2024",
      text: "Me siento más segura para tomar decisiones y utilizar herramientas clave en el sector social. El contenido fue excelente, las dinámicas de las clases muy humanas. Lo que más me marcó fue la calidez de Keicy.",
      image: "/wp-content/uploads/2024/11/oriana.jpg"
    },
    {
      name: "Liliana Pertuz",
      role: "Participante de Escala tu Impacto Social",
      date: "2024",
      text: "Esta formación fue, sin duda, la mejor inversión de mi año: me ayudó a dar un paso firme hacia mi sueño de servir a los demás. Hoy me llevo herramientas, estructura y una visión mucho más estratégica.",
      image: "/wp-content/uploads/2024/11/liliana.jpg"
    }
  ];

  const prevTestimonial = () => {
    setActiveTestimonial((v) => (v - 1 + testimonials.length) % testimonials.length);
  };

  const nextTestimonial = () => {
    setActiveTestimonial((v) => (v + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <main className="min-h-screen bg-white overflow-x-hidden pt-[80px]">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-[95%] w-full px-4 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-[500px_1fr] lg:grid-cols-[600px_1fr] items-center gap-10 md:gap-20">
            <div className="relative rounded-[26px] bg-[#f7f3ef] border border-black/10 shadow-[0_18px_40px_rgba(0,0,0,0.10)] overflow-hidden ml-auto md:ml-20">
              <video
                className="w-full h-full object-cover aspect-[4/5]"
                src="/wp-content/uploads/2025/01/VIDEO-2024-10-25-12-30-14.mp4"
                loop
                controls
                preload="metadata"
                controlsList="nodownload"
              ></video>
            </div>
            <div className="text-[#184476] flex flex-col justify-center items-start lg:pl-20">
              <h1 className="text-[56px] leading-[1] md:text-[90px] lg:text-[110px] md:leading-[0.95] font-extrabold tracking-tight">
                Consultoría
                <br />
                <span className="font-extrabold">con propósito</span>
              </h1>
              <p className="mt-8 text-[22px] md:text-[28px] lg:text-[34px] leading-tight font-semibold italic text-[#184476] max-w-4xl">
                Estrategia, estructura y
                <br className="hidden md:block" />
                resultados reales para
                <br className="hidden md:block" />
                organizaciones sociales y
                <br className="hidden md:block" />
                empresas con impacto.
              </p>
              <div className="mt-10">
                <Button
                  asChild
                  className="h-14 rounded-full bg-[#184476] px-10 text-[20px] text-white font-semibold shadow-[0px_4px_10px_rgba(0,0,0,0.3)] hover:bg-[#123457] hover:scale-105 hover:text-white transition-all"
                >
                  <Link href="/consultoria">¡Transforma tu Organización hoy!</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-8 bg-[linear-gradient(to_bottom,#ffffff_0%,#0a8fa4_100%)]" />
      </section>

      {/* Why Section */}
      <section className="bg-[#0a8fa4] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            <div>
              <h2 className="text-[28px] md:text-[32px] font-extrabold leading-tight">
                ¿Tu organización o empresa
                está creciendo, pero te falta
                estructura?
              </h2>
              <p className="mt-24 text-[20px] md:text-[24px] italic font-semibold leading-snug">
                Trabajo contigo para diseñar
                soluciones estratégicas y
                accionables, que te ayuden a
                avanzar con claridad,
                sostenibilidad y sentido.
              </p>
            </div>
            <div className="md:pt-40">
              <h2 className="text-[28px] md:text-[32px] font-extrabold leading-tight">
                ¿Te cuesta demostrar el
                impacto que generas o
                sostenerlo en el tiempo?
              </h2>
              <p className="mt-24 text-[20px] md:text-[24px] italic font-semibold leading-snug">
                Ya sea que necesites crear
                una estrategia desde cero,
                fortalecer tus procesos
                internos o diseñar propuestas
                financieras, aquí tienes una
                guía cercana, experta y
                práctica.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center text-[#184476] text-[28px] md:text-[34px] font-extrabold">
            ¿A quién acompaño?
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-[10px] border border-[#9bb7cf] bg-white px-8 py-10 text-center">
              <h3 className="text-[#184476] font-extrabold text-[26px] leading-tight">
                Organizaciones
                <br />
                sociales
              </h3>
              <p className="mt-5 text-[#184476] text-[18px] leading-relaxed">
                ONGs, fundaciones, redes o
                proyectos que necesitan ordenar
                sus ideas, medir mejor su
                impacto o aumentar su
                sostenibilidad financiera sin
                perder su esencia.
              </p>
            </div>
            <div className="rounded-[10px] border border-[#9bb7cf] bg-white px-8 py-10 text-center">
              <h3 className="text-[#184476] font-extrabold text-[26px] leading-tight">
                Empresas con
                <br />
                propósito
              </h3>
              <p className="mt-5 text-[#184476] text-[18px] leading-relaxed">
                Negocios que quieren desarrollar
                o mejorar su estrategia de
                Responsabilidad Social
                Empresarial (RSE) con acciones
                alineadas a su visión, que
                generen impacto real y
                fortalecimiento reputacional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a8fa4] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-[44px] md:text-[54px] leading-[1.05] font-extrabold italic">
                ¿Que lograrás
                <br />
                con la
                <br />
                consultoría?
              </h2>
            </div>
            <div className="relative md:pl-10">
              <div className="hidden md:block absolute left-4 top-2 bottom-2 w-px bg-white/60" />
              <div className="space-y-8">
                {[
                  "Plan estratégico claro alineado a tu misión\ny narrativa de impacto",
                  "Proyectos financiables\ncon enfoque técnico y\nhumano",
                  "Sistemas de\nmonitoreo útiles, más allá\nde solo recolectar datos",
                  "Estrategias de\nrecaudación conectadas\ncon tu impacto",
                  "Equipos alineados,\nmotivados y capaces",
                ].map((txt, idx) => (
                  <div key={idx} className="flex items-center gap-8">
                    {/* Concentric Circle Icon */}
                    <div className="flex-shrink-0 h-[80px] w-[80px] rounded-full border-[3px] border-white bg-[#0E5587] flex items-center justify-center p-[8px]">
                      <div className="h-full w-full bg-white rounded-full flex items-center justify-center">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="#0E5587" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>

                    <p className="text-[24px] md:text-[28px] leading-tight font-bold whitespace-pre-line">
                      {txt}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="text-center text-[#184476] text-[36px] md:text-[48px] font-extrabold mb-16 italic">
            Organizaciones con las que he trabajado
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {organizations.map((org, i) => (
              <img
                key={i}
                src={org.src}
                alt={org.name}
                className="h-20 md:h-28 w-auto object-contain transition-transform duration-300 hover:scale-110"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a8fa4] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="w-full max-w-[600px] relative mr-16">
              {/* Background/Next Card Preview */}
              <div className="absolute -left-64 top-1/2 -translate-y-1/2 w-[500px] md:w-[565px] h-[500px] md:h-[720px] bg-white/95 rounded-[20px] shadow-lg z-0 scale-[0.7] origin-right border border-black/5 overflow-hidden flex flex-col items-start p-[20px_10px] opacity-60 pointer-events-none grayscale-[0.3]">
                <div className="flex flex-col items-start w-full h-full gap-[30px] p-[20px]">
                  {/* Header: Person Row */}
                  <div className="flex flex-row items-center gap-[20px] w-full">
                    {/* Photo */}
                    <div className="flex flex-col justify-center items-center w-[80px] h-[80px] bg-white rounded-[50px] shadow-sm flex-shrink-0">
                      {testimonials[(activeTestimonial + 1) % testimonials.length].image && (
                        <img
                          src={testimonials[(activeTestimonial + 1) % testimonials.length].image}
                          alt={testimonials[(activeTestimonial + 1) % testimonials.length].name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      )}
                    </div>

                    {/* Info Column */}
                    <div className="flex flex-col items-start gap-[4px]">
                      <h3 className="text-[#0E5587] text-[18px] leading-[22px] font-normal">
                        {testimonials[(activeTestimonial + 1) % testimonials.length].name}
                      </h3>
                      <p className="text-[#0E5587] text-[20px] leading-[24px] font-semibold line-clamp-2">
                        {testimonials[(activeTestimonial + 1) % testimonials.length].role}
                      </p>
                      <span className="text-[#0E5587] text-[12px] leading-[20px] font-light">
                        {testimonials[(activeTestimonial + 1) % testimonials.length].date}
                      </span>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex flex-row items-center gap-[8px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-[#D7BE7C] text-[20px]">★</span>
                    ))}
                  </div>

                  {/* Text Body */}
                  <div className="w-full">
                    <p className="text-[#0E5587] italic font-medium text-[16px] leading-[24px] tracking-[0.02em] line-clamp-[6]">
                      "{testimonials[(activeTestimonial + 1) % testimonials.length].text}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Main Testimonial Card */}
              <div className="bg-white rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] border border-black/5 overflow-hidden relative z-10 w-full md:w-[565px] min-h-[500px] md:h-[720px] flex flex-col items-start">
                <div className="flex flex-col items-start w-full h-full p-[30px_20px] md:p-[20px_10px] gap-[30px]">
                  {/* Header: Person Row */}
                  <div className="flex flex-row items-center p-[10px_20px] gap-[20px] w-full">
                    {/* Photo */}
                    <div className="flex flex-col justify-center items-center w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-white rounded-[50px] shadow-sm flex-shrink-0">
                      {currentTestimonial.image && (
                        <img
                          src={currentTestimonial.image}
                          alt={currentTestimonial.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      )}
                    </div>

                    {/* Info Column */}
                    <div className="flex flex-col items-start gap-[4px]">
                      <h3 className="text-[#0E5587] text-[18px] md:text-[20px] leading-[22px] font-normal" style={{ fontFamily: "'Red Hat Display', sans-serif" }}>
                        {currentTestimonial.name}
                      </h3>
                      <p className="text-[#0E5587] text-[20px] md:text-[32px] leading-[30px] md:leading-[40px] font-semibold" style={{ fontFamily: "'Red Hat Display', sans-serif" }}>
                        {currentTestimonial.role}
                      </p>
                      <span className="text-[#0E5587] text-[12px] md:text-[14px] leading-[22px] font-light" style={{ fontFamily: "'Red Hat Display', sans-serif" }}>
                        {currentTestimonial.date}
                      </span>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex flex-row items-center px-[20px] gap-[8px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-[#D7BE7C] text-[24px]">★</span>
                    ))}
                  </div>

                  {/* Text Body */}
                  <div className="px-[20px] w-full">
                    <p className="text-[#0E5587] italic font-medium text-[20px] md:text-[24px] leading-[30px] tracking-[0.02em]" style={{ fontFamily: "'Red Hat Display', sans-serif" }}>
                      "{currentTestimonial.text}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                type="button"
                onClick={prevTestimonial}
                className="absolute -left-32 md:-left-48 top-1/2 -translate-y-1/2 flex items-center justify-center hover:scale-110 transition-transform z-30 opacity-80 hover:opacity-100 !bg-transparent !border-0 !shadow-none !p-0 !min-w-0 !min-h-0 !rounded-none group"
                aria-label="Anterior"
              >
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-white group-hover:stroke-white/80 transition-colors">
                  <path d="M15 19L8 12L15 5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={nextTestimonial}
                className="absolute -right-6 md:-right-16 top-1/2 -translate-y-1/2 flex items-center justify-center hover:scale-110 transition-transform z-30 opacity-80 hover:opacity-100 !bg-transparent !border-0 !shadow-none !p-0 !min-w-0 !min-h-0 !rounded-none group"
                aria-label="Siguiente"
              >
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-white group-hover:stroke-white/80 transition-colors">
                  <path d="M9 5L16 12L9 19" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Title Section */}
            <div className="hidden md:block w-px h-[400px] bg-white/60" />
            <div className="hidden md:block max-w-[320px]">
              <h2 className="text-[40px] md:text-[48px] font-extrabold italic leading-tight">
                ¿Que dicen
                <br />
                quienes han
                <br />
                trabajado
                <br />
                conmigo?
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center text-[#184476] text-[30px] md:text-[36px] font-extrabold">
            ¿Cómo trabajo?
          </h2>
          <p className="mt-2 text-center text-[#184476] font-semibold italic text-xl">
            Estrategia, acción y resultados medibles
          </p>
          <p className="mt-6 text-center text-[#184476] max-w-4xl mx-auto text-lg">
            No se trata solo de ideas bonitas. Acompaño procesos desde la reflexión estratégica hasta la implementación práctica, siempre adaptándome al contexto y capacidades del equipo.
            ¿Qué me diferencia? Trabajo con metodologías que combinan enfoque técnico y mirada humana:
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'CORA',
                desc: 'Metodología de consultoría organizacional que integra análisis de contexto, revisión de procesos y alineación estratégica para fortalecer la capacidad institucional.'
              },
              {
                title: 'FormAcción',
                desc: 'Enfoque de formación experiencial que combina teoría y práctica, diseñado para equipos que buscan aprender haciendo y aplicar conocimientos de forma inmediata.'
              },
              {
                title: 'Puentes de valor',
                desc: 'Herramienta para identificar y comunicar el valor agregado de tu organización, conectando tu propuesta con las necesidades de donantes, aliados y beneficiarios.'
              },
              {
                title: 'PAZ',
                desc: 'Marco de trabajo para Planificación, Acción y Zona de impacto, que facilita la gestión de proyectos con enfoque en resultados medibles y sostenibles.'
              },
            ].map((c, idx) => (
              <Accordion key={c.title} type="single" collapsible>
                <AccordionItem
                  value={`method-${idx}`}
                  className="bg-white border border-[#0E5587] rounded-xl overflow-hidden shadow-sm"
                >
                  <AccordionTrigger className="w-full px-5 py-4 transition-none hover:no-underline hover:!bg-transparent focus:!bg-transparent active:!bg-transparent data-[state=open]:!bg-transparent !text-[#0E5587] [&_svg]:!hidden !shadow-none !outline-none !ring-0 !border-0 focus:!ring-0 focus:!outline-none focus-visible:!ring-0 focus-visible:!outline-none focus-visible:!ring-offset-0">
                    <div className="flex items-center justify-between w-full">
                      <span className="flex-1 text-left font-semibold text-lg !text-[#0E5587]">{c.title}</span>
                      <span className="accordion-plus text-[#0E5587] ml-4" style={{
                        position: 'relative',
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }} />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-white px-5 py-4 text-base text-[#0E5587]/90 leading-relaxed">
                    {c.desc}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
          <p className="mt-8 text-[#184476] font-semibold italic text-lg">
            También uso otras metodologías como:
          </p>
          <p className="mt-2 text-[#184476] text-lg">
            RBM (Gestión basada en resultados) &nbsp; – &nbsp; Teoría del cambio y marco lógico &nbsp; – &nbsp; Metodologías ágiles &nbsp; – &nbsp; Story
          </p>
        </div>
      </section>

      <section
        className="bg-[#0097B2] text-white py-12 px-4 md:px-8 flex flex-col items-center"
        style={{ fontFamily: "'Red Hat Display', sans-serif" }}
      >
        <div className="max-w-3xl w-full text-center space-y-6 mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold italic leading-tight">
            Soluciones estratégicas preempacadas
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl font-medium max-w-2xl mx-auto leading-relaxed opacity-95">
            También puedes elegir una de estas soluciones ya estructuradas, que han sido implementadas con éxito en organizaciones sociales y empresas de la región:
          </p>
        </div>

        <div className="w-full max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {[
              {
                n: '1',
                title: 'Estrategia con Alma',
              },
              {
                n: '2',
                title: 'Evidencia para el Cambio (Sistemas MERA)',
              },
              {
                n: '3',
                title: 'Recaudación con sentido',
              },
              {
                n: '4',
                title: 'Programas que Transforman (Diseño de proyectos)',
              },
              {
                n: '5',
                title: 'Cultura de Impacto Interno',
              }
            ].map((item, idx) => (
              <AccordionItem
                key={item.title}
                value={`solution-${idx}`}
                className="bg-[#0E5587] rounded-xl overflow-hidden border border-white !shadow-none"
              >
                <AccordionTrigger className="w-full px-5 py-4 transition-none hover:no-underline hover:!bg-transparent focus:!bg-transparent active:!bg-transparent data-[state=open]:!bg-transparent !text-white [&_svg]:!hidden !shadow-none !outline-none !ring-0 !border-0 focus:!ring-0 focus:!outline-none focus-visible:!ring-0 focus-visible:!outline-none focus-visible:!ring-offset-0">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4 text-left text-white">
                      <span className="text-2xl md:text-3xl font-bold w-6 text-center text-white">{item.n}</span>
                      <h3 className="text-lg md:text-xl font-semibold leading-snug text-white">{item.title}</h3>
                    </div>
                    <span className="accordion-plus text-white text-3xl font-bold ml-4" style={{
                      position: 'relative',
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }} />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-[#0E5587] px-6 py-4 text-base text-white/90">
                  <p>Detalles de la solución <strong>{item.title}</strong> próximamente.</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center text-[#184476] text-[28px] md:text-[34px] font-extrabold mx-auto">
            ¿Cómo funciona el proceso de consultoría personalizada?
          </h2>
          <p className="mt-3 text-center text-[#184476] max-w-4xl mx-auto">
            No se trata solo de ideas bonitas. Acompaño procesos desde la reflexión estratégica hasta la implementación práctica, siempre adaptándome al contexto y capacidades del equipo.
          </p>
          <div className="mt-10">
            {[
              {
                n: '1',
                t: 'Primera sesión de consultoría',
                d: 'Una hora de trabajo estratégico donde exploramos tus retos, analizamos tu contexto y definimos tus necesidades prioritarias. Esta sesión tiene una inversión de 80 USD.'
              },
              {
                n: '2',
                t: 'Propuesta personalizada',
                d: 'A partir de lo conversado, te propongo un paquete de servicios o acompañamiento adaptado a ti: desde algo puntual hasta un proceso integral.'
              },
              {
                n: '3',
                t: 'Implementación',
                d: 'Acompañamiento estratégico con entregables claros, seguimiento continuo y espacios de retroalimentación.'
              },
              {
                n: '4',
                t: 'Evaluación de resultados',
                d: 'Medimos avances y cerramos el proceso con un plan para la sostenibilidad de lo construido.'
              },
            ].map((step) => (
              <div key={step.n} style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '0px 20px 0px 0px',
                width: '100%',
                maxWidth: '700px',
                height: '100px',
                background: '#0E5587',
                borderRadius: '60px 12px 12px 60px',
                flex: 'none',
                order: 0,
                flexGrow: 0,
                margin: '20px auto'
              }}>
                {/* Círculo exterior */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 0,
                  gap: '10px',
                  width: '100px',
                  height: '100px',
                  background: '#0E5587',
                  borderRadius: '60px',
                  flex: 'none',
                  order: 0,
                  flexGrow: 0,
                  flexShrink: 0
                }}>
                  {/* Círculo interior blanco */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px',
                    gap: '5px',
                    width: '85px',
                    height: '85px',
                    background: '#FFFFFF',
                    borderRadius: '60px',
                    flex: 'none',
                    order: 0,
                    flexGrow: 0
                  }}>
                    <span style={{
                      width: '20px',
                      height: '40px',
                      fontFamily: "'Red Hat Display'",
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '52px',
                      lineHeight: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      letterSpacing: '0.0120588em',
                      color: '#0E5587',
                      flex: 'none',
                      order: 0,
                      flexGrow: 0
                    }}>
                      {step.n}
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '10px 0px',
                  gap: '2px',
                  width: '550px',
                  height: '85px',
                  borderRadius: '12px',
                  flex: 'none',
                  order: 1,
                  flexGrow: 1
                }}>
                  <h3 style={{
                    width: '550px',
                    height: '20px',
                    fontFamily: "'Red Hat Display'",
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    letterSpacing: '0.0120588em',
                    color: '#FFFFFF',
                    flex: 'none',
                    order: 0,
                    alignSelf: 'stretch',
                    flexGrow: 0
                  }}>
                    {step.t}
                  </h3>
                  <p style={{
                    width: '550px',
                    height: '40px',
                    fontFamily: "'Red Hat Display'",
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '13px',
                    lineHeight: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    letterSpacing: '0.0120588em',
                    color: '#FFFFFF',
                    flex: 'none',
                    order: 1,
                    alignSelf: 'stretch',
                    flexGrow: 0
                  }}>
                    {step.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0097B2] text-white" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px 30px',
        gap: '30px',
        width: '100%',
        background: '#0097B2',
        flex: 'none',
        order: 10,
        alignSelf: 'stretch',
        flexGrow: 0
      }}>
        <h2 className="text-center font-bold italic mx-auto" style={{
          fontFamily: "'Red Hat Display'",
          fontStyle: 'italic',
          fontWeight: 700,
          fontSize: '64px',
          lineHeight: '62px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          letterSpacing: '0.0120588em',
          color: '#FFFFFF',
          flex: 'none',
          order: 0,
          alignSelf: 'center',
          flexGrow: 0
        }}>
          ¿Quieres comenzar?
        </h2>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '60px 0',
          gap: '60px',
          width: '100%',
          maxWidth: '1200px',
          flex: 'none',
          order: 1,
          alignSelf: 'center',
          flexGrow: 0
        }}>
          {/* Columna izquierda */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 10px',
            gap: '60px',
            width: '500px',
            flex: 'none',
            order: 0,
            flexGrow: 1
          }}>
            <p style={{
              fontFamily: "'Red Hat Display'",
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '32px',
              lineHeight: '40px',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              letterSpacing: '0.0120588em',
              color: '#FFFFFF',
              flex: 'none',
              order: 0,
              alignSelf: 'stretch',
              flexGrow: 0
            }}>
              Quiero agendar mi primera sesión de consultoría!
            </p>
            <button style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '16px 40px',
              gap: '10px',
              width: '336px',
              height: '64px',
              background: '#0E5587',
              boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: '20px',
              flex: 'none',
              order: 1,
              flexGrow: 0,
              border: 'none',
              cursor: 'pointer',
              fontFamily: "'Red Hat Display'",
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '26px',
              color: '#FFFFFF'
            }}>
              Descubre cómo puedo ayudarte
            </button>
          </div>

          {/* Línea divisoria */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 0,
            gap: '10px',
            width: '2px',
            height: '200px',
            flex: 'none',
            order: 1,
            alignSelf: 'stretch',
            flexGrow: 0
          }}>
            <div style={{
              width: '2px',
              height: '200px',
              background: '#FFFFFF',
              flex: 'none',
              order: 0,
              alignSelf: 'stretch',
              flexGrow: 0
            }}></div>
          </div>

          {/* Columna derecha */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 10px',
            gap: '60px',
            width: '500px',
            flex: 'none',
            order: 2,
            flexGrow: 1
          }}>
            <p style={{
              fontFamily: "'Red Hat Display'",
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '32px',
              lineHeight: '40px',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              letterSpacing: '0.0120588em',
              color: '#FFFFFF',
              flex: 'none',
              order: 0,
              alignSelf: 'stretch',
              flexGrow: 0
            }}>
              Escríbe para que diseñar juntos el proceso más útil para ti!
            </p>
            <button style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '16px 32px',
              gap: '10px',
              width: '300px',
              height: '64px',
              background: '#25D366',
              boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: '20px',
              flex: 'none',
              order: 1,
              flexGrow: 0,
              border: 'none',
              cursor: 'pointer',
              fontFamily: "'Red Hat Display'",
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: '22px',
              color: '#FFFFFF',
              whiteSpace: 'nowrap'
            }}>
              Escríbeme
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center text-[#184476] text-[30px] md:text-[36px] font-extrabold italic">
            Preguntas frecuentes
          </h2>
          <div className="mt-10 max-w-4xl mx-auto flex flex-col items-center">
            <Accordion type="single" collapsible className="w-full max-w-2xl space-y-4">
              {[
                {
                  q: '¿Qué pasa si no sé cuál servicio necesito?',
                  a: 'Podemos agendar una sesión de diagnóstico sin costo para evaluar tus necesidades y recomendarte el servicio más adecuado.'
                },
                {
                  q: '¿Puedo contratar solo un servicio puntual?',
                  a: 'Sí, ofrezco servicios puntuales como diseño de proyectos, revisión de propuestas o talleres específicos.'
                },
                {
                  q: '¿La consultoría es virtual o presencial?',
                  a: 'Ambas modalidades están disponibles. Dependiendo de tu ubicación y preferencias, podemos trabajar virtualmente o de forma presencial.'
                },
                {
                  q: '¿Ofreces formaciones para equipos completos?',
                  a: 'Sí, diseño e imparto formaciones a medida para equipos, adaptadas a los objetivos y contexto de tu organización.'
                },
              ].map((item, idx) => (
                <AccordionItem
                  key={item.q}
                  value={`faq-${idx}`}
                  className="bg-white border border-[#0E5587] rounded-xl overflow-hidden shadow-md"
                >
                  <AccordionTrigger className="w-full px-6 py-4 transition-none hover:no-underline hover:!bg-transparent focus:!bg-transparent active:!bg-transparent data-[state=open]:!bg-transparent text-[#0E5587] [&_svg]:!hidden !shadow-none !outline-none !ring-0 !border-0 focus:!ring-0 focus:!outline-none focus-visible:!ring-0 focus-visible:!outline-none focus-visible:!ring-offset-0">
                    <div className="flex items-center justify-between w-full">
                      <span className="flex-1 text-left font-bold text-lg md:text-xl !text-[#0E5587]">{item.q}</span>
                      <span className="accordion-plus text-[#0E5587] ml-4" style={{
                        position: 'relative',
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }} />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-white px-6 py-4 text-base text-[#0E5587]/90 leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
