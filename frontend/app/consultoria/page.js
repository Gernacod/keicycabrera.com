'use client';
import React, { useState } from 'react';
import useLinkInterceptor from '@/hooks/useLinkInterceptor';
import { Play, Check, Plus, ChevronDown, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import CtaButton from '@/components/CtaButton';

const Consultoria = () => {
	useLinkInterceptor();
	const [openFAQ, setOpenFAQ] = useState(null);
	const [testindex, setTestindex] = useState(1);
	const [openMethod, setOpenMethod] = useState(null);

	const testimonials = [
		{
			id: 1,
			name: "Roxana Vita",
			role: "Escala tu impacto social",
			date: "Febrero 2024",
			text: "Me encanto mucho la personalidad de Keicy, siento que a veces en las formaciones online se pierde mucho la calidez y la humanidad en el trato y se sintió muy bien abrir espacio para compartir nuestras experiencias!!",
			image: "/wp-content/uploads/2024/11/oriana.jpg",
			initials: "RV"
		},
		{
			id: 2,
			name: "Mariolga Fragosa",
			role: "COO de @Datimpacto",
			date: "Abril 2025",
			text: "Tuvimos el privilegio de trabajar con Keicy como Consultora de M&E en un proyecto del área de asistencia humanitaria en Venezuela. Sus aportes fueron siempre relevantes y de alta calidad, destacándose por su proactividad y la velocidad con la que generaba productos complejos y bien elaborados. Contribuyó significativamente al diseño de estrategias de evaluación y a la creación de herramientas clave.",
			image: "/wp-content/uploads/2025/04/images-2.jpg",
			initials: "MF"
		},
		{
			id: 3,
			name: "Luis Torres",
			role: "Formación MERA",
			date: "Octubre 2024",
			text: "Me encantó la clase. Fueron 3 horas de muchísima información, y cada ejemplo le dio muchísimo más valor a todo el contenido. Me gustan las explicaciones sencillas y que todo esté tan bien documentado con bibliografía confiable, así como todas las herramientas que hacen el trabajo un poco más sencillo.",
			image: "/wp-content/uploads/2024/11/liliana.jpg",
			initials: "LT"
		}
	];

	const handleNext = () => setTestindex((prev) => (prev + 1) % testimonials.length);
	const handlePrev = () => setTestindex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

	const organizations = [
		"/wp-content/uploads/2025/04/images.png", // Save the Children
		"/wp-content/uploads/2025/04/images-1.png", // Fe y Alegria
		"/wp-content/uploads/2025/04/images-3.png", // Luterana
		"/wp-content/uploads/2025/04/images-2.jpg", // Construyendo
		"/wp-content/uploads/2025/04/img-88-300x300.jpg", // ASONACOP
		"/wp-content/uploads/2025/04/orglogo.jpg", // Maniapure
		"/wp-content/uploads/2025/04/images-2-300x162.png", // Manos
		"/wp-content/uploads/2025/04/logo_tierra_viva_full_definicion-1-300x300.jpg", // Tierra Viva
		"/wp-content/uploads/2025/04/images-4.png" // FUNDACRECER
	];

	const faqs = [
		{
			question: "¿Qué pasa si no sé cuál servicio necesito?",
			answer: "No te preocupes. En nuestra primera sesión de diagnóstico evaluaremos tu situación actual y definiremos juntos la mejor ruta para ti."
		},
		{
			question: "¿Puedo contratar solo un servicio puntual?",
			answer: "Sí, mis servicios son modulares. Podemos trabajar en un proyecto específico o en un acompañamiento a largo plazo según tus necesidades."
		},
		{
			question: "¿La consultoría es virtual o presencial?",
			answer: "Principalmente virtual para optimizar tiempos y costos, pero ofrezco sesiones presenciales para talleres o hitos clave si la ubicación lo permite."
		},
		{
			question: "¿Ofreces formaciones para equipos completos?",
			answer: "Sí, diseño capacitaciones a medida para equipos, asegurando que todos estén alineados con las nuevas estrategias y herramientas."
		}
	];

	const toggleFAQ = (index) => {
		setOpenFAQ(openFAQ === index ? null : index);
	};

	return (
		<main className="min-h-screen bg-white">

			{/* Hero Section */}
			<section className="relative w-full overflow-hidden flex items-center justify-center py-[60px]"
				style={{ background: 'linear-gradient(183.95deg, #FFFFFF 79.31%, #0097b2 84.9%)' }}
				data-node-id="1:821">
				<div className="max-w-[1440px] mx-auto px-6 md:px-[40px] py-[30px] flex flex-col md:flex-row items-center gap-[40px] md:gap-[40px]">
					{/* Video Area (1:822) */}
					<ScrollReveal direction="left" className="w-full md:w-auto mt-[40px] md:mt-0" data-node-id="1:822">
						<div className="w-full md:w-[480px] h-[320px] md:h-[620px] bg-[#f7f4f1] rounded-[20px] shadow-[-2px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-center relative shrink-0" data-node-id="1:823">
							<div className="bg-[#0e5587] w-[90px] h-[90px] md:w-[120px] md:h-[120px] rounded-[100px] flex items-center justify-center shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer hover:scale-105 transition-transform" data-node-id="1:824">
								<Play className="text-white w-10 h-10 md:w-[69px] md:h-[69px] ml-1.5" fill="currentColor" strokeWidth={0} />
							</div>
						</div>
					</ScrollReveal>

					{/* Text Content Area (1:827) */}
					<ScrollReveal direction="right" className="flex-1 w-full py-[20px]" data-node-id="1:827">
						<div className="flex flex-col items-end justify-center gap-[40px] md:gap-[60px] w-full" data-node-id="1:828">
							<div className="flex flex-col items-end justify-center gap-[10px] text-[#0e5587] w-full" data-node-id="1:829">
								<h1 className="font-extrabold text-[48px] md:text-[124px] leading-none md:leading-[92px] tracking-tight md:tracking-[1.86px] text-right" data-node-id="1:830">
									Consultoría
								</h1>
								<p className="font-bold text-[32px] md:text-[96px] leading-none md:leading-[92px] tracking-tight md:tracking-[1.44px] text-right whitespace-nowrap" data-node-id="1:831">
									con propósito
								</p>
							</div>

							<div className="flex flex-col justify-center text-[#0e5587] text-[18px] md:text-[52px] font-semibold italic leading-tight md:leading-[52px] tracking-[0.78px] text-right w-full" data-node-id="1:832">
								<p>
									<span className="font-bold italic">Estrategia, estructura y resultados reales </span>
									para organizaciones sociales y empresas con impacto.
								</p>
							</div>

							<div className="flex justify-end w-full md:px-[50px]" data-node-id="1:833">
								<CtaButton
									data-node-id="1:834"
								>
									¡Transforma tu Organización hoy!
								</CtaButton>
							</div>
						</div>
					</ScrollReveal>
				</div>
			</section>

			{/* Problem/Solution Section (Teal) (1:835) */}
			<section className="w-full bg-[#0097b2] py-[60px] px-[30px]" data-node-id="1:835">
				<div className="max-w-[1440px] mx-auto flex flex-col gap-[30px] items-center">
					{/* Questions */}
					<div className="flex flex-col gap-[30px] w-full">
						<ScrollReveal direction="left" className="w-full flex justify-start">
							<h2 className="text-white font-bold italic text-[32px] md:text-[52px] leading-tight md:leading-[60px] tracking-[0.78px] max-w-[716px]" data-node-id="1:837">
								¿Tu organización o empresa está creciendo, pero te falta estructura?
							</h2>
						</ScrollReveal>
						<ScrollReveal direction="right" className="w-full flex justify-end">
							<h2 className="text-white font-bold italic text-[32px] md:text-[52px] leading-tight md:leading-[60px] tracking-[0.78px] text-right max-w-[716px]" data-node-id="1:839">
								¿Te cuesta demostrar el impacto que generas o sostenerlo en el tiempo?
							</h2>
						</ScrollReveal>
					</div>

					{/* Answers */}
					<div className="flex flex-col gap-[30px] w-full mt-[30px]">
						<ScrollReveal direction="left" delay={0.2} className="w-full flex justify-start">
							<p className="text-white font-semibold italic text-[24px] md:text-[52px] leading-tight md:leading-[52px] tracking-[0.78px] max-w-[716px]" data-node-id="1:841">
								Trabajo contigo para diseñar soluciones estratégicas y accionables, que te ayuden a avanzar con claridad, sostenibilidad y sentido.
							</p>
						</ScrollReveal>
						<ScrollReveal direction="right" delay={0.3} className="w-full flex justify-end">
							<p className="text-white font-semibold italic text-[24px] md:text-[52px] leading-tight md:leading-[52px] tracking-[0.78px] text-right max-w-[716px]" data-node-id="1:843">
								Ya sea que necesites crear una estrategia desde cero, fortalecer tus procesos internos o diseñar propuestas financiables, aquí tienes una guía cercana, experta y práctica.
							</p>
						</ScrollReveal>
					</div>
				</div>
			</section>

			{/* Target Audience Section */}
			<section className="w-full bg-white py-[60px] px-[30px]" data-node-id="1:844">
				<div className="max-w-[1440px] mx-auto flex flex-col items-center gap-[30px]">
					<ScrollReveal direction="up">
						<div className="w-full flex justify-center" data-node-id="1:845">
							<h2 className="text-[#0e5587] font-bold text-[52px] leading-[42px] tracking-[0.63px] text-center">
								¿A quién acompaño?
							</h2>
						</div>
					</ScrollReveal>

					<div className="flex flex-col md:flex-row gap-[30px] w-full" data-node-id="1:847">
						{/* Card 1 (1:848) */}
						<ScrollReveal direction="left" delay={0.2} className="flex-1">
							<div className="flex-1 bg-white border border-[#0e5587] rounded-[10px] px-[30px] py-[20px] flex flex-col items-center text-center gap-[20px] min-h-[300px] justify-center hover:shadow-lg transition-shadow" data-node-id="1:848">
								<h3 className="text-[#0e5587] font-bold text-[48px] leading-[40px] tracking-[0.58px]">
									Organizaciones <br /> sociales
								</h3>
								<p className="text-[#0e5587] font-medium text-[24px] md:text-[36px] leading-[40px] tracking-[0.43px] max-w-[557px]">
									ONGs, fundaciones, redes o proyectos que necesitan ordenar sus ideas, medir mejor su impacto o aumentar su sostenibilidad financiera sin perder su esencia.
								</p>
							</div>
						</ScrollReveal>

						{/* Card 2 (1:851) */}
						<ScrollReveal direction="right" delay={0.4} className="flex-1">
							<div className="flex-1 bg-white border border-[#0e5587] rounded-[10px] px-[30px] py-[20px] flex flex-col items-center text-center gap-[20px] min-h-[300px] justify-center hover:shadow-lg transition-shadow" data-node-id="1:851">
								<h3 className="text-[#0e5587] font-bold text-[48px] leading-[40px] tracking-[0.58px]">
									Empresas con <br /> propósito
								</h3>
								<p className="text-[#0e5587] font-medium text-[24px] md:text-[36px] leading-[40px] tracking-[0.43px] max-w-[557px]">
									Negocios que quieren desarrollar o mejorar su estrategia de Responsabilidad Social Empresarial (RSE) con acciones alineadas a su visión, que generen impacto real y fortalecimiento reputacional.
								</p>
							</div>
						</ScrollReveal>
					</div>
				</div>
			</section>

			{/* Benefits Section (Teal) */}
			<section className="w-full bg-[#0097b2] py-[60px] px-[30px]" data-node-id="1:854">
				<div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-[30px] items-center justify-center">
					{/* Left Column */}
					<ScrollReveal direction="left" className="w-full md:w-[510px]">
						<div className="flex flex-col items-end shrink-0" data-node-id="1:855">
							<h2 className="font-bold italic text-[52px] md:text-[72px] leading-[76px] tracking-[0.87px] text-center md:text-right text-white w-full" data-node-id="1:856">
								¿Que lograrás con la consultoría?
							</h2>
						</div>
					</ScrollReveal>

					{/* Right Column - Check list */}
					<div className="w-full md:w-[778px] flex flex-col items-center py-[50px] px-[10px]" data-node-id="1:859">
						{[
							"Plan estratégico claro alineado a tu misión y narrativa de impacto",
							"Proyectos financiables con enfoque técnico y humano",
							"Sistemas de monitoreo útiles, más allá de solo recolectar datos",
							"Estrategias de recaudación conectadas con tu impacto",
							"Equipos alineados, motivados y capaces"
						].map((item, i, arr) => (
							<ScrollReveal key={i} direction="right" delay={i * 0.1} className="w-full">
								<div className="flex gap-[31px] items-center w-full">
									{/* Circle Column */}
									<div className="flex flex-col items-center justify-center shrink-0 w-[140px]">
										{/* Top Line */}
										<div className={`h-[20px] w-[2px] bg-white ${i === 0 ? 'opacity-0' : 'opacity-100'}`}></div>

										{/* Circle */}
										<div className="bg-white p-[5px] rounded-full size-[140px] shadow-lg relative z-10 shrink-0">
											<div className="bg-[#0e5587] size-full rounded-full p-[15px]">
												<div className="bg-white size-full rounded-full flex items-center justify-center">
													<Check className="text-[#0e5587] size-[48px]" strokeWidth={3} />
												</div>
											</div>
										</div>

										{/* Bottom Line */}
										<div className={`h-[20px] w-[2px] bg-white ${i === arr.length - 1 ? 'opacity-0' : 'opacity-100'}`}></div>
									</div>

									{/* Text */}
									<p className="font-semibold text-[32px] md:text-[48px] leading-[40px] tracking-[0.58px] text-white">
										{item}
									</p>
								</div>
							</ScrollReveal>
						))}
					</div>
				</div>
			</section>

			{/* Clients Carousel */}
			<section className="w-full bg-white py-[80px] px-6 md:px-[80px]">
				<div className="max-w-[1440px] mx-auto flex flex-col items-center gap-[60px]">
					<ScrollReveal direction="up">
						<h2 className="text-[#0e5587] font-bold text-[36px] md:text-[52px] text-center">
							Organizaciones y empresas con las que he trabajado
						</h2>
					</ScrollReveal>

					<ScrollReveal direction="up" delay={0.2} className="w-full">
						<div className="w-full overflow-hidden relative">
							<div className="flex gap-[60px] items-center animate-scroll py-4">
								{[...organizations, ...organizations, ...organizations].map((logo, i) => (
									<div key={i} className="shrink-0 h-[80px] md:h-[100px] w-auto flex items-center justify-center px-4">
										<img src={logo} alt={`Org ${i}`} className="h-full object-contain hover:scale-110 transition-transform duration-300" />
									</div>
								))}
							</div>
						</div>
					</ScrollReveal>
				</div>
			</section>

			{/* Testimonials Section (1:927) */}
			<section className="w-full bg-[#0097b2] py-[80px] px-6 md:px-[80px]" data-node-id="1:927">
				<div className="max-w-[1512px] mx-auto flex flex-col md:flex-row items-center gap-[30px]" data-node-id="1:928">

					{/* Left Group: Slider Arrows + Overlapping Cards */}
					<div className="flex-1 w-full flex items-center justify-center gap-[20px]" data-node-id="1:929">
						{/* Left Arrow */}
						<button
							onClick={handlePrev}
							className="shrink-0 hover:scale-110 transition-transform hidden md:block z-50 relative"
						>
							<ChevronLeft className="size-[48px] text-[#0e5587]" />
						</button>

						<div className="flex items-center justify-center relative h-[650px] md:h-[720px] w-full max-w-[934px] overflow-visible">
							{testimonials.map((item, idx) => {
								let positionClass = "";
								const isPrev = idx === (testindex - 1 + testimonials.length) % testimonials.length;
								const isActive = idx === testindex;

								if (isActive) {
									return (
										<div key={item.id} className="relative z-10 w-full flex justify-center lg:pl-[150px] transition-all duration-700 ease-in-out">
											<ScrollReveal direction="up">
												<div className="bg-white rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-full max-w-[565px] h-auto min-h-[500px] md:h-[720px] p-[20px] md:p-[40px] flex flex-col gap-[30px]">
													<div className="flex items-center gap-[20px]">
														<div className="size-[80px] md:size-[100px] rounded-full overflow-hidden shrink-0 border-4 border-white shadow-sm bg-[#0e5587]/10 flex items-center justify-center">
															<img src={item.image} className="size-full object-cover" alt={item.name} onError={(e) => {
																e.target.style.display = 'none';
																e.target.nextSibling.style.display = 'flex';
															}} />
															<span className="hidden w-full h-full items-center justify-center text-[#0e5587] font-bold text-3xl">{item.initials}</span>
														</div>
														<div className="flex flex-col text-[#0e5587]">
															<span className="text-[20px] leading-[22px]">{item.name}</span>
															<span className="text-[32px] font-semibold leading-[40px]">{item.role}</span>
															<span className="text-[14px] font-light leading-[22px]">{item.date}</span>
														</div>
													</div>
													<div className="flex gap-[8px]">
														{[...Array(5)].map((_, i) => (
															<Star key={i} className="size-[24px] fill-[#FDB813] text-[#FDB813]" />
														))}
													</div>
													<div className="text-[#0e5587] italic text-[22px] md:text-[24px] leading-[30px] md:leading-[35px] tracking-[0.48px] whitespace-pre-wrap">
														“{item.text}”
													</div>
												</div>
											</ScrollReveal>
										</div>
									);
								}

								if (isPrev) {
									return (
										<div key={item.id} className="absolute left-0 top-1/2 -translate-y-1/2 z-0 hidden lg:block transition-all duration-700 ease-in-out">
											<ScrollReveal direction="left" delay={0.2}>
												<div className="bg-white rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[313px] h-[400px] p-[20px] flex flex-col gap-[30px] cursor-pointer opacity-60 grayscale-[0.5] hover:opacity-100 hover:grayscale-0 transition-all" onClick={handlePrev}>
													<div className="flex items-center gap-[20px]">
														<div className="size-[60px] rounded-full overflow-hidden shrink-0 bg-[#0e5587]/10 flex items-center justify-center">
															<img src={item.image} className="size-full object-cover" alt={item.name} onError={(e) => {
																e.target.style.display = 'none';
																e.target.nextSibling.style.display = 'flex';
															}} />
															<span className="hidden w-full h-full items-center justify-center text-[#0e5587] font-bold text-xl">{item.initials}</span>
														</div>
														<div className="flex flex-col text-[#0e5587]">
															<span className="text-[10px] leading-[12px]">{item.name}</span>
															<span className="text-[16px] font-semibold leading-[20px]">{item.role}</span>
															<span className="text-[6px] leading-[12px]">{item.date}</span>
														</div>
													</div>
													<div className="flex gap-[8px]">
														{[...Array(5)].map((_, i) => (
															<Star key={i} className="size-[16px] fill-[#FDB813] text-[#FDB813]" />
														))}
													</div>
													<div className="text-[#0e5587] italic text-[10px] leading-[18px] tracking-[0.2px] line-clamp-6">
														“{item.text}”
													</div>
												</div>
											</ScrollReveal>
										</div>
									);
								}

								return null;
							})}
						</div>

						{/* Right Arrow */}
						<button
							onClick={handleNext}
							className="shrink-0 hover:scale-110 transition-transform hidden md:block z-50 relative"
						>
							<ChevronRight className="size-[48px] text-[#0e5587]" />
						</button>
					</div>

					{/* Vertical Separator */}
					<div className="hidden md:block w-px h-[520px] bg-white/40 self-center"></div>

					{/* Question Title */}
					<div className="w-full md:w-[458px] text-center md:text-right" data-node-id="1:931">
						<ScrollReveal direction="right">
							<h2 className="text-white font-bold italic text-[52px] md:text-[72px] leading-tight md:leading-[76px] tracking-[0.87px]">
								¿Que dicen quienes han trabajado conmigo?
							</h2>
						</ScrollReveal>
					</div>
				</div>
			</section>

			{/* Methodology (1:932) */}
			<section className="w-full bg-white py-[80px] px-6 md:px-[80px]" data-node-id="1:932">
				<div className="max-w-[1512px] mx-auto flex flex-col items-center gap-[30px]">
					{/* Header Group */}
					<div className="flex flex-col gap-[20px] items-center text-center text-[#0e5587]" data-node-id="1:933">
						<ScrollReveal direction="up" className="flex flex-col items-center">
							<h2 className="font-bold italic text-[52px] leading-[76px] tracking-[0.63px]" data-node-id="1:935">
								¿Cómo trabajo?
							</h2>
							<p className="font-bold italic text-[40px] leading-[76px] tracking-[0.48px] max-w-[765px]" data-node-id="1:936">
								Estrategia, acción y resultados medibles
							</p>
						</ScrollReveal>
						<ScrollReveal direction="up" delay={0.1}>
							<p className="font-medium text-[32px] leading-[40px] tracking-[0.39px] max-w-[1220px]" data-node-id="1:937">
								<span className="font-bold">No se trata solo de ideas bonitas.</span> Acompaño procesos desde la reflexión estratégica hasta la implementación práctica, siempre adaptándome al contexto y capacidades del equipo. <span className="font-bold">¿Qué me diferencia?</span> Trabajo con metodologías que combinan enfoque técnico y mirada humana:
							</p>
						</ScrollReveal>
					</div>

					<div className="w-full max-w-[1452px] flex flex-col gap-[30px]">
						{[
							[
								{
									id: "1:939",
									title: "CORA (Claridad + Orden + Ruta + Acción)",
									desc: "Claridad - Orden - Ruta - Acción. Metodología propia que permite analizar dónde estás, definir hacia dónde vas y trazar un camino realista para lograrlo. Cada fase incluye reflexión, estructura y planificación viable."
								},
								{
									id: "1:945",
									title: "FormAcción",
									desc: "No se trata solo de capacitar, sino de transformar: formo a tu equipo para que lo aprendido se lleve a la acción y se mantenga en el tiempo. Con materiales, práctica y seguimiento."
								}
							],
							[
								{
									id: "1:952",
									title: "Puentes de valor",
									desc: "Conecto el corazón de tu organización con lo que espera el mundo externo: inversionistas, donantes, aliados y comunidad. Creamos coherencia estratégica entre tu propósito, tus procesos y tus resultados."
								},
								{
									id: "1:958",
									title: "Procesos AutomatiZados con Sentido (PAZ)",
									desc: "Tecnología al servicio del impacto: integro automatización y herramientas prácticas para que el tiempo del equipo se dedique a lo que importa."
								}
							]
						].map((row, rowIdx) => (
							<div key={rowIdx} className="flex flex-col md:flex-row gap-[30px]">
								{row.map((item, i) => (
									<ScrollReveal key={item.id} direction={i === 0 ? "left" : "right"} delay={0.2 + rowIdx * 0.1} className="flex-1">
										<div
											className={`w-full bg-white border border-[#0e5587] rounded-[10px] px-[30px] py-[20px] flex flex-col gap-[20px] transition-all duration-300 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ${openMethod === item.id ? 'h-auto' : 'h-min'}`}
										>
											<button
												onClick={() => setOpenMethod(openMethod === item.id ? null : item.id)}
												className="w-full flex items-center justify-between group text-left"
											>
												<span className="text-[#0e5587] font-semibold text-[28px] leading-[40px] tracking-[0.34px]">
													{item.title}
												</span>
												<ChevronDown className={`size-[36px] text-[#0e5587] transition-transform duration-300 ${openMethod === item.id ? 'rotate-180' : ''}`} />
											</button>
											{openMethod === item.id && (
												<div className="text-[#0e5587] font-normal text-[28px] leading-[40px] tracking-[0.34px] animate-in fade-in slide-in-from-top-2 duration-300 border-t border-[#0e5587]/10 pt-4">
													<p className="whitespace-pre-wrap">{item.desc}</p>
												</div>
											)}
										</div>
									</ScrollReveal>
								))}
							</div>
						))}
					</div>

					{/* Footer Metolodogies */}
					<div className="w-full max-w-[1452px] flex flex-col gap-[20px] mt-[30px]" data-node-id="1:964">
						<ScrollReveal direction="up" delay={0.4}>
							<h3 className="text-[#0e5587] font-bold italic text-[40px] leading-[76px] tracking-[0.48px] text-center md:text-left">
								También uso otras metodologías como:
							</h3>
						</ScrollReveal>
						<ScrollReveal direction="up" delay={0.5} className="w-full overflow-x-auto pb-4">
							<div className="flex items-center gap-[30px] text-[#0e5587] font-semibold text-[28px] leading-[40px] tracking-[0.34px] whitespace-nowrap">
								<span>RBM (Gestión basada en resultados)</span>
								<span className="opacity-50">-</span>
								<span>Teoría del cambio y marco lógico</span>
								<span className="opacity-50">-</span>
								<span>Metodologías ágiles</span>
								<span className="opacity-50">-</span>
								<span>Storytelling de impacto</span>
								<span className="opacity-50">-</span>
								<span>Alineación con ODS y marcos ESG</span>
							</div>
						</ScrollReveal>
					</div>
				</div>
			</section>

			{/* Strategic Solutions (Teal) */}
			<section className="w-full bg-[#0097b2] py-[100px] px-6 md:px-[80px]">
				<div className="max-w-[1440px] mx-auto flex flex-col items-center gap-[60px]">
					<ScrollReveal direction="up">
						<div className="text-center text-white">
							<h2 className="font-bold italic text-[52px] mb-6">Soluciones estratégicas</h2>
							<p className="font-medium text-[32px] max-w-[1220px]">
								También puedes elegir una de estas soluciones ya estructuradas, que han sido implementadas con éxito en organizaciones sociales y empresas de la región:
							</p>
						</div>
					</ScrollReveal>

					<div className="flex flex-col gap-6 w-full max-w-[1000px]">
						{[
							{ id: 1, title: "Estrategia con Alma" },
							{ id: 2, title: "Evidencia para el Cambio (Sistemas MERA)" },
							{ id: 3, title: "Recaudación con sentido" },
							{ id: 4, title: "Programas que Transforman (Diseño de proyectos)" },
							{ id: 5, title: "Cultura de Impacto Interno" }
						].map((solution, i) => (
							<ScrollReveal key={solution.id} direction="left" delay={i * 0.1}>
								<div className="bg-[#0e5587] border border-white rounded-[10px] p-6 flex items-center justify-between cursor-pointer hover:bg-[#0c4a75] transition-colors shadow-md">
									<div className="flex items-center gap-6">
										<span className="text-white font-bold text-[32px] w-10">{solution.id}</span>
										<span className="text-white font-semibold text-[24px] md:text-[28px]">{solution.title}</span>
									</div>
									<Plus className="text-white w-8 h-8" />
								</div>
							</ScrollReveal>
						))}
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className="w-full bg-white py-[100px] px-6 md:px-[80px]">
				<div className="max-w-[1440px] mx-auto flex flex-col items-center gap-[60px]">
					<ScrollReveal direction="up">
						<div className="text-center text-[#0e5587]">
							<h2 className="font-bold italic text-[52px] mb-4">¿Cómo funciona el proceso de consultoría personalizada?</h2>
							<p className="font-medium text-[32px] max-w-[1220px]">
								No se trata solo de ideas bonitas. Acompaño procesos desde la reflexión estratégica hasta la implementación práctica, siempre adaptándome al contexto y capacidades del equipo.
							</p>
						</div>
					</ScrollReveal>

					<div className="flex flex-col gap-10 w-full max-w-[1200px]">
						{[
							{ id: 1, title: "Primera sesión de consultoría", desc: "Una hora de trabajo estratégico donde exploramos tus retos, analizamos tu contexto y definimos tus necesidades prioritarias. Esta sesión tiene una inversión de 80 USD." },
							{ id: 2, title: "Propuesta personalizada", desc: "A partir de lo conversado, te propongo un paquete de servicios o acompañamiento adaptado a ti: desde algo puntual hasta un proceso integral." },
							{ id: 3, title: "Implementación", desc: "Acompañamiento estratégico con entregables claros, seguimiento continuo y espacios de retroalimentación." },
							{ id: 4, title: "Evaluación de resultados", desc: "Medimos avances y cerramos el proceso con un plan para la sostenibilidad de lo construido." }
						].map((step, i) => (
							<ScrollReveal key={step.id} direction="right" delay={i * 0.15}>
								<div className="bg-[#0e5587] rounded-tl-[100px] rounded-bl-[100px] rounded-tr-[20px] rounded-br-[20px] p-2 pr-10 flex items-center gap-10 min-h-[190px]">
									{/* Number Circle */}
									<div className="bg-white size-[160px] rounded-full flex items-center justify-center shrink-0 border-8 border-[#0e5587] relative left-2">
										<span className="text-[#0e5587] font-bold text-[96px] leading-none">{step.id}</span>
									</div>

									{/* Text */}
									<div className="flex-1 text-white py-4">
										<h3 className="font-bold text-[32px] md:text-[40px] mb-2">{step.title}</h3>
										<p className="font-medium text-[20px] md:text-[24px] leading-relaxed opacity-90">{step.desc}</p>
									</div>
								</div>
							</ScrollReveal>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section (Teal) */}
			<section className="w-full bg-[#0097b2] py-[100px] px-6 md:px-[80px]">
				<div className="max-w-[1440px] mx-auto flex flex-col items-center text-center text-white">
					<ScrollReveal direction="up">
						<h2 className="font-bold italic text-[64px] mb-[60px]">¿Quieres comenzar?</h2>
					</ScrollReveal>

					<div className="flex flex-col md:flex-row w-full justify-between items-center gap-10">
						{/* Left CTA */}
						<ScrollReveal direction="left" className="flex-1">
							<div className="flex flex-col items-center gap-10">
								<p className="font-medium text-[32px] md:text-[40px] leading-tight">
									¡Quiero agendar mi primera sesión de consultoría!
								</p>
								<CtaButton>
									Reservar mi primera sesión
								</CtaButton>
							</div>
						</ScrollReveal>

						{/* Divider */}
						<div className="hidden md:block w-px h-[200px] bg-white/50"></div>

						{/* Right CTA */}
						<ScrollReveal direction="right" className="flex-1">
							<div className="flex flex-col items-center gap-10">
								<p className="font-medium text-[32px] md:text-[40px] leading-tight">
									¡Escríbeme para diseñar juntos el proceso más útil para ti!
								</p>
								<button className="bg-[#25d366] text-white font-bold text-[20px] px-10 py-4 rounded-[20px] shadow-lg hover:bg-[#20bd5a] transition-colors">
									Escribir al Whatsapp
								</button>
							</div>
						</ScrollReveal>
					</div>
				</div>
			</section>


			{/* FAQ Section */}
			<section className="w-full bg-white py-[100px] px-6 md:px-[80px]">
				<div className="max-w-[1440px] mx-auto flex flex-col items-center">
					<ScrollReveal direction="up">
						<h2 className="text-[#0e5587] font-bold italic text-[52px] mb-[60px] text-center">
							Preguntas frecuentes
						</h2>
					</ScrollReveal>

					<div className="w-full max-w-[1000px] flex flex-col gap-6 items-stretch">
						{faqs.map((faq, index) => (
							<ScrollReveal key={index} direction="up" delay={index * 0.1} className="w-full !w-full block">
								<div className="w-full flex flex-col">
									<button
										type="button"
										onClick={() => toggleFAQ(index)}
										className={`w-full !w-full bg-white border border-[#e5e7eb] rounded-[10px] p-8 flex justify-between items-center transition-all text-left focus:outline-none ${openFAQ === index ? '!text-[#0e5587]' : '!text-[#0e5587]'}`}
									>
										<span className="font-semibold text-[24px] md:text-[28px]">{faq.question}</span>
										<Plus className={`!text-[#0e5587] w-8 h-8 transform transition-transform duration-300 ${openFAQ === index ? 'rotate-45' : ''}`} />
									</button>

									<div className={`overflow-hidden transition-all duration-300 w-full ${openFAQ === index ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
										<div className="bg-gray-50/50 p-8 rounded-[10px] text-[#0e5587] text-[20px] leading-relaxed w-full">
											{faq.answer}
										</div>
									</div>
								</div>
							</ScrollReveal>
						))}
					</div>
				</div>
			</section>

		</main>
	);
};

export default Consultoria;
