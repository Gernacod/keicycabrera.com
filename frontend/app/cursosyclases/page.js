'use client';
import React, { useState } from 'react';
import useLinkInterceptor from '@/hooks/useLinkInterceptor';
import Link from 'next/link';
import FlipBox from '@/components/FlipBox';

const classes = [
	{
		id: 1,
		title: "Más impacto, menos caos: MERA y Excel para la Gestión de Proyectos Sociales.",
		price: "150.00",
		image: "/wp-content/uploads/2025/04/Captura-de-pantalla-2025-04-14-a-las-2.21.47%e2%80%afp.-m-300x300.png",
		link: "/product/merayexcel"
	},
	{
		id: 2,
		title: "Curso Online - Sube de Nivel en el Sector Social (solo para COMUNIDAD)",
		price: "20.00",
		image: "/wp-content/uploads/2024/11/11.webp",
		link: "/product/subedenivelcomunidad"
	},
	{
		id: 3,
		title: "Clase en Línea - Redacción de Reportes para Proyectos Sociales",
		price: "40.00",
		image: "/wp-content/uploads/2024/10/2-300x300.png",
		link: "/product/clasereportes"
	},
	{
		id: 4,
		title: "Clase en Línea - Metodologías Ágiles Para la Gestión de Proyectos Sociales",
		price: "15.00",
		image: "/wp-content/uploads/2024/10/1-300x300.png",
		link: "/product/metodologiasagiles"
	},
	{
		id: 5,
		title: "Clase en Línea - Introducción a sistemas de Monitoreo, Evaluación, Rendición de Cuentas y Aprendizaje (MERA)",
		price: "30.00",
		image: "/wp-content/uploads/2024/10/3-300x300.png",
		link: "/product/mera"
	},
	{
		id: 6,
		title: "Sesión de Asesoría Individual ☕️",
		price: "90.00",
		image: "/wp-content/uploads/2024/03/7-300x300.png",
		link: "/product/asesoriaindividual"
	}
];

const courses = [
	{
		id: 1,
		title: "Curso de Diseño de Proyectos Sociales",
		price: "50.00",
		duration: "8 horas",
		level: "Principiante",
		students: "14",
		image: "/wp-content/uploads/elementor/thumbs/IMG_1192-scaled-qrzddz1mdvue4yeedadtksqnayxb6oeli8ql5lzm3k.jpg",
		link: "/cursos/diseno",
		category: "Diseño de Proyectos"
	},
	{
		id: 2,
		title: "Recaudación de Fondos para Proyectos Sociales",
		price: "30.00",
		duration: "3 horas",
		level: "Principiante",
		students: "1",
		image: "/wp-content/uploads/elementor/thumbs/IMG_1227-scaled-qrzdpbxeyte4fbwh1p4j7fk5pkxz70hu2giswz5cww.jpg",
		link: "/cursos/recaudaciondefondos",
		category: "Recaudación de Fondos"
	},
	{
		id: 3,
		title: "Introducción a la Gestión Basada en Resultados",
		price: "20.00",
		duration: "N/A",
		level: "Intermedio",
		students: "1",
		image: "/wp-content/uploads/elementor/thumbs/IMG_1234-scaled-qrzdrf4i5k9284v8ulmoqwl18encassd0spnb41v34.jpg",
		link: "/cursos/gbr",
		category: "Planificación"
	},
	{
		id: 4,
		title: "Sube de Nivel en el Sector Humanitario y de Desarrollo",
		price: "20.00",
		duration: "3 horas",
		level: "Principiante",
		students: "44",
		rating: "5.00",
		reviews: "4",
		image: "/wp-content/uploads/elementor/thumbs/IMG_4513-scaled-qrzem0rcne5474f25ttfx6l9fztiw29rw9apreogio.jpg",
		link: "/cursos/subedenivel",
		category: "Desarrollo Profesional"
	}
];

const testimonials = [
	{
		id: 1,
		name: "Laura Navarro",
		job: "Clase de MERA - Agosto 2024",
		text: "Me encantó la clase. Fueron 3 horas de muchísima información, y cada ejemplo le dio muchísimo más valor a todo el contenido. Me gustan las explicaciones sencillas y que todo esté tan bien documentado con bibliografía confiable, así como todas las herramientas que hacen el trabajo un poco más sencillo. Agradezco contar con tu ayuda en este camino.",
		rating: 5
	},
	{
		id: 2,
		name: "Oriana Venti",
		job: "Participante de Escala tu Impacto Social - Julio a Octubre 2024",
		text: "Me encanto mucho la personalidad de Keicy, siento que a veces en las formaciones online se pierde mucho la calidez y la humanidad en el trato y se sintió muy bien abrir espacio para compartir nuestras experiencias y cómo podemos mejorar cada día más!!",
		rating: 5
	},
	{
		id: 3,
		name: "Heleana Patiño",
		job: "Participante de Escala tu Impacto Social - Julio a Octubre 2024",
		text: "Amé la formación y la cantidad de perspectivas que me han permitido ampliar la mía, a razón de seguir mejorando en la forma de servir en mi profesión. Además, durante este tiempo de la formación sentí cercanía y calidez con los participantes a pesar de la virtualidad de las sesiones.",
		rating: 5
	},
	{
		id: 4,
		name: "Liliana Pertuz",
		job: "Participante de Escala tu Impacto Social - Julio a Octubre 2024",
		text: "Me gustó mucho la innovación, la sencillez de explicar procesos difíciles y hacerlos más intuitivos. Me encantó el liderazgo y como Keicy impartió cada tema, lo involucrada que estaba en nuestro crecimiento y que se entendiera todo.",
		rating: 5
	},
	{
		id: 5,
		name: "Participante de ASONACOP",
		job: "Enero 2024",
		text: "Particularmente me ha gustado la estructura que le das a cada formación, haciéndola dinámica y participativa, permitiendo asimilar el contenido, que además dominas a la perfección, pero de una forma tal que le permite a los participantes avanzar y consolidar los conocimientos. Muchas gracias.",
		rating: 5
	}
];

const faqs = [
	{
		question: "¿Qué diferencia una clase de un curso?",
		answer: "En las clases, recibes en 2 a 3 horas información clave que debes conocer sobre la temática cubierta, mientras que en los cursos profundizamos sobre cada uno de estos aspectos."
	},
	{
		question: "¿Qué temáticas se cubren?",
		answer: "Trabajamos desde el desarrollo de habilidades blandas (como gestión del tiempo, metodologías ágiles, entre otros), hasta especializadas, como Monitoreo, Evaluación, Rendición de Cuentas y Aprendizaje (MERA), Diseño de Proyectos, Recaudación de Fondos, entre otros. De manera transversal, trabajamos la integración de herramientas digitales, como la Inteligencia Artificial."
	},
	{
		question: "¿Cuál es la duración?",
		answer: "Dependerá de la clase, sin embargo, en promedio las clases son de 3 horas. Mientras que los cursos son a partir de 3 horas, pueden llegar a ser de 8 a 12 horas, dividido en diferentes clases."
	},
	{
		question: "¿Qué nivel de experiencia requiero?",
		answer: "Las clases y cursos están diseñados de manera de que independientemente de tu nivel de experiencia puedas comprender lo enseñado."
	},
	{
		question: "¿Recibo certificado?",
		answer: "Sí, recibirás un certificado al finalizar tu formación para demostrar tus conocimientos."
	},
	{
		question: "¿Qué nivel de apoyo recibo?",
		answer: "El nivel de apoyo dependerá del curso o la clase a la que accedas, sin embargo, puedes hacerme llegar tus dudas a través de los comentarios."
	},
	{
		question: "¿Cómo me inscribo?",
		answer: "Debes seleccionar la opción 'añadir a carrito' y seguir los pasos para poder inscribirte, recibirás todas las indicaciones por correo."
	},
	{
		question: "¿Hay descuentos para grupos?",
		answer: "Sí, hay descuentos para grupos a partir de 5 personas, puedes llenar el formulario abajo para hacer tu solicitud."
	}
];

const CursosYClases = () => {
	useLinkInterceptor();
	const [openFaq, setOpenFaq] = useState(null);

	const toggleFaq = (index) => {
		setOpenFaq(openFaq === index ? null : index);
	};

	return (
		<main className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative bg-[#184476] py-24 px-4 overflow-hidden">
				<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
				<div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0A4368] rounded-full -ml-32 -mb-32 blur-3xl"></div>

				<div className="container mx-auto max-w-6xl relative z-10 flex flex-col items-center text-center">
					<img
						src="/wp-content/uploads/2024/11/rombo-azul.webp"
						alt="Icon"
						className="w-16 h-16 mb-8 animate-pulse brightness-0 invert"
					/>
					<h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
						Cursos y clases
					</h1>
					<div className="w-24 h-1 bg-[#d6c072] rounded-full"></div>
				</div>
			</section>

			{/* Introduction */}
			<section className="py-20 px-4">
				<div className="container mx-auto max-w-4xl text-center">
					<h2 className="text-2xl md:text-3xl font-bold text-[#184476] italic mb-8 leading-relaxed">
						"Formaciones prácticas para profesionales que trabajan por el cambio social."
					</h2>
					<div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
						<p>
							Diseñadas para que lo que aprendes puedas aplicarlo al día siguiente.
							Porque el conocimiento no sirve si no se convierte en acción.
						</p>
						<p className="font-semibold text-gray-900">
							Cada curso que diseño parte de una idea simple: <br />
							No basta con formar a las organizaciones. <br />
							También hay que formar a las personas que las construyen día a día.
						</p>
					</div>
				</div>
			</section>

			{/* Features - Todos incluyen */}
			<section className="py-24 bg-gray-50 px-4">
				<div className="container mx-auto max-w-7xl">
					<h2 className="text-3xl md:text-4xl font-bold text-[#184476] text-center mb-16 uppercase tracking-wider">
						Todos incluyen:
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<FlipBox
							icon="far fa-address-card"
							frontTitle="Certificado de Formación"
							frontDescription="Al finalizar, recibe una validación oficial de tus nuevas competencias."
							backDescription="Cada curso incluye un certificado que valida tus habilidades y conocimientos adquiridos, lo que te permitirá destacar en el mercado laboral."
							link="#"
						/>
						<FlipBox
							icon="fas fa-book"
							frontTitle="Material de Apoyo"
							frontDescription="Guías, plantillas y recursos adicionales para tu aprendizaje."
							backDescription="Recursos adicionales para complementar tu aprendizaje y mejorar tu comprensión de los temas tratados."
							link="#"
						/>
						<FlipBox
							icon="fas fa-infinity"
							frontTitle="Acceso ilimitado"
							frontDescription="Revisa el contenido siempre que lo necesites, sin límites de tiempo."
							backDescription="Flexibilidad para acceder al contenido y revisarlo en cualquier momento, adaptándose a tu agenda y ritmo de vida."
							link="#"
						/>
						<FlipBox
							icon="fas fa-clock"
							frontTitle="Flexibilidad"
							frontDescription="Estudia a tu propio ritmo, desde cualquier lugar."
							backDescription="Estudia a tu ritmo con contenidos accesibles las 24 horas del día, adaptados a tus necesidades y estilo de aprendizaje."
							link="#"
						/>
					</div>
				</div>
			</section>

			{/* Image Marquee - Workshop Photos */}
			<section className="py-20 bg-white overflow-hidden">
				<div className="flex animate-marquee whitespace-nowrap">
					{[
						'10-qwjw6ffrhxcc3neog0pa176s66o144h6frw74hvywk.webp',
						'11-qwjw6dk3499rgfheqzw0w7nuzexaoq9pril85xyr90.webp',
						'12-qwjw6ehxb3b1s1g1liangpfbkssnwfdg3n8pn7xd2s.webp',
						'13-qwjw6boeql76t7k51z2rr84xsn6k9c2939a97e1jlg.webp',
						'2-qwjw6k4yg3irpp7uokqevo03540v6lzu4f5mivp01g.webp',
						'3-qwjw6cm8xf8h4tirwhhebpwee11xh15zfdxqoo05f8.webp',
						'4-qwjw6i9a2fg72hakzjx5qoh5yca4r7sdg5unkbrsdw.webp',
						'5-qwjw6hbfvlewqvby51ij66ppcyerjion417631t6k4.webp'
					].concat([
						'10-qwjw6ffrhxcc3neog0pa176s66o144h6frw74hvywk.webp',
						'11-qwjw6dk3499rgfheqzw0w7nuzexaoq9pril85xyr90.webp',
						'12-qwjw6ehxb3b1s1g1liangpfbkssnwfdg3n8pn7xd2s.webp',
						'13-qwjw6boeql76t7k51z2rr84xsn6k9c2939a97e1jlg.webp',
						'2-qwjw6k4yg3irpp7uokqevo03540v6lzu4f5mivp01g.webp',
						'3-qwjw6cm8xf8h4tirwhhebpwee11xh15zfdxqoo05f8.webp'
					]).map((fileName, i) => (
						<div key={i} className="mx-4 flex-shrink-0 w-80 md:w-[450px] h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
							<img
								src={`/wp-content/uploads/elementor/thumbs/${fileName}`}
								alt="Workshop"
								className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
							/>
						</div>
					))}
				</div>
			</section>

			{/* Classes Section */}
			<section className="py-24 px-4 bg-white">
				<div className="container mx-auto max-w-7xl">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
							Clases <span className="text-[#184476] relative inline-block">
								<span className="relative z-10">para aprendizaje rápido</span>
								<svg className="absolute -bottom-2 left-0 w-full h-8 z-0 opacity-80" viewBox="0 0 500 150" preserveAspectRatio="none">
									<path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9" fill="none" stroke="#d6c072" strokeWidth="15" strokeLinecap="round" />
								</svg>
							</span>
						</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
						{classes.map((cls) => (
							<div key={cls.id} className="group flex flex-col items-center text-center p-8 rounded-3xl border border-gray-100 bg-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
								<div className="w-full aspect-square mb-6 rounded-2xl overflow-hidden shadow-inner bg-gray-50">
									<img src={cls.image} alt={cls.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 h-14">
									{cls.title}
								</h3>
								<p className="text-2xl font-black text-[#184476] mb-8">
									${cls.price}
								</p>
								<Link href={cls.link} className="inline-block w-full py-4 px-8 bg-[#184476] text-white font-bold rounded-full hover:bg-[#0A4368] transition-colors shadow-lg shadow-gray-300">
									Ver más
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Courses Section */}
			<section className="py-24 px-4 bg-gray-50">
				<div className="container mx-auto max-w-7xl">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
							Cursos ya disponibles <span className="text-[#184476] relative inline-block">
								<span className="relative z-10">para profundizar</span>
								<svg className="absolute -bottom-2 left-0 w-full h-8 z-0 opacity-80" viewBox="0 0 500 150" preserveAspectRatio="none">
									<path d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9" fill="none" stroke="#d6c072" strokeWidth="15" strokeLinecap="round" />
								</svg>
							</span>
						</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{courses.map((course) => (
							<div key={course.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all">
								<div className="aspect-[16/9] relative overflow-hidden">
									<img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
									<div className="absolute top-4 left-4 whitespace-nowrap px-3 py-1 bg-[#184476] text-white text-xs font-bold rounded-full">
										{course.level}
									</div>
								</div>
								<div className="p-6 flex flex-col flex-grow">
									<div className="flex items-center gap-1 mb-3 text-[#d6c072]">
										{[...Array(5)].map((_, i) => (
											<i key={i} className={`fas fa-star ${course.rating >= i + 1 ? 'block' : 'hidden'}`}></i>
										))}
										{course.rating && <span className="text-gray-500 text-sm ml-1">({course.reviews})</span>}
									</div>
									<h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2 min-h-[3.5rem]">
										{course.title}
									</h3>
									<div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
										<span className="flex items-center gap-1">
											<i className="far fa-user"></i> {course.students}
										</span>
										<span className="flex items-center gap-1">
											<i className="far fa-clock"></i> {course.duration}
										</span>
									</div>
									<div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
										<span className="text-xl font-black text-gray-900 underline decoration-[#d6c072] underline-offset-4">
											${course.price}
										</span>
										<Link href={course.link} className="text-[#184476] font-bold hover:translate-x-1 transition-transform inline-flex items-center gap-2">
											Ver más <i className="fas fa-arrow-right text-xs"></i>
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="py-24 px-4 bg-white">
				<div className="container mx-auto max-w-5xl">
					<div className="relative pt-16 group">
						<div className="overflow-hidden rounded-[3rem]">
							<div className="flex animate-scroll transition-transform">
								{testimonials.map((t) => (
									<div key={t.id} className="w-full flex-shrink-0 px-4">
										<div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 pt-16 md:pt-24 text-center relative border border-gray-100 shadow-sm">
											<div className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#184476] rounded-full flex items-center justify-center text-white shadow-xl z-20">
												<i className="fas fa-quote-left text-2xl"></i>
											</div>
											<div className="flex justify-center gap-2 mb-8 text-[#d6c072]">
												{[...Array(t.rating)].map((_, i) => (
													<i key={i} className="fas fa-star text-2xl"></i>
												))}
											</div>
											<p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-10">
												"{t.text}"
											</p>
											<div className="flex flex-col items-center">
												<h4 className="text-xl font-bold text-gray-900 mb-1">{t.name}</h4>
												<span className="text-[#184476] font-medium">{t.job}</span>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Custom Pagination Dots */}
						<div className="flex justify-center gap-3 mt-12">
							{testimonials.map((_, i) => (
								<div
									key={i}
									className={`h-3 rounded-full transition-all duration-300 ${i === 0 ? 'w-8 bg-[#184476]' : 'w-3 bg-gray-200'
										} !border-none !outline-none`}
								></div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* FAQs */}
			<section className="py-24 px-4 bg-gray-50">
				<div className="container mx-auto max-w-4xl">
					<h2 className="text-3xl md:text-4xl font-black text-[#184476] text-center mb-16 uppercase italic">
						Preguntas Frecuentes (FAQs)
					</h2>
					<div className="space-y-4">
						{faqs.map((faq, i) => (
							<div
								key={i}
								className={`rounded-2xl transition-all duration-300 overflow-hidden border ${openFaq === i
									? 'bg-[#184476] border-[#184476] shadow-xl ring-1 ring-[#184476]/20 faq-active'
									: 'bg-white border-gray-100 shadow-sm hover:shadow-md'
									}`}
							>
								<button
									onClick={() => toggleFaq(i)}
									className={`w-full px-8 py-6 flex items-center justify-between text-left transition-all duration-300 ${openFaq === i ? 'text-white' : 'text-[#184476]'
										}`}
								>
									<span className={`text-lg font-bold ${openFaq === i ? '!text-white' : ''}`}>{faq.question}</span>
									<div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === i ? 'bg-white/10 text-white rotate-180' : 'bg-gray-50 text-gray-400'
										}`}>
										<i className="fas fa-chevron-down text-sm"></i>
									</div>
								</button>
								<div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
									<div className="px-8 pb-8 leading-relaxed italic pt-2 text-blue-50">
										{faq.answer}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-24 px-4 bg-white relative overflow-hidden">
				<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#184476]/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>

				<div className="container mx-auto max-w-6xl relative z-10">
					<div className="flex flex-col lg:flex-row gap-16 items-center">
						<div className="w-full lg:w-1/2">
							<h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
								¿Listo para impulsar <br /> <span className="text-[#184476]">tus proyectos sociales?</span>
							</h2>
							<p className="text-xl text-gray-600 mb-12 italic leading-relaxed">
								Escríbeme y conversamos sobre cómo puedo apoyarte a ti o tu organización.
							</p>
							<div className="hidden lg:grid grid-cols-2 gap-8">
								<div className="p-6 bg-gray-50 rounded-2xl">
									<i className="fas fa-envelope text-2xl text-[#184476] mb-4"></i>
									<h4 className="font-bold text-gray-900 mb-2">Escríbeme</h4>
									<p className="text-gray-600 text-sm">info@keicycabrera.com</p>
								</div>
								<div className="p-6 bg-gray-50 rounded-2xl">
									<i className="fas fa-phone-alt text-2xl text-[#184476] mb-4"></i>
									<h4 className="font-bold text-gray-900 mb-2">Llamame</h4>
									<p className="text-gray-600 text-sm">+58 (412) 565-3886</p>
								</div>
							</div>
						</div>

						<div className="w-full lg:w-1/2">
							<div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100">
								<form className="space-y-6">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div className="space-y-2">
											<label className="text-sm font-bold text-gray-700 ml-4">Nombre *</label>
											<input type="text" placeholder="Tu nombre" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#184476] transition-all" required />
										</div>
										<div className="space-y-2">
											<label className="text-sm font-bold text-gray-700 ml-4">Apellido *</label>
											<input type="text" placeholder="Tu apellido" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#184476] transition-all" required />
										</div>
									</div>
									<div className="space-y-2">
										<label className="text-sm font-bold text-gray-700 ml-4">Correo electrónico *</label>
										<input type="email" placeholder="email@ejemplo.com" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#184476] transition-all" required />
									</div>
									<div className="space-y-2">
										<label className="text-sm font-bold text-gray-700 ml-4">Teléfono *</label>
										<input type="tel" placeholder="+58 ..." className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#184476] transition-all" required />
									</div>
									<div className="space-y-2">
										<label className="text-sm font-bold text-gray-700 ml-4">¿Cómo puedo ayudarte? *</label>
										<textarea rows="4" placeholder="Cuéntame sobre tu proyecto..." className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#184476] transition-all" required></textarea>
									</div>
									<button type="submit" className="btn-premium w-full mt-4">
										Enviar mensaje <i className="fas fa-paper-plane"></i>
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Global CSS for animations */}
			<style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          20% { transform: translateX(0); }
          25% { transform: translateX(-100%); }
          45% { transform: translateX(-100%); }
          50% { transform: translateX(-200%); }
          70% { transform: translateX(-200%); }
          75% { transform: translateX(-300%); }
          95% { transform: translateX(-300%); }
          100% { transform: translateX(-400%); }
        }
        .animate-scroll {
          animation: scroll 25s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
		</main>
	);
};

export default CursosYClases;
