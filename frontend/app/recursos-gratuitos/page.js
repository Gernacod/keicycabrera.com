'use client';
import React from 'react';
import useLinkInterceptor from '@/hooks/useLinkInterceptor';
import FlipBox from '@/components/FlipBox';
import ScrollReveal from '@/components/ScrollReveal';

const RecursosGratuitos = () => {
	useLinkInterceptor();

	const ebooks = [
		{
			icon: "fas fa-book-open",
			frontTitle: "EBOOK GRATUITO",
			frontDescription: "Sube de nivel en el sector social",
			backDescription: "¡Asciende en el sector social! Domina las claves y alcanza tus metas profesionales. Descarga gratis tu guía completa y supera la frustración de la búsqueda de empleo, domina las dinámicas del sector y construye una red profesional sólida.",
			link: "/ebooksubedenivel"
		},
		{
			icon: "fas fa-money-bill",
			frontTitle: "EBOOK GRATUITO",
			frontDescription: "Estrategia de recaudación de fondos",
			backDescription: "¡Domina el arte de la recaudación de fondos y transforma tu proyecto social! Descarga gratis tu guía completa y aprende a diseñar e implementar estrategias efectivas para obtener los recursos que necesitas.",
			link: "/ebookrecaudacion"
		},
		{
			icon: "fas fa-paint-brush",
			frontTitle: "EBOOK GRATUITO",
			frontDescription: "Pasos para diseñar un proyecto social",
			backDescription: "¡Domina el arte de diseñar proyectos sociales que generen un impacto real! Descarga gratis tu guía completa y aprende paso a paso a crear proyectos efectivos, sostenibles y con un impacto positivo en tu comunidad.",
			link: "/ebookdisenodeproyectos"
		},
		{
			icon: "fas fa-newspaper",
			frontTitle: "EBOOK GRATUITO",
			frontDescription: "Pasos para redactar un reporte.",
			backDescription: "Aprende a comunicar el impacto de tus proyectos y capta la atención de tus donantes con reportes claros y efectivos. Descarga gratis tu guía completa con los pasos a seguir redactar reportes que inspiran y convencen.",
			link: "/ebookreportes"
		}
	];

	return (
		<main className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="bg-gray-50 py-20 px-4">
				<div className="container mx-auto max-w-4xl text-center">
					<ScrollReveal direction="up">
						<div className="flex justify-center mb-8">
							<img
								src="/wp-content/uploads/2024/11/rombo-azul.webp"
								alt="Decoration"
								className="w-20 h-20 animate-pulse"
							/>
						</div>
						<h1 className="text-4xl md:text-5xl font-bold text-[#184476] mb-8">
							Recursos gratuitos
						</h1>
					</ScrollReveal>

					<div className="space-y-6 text-lg text-gray-700 leading-relaxed text-left md:text-center">
						<ScrollReveal direction="up" delay={0.2}>
							<p className="font-semibold">
								En un mundo en constante cambio, el desarrollo profesional, la recaudación de fondos efectiva y el diseño y ejecución de proyectos sólidos son habilidades esenciales para alcanzar tus metas y generar un impacto positivo.
							</p>
						</ScrollReveal>
						<ScrollReveal direction="up" delay={0.3}>
							<p>
								Para ello, te comparto varios recursos gratuitos que puedes usar para poder subir de nivel tu carrera individual o impacto como ONG.
							</p>
						</ScrollReveal>

						<ScrollReveal direction="up" delay={0.4}>
							<div className="mt-12 py-8 border-t border-gray-200">
								<h2 className="text-2xl font-bold text-[#184476] mb-4">💡 ¿Por qué comparto estos recursos?</h2>
								<p>
									Porque sé que a veces solo hace falta el recurso adecuado en el momento justo para desbloquear una idea, una decisión o una nueva etapa en tu camino profesional o institucional.
								</p>
								<p className="mt-4">
									Aquí encuentras herramientas que no son de relleno: son el resultado de años de experiencia, sistematización y trabajo con cientos de personas y organizaciones como la tuya.
								</p>
							</div>
						</ScrollReveal>
					</div>
				</div>
			</section>

			{/* Classes Section */}
			<section className="py-16 px-4 bg-white">
				<div className="container mx-auto max-w-4xl">
					<ScrollReveal direction="up">
						<h2 className="text-3xl font-bold text-[#184476] mb-8 text-center">Clases</h2>
					</ScrollReveal>
					<ScrollReveal direction="up" delay={0.2}>
						<div className="bg-[#184476] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
							<a href="/planificatu2025" className="flex items-center justify-between group text-white">
								<span className="text-xl font-bold">Taller Gratuito de Planificación de metas para 2025</span>
								<svg className="w-8 h-8 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
								</svg>
							</a>
						</div>
					</ScrollReveal>
				</div>
			</section>

			{/* Ebooks Section */}
			<section className="py-16 px-4 bg-gray-50">
				<div className="container mx-auto">
					<ScrollReveal direction="up">
						<h2 className="text-3xl font-bold text-[#184476] mb-12 text-center">e-Books gratuitos</h2>
					</ScrollReveal>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{ebooks.map((ebook, index) => (
							<ScrollReveal key={index} direction="up" delay={index * 0.1}>
								<FlipBox {...ebook} />
							</ScrollReveal>
						))}
					</div>
				</div>
			</section>

			{/* Diagnostics Section */}
			<section className="py-20 px-4 bg-white mb-20">
				<div className="container mx-auto">
					<ScrollReveal direction="up">
						<h2 className="text-3xl font-bold text-[#184476] mb-12 text-center">Diagnóstico Gratuito</h2>
					</ScrollReveal>
					<ScrollReveal direction="up" delay={0.2}>
						<div className="max-w-sm mx-auto">
							<FlipBox
								icon="far fa-thumbs-up"
								frontTitle="DIAGNÓSTICO GRATUITO"
								frontDescription="Buenas prácticas de cumplimiento"
								backDescription="Conoce el estado de tu ONG en materia de cumplimiento, y qué es lo mínimo que deberías cumplir."
								link="/diagnosticocumplimiento"
							/>
						</div>
					</ScrollReveal>
				</div>
			</section>
		</main>
	);
};

export default RecursosGratuitos;
