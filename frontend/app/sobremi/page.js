'use client';
import React from 'react';
import useLinkInterceptor from '@/hooks/useLinkInterceptor';
import { toast } from 'sonner';
import { API_BASE_URL } from '@/lib/api-config';

const SobreMi = () => {
	useLinkInterceptor();
	const [formData, setFormData] = React.useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		content: ''
	});
	const [isSubmitting, setIsSubmitting] = React.useState(false);

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
				setFormData({ firstName: '', lastName: '', email: '', phone: '', content: '' });
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
		<main className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="bg-gray-50 py-24 px-4 overflow-hidden">
				<div className="container mx-auto max-w-6xl">
					<div className="flex flex-col md:flex-row items-center gap-16">
						<div className="md:w-1/2 relative group">
							<div className="absolute -inset-4 bg-[#d9ae7d]/20 rounded-3xl -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
							<img
								src="/wp-content/uploads/2025/04/Captura-de-pantalla-2025-04-25-a-las-11.08.24 a.-m.png"
								alt="Keicy Cabrera"
								className="relative rounded-3xl shadow-2xl w-full"
							/>
						</div>
						<div className="md:w-1/2">
							<div className="flex items-center mb-6">
								<img src="/wp-content/uploads/2024/11/rombo-azul.webp" alt="" className="w-12 h-12 mr-4" />
								<h1 className="text-5xl font-bold text-[#184476]">Sobre mi</h1>
							</div>
							<h2 className="text-3xl font-bold text-gray-800 mb-8 leading-tight">
								¿Cuál fue mi camino para poder acompañarte en el tuyo?
							</h2>
							<div className="space-y-6 text-lg text-gray-700 leading-relaxed">
								<p>
									Soy Keicy Cabrera, Economista venezolana con una Maestría en Cooperación Internacional.
								</p>
								<p>
									Mi camino profesional comenzó en el <strong>sector privado</strong>, donde aprendí sobre procesos, datos y análisis. Pero fue al transitar hacia el sector social <strong>cuando encontré mi propósito: ayudar a quienes transforman realidades desde sus comunidades, a hacerlo con más claridad, estructura y estrategia.</strong>
								</p>
								<p>
									Desde entonces, he trabajado con organizaciones y profesionales en <strong>América Latina, África y Europa</strong>, apoyándolos a diseñar proyectos sólidos, medir su impacto y presentar su trabajo con confianza ante donantes, aliados y comunidades.
								</p>
								<p>
									<strong>Combino lo técnico con lo humano</strong>: sistemas MERA, propuestas para financiamiento, formación de equipos… pero también <strong>conversaciones honestas sobre lo que duele, lo que bloquea y lo que sueña cada organización.</strong>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Philosophy Section */}
			<section className="py-24 px-4 bg-white">
				<div className="container mx-auto max-w-4xl text-center">
					<h2 className="text-3xl font-bold text-[#184476] mb-8">Creo profundamente en...</h2>
					<p className="text-2xl text-gray-700 italic leading-relaxed mb-12">
						"Cuando una organización tiene claridad estratégica, puede transformar comunidades. Y cuando las personas dentro de ella crecen, esa transformación se multiplica."
					</p>
					<p className="text-lg text-gray-600">
						Por eso creé también <strong>Co-Humanidad</strong>, un espacio para compartir, aprender y crecer en colectivo. Porque tu trabajo importa. Y mi trabajo es ayudarte a que lo hagas con dirección, con propósito y con resultados que puedas sostener.
					</p>
				</div>
			</section>

			{/* Purpose, Mission, Vision */}
			<section className="py-24 bg-gray-50 px-4">
				<div className="container mx-auto max-w-6xl">
					<div className="grid md:grid-cols-3 gap-12">
						<div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform">
							<div className="text-[#184476] mb-6">
								<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
							</div>
							<h3 className="text-2xl font-bold text-[#184476] mb-4">Propósito</h3>
							<p className="text-gray-600">
								Guío a personas y organizaciones que trabajan por un mundo mejor para que encuentren <strong>dirección, fortaleza y propósito en su camino.</strong>
							</p>
						</div>
						<div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform">
							<div className="text-[#184476] mb-6">
								<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
							</div>
							<h3 className="text-2xl font-bold text-[#184476] mb-4">Misión</h3>
							<p className="text-gray-600">
								Acompañar a organizaciones sociales y a las personas que las lideran a través de consultoría y formaciones prácticas. Conecto <strong>estrategia con propósito</strong>, fortaleciendo sus procesos y potenciando el crecimiento profesional de sus equipos.
							</p>
						</div>
						<div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform">
							<div className="text-[#184476] mb-6">
								<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
							</div>
							<h3 className="text-2xl font-bold text-[#184476] mb-4">Visión</h3>
							<p className="text-gray-600">
								Ser una referente en Latinoamérica en <strong>liderazgo humanista y estratégico para el sector social</strong>, empoderando a organizaciones y personas con herramientas, propósito y dirección para transformar realidades con impacto y bienestar.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contacto" className="py-24 px-4 bg-white">
				<div className="container mx-auto max-w-5xl">
					<div className="bg-[#184476] rounded-[3rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden">
						<div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
							<div>
								<h2 className="text-4xl font-bold mb-8">¿Quieres que te apoye?</h2>
								<p className="text-xl opacity-90 mb-8">
									<strong>Contáctame ahora</strong> y descubre cómo podemos transformar ideas en acción.
								</p>
								<div className="space-y-4">
									<div className="flex items-center">
										<svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
										<span>info@keicycabrera.com</span>
									</div>
									<div className="flex items-center">
										<svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
										<span>+58 (412) 565-3886</span>
									</div>
								</div>
							</div>
							<div className="bg-white p-8 rounded-3xl text-gray-800 shadow-xl">
								<form className="space-y-6" onSubmit={handleSubmit}>
									<div className="grid grid-cols-2 gap-4">
										<input
											name="firstName"
											type="text"
											placeholder="Nombre"
											className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#184476]"
											value={formData.firstName}
											onChange={handleChange}
											required
										/>
										<input
											name="lastName"
											type="text"
											placeholder="Apellido"
											className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#184476]"
											value={formData.lastName}
											onChange={handleChange}
											required
										/>
									</div>
									<input
										name="email"
										type="email"
										placeholder="Correo electrónico"
										className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#184476]"
										value={formData.email}
										onChange={handleChange}
										required
									/>
									<input
										name="phone"
										type="tel"
										placeholder="Teléfono"
										className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#184476]"
										value={formData.phone}
										onChange={handleChange}
										required
									/>
									<textarea
										name="content"
										placeholder="¿Cómo crees que puedo ayudarte a avanzar en tu misión?"
										rows={4}
										className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#184476]"
										value={formData.content}
										onChange={handleChange}
										required
									></textarea>
									<button
										type="submit"
										className="w-full !bg-[#184476] !text-white py-4 rounded-xl font-bold shadow-lg !hover:bg-[#184476] transition-none disabled:opacity-50"
										disabled={isSubmitting}
									>
										{isSubmitting ? 'Enviando...' : 'Enviar'}
									</button>
								</form>
							</div>
						</div>
						{/* Decoration */}
						<div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
						<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default SobreMi;
