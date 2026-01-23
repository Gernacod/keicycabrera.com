'use client';
import React, { useState } from 'react';
import useLinkInterceptor from '@/hooks/useLinkInterceptor';

const AccordionItem = ({ title, content, isOpen, onClick }) => (
	<div className="border-b border-gray-200">
		<button
			className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
			onClick={onClick}
		>
			<span className="text-xl font-bold text-[#184476]">{title}</span>
			<span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
				<svg className="w-6 h-6 text-[#184476]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
				</svg>
			</span>
		</button>
		<div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
			<div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />
		</div>
	</div>
);

const Consultoria = () => {
	useLinkInterceptor();
	const [openIndex, setOpenIndex] = useState(null);

	const accordionData = [
		{
			title: "Monitoreo, Evaluación, Rendición de Cuentas y Aprendizaje (MERA):",
			content: "Ofrezco un enfoque integral que abarca desde el seguimiento de objetivos, facilitación de procesos de aprendizaje, evaluaciones cuantitativas y cualitativas (o mixtas), hasta el el liderazgo en rendición de cuentas. Mi objetivo es optimizar tus recursos y proporcionarte herramientas efectivas."
		},
		{
			title: "Recaudación de Fondos:",
			content: "Diseño con ustedes estrategias personalizadas de recaudación de fondos, identificando donantes potenciales y desarrollando acciones específicas para cada uno de ellos."
		},
		{
			title: "Diseño de Proyectos:",
			content: "Les acompaño en la creación de propuestas de proyectos sólidas que te permitan acceder a diversas oportunidades de financiamiento. Desarrollamos juntos propuestas estratégicas en función de potenciales donantes, asegurando que obtengas el financiamiento que necesitas, y como parte de este proceso, <b>también trabajamos juntos en mejorar tu proceso de desarrollo de propuestas.</b>"
		},
		{
			title: "Planificación Estratégica:",
			content: "Inspirado en la Gestión Basada en Resultados y el Año de 12 Semanas, <b>facilito el diseño planes estratégicos adaptados a tus necesidades</b>. Desde la definición de objetivos hasta la implementación de planes operativos, nos aseguramos de que todos los actores contribuyan directa o indirectamente al logro de tus metas."
		}
	];

	const organizations = [
		{ name: "Save the Children", logo: "/wp-content/uploads/2025/04/images.png" },
		{ name: "Fe y Alegría", logo: "/wp-content/uploads/2025/04/images-1.png" },
		{ name: "Federación Luterana Mundial", logo: "/wp-content/uploads/2025/04/images-3.png" },
		{ name: "Construyendo Futuros", logo: "/wp-content/uploads/2025/04/images-2.jpg" },
		{ name: "ASONACOP", logo: "/wp-content/uploads/2025/04/img-88-300x300.jpg" },
		{ name: "Fundación Proyecto Maniapure", logo: "/wp-content/uploads/2025/04/orglogo.jpg" },
		{ name: "Manos que Dejan Huellas", logo: "/wp-content/uploads/2025/04/images-2-300x162.png" },
		{ name: "Fundación Tierra Viva", logo: "/wp-content/uploads/2025/04/logo_tierra_viva_full_definicion-1-300x300.jpg" },
		{ name: "FUNDACRECER", logo: "/wp-content/uploads/2025/04/images-4.png" }
	];

	const testimonials = [
		{
			name: "Oriana Venti",
			role: "Participante de Escala tu Impacto Social",
			image: "/wp-content/uploads/2024/11/oriana.jpg",
			text: "Me siento más segura para tomar decisiones y utilizar herramientas clave en el sector social. El contenido fue excelente, las dinámicas de las clases muy humanas, y cada formato de práctica resultó realmente útil. Lo que más me marcó fue la calidez de Keicy. En muchas formaciones online se pierde la cercanía, pero aquí hubo espacio real para compartir, aprender de las experiencias de otras personas y sentirnos parte de una comunidad que mejora cada día.",
			rating: 5
		},
		{
			name: "Liliana Pertuz",
			role: "Participante de Escala tu Impacto Social",
			image: "/wp-content/uploads/2024/11/liliana.jpg",
			text: "Antes pensaba que conocía el sector, pero ahora veo con más claridad los procesos, tiempos y herramientas que realmente marcan la diferencia. Esta formación fue, sin duda, la mejor inversión de mi año: me ayudó a dar un paso firme hacia mi sueño de servir a los demás desde lo técnico y lo humano. Me encantó la innovación, la sencillez con la que se explicaron procesos complejos y la manera en que Keicy nos guió.",
			rating: 5
		},
		{
			name: "Roxanna Vitali",
			role: "Especialista en MERA",
			image: "/wp-content/uploads/2024/11/roxana.jpg",
			text: "Tuve el privilegio de contar con Keicy como facilitadora para mi equipo en temas de MERA y metodologías ágiles. La actuación de Keicy fue excepcional: demostró un gran dominio de grupo y logró transformar temas complejos en conceptos comprensibles y altamente útiles. Además, fomentó la reflexión, el pensamiento crítico y destacó la importancia de la vocación de servicio en nuestro sector.",
			rating: 5
		}
	];

	return (
		<main className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="bg-gray-50 py-24 px-4">
				<div className="container mx-auto max-w-5xl text-center">
					<div className="flex justify-center mb-8">
						<img
							src="/wp-content/uploads/2024/11/rombo-azul.webp"
							alt="Decoration"
							className="w-20 h-20 animate-pulse"
						/>
					</div>
					<h1 className="text-5xl font-bold text-[#184476] mb-12">Consultoría</h1>
					<div className="grid md:grid-cols-2 gap-12 items-center text-left">
						<div>
							<h2 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">
								Consultoría estratégica para fortalecer lo que haces, optimizar lo que medimos y lograr más impacto.
							</h2>
							<p className="text-xl text-gray-600 mb-8">
								Te ayudo a <strong>estructurar, evaluar y escalar</strong> tus proyectos, desde la estrategia hasta los sistemas de monitoreo.
							</p>
							<a
								href="#contacto"
								className="inline-block bg-[#184476] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl"
							>
								Contáctame
							</a>
						</div>
						<div className="rounded-2xl overflow-hidden shadow-2xl skew-y-2 hover:skew-y-0 transition-transform duration-500">
							<img src="/wp-content/uploads/2024/11/3.webp" alt="Consultoría" className="w-full h-auto" />
						</div>
					</div>
				</div>
			</section>

			{/* Accordion Support Section */}
			<section className="py-24 px-4">
				<div className="container mx-auto max-w-4xl">
					<h2 className="text-4xl font-bold text-[#184476] mb-12 text-center">¿En qué puedo apoyarte?</h2>
					<div className="bg-white rounded-2xl shadow-sm">
						{accordionData.map((item, index) => (
							<AccordionItem
								key={index}
								title={item.title}
								content={item.content}
								isOpen={openIndex === index}
								onClick={() => setOpenIndex(openIndex === index ? null : index)}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Organizations Section */}
			<section className="py-24 bg-gray-50 px-4">
				<div className="container mx-auto">
					<h2 className="text-3xl font-bold text-[#184476] mb-16 text-center underline decoration-4 underline-offset-8">
						Organizaciones que he acompañado
					</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all">
						{organizations.map((org, index) => (
							<div key={index} className="flex justify-center p-4 hover:scale-110 transition-transform">
								<img src={org.logo} alt={org.name} className="max-h-24 object-contain" />
							</div>
						))}
					</div>
				</div>
			</section>

			{/* How we work & Results */}
			<section className="py-24 px-4 bg-white overflow-hidden">
				<div className="container mx-auto max-w-6xl">
					<div className="grid md:grid-cols-2 gap-20 items-center mb-24">
						<div className="relative group">
							<div className="absolute -inset-4 bg-[#d9ae7d]/20 rounded-2xl -rotate-2 group-hover:rotate-0 transition-transform"></div>
							<img src="/wp-content/uploads/2024/11/11.webp" alt="Trabajo" className="relative rounded-2xl shadow-xl" />
						</div>
						<div>
							<h2 className="text-4xl font-bold text-[#184476] mb-8">¿Cómo trabajamos?</h2>
							<ul className="space-y-6">
								{[
									"<strong>Iniciamos con un diagnóstico</strong> breve",
									"Propuesta de <strong>ruta y entregables</strong> claros",
									"<strong>Acompañamiento técnico</strong>",
									"<strong>Capacitación personalizada</strong> de ser requerido."
								].map((step, i) => (
									<li key={i} className="flex items-start">
										<span className="bg-[#d9ae7d]/20 text-[#184476] rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">
											{i + 1}
										</span>
										<p className="text-xl" dangerouslySetInnerHTML={{ __html: step }} />
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="grid md:grid-cols-2 gap-20 items-center">
						<div className="order-2 md:order-1">
							<h2 className="text-4xl font-bold text-[#184476] mb-8">Resultados que puedes esperar</h2>
							<ul className="space-y-6">
								{[
									"Equipos <strong>capacitados y empoderados</strong>, que usan <strong>tecnologías innovadoras.</strong>",
									"Estrategias de <strong>recaudación de fondos</strong> personalizadas",
									"<strong>Proyectos diseñados</strong> que atiendan los requerimientos de los donantes y/o de la organización, que sean de calidad."
								].map((res, i) => (
									<li key={i} className="flex items-start">
										<div className="text-[#184476] mr-4 shrink-0">
											<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
											</svg>
										</div>
										<p className="text-xl" dangerouslySetInnerHTML={{ __html: res }} />
									</li>
								))}
							</ul>
						</div>
						<div className="order-1 md:order-2 relative group">
							<div className="absolute -inset-4 bg-[#d9ae7d]/20 rounded-2xl rotate-2 group-hover:rotate-0 transition-transform"></div>
							<img src="/wp-content/uploads/2024/11/7.webp" alt="Resultados" className="relative rounded-2xl shadow-xl" />
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-24 px-4 bg-gray-50 overflow-hidden">
				<div className="container mx-auto">
					<h2 className="text-4xl font-bold text-[#184476] mb-16 text-center">Testimonios</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{testimonials.map((t, i) => (
							<div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all">
								<div className="flex items-center mb-6">
									<div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#184476]">
										<img src={t.image} alt={t.name} className="w-full h-full object-cover" />
									</div>
									<div>
										<h3 className="font-bold text-gray-800">{t.name}</h3>
										<p className="text-sm text-[#184476]">{t.role}</p>
									</div>
								</div>
								<div className="flex mb-4">
									{[...Array(t.rating)].map((_, star) => (
										<svg key={star} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
									))}
								</div>
								<p className="text-gray-600 italic leading-relaxed grow">"{t.text}"</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
};

export default Consultoria;
