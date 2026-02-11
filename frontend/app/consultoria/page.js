'use client';
import React, { useState } from 'react';
import useLinkInterceptor from '@/hooks/useLinkInterceptor';
import { Play, Check, Plus, ChevronDown, ArrowRight } from 'lucide-react';

const Consultoria = () => {
	useLinkInterceptor();
	const [openFAQ, setOpenFAQ] = useState(null);

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
			<section className="relative w-full overflow-hidden"
				style={{ background: 'linear-gradient(183.95deg, #FFFFFF 79.31%, #0097b2 84.9%)' }}
				data-node-id="1:821">
				<div className="max-w-[1440px] mx-auto px-6 md:px-[40px] py-[50px] flex flex-col md:flex-row items-center gap-[40px] md:gap-[50px]">
					{/* Video Placeholder (1:823) */}
					<div className="w-full md:w-[552px] h-[400px] md:h-[718px] bg-[#f7f4f1] rounded-[20px] shadow-[-2px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-center relative shrink-0" data-node-id="1:823">
						<div className="bg-[#0e5587] w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-[80px] flex items-center justify-center shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer hover:scale-105 transition-transform">
							<Play className="text-white w-10 h-10 md:w-[69px] md:h-[69px] ml-2" fill="currentColor" strokeWidth={0} />
						</div>
					</div>

					{/* Text Content (1:828) */}
					<div className="flex-1 flex flex-col items-end justify-center gap-[60px] w-full" data-node-id="1:828">
						<div className="flex flex-col items-end gap-[10px] text-[#0e5587] w-full">
							<h1 className="font-extrabold text-[60px] md:text-[124px] leading-none md:leading-[92px] tracking-tight md:tracking-[1.86px] text-right" data-node-id="1:830">
								Consultoría
							</h1>
							<span className="font-bold text-[40px] md:text-[96px] leading-none md:leading-[92px] tracking-tight md:tracking-[1.44px] text-right" data-node-id="1:831">
								con propósito
							</span>
						</div>

						<p className="text-[#0e5587] text-[24px] md:text-[52px] font-semibold italic leading-tight md:leading-[52px] tracking-[0.78px] text-right w-full" data-node-id="1:832">
							<span className="font-bold italic">Estrategia, estructura y resultados reales </span>
							para organizaciones sociales y empresas con impacto.
						</p>

						<div className="flex justify-end w-full px-[50px]">
							<button className="bg-[#0e5587] text-white font-bold text-[20px] h-[64px] px-[40px] py-[16px] rounded-[20px] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)] hover:bg-[#0a4368] transition-colors whitespace-nowrap" data-node-id="1:834">
								¡Transforma tu Organización hoy!
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Problem/Solution Section (Teal) (1:835) */}
			<section className="w-full bg-[#0097b2] py-[60px] px-[30px]" data-node-id="1:835">
				<div className="max-w-[1440px] mx-auto flex flex-col gap-[30px] items-center">
					{/* Questions */}
					<div className="flex flex-col gap-[30px] w-full">
						<div className="flex justify-start w-full">
							<h2 className="text-white font-bold italic text-[32px] md:text-[52px] leading-tight md:leading-[60px] tracking-[0.78px] max-w-[716px]" data-node-id="1:837">
								¿Tu organización o empresa está creciendo, pero te falta estructura?
							</h2>
						</div>
						<div className="flex justify-end w-full">
							<h2 className="text-white font-bold italic text-[32px] md:text-[52px] leading-tight md:leading-[60px] tracking-[0.78px] text-right max-w-[716px]" data-node-id="1:839">
								¿Te cuesta demostrar el impacto que generas o sostenerlo en el tiempo?
							</h2>
						</div>
					</div>

					{/* Answers */}
					<div className="flex flex-col gap-[30px] w-full mt-[30px]">
						<div className="flex justify-start w-full">
							<p className="text-white font-semibold italic text-[24px] md:text-[52px] leading-tight md:leading-[52px] tracking-[0.78px] max-w-[716px]" data-node-id="1:841">
								Trabajo contigo para diseñar soluciones estratégicas y accionables, que te ayuden a avanzar con claridad, sostenibilidad y sentido.
							</p>
						</div>
						<div className="flex justify-end w-full">
							<p className="text-white font-semibold italic text-[24px] md:text-[52px] leading-tight md:leading-[52px] tracking-[0.78px] text-right max-w-[716px]" data-node-id="1:843">
								Ya sea que necesites crear una estrategia desde cero, fortalecer tus procesos internos o diseñar propuestas financiables, aquí tienes una guía cercana, experta y práctica.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Target Audience Section */}
			<section className="w-full bg-white py-[60px] px-[30px]" data-node-id="1:844">
				<div className="max-w-[1440px] mx-auto flex flex-col items-center gap-[30px]">
					<div className="w-full flex justify-center" data-node-id="1:845">
						<h2 className="text-[#0e5587] font-bold text-[52px] leading-[42px] tracking-[0.63px] text-center">
							¿A quién acompaño?
						</h2>
					</div>

					<div className="flex flex-col md:flex-row gap-[30px] w-full" data-node-id="1:847">
						{/* Card 1 (1:848) */}
						<div className="flex-1 bg-white border border-[#0e5587] rounded-[10px] px-[30px] py-[20px] flex flex-col items-center text-center gap-[20px] min-h-[300px] justify-center hover:shadow-lg transition-shadow" data-node-id="1:848">
							<h3 className="text-[#0e5587] font-bold text-[48px] leading-[40px] tracking-[0.58px]">
								Organizaciones <br /> sociales
							</h3>
							<p className="text-[#0e5587] font-medium text-[24px] md:text-[36px] leading-[40px] tracking-[0.43px] max-w-[557px]">
								ONGs, fundaciones, redes o proyectos que necesitan ordenar sus ideas, medir mejor su impacto o aumentar su sostenibilidad financiera sin perder su esencia.
							</p>
						</div>

						{/* Card 2 (1:851) */}
						<div className="flex-1 bg-white border border-[#0e5587] rounded-[10px] px-[30px] py-[20px] flex flex-col items-center text-center gap-[20px] min-h-[300px] justify-center hover:shadow-lg transition-shadow" data-node-id="1:851">
							<h3 className="text-[#0e5587] font-bold text-[48px] leading-[40px] tracking-[0.58px]">
								Empresas con <br /> propósito
							</h3>
							<p className="text-[#0e5587] font-medium text-[24px] md:text-[36px] leading-[40px] tracking-[0.43px] max-w-[557px]">
								Negocios que quieren desarrollar o mejorar su estrategia de Responsabilidad Social Empresarial (RSE) con acciones alineadas a su visión, que generen impacto real y fortalecimiento reputacional.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section (Teal) */}
			<section className="w-full bg-[#0097b2] py-[60px] px-[30px]" data-node-id="1:854">
				<div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-[30px] items-center md:items-start justify-center">
					{/* Left Column */}
					<div className="w-full md:w-[510px] flex flex-col items-end pt-[50px] shrink-0" data-node-id="1:855">
						<h2 className="font-bold italic text-[52px] md:text-[72px] leading-[76px] tracking-[0.87px] text-center md:text-right text-white w-full" data-node-id="1:856">
							¿Que lograrás con la consultoría?
						</h2>
					</div>

					{/* Right Column - Check list */}
					<div className="w-full md:w-[778px] flex flex-col items-center py-[50px] px-[10px]" data-node-id="1:859">
						{[
							"Plan estratégico claro alineado a tu misión y narrativa de impacto",
							"Proyectos financiables con enfoque técnico y humano",
							"Sistemas de monitoreo útiles, más allá de solo recolectar datos",
							"Estrategias de recaudación conectadas con tu impacto",
							"Equipos alineados, motivados y capaces"
						].map((item, i, arr) => (
							<div key={i} className="flex gap-[31px] items-center w-full">
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
						))}
					</div>
				</div>
			</section>

			{/* Clients Carousel */}
			<section className="w-full bg-white py-[80px] px-6 md:px-[80px]">
				<div className="max-w-[1440px] mx-auto flex flex-col items-center gap-[60px]">
					<h2 className="text-[#0e5587] font-bold text-[36px] md:text-[52px] text-center">
						Organizaciones y empresas con las que he trabajado
					</h2>

					<div className="w-full overflow-hidden relative">
						<div className="flex gap-[60px] items-center animate-scroll whitespace-nowrap overflow-x-auto no-scrollbar py-4">
							{[...organizations, ...organizations].map((logo, i) => (
								<div key={i} className="shrink-0 h-[100px] w-auto flex items-center justify-center">
									<img src={logo} alt={`Org ${i}`} className="h-full object-contain filter grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Methodology */}
			<section className="w-full bg-white py-[80px] px-6 md:px-[80px]">
				<div className="max-w-[1440px] mx-auto flex flex-col gap-[60px]">
					<div className="text-center">
						<h2 className="text-[#0e5587] font-bold italic text-[52px] mb-4">¿Cómo trabajo?</h2>
						<p className="text-[#0e5587] font-bold italic text-[40px] mb-6">Estrategia, acción y resultados medibles</p>
						<p className="text-[#0e5587] text-[24px] md:text-[32px] font-medium leading-relaxed max-w-[1220px] mx-auto">
							<span className="font-bold">No se trata solo de ideas bonitas.</span> Acompaño procesos desde la reflexión estratégica hasta la implementación práctica, siempre adaptándome al contexto y capacidades del equipo. <br />
							<span className="font-bold">¿Qué me diferencia?</span> Trabajo con metodologías que combinan enfoque técnico y mirada humana:
						</p>
					</div>

					<div className="flex flex-col gap-6 items-center">
						{["CORA (Claridad + Orden + Ruta + Acción)", "FormAcción", "Puentes de valor", "Procesos AutomatiZados con Sentido (PAZ)"].map((method, i) => (
							<div key={i} className="w-full max-w-[800px] border border-[#0e5587] rounded-[10px] p-6 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
								<span className="text-[#0e5587] font-semibold text-[24px] md:text-[28px]">{method}</span>
								<Plus className="text-[#0e5587] w-8 h-8" />
							</div>
						))}
					</div>

					<div className="text-center mt-10">
						<p className="text-[#0e5587] font-bold italic text-[40px] mb-8">También uso otras metodologías como:</p>
						<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[#0e5587] font-semibold text-[24px] md:text-[28px]">
							<span>RBM (Gestión basada en resultados)</span>
							<span>-</span>
							<span>Teoría del cambio y marco lógico</span>
							<span>-</span>
							<span>Metodologías ágiles</span>
							<span>-</span>
							<span>Storytelling de impacto</span>
							<span>-</span>
							<span>Alineación con ODS y marcos ESG</span>
						</div>
					</div>
				</div>
			</section>

			{/* Strategic Solutions (Teal) */}
			<section className="w-full bg-[#0097b2] py-[100px] px-6 md:px-[80px]">
				<div className="max-w-[1440px] mx-auto flex flex-col items-center gap-[60px]">
					<div className="text-center text-white">
						<h2 className="font-bold italic text-[52px] mb-6">Soluciones estratégicas</h2>
						<p className="font-medium text-[32px] max-w-[1220px]">
							También puedes elegir una de estas soluciones ya estructuradas, que han sido implementadas con éxito en organizaciones sociales y empresas de la región:
						</p>
					</div>

					<div className="flex flex-col gap-6 w-full max-w-[1000px]">
						{[
							{ id: 1, title: "Estrategia con Alma" },
							{ id: 2, title: "Evidencia para el Cambio (Sistemas MERA)" },
							{ id: 3, title: "Recaudación con sentido" },
							{ id: 4, title: "Programas que Transforman (Diseño de proyectos)" },
							{ id: 5, title: "Cultura de Impacto Interno" }
						].map((solution) => (
							<div key={solution.id} className="bg-[#0e5587] border border-white rounded-[10px] p-6 flex items-center justify-between cursor-pointer hover:bg-[#0c4a75] transition-colors shadow-md">
								<div className="flex items-center gap-6">
									<span className="text-white font-bold text-[32px] w-10">{solution.id}</span>
									<span className="text-white font-semibold text-[24px] md:text-[28px]">{solution.title}</span>
								</div>
								<Plus className="text-white w-8 h-8" />
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className="w-full bg-white py-[100px] px-6 md:px-[80px]">
				<div className="max-w-[1440px] mx-auto flex flex-col items-center gap-[60px]">
					<div className="text-center text-[#0e5587]">
						<h2 className="font-bold italic text-[52px] mb-4">¿Cómo funciona el proceso de consultoría personalizada?</h2>
						<p className="font-medium text-[32px] max-w-[1220px]">
							No se trata solo de ideas bonitas. Acompaño procesos desde la reflexión estratégica hasta la implementación práctica, siempre adaptándome al contexto y capacidades del equipo.
						</p>
					</div>

					<div className="flex flex-col gap-10 w-full max-w-[1200px]">
						{[
							{ id: 1, title: "Primera sesión de consultoría", desc: "Una hora de trabajo estratégico donde exploramos tus retos, analizamos tu contexto y definimos tus necesidades prioritarias. Esta sesión tiene una inversión de 80 USD." },
							{ id: 2, title: "Propuesta personalizada", desc: "A partir de lo conversado, te propongo un paquete de servicios o acompañamiento adaptado a ti: desde algo puntual hasta un proceso integral." },
							{ id: 3, title: "Implementación", desc: "Acompañamiento estratégico con entregables claros, seguimiento continuo y espacios de retroalimentación." },
							{ id: 4, title: "Evaluación de resultados", desc: "Medimos avances y cerramos el proceso con un plan para la sostenibilidad de lo construido." }
						].map((step) => (
							<div key={step.id} className="bg-[#0e5587] rounded-tl-[100px] rounded-bl-[100px] rounded-tr-[20px] rounded-br-[20px] p-2 pr-10 flex items-center gap-10 min-h-[190px]">
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
						))}
					</div>
				</div>
			</section>

			{/* CTA Section (Teal) */}
			<section className="w-full bg-[#0097b2] py-[100px] px-6 md:px-[80px]">
				<div className="max-w-[1440px] mx-auto flex flex-col items-center text-center text-white">
					<h2 className="font-bold italic text-[64px] mb-[60px]">¿Quieres comenzar?</h2>

					<div className="flex flex-col md:flex-row w-full justify-between items-center gap-10">
						{/* Left CTA */}
						<div className="flex-1 flex flex-col items-center gap-10">
							<p className="font-medium text-[32px] md:text-[40px] leading-tight">
								¡Quiero agendar mi primera sesión de consultoría!
							</p>
							<button className="bg-[#0e5587] text-white font-bold text-[20px] px-10 py-4 rounded-[20px] shadow-lg hover:bg-[#0c4a75] transition-colors">
								Reservar mi primera sesión
							</button>
						</div>

						{/* Divider */}
						<div className="hidden md:block w-px h-[200px] bg-white/50"></div>

						{/* Right CTA */}
						<div className="flex-1 flex flex-col items-center gap-10">
							<p className="font-medium text-[32px] md:text-[40px] leading-tight">
								¡Escríbeme para diseñar juntos el proceso más útil para ti!
							</p>
							<button className="bg-[#25d366] text-white font-bold text-[20px] px-10 py-4 rounded-[20px] shadow-lg hover:bg-[#20bd5a] transition-colors">
								Escribir al Whatsapp
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="w-full bg-white py-[100px] px-6 md:px-[80px]">
				<div className="max-w-[1440px] mx-auto flex flex-col items-center">
					<h2 className="text-[#0e5587] font-bold italic text-[52px] mb-[60px] text-center">
						Preguntas frecuentes
					</h2>

					<div className="w-full max-w-[1000px] flex flex-col gap-6">
						{faqs.map((faq, index) => (
							<div key={index} className="w-full">
								<button
									onClick={() => toggleFAQ(index)}
									className="w-full bg-white border border-[#e5e7eb] rounded-[10px] p-8 shadow-sm flex justify-between items-center hover:shadow-md transition-all text-left"
								>
									<span className="text-[#0e5587] font-semibold text-[24px] md:text-[28px]">{faq.question}</span>
									<Plus className={`text-[#0e5587] w-8 h-8 transform transition-transform duration-300 ${openFAQ === index ? 'rotate-45' : ''}`} />
								</button>

								<div className={`overflow-hidden transition-all duration-300 ${openFAQ === index ? 'max-h-[200px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
									<div className="bg-gray-50 p-8 rounded-[10px] text-[#0e5587] text-[20px]">
										{faq.answer}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

		</main>
	);
};

export default Consultoria;
