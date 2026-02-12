'use client';
import React, { useState } from 'react';
import useLinkInterceptor from '@/hooks/useLinkInterceptor';
import { toast } from 'sonner';
import { API_BASE_URL } from '@/lib/api-config';
import { Check } from 'lucide-react';
import Link from 'next/link';
import CtaButton from '@/components/CtaButton';
import ScrollReveal from '@/components/ScrollReveal';
import { motion } from 'framer-motion';

const SobreMi = () => {
	useLinkInterceptor();
	const [formData, setFormData] = useState({
		firstName: '',
		email: '',
		content: ''
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		try {
			const response = await fetch(`${API_BASE_URL}/api/messages`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData)
			});
			if (response.ok) {
				toast.success('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
				setFormData({ firstName: '', email: '', content: '' });
			} else {
				toast.error('Error al enviar el mensaje. Por favor intenta de nuevo.');
			}
		} catch (error) {
			toast.error('Error de conexión. Verifica tu internet.');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<main className="min-h-screen bg-white font-['Red_Hat_Display'] overflow-x-hidden">

			{/* Sec1: Hero Section */}
			<section
				className="relative w-full overflow-hidden pt-[120px] pb-[60px]"
				style={{ background: 'linear-gradient(179.82deg, rgb(255, 255, 255) 87.95%, #0097b2 96.185%)' }}
				data-node-id="1:1518"
			>
				<div className="max-w-[1440px] mx-auto px-6 md:px-[80px] flex flex-col items-start" data-node-id="1:1519">

					{/* Hero Text */}
					<ScrollReveal direction="left">
						<div className="flex flex-col items-start leading-none mb-4" data-node-id="1:1520">
							<h1 className="text-[#0e5587] font-semibold text-[64px] leading-[64px] tracking-[0.7718px]" data-node-id="1:1521">¡Hey!</h1>
							<h2 className="text-[#0e5587] font-extrabold text-[124px] leading-[80px] tracking-[1.4953px] mt-2" data-node-id="1:1522">soy Keicy Cabrera</h2>
						</div>
					</ScrollReveal>

					{/* Divider Line */}
					<ScrollReveal direction="left" delay={0.2}>
						<div className="w-[600px] h-px bg-[#d7be7c] my-[30px]" data-name="Divider" data-node-id="1:1523"></div>
					</ScrollReveal>

					{/* Hero Content Grid */}
					<div className="flex flex-col lg:flex-row gap-10 items-center justify-center w-full mt-10" data-node-id="1:1525">
						{/* Image Wrapper */}
						<ScrollReveal direction="up" delay={0.3} scale={0.95}>
							<div className="bg-[rgba(166,166,166,0.1)] border border-[rgba(0,0,0,0.1)] relative w-full max-w-[545px] h-[544px] rounded-[20px] flex items-end justify-center overflow-hidden" data-node-id="1:1526">
								<img
									src="/696d9c72355cfa000e52f66d 1.png"
									alt="Keicy Cabrera"
									className="w-full h-full object-contain"
									data-node-id="1:1527"
								/>
							</div>
						</ScrollReveal>

						{/* Description */}
						<ScrollReveal direction="right" delay={0.4}>
							<div className="flex flex-col gap-[40px] max-w-[627px]" data-name="Conten1" data-node-id="1:1528">
								<p className="text-[#0e5587] font-bold text-[52px] leading-[52px] tracking-[0.6271px]" data-node-id="1:1530">
									Economista venezolana con Maestría en Cooperación Internacional.
								</p>
								<p className="text-[#0e5587] font-medium italic text-[36px] leading-[40px] tracking-[0.4341px]" data-node-id="1:1531">
									Ayudo a organizaciones sociales, empresas con propósito y líderes del sector a crecer con estrategia, claridad y herramientas aplicadas, desde lo técnico hasta lo humano.
								</p>
							</div>
						</ScrollReveal>
					</div>
				</div>
			</section>

			{/* Section 2: Childhood Connection (Teal Background) */}
			<section className="w-full bg-[#0097b2] py-[60px] px-[30px] flex justify-center" data-node-id="1:1532">
				<div className="max-w-[1440px] w-full flex flex-col-reverse lg:flex-row gap-[30px] items-center justify-center">
					<ScrollReveal direction="left" className="flex-1">
						<div className="flex flex-col gap-[30px] text-white text-right max-w-[636px]" data-node-id="1:1533">
							<h3 className="font-bold text-[52px] leading-[54px] tracking-[0.6271px]" data-node-id="1:1534">
								Una conexión con lo social que comenzó desde niña
							</h3>
							<p className="font-medium italic text-[36px] leading-[40px]" data-node-id="1:1535">
								Desde pequeña he sentido una profunda conexión con las causas sociales. Siempre me ha movido la idea de contribuir a un mundo donde cada persona y comunidad tenga derecho a crecer, sanar y soñar sin límites.
							</p>
						</div>
					</ScrollReveal>
					<ScrollReveal direction="right" className="flex-1">
						<div className="relative shrink-0 size-[600px] rounded-[20px] overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-node-id="1:1536">
							<img
								src="http://localhost:3845/assets/02e93236dcb2200ffc9f7af2334ce470a332c1df.png"
								alt="Childhood connection"
								className="absolute h-[124.17%] left-[-10%] max-w-none top-[-17.5%] w-[135.17%] object-cover"
							/>
						</div>
					</ScrollReveal>
				</div>
			</section>

			{/* Section 3: Private Sector (White Background) */}
			<section className="w-full bg-white py-[60px] px-[30px] flex flex-col items-center gap-[60px]" data-node-id="1:1537">
				<ScrollReveal direction="up">
					<h3 className="text-[#0e5587] font-bold text-[52px] leading-[54px] tracking-[0.6271px] text-center" data-node-id="1:1538">
						De lo privado a lo social: mi camino hasta aquí
					</h3>
				</ScrollReveal>
				<div className="max-w-[1440px] w-full flex flex-col lg:flex-row gap-[30px] items-center justify-center" data-node-id="1:1539">
					<ScrollReveal direction="left" className="flex-1">
						<div className="relative shrink-0 size-[600px] rounded-[20px] overflow-hidden" data-node-id="1:1540">
							<img
								src="http://localhost:3845/assets/5c0c1f08b0a69bb8b8cf4cfdc89630366f0db3a0.png"
								alt="Private Sector"
								className="absolute h-[108.07%] left-[-19%] max-w-none top-[-7.83%] w-[133.29%] object-cover"
							/>
						</div>
					</ScrollReveal>
					<ScrollReveal direction="right" className="flex-1">
						<div className="flex flex-col gap-[30px] text-[#0e5587] max-w-[636px] italic" data-node-id="1:1541">
							<h4 className="font-bold text-[40px] leading-[40px]" data-node-id="1:1542">
								Comienzo en el sector privado
							</h4>
							<p className="font-medium text-[36px] leading-[40px]" data-node-id="1:1543">
								Me formé en el mundo corporativo, liderando análisis de datos y procesos, y trabajando en áreas de ventas con foco en objetivos. Allí aprendí sobre estructura, estrategia y la importancia de tener claro hacia dónde vamos.
							</p>
						</div>
					</ScrollReveal>
				</div>
			</section>

			{/* Section 4: Cooperation (Teal Background) */}
			<section className="w-full bg-[#0097b2] py-[60px] px-[30px] flex justify-center" data-node-id="1:1544">
				<div className="max-w-[1440px] w-full flex flex-col-reverse lg:flex-row gap-[30px] items-center justify-center">
					<ScrollReveal direction="left" className="flex-1">
						<div className="flex flex-col gap-[30px] text-white text-right max-w-[636px] italic" data-node-id="1:1545">
							<h4 className="font-bold text-[40px] leading-[40px]" data-node-id="1:1546">
								Primera experiencia en cooperación internacional
							</h4>
							<p className="font-medium text-[36px] leading-[40px]" data-node-id="1:1547">
								Entré al mundo social como coordinadora de monitoreo y cuentas en un proyecto multisectorial. Trabajé junto a socios e implementadores en terreno, aprendiendo de primera mano cómo se transforma una realidad en comunidad.
							</p>
						</div>
					</ScrollReveal>
					<ScrollReveal direction="right" className="flex-1">
						<div className="relative shrink-0 size-[600px] rounded-[20px] overflow-hidden" data-node-id="1:561">
							<img
								src="http://localhost:3845/assets/29d7716c1e4970897b0cd934161a7d88fd7c5959.png"
								alt="Cooperation Experience"
								className="absolute h-[129.33%] left-[-1.23%] max-w-none top-[-14.83%] w-[120.73%] object-cover"
							/>
						</div>
					</ScrollReveal>
				</div>
			</section>

			{/* Section 5: Fundraising (White Background) */}
			<section className="w-full bg-white py-[60px] px-[30px] flex justify-center" data-node-id="1:1549">
				<div className="max-w-[1440px] w-full flex flex-col lg:flex-row gap-[30px] items-center justify-center">
					<ScrollReveal direction="left" className="flex-1">
						<div className="relative shrink-0 size-[600px] rounded-[20px] overflow-hidden" data-node-id="1:1551">
							<img
								src="http://localhost:3845/assets/4d2c9fe366034def4266d26c4a8b1032cac345e0.png"
								alt="Fundraising"
								className="absolute h-full left-[-11.23%] max-w-none top-0 w-[121.04%] object-cover"
							/>
						</div>
					</ScrollReveal>
					<ScrollReveal direction="right" className="flex-1">
						<div className="flex flex-col gap-[30px] text-[#0e5587] max-w-[636px] italic" data-node-id="1:1552">
							<h4 className="font-bold text-[40px] leading-[40px]" data-node-id="1:1553">
								Desempeño en diseño y recaudación de fondos para proyectos sociales
							</h4>
							<p className="font-medium text-[36px] leading-[40px]" data-node-id="1:1554">
								Me especialicé en el diseño y desarrollo de proyectos sociales y estrategias de recaudación de fondos a través del rol de Desarrollo de Nuevos Negocios en una organización internacional. Esto me permitió conectar las necesidades de las organizaciones con oportunidades concretas de sostenibilidad.
							</p>
						</div>
					</ScrollReveal>
				</div>
			</section>

			{/* Section 6: Consultant (Teal Background) */}
			<section className="w-full bg-[#0097b2] py-[60px] px-[30px] flex justify-center" data-node-id="1:1555">
				<div className="max-w-[1440px] w-full flex flex-col-reverse lg:flex-row gap-[30px] items-center justify-center">
					<ScrollReveal direction="left" className="flex-1">
						<div className="flex flex-col gap-[30px] text-white text-right max-w-[636px] italic" data-node-id="1:1556">
							<h4 className="font-bold text-[40px] leading-[40px]" data-node-id="1:1557">
								Consultora internacional desde 2022
							</h4>
							<p className="font-medium text-[36px] leading-[40px]" data-node-id="1:1558">
								Desde 2022 he trabajado como consultora internacional. Comencé como coordinadora MERA en Polonia y hoy he acompañado procesos en más de 12 países en América Latina, África, Asia y Europa, siempre con el mismo propósito: <br />
								<span className="font-bold italic">potenciar organizaciones y personas con conocimiento que transforme.</span>
							</p>
						</div>
					</ScrollReveal>
					<ScrollReveal direction="right" className="flex-1">
						<div className="relative shrink-0 size-[600px] rounded-[20px] overflow-hidden" data-node-id="1:566">
							<img
								src="http://localhost:3845/assets/12eb8646f38edd213b903944293a13e8d1be335b.png"
								alt="Consultant"
								className="absolute h-[133.33%] left-0 max-w-none top-[-20.42%] w-full object-cover"
							/>
						</div>
					</ScrollReveal>
				</div>
			</section>

			{/* Section 7: ¿Que me define? (White Background) */}
			<section className="w-full bg-white py-[80px] px-6 md:px-[80px]" data-node-id="1:1560">
				<div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-center gap-[40px] md:gap-[100px]">

					{/* Title and Vertical Line */}
					<ScrollReveal direction="left">
						<div className="flex items-center gap-[40px]">
							<h2 className="text-[#0e5587] font-bold italic text-[52px] md:text-[72px] text-right leading-none max-w-[300px]" data-node-id="1:1561">
								¿Que me define?
							</h2>
							{/* Vertical Divider */}
							<div className="hidden md:block w-px h-[600px] bg-[#0e5587]/30" data-node-id="1:1564"></div>
						</div>
					</ScrollReveal>

					{/* Content List */}
					<div className="flex flex-col gap-0 items-start py-[50px] relative" data-name="Conten2" data-node-id="1:1565">
						{[
							{ text: "La estrategia con alma", id: "1:1575", connector: true },
							{ text: "La capacidad de traducir lo complejo en acciones claras", id: "1:1586", connector: true },
							{ text: "El acompañamiento humano y realista", id: "1:1597", connector: true },
							{ text: "La pasión por lo colectivo", id: "1:1607", connector: false }
						].map((item, i) => (
							<ScrollReveal key={i} direction="right" delay={i * 0.1}>
								<div className="flex gap-[31px] items-center relative" data-name="Solution">
									{/* Icon Column with Connectors */}
									<div className="flex flex-col items-center justify-center relative">
										{/* Top Line (except first) */}
										<div className={`w-px h-[20px] bg-[#0e5587] ${i === 0 ? 'opacity-0' : 'opacity-100'}`}></div>

										{/* Circle Icon */}
										<div className="bg-[#0e5587] p-[5px] rounded-full size-[140px] flex items-center justify-center" data-name="Circle">
											<div className="bg-white rounded-full p-[15px] size-full flex items-center justify-center">
												<div className="bg-[#0e5587] rounded-full size-full flex items-center justify-center">
													<div className="size-[48px] flex items-center justify-center">
														<img src="http://localhost:3845/assets/5146a8a412e3cdfb983b010e7ca09749afb8317f.svg" alt="check" className="w-full h-full" />
													</div>
												</div>
											</div>
										</div>

										{/* Bottom Line (except last) */}
										<div className={`w-px h-[20px] bg-[#0e5587] ${item.connector ? 'opacity-100' : 'opacity-0'}`}></div>
									</div>

									{/* Text Column */}
									<p className="text-[#0e5587] font-semibold text-[48px] leading-[40px] max-w-[636px]" data-node-id={item.id}>
										{item.text}
									</p>
								</div>
							</ScrollReveal>
						))}
					</div>
				</div>
			</section>

			{/* Section 8: Quote (Teal Background) */}
			<section className="w-full bg-[#0097b2] py-[140px] px-6 md:px-[80px] text-center text-white" data-node-id="1:1593">
				<ScrollReveal direction="up">
					<div className="max-w-[1240px] mx-auto flex flex-col gap-8">
						<h2 className="font-bold italic text-[64px] leading-tight" data-node-id="1:1594">
							No creo en el conocimiento inaccesible.
						</h2>
						<p className="text-[48px] font-medium italic leading-tight" data-node-id="1:1595">
							Creo que desde la teoría del cambio hasta una matriz de marco lógico, todo puede <span className="font-bold underline decoration-white decoration-4 underline-offset-[10px]">entenderse, adaptarse y aplicarse.</span> Cuando una organización y sus líderes comprenden lo que hacen, por qué lo hacen y cómo medirlo, el impacto se multiplica.
						</p>
					</div>
				</ScrollReveal>
			</section>

			{/* Section 9: Co-Humanidad (White Background) */}
			<section className="w-full bg-white py-[80px] px-6 md:px-[80px]">
				<div className="max-w-[1440px] mx-auto flex flex-col items-center gap-10">
					<ScrollReveal direction="up">
						<div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1200px] gap-8">
							<div className="text-[#0e5587]">
								<p className="font-medium italic text-[36px]">Más allá de las asesorías, fundé</p>
								<h2 className="font-bold text-[96px] leading-none my-2">Co-Humanidad</h2>
								<p className="font-medium italic text-[36px]">un espacio para crecer en colectivo.</p>
							</div>
							<Link href="https://chat.whatsapp.com/GisLhO7T9m64hKIs2U1mHh" target='_blank' className="bg-[#25d366] text-white font-bold text-[20px] px-8 py-4 rounded-[20px] shadow-lg hover:bg-[#20bd5a] transition-all flex items-center gap-3">
								<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
								Unirme a la comunidad
							</Link>
						</div>
					</ScrollReveal>

					<ScrollReveal direction="up" delay={0.2}>
						<p className="text-[#0e5587] font-medium italic text-[36px] text-center">
							Ya somos más de <span className="font-bold text-[40px]">1700 personas</span> compartiendo experiencias, aprendizajes y recursos para crecer con propósito.
						</p>
					</ScrollReveal>

					{/* Gallery Slider */}
					<ScrollReveal direction="up" delay={0.3}>
						<div className="w-full overflow-hidden py-10">
							<motion.div
								className="flex gap-[30px] whitespace-nowrap"
								animate={{
									x: [0, -1686], // Adjust based on total width of one set of images + gaps (3 * 532 + 3 * 30 = 1686)
								}}
								transition={{
									x: {
										repeat: Infinity,
										repeatType: "loop",
										duration: 30,
										ease: "linear",
									},
								}}
							>
								{[
									"/1.png", "/2.png", "/3.png",
									"/1.png", "/2.png", "/3.png",
									"/1.png", "/2.png", "/3.png"
								].map((src, i) => (
									<div key={i} className="min-w-[300px] md:min-w-[532px] h-[200px] md:h-[322px] rounded-[20px] overflow-hidden flex-shrink-0 relative shadow-md">
										<img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
									</div>
								))}
							</motion.div>
						</div>
					</ScrollReveal>

					{/* Section 9.5: Brújula de Impacto (Newsletter) */}
					<section className="w-full bg-white py-[100px] px-6 md:px-[80px]" data-node-id="1:1629">
						<div className="max-w-[1440px] mx-auto flex flex-col items-center gap-[40px]" data-node-id="1:1630">
							<ScrollReveal direction="left" className="w-full">
								<div className="w-full flex flex-col gap-[10px] items-start" data-node-id="1:1631">
									<p className="text-[#0e5587] font-medium italic text-[36px] leading-[40px]" data-node-id="1:1632">Después llegó</p>
									<div className="pl-4 md:pl-[37px] flex flex-col gap-[30px] w-full">
										<h2 className="text-[#0e5587] font-bold text-[64px] md:text-[96px] leading-tight tracking-[1.44px]" data-node-id="1:1634">
											Brújula de Impacto
										</h2>
										<p className="text-[#0e5587] font-medium italic text-[36px] leading-[40px] max-w-full" data-node-id="1:1635">
											Al ver cuánto <span className="font-bold">necesitábamos recursos claros y aplicables</span>, creé esta newsletter gratuita para que cada semana recibas herramientas, ideas y guías que te ayuden a avanzar con claridad y propósito en el sector social.
										</p>
									</div>
								</div>
							</ScrollReveal>

							{/* Subscription Input */}
							<ScrollReveal direction="up" delay={0.2} className="w-full">
								<div className="w-full flex justify-center mt-10" data-node-id="1:1636">
									<div className="bg-white border border-[#0e5587] rounded-[20px] shadow-lg flex items-center overflow-hidden w-full max-w-[923px] h-[72px]" data-node-id="1:1637">
										<input
											type="email"
											placeholder="Ingresa tu correo electrónico"
											className="flex-1 px-6 text-[16px] font-bold text-gray-400 outline-none"
											data-node-id="1:1638"
										/>
										<CtaButton
											type="button"
											className="h-full rounded-l-none"
											data-node-id="1:1639"
										>
											Quiero Suscribirme
										</CtaButton>
									</div>
								</div>
							</ScrollReveal>

							<ScrollReveal direction="right" delay={0.3} className="w-full">
								<div className="w-full text-right mt-10">
									<p className="text-[#0e5587] font-medium italic text-[36px] leading-[40px]" data-node-id="1:1641">¡Espero que te sirva!</p>
								</div>
							</ScrollReveal>
						</div>
					</section>

				</div>
			</section>

			{/* Section 10: Mission & Vision (2 Columns) */}
			<section className="w-full flex flex-col md:flex-row h-auto md:h-[620px]" data-node-id="1:1642">
				{/* Mission */}
				<ScrollReveal direction="left" className="w-full md:w-1/2">
					<div className="h-full bg-[#0e5587] p-8 md:p-[80px] flex flex-col justify-center items-center text-center text-white gap-10" data-node-id="1:1643">
						<h3 className="font-bold text-[52px] leading-none" data-node-id="1:1645">Mi Misión</h3>
						<p className="font-semibold italic text-[32px] leading-relaxed max-w-[676px]" data-node-id="1:1646">
							Acompañar a organizaciones sociales y a las personas que las lideran a través de consultoría y formaciones prácticas. Conecto estrategia con propósito, fortaleciendo sus procesos y potenciando el crecimiento profesional de sus equipos.
						</p>
					</div>
				</ScrollReveal>
				{/* Vision */}
				<ScrollReveal direction="right" className="w-full md:w-1/2">
					<div className="h-full bg-[#0097b2] p-8 md:p-[80px] flex flex-col justify-center items-center text-center text-white gap-10" data-node-id="1:1647">
						<h3 className="font-bold text-[52px] leading-none" data-node-id="1:1649">Mi Visión</h3>
						<p className="font-semibold italic text-[32px] leading-relaxed max-w-[676px]" data-node-id="1:1650">
							Ser una referente en Latinoamérica en liderazgo humanista y estratégico para el sector social, empoderando a organizaciones y personas con herramientas, propósito y dirección para transformar realidades con impacto y bienestar.
						</p>
					</div>
				</ScrollReveal>
			</section>

			{/* Section 11: Contact (White Background) */}
			<section className="w-full bg-white py-[120px] px-6 md:px-[80px]">
				<div className="max-w-[1440px] mx-auto flex flex-col items-center">
					<ScrollReveal direction="up">
						<h2 className="text-[#0e5587] font-bold text-[52px] text-center mb-16">
							¿Te acompaño en tu proceso?
						</h2>
					</ScrollReveal>

					<div className="flex flex-col lg:flex-row w-full justify-center gap-10 lg:gap-20 items-center lg:items-start">
						{/* Left Text */}
						<ScrollReveal direction="left" className="w-full lg:w-1/2">
							<div className="text-right text-[#0e5587] max-w-[600px] flex flex-col justify-center h-full pt-10">
								<p className="italic font-medium text-[54px] leading-tight">
									<span className="font-bold text-[72px]">Tu lucha importa,</span> <br />
									y yo estoy aquí para ayudarte a que sea aún más poderosa.
								</p>
							</div>
						</ScrollReveal>

						{/* Right Form */}
						<ScrollReveal direction="right" className="w-full lg:w-1/2">
							<form onSubmit={handleSubmit} className="w-full max-w-[580px] flex flex-col gap-[40px] px-[40px] py-[30px] rounded-[20px]" data-node-id="1:1657">
								{/* Name */}
								<div className="flex flex-col gap-[2px] w-full" data-node-id="1:1660">
									<label className="text-[#0e5587] font-bold text-[20px] leading-normal" data-node-id="1:1661">Nombre*</label>
									<div className="bg-white border border-[#0e5587] rounded-[20px] h-[72px] flex items-center px-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full relative overflow-hidden" data-name="InputText" data-node-id="1:1662">
										<input
											type="text"
											name="firstName"
											value={formData.firstName}
											onChange={handleChange}
											placeholder="Ingresa tu nombre"
											className="w-full h-full outline-none text-[#d1d0cf] placeholder:text-[#d1d0cf] text-[16px] font-bold bg-transparent"
											required
											data-node-id="1:1663"
										/>
									</div>
								</div>

								{/* Email */}
								<div className="flex flex-col gap-[2px] w-full" data-node-id="1:1665">
									<label className="text-[#0e5587] font-bold text-[20px] leading-normal" data-node-id="1:1666">Correo Electrónico*</label>
									<div className="bg-white border border-[#0e5587] rounded-[20px] h-[72px] flex items-center px-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full relative overflow-hidden" data-name="InputText" data-node-id="1:1667">
										<input
											type="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											placeholder="Ingresa tu correo electrónico"
											className="w-full h-full outline-none text-[#d1d0cf] placeholder:text-[#d1d0cf] text-[16px] font-bold bg-transparent"
											required
											data-node-id="1:1668"
										/>
									</div>
								</div>

								{/* Message */}
								<div className="flex flex-col gap-[2px] w-full" data-node-id="1:1669">
									<label className="text-[#0e5587] font-bold text-[20px] leading-normal" data-node-id="1:1670">En que te puedo ayudar?*</label>
									<div className="bg-white border border-[#0e5587] rounded-[20px] h-[158px] flex items-start p-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full relative overflow-hidden" data-name="InputText" data-node-id="1:1671">
										<textarea
											name="content"
											value={formData.content}
											onChange={handleChange}
											placeholder="Cuéntame sobre tu proyecto, organización o necesidades específicas..."
											className="w-full h-full outline-none text-[#d1d0cf] placeholder:text-[#d1d0cf] text-[16px] font-bold bg-transparent resize-none"
											required
											data-node-id="1:1672"
										/>
									</div>
								</div>

								{/* Submit Button */}
								<div className="w-full flex justify-center">
									<CtaButton
										type="submit"
										disabled={isSubmitting}
										className="w-full md:w-auto"
										data-name="BotonS"
										data-node-id="1:1673"
									>
										{isSubmitting ? 'Enviando...' : '!Quiero Contactarte!'}
									</CtaButton>
								</div>
							</form>
						</ScrollReveal>
					</div>
				</div>
			</section>

		</main>
	);
};

export default SobreMi;
