'use client';
import React, { useState } from 'react';
import useLinkInterceptor from '@/hooks/useLinkInterceptor';
import Link from 'next/link';
import FlipBox from '@/components/FlipBox';

const classes = [
	{
		id: 1,
		title: "Más impacto, menos caos: MERA y Excel para la Gestión de Proyectos Sociales.",
		modalidad: "Presencial",
		description: "Un programa práctico con clases en vivo para aprender a diseñar y evaluar proyectos sociales, hacer seguimiento de indicadores y analizar datos en Excel, con acceso a plantillas, guías y recursos exclusivos.",
		image: "/wp-content/uploads/2025/04/Captura-de-pantalla-2025-04-14-a-las-2.21.47%e2%80%afp.-m-300x300.png",
		link: "/product/merayexcel"
	},
	{
		id: 2,
		title: "Sube de Nivel en el Sector Social (solo para COMUNIDAD)",
		modalidad: "Online",
		description: "Un curso práctico para entender el sector social y potenciar tu empleabilidad con estrategias claras, herramientas digitales e inteligencia artificial.",
		image: "/wp-content/uploads/2024/11/11.webp",
		link: "/product/subedenivelcomunidad"
	},
	{
		id: 3,
		title: "Redacción de Reportes para Proyectos Sociales",
		modalidad: "Online",
		description: "Aprende a crear reportes claros y de alto impacto, adaptados a distintos públicos, usando storytelling, herramientas digitales y trabajo colaborativo.",
		image: "/wp-content/uploads/2024/10/2-300x300.png",
		link: "/product/clasereportes"
	},
	{
		id: 4,
		title: "Metodologías Ágiles Para la Gestión de Proyectos Sociales",
		modalidad: "Online",
		description: "Una clase en línea donde aprenderás a aplicar metodologías ágiles en proyectos sociales, usando herramientas prácticas y ejemplos reales para mejorar la planificación, ejecución y el impacto de tu trabajo.",
		image: "/wp-content/uploads/2024/10/1-300x300.png",
		link: "/product/metodologiasagiles"
	},
	{
		id: 5,
		title: "Introducción a sistemas de Monitoreo, Evaluación, Rendición de Cuentas y Aprendizaje (MERA)",
		modalidad: "Online",
		description: "Una clase en línea donde aprenderás a aplicar metodologías ágiles en proyectos sociales, usando herramientas prácticas y ejemplos reales para mejorar la planificación, ejecución y el impacto de tu trabajo.",
		image: "/wp-content/uploads/2024/10/3-300x300.png",
		link: "/product/mera"
	},
	{
		id: 6,
		title: "Sesión de Asesoría Individual ☕️",
		modalidad: "Online",
		description: "Una clase en línea donde aprenderás a aplicar metodologías ágiles en proyectos sociales, usando herramientas prácticas y ejemplos reales para mejorar la planificación, ejecución y el impacto de tu trabajo.",
		image: "/wp-content/uploads/2024/03/7-300x300.png",
		link: "/product/asesoriaindividual"
	}
];

const courses = [
	{
		id: 1,
		title: "Diseño de proyectos sociales",
		price: "50.00",
		duration: "8h total",
		modules: "21 módulos",
		level: "Principiante",
		students: "14",
		rating: 4.9,
		reviews: "15",
		image: "/wp-content/uploads/elementor/thumbs/IMG_1192-scaled-qrzddz1mdvue4yeedadtksqnayxb6oeli8ql5lzm3k.jpg",
		link: "/cursos/diseno",
		category: "Diseño de Proyectos"
	},
	{
		id: 2,
		title: "Recaudación de fondos para redes sociales",
		price: "30.00",
		duration: "3h total",
		modules: "2 módulos",
		level: "Principiante",
		students: "5",
		rating: 5.0,
		reviews: "8",
		image: "/wp-content/uploads/elementor/thumbs/IMG_1227-scaled-qrzdpbxeyte4fbwh1p4j7fk5pkxz70hu2giswz5cww.jpg",
		link: "/cursos/recaudaciondefondos",
		category: "Recaudación de Fondos"
	},
	{
		id: 3,
		title: "Introducción a la gestión basada en resultados",
		price: "20.00",
		duration: "1h total",
		modules: "1 módulo",
		level: "Intermedio",
		students: "12",
		rating: 4.9,
		reviews: "6",
		image: "/wp-content/uploads/elementor/thumbs/IMG_1234-scaled-qrzdrf4i5k9284v8ulmoqwl18encassd0spnb41v34.jpg",
		link: "/cursos/gbr",
		category: "Planificación"
	},
	{
		id: 4,
		title: "Sube de Nivel en el Sector Humanitario y de Desarrollo",
		price: "20.00",
		duration: "3h total",
		modules: "5 módulos",
		level: "Principiante",
		students: "44",
		rating: 5.0,
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
			<section
				className="relative min-h-[862px] flex items-center justify-center p-[30px] overflow-hidden"
				style={{
					backgroundImage: "linear-gradient(183.95deg, rgb(255, 255, 255) 79.31%, #008299 84.9%)"
				}}
			>
				<div className="container mx-auto max-w-7xl relative z-10 flex flex-col lg:flex-row items-center gap-12">
					<div className="flex-1 flex flex-col gap-10 items-start justify-center">
						<div className="flex flex-col font-bold italic text-[52px] text-[#0e5587] tracking-[0.78px] leading-[1.1] font-['Red_Hat_Display',sans-serif]">
							<p className="whitespace-pre-wrap">Clases y cursos pensados para convertir el conocimiento en acción desde el primer día.</p>
						</div>
						<div className="flex flex-col font-bold italic text-[52px] text-[#0e5587] text-right tracking-[0.78px] leading-[1.1] w-full font-['Red_Hat_Display',sans-serif]">
							<p className="whitespace-pre-wrap">Formaciones prácticas para quienes trabajan por un mundo más justo.</p>
						</div>
						<div className="flex justify-end w-full px-[50px]">
							<button className="bg-[#0e5587] h-[64px] flex items-center justify-center px-[40px] py-[16px] rounded-[20px] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)] text-white font-bold text-[20px] hover:scale-105 transition-transform">
								Conoce más
							</button>
						</div>
					</div>
					<div className="hidden lg:flex flex-1 items-end justify-center px-10 py-12">
						<div className="relative w-[540px] h-[730px] rounded-[20px] overflow-hidden border border-white/20 shadow-2xl">
							<img
								src="/wp-content/uploads/2024/02/IMG_5661-scaled-qrzddveqog6of1izvbt9unv0h62p9q79j3atfks7tc.jpg"
								alt="Keicy Cabrera"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Quote Section */}
			<section className="bg-[#008299] py-16 px-8 flex items-center justify-center">
				<div className="container mx-auto max-w-6xl text-center">
					<h2 className="text-white font-bold italic text-4xl md:text-[64px] leading-tight tracking-[0.96px] font-['Red_Hat_Display',sans-serif]">
						“Porque el cambio real comienza en las personas que lo hacen posible cada día.”
					</h2>
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
			<section className="py-[60px] px-8 bg-white">
				<div className="container mx-auto max-w-7xl">
					<div className="text-center mb-16">
						<h2 className="text-[52px] font-bold text-[#0e5587] mb-4 font-['Red_Hat_Display',sans-serif]">
							Nuestras clases
						</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
						{classes.map((cls) => (
							<div key={cls.id} className="bg-white rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all">
								<div className="h-[285px] relative">
									<img src={cls.image} alt={cls.title} className="w-full h-full object-cover" />
								</div>
								<div className="p-8 flex flex-col flex-grow gap-6">
									<h3 className="text-[32px] font-semibold text-[#0e5587] leading-tight font-['Red_Hat_Display',sans-serif]">
										{cls.title}
									</h3>
									<div className="flex gap-2 text-[24px] text-[#0e5587]">
										<span className="font-bold">Modalidad:</span>
										<span className="font-medium">{cls.modalidad}</span>
									</div>
									<p className="text-[20px] text-[#0e5587] leading-relaxed font-['Red_Hat_Display',sans-serif]">
										{cls.description}
									</p>
									<div className="mt-auto pt-4 flex justify-center">
										<Link href={cls.link} className="bg-[#0e5587] h-[48px] px-[30px] flex items-center justify-center rounded-[50px] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)] text-white font-bold text-[20px] hover:scale-105 transition-transform">
											Leer más
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Courses Section */}
			<section className="py-[60px] px-8 bg-white">
				<div className="container mx-auto max-w-7xl">
					<div className="text-center mb-16">
						<h2 className="text-[52px] font-bold text-[#0e5587] mb-4 font-['Red_Hat_Display',sans-serif]">
							Nuestros cursos
						</h2>
					</div>

					<div className="flex gap-[20px] overflow-x-auto pb-10">
						{courses.map((course) => (
							<div key={course.id} className="bg-white rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col min-w-[470px] hover:shadow-2xl transition-all">
								<div className="aspect-[470/285] relative">
									<img src={course.image} alt={course.title} className="w-full h-full object-cover" />
								</div>
								<div className="p-8 flex flex-col gap-5">
									<h3 className="text-[32px] font-semibold text-[#0e5587] leading-tight h-[68px] line-clamp-2 font-['Red_Hat_Display',sans-serif]">
										{course.title}
									</h3>
									<div className="flex items-center gap-2 text-[24px] text-[#0e5587] font-semibold">
										<i className="fas fa-layer-group text-2xl"></i>
										<span>{course.modules} | {course.duration}</span>
									</div>
									<div className="flex items-center gap-2">
										<span className="text-[24px] font-bold text-[#d7be7c]">{course.rating.toFixed(1)}</span>
										<div className="flex gap-1">
											{[...Array(5)].map((_, i) => (
												<i key={i} className={`fas fa-star text-2xl ${i < Math.floor(course.rating) ? 'text-[#d7be7c]' : 'text-gray-200'}`}></i>
											))}
										</div>
									</div>
									<div className="pt-4 flex justify-center">
										<Link href={course.link} className="bg-[#0e5587] h-[48px] px-[30px] flex items-center justify-center rounded-[50px] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)] text-white font-bold text-[20px] hover:scale-105 transition-transform">
											Leer más
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="bg-[#008299] py-16 px-8 relative overflow-hidden">
				<div className="container mx-auto max-w-7xl relative z-10 flex flex-col lg:flex-row items-center gap-10">
					<div className="flex-1 text-right">
						<h2 className="text-white font-bold italic text-4xl md:text-[72px] leading-tight tracking-[0.87px] font-['Red_Hat_Display',sans-serif]">
							¿Que dicen nuestros estudiantes?
						</h2>
					</div>
					<div className="w-[2px] h-[520px] bg-white opacity-20 hidden lg:block"></div>
					<div className="flex-1 flex gap-6 overflow-x-auto pb-6">
						{testimonials.map((t) => (
							<div key={t.id} className="bg-white rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-10 min-w-[400px] flex flex-col gap-6">
								<div className="flex items-center gap-4">
									<div className="w-[60px] h-[60px] bg-gray-200 rounded-full overflow-hidden">
										<img src={`https://ui-avatars.com/api/?name=${t.name}&background=0e5587&color=fff`} alt={t.name} />
									</div>
									<div className="flex flex-col">
										<span className="text-[10px] text-[#0e5587] font-normal uppercase tracking-wider">{t.name}</span>
										<span className="text-[16px] text-[#0e5587] font-semibold leading-tight">{t.job}</span>
									</div>
								</div>
								<div className="flex gap-1">
									{[...Array(5)].map((_, i) => (
										<i key={i} className="fas fa-star text-lg text-[#d7be7c]"></i>
									))}
								</div>
								<p className="text-[18px] text-[#0e5587] italic font-medium leading-relaxed font-['Red_Hat_Display',sans-serif]">
									“{t.text}”
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* FAQs */}
			<section className="py-[120px] px-8 bg-white">
				<div className="container mx-auto max-w-5xl flex flex-col items-center gap-12">
					<h2 className="text-[52px] font-bold text-[#0e5587] tracking-[0.63px] font-['Red_Hat_Display',sans-serif]">
						Preguntas frecuentes
					</h2>
					<div className="w-full flex flex-col gap-4">
						{faqs.map((faq, i) => (
							<div
								key={i}
								className="bg-white rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden"
							>
								<button
									onClick={() => toggleFaq(i)}
									className="w-full px-[30px] py-[20px] flex items-center justify-between text-left"
								>
									<span className="text-[28px] font-semibold text-[#0e5587] leading-tight font-['Red_Hat_Display',sans-serif]">
										{faq.question}
									</span>
									<div className={`w-[48px] h-[48px] flex items-center justify-center transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>
										<img src="/wp-content/uploads/2024/11/plus-1.svg" alt="plus" className="w-full h-full opacity-50" />
									</div>
								</button>
								{openFaq === i && (
									<div className="px-[30px] pb-[30px] pt-2 text-[20px] text-[#0e5587] font-normal leading-relaxed italic">
										{faq.answer}
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-24 px-8 bg-white relative overflow-hidden">
				<div className="container mx-auto max-w-7xl relative z-10 flex flex-col lg:flex-row gap-16 items-center">
					<div className="w-full lg:w-1/2">
						<h2 className="text-[52px] font-bold text-[#0e5587] mb-8 leading-tight tracking-[0.63px] font-['Red_Hat_Display',sans-serif]">
							¿Listo para impulsar <br /> tus proyectos sociales?
						</h2>
						<p className="text-[20px] text-[#0e5587] mb-12 italic leading-relaxed font-medium">
							Escríbeme y conversamos sobre cómo puedo apoyarte a ti o tu organización.
						</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="flex items-center gap-4">
								<i className="fas fa-envelope text-2xl text-[#0e5587]"></i>
								<div>
									<h4 className="font-bold text-[#0e5587] text-[18px]">Escríbeme</h4>
									<p className="text-gray-600 text-[16px]">info@keicycabrera.com</p>
								</div>
							</div>
							<div className="flex items-center gap-4">
								<i className="fas fa-phone-alt text-2xl text-[#0e5587]"></i>
								<div>
									<h4 className="font-bold text-[#0e5587] text-[18px]">Llámanos</h4>
									<p className="text-gray-600 text-[16px]">+58 412 5653886</p>
								</div>
							</div>
						</div>
					</div>

					<div className="w-full lg:w-1/2">
						<div className="bg-white p-10 rounded-[40px] shadow-[0px_10px_40px_rgba(14,85,135,0.1)] border border-gray-100/50">
							<form className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="space-y-1.5">
										<label className="text-[14px] font-bold text-[#0e5587] tracking-[0.17px] ml-4 uppercase">Nombre *</label>
										<input type="text" placeholder="Tu nombre" className="w-full px-6 py-4 bg-gray-50/50 border border-gray-100 rounded-[20px] focus:ring-2 focus:ring-[#0e5587] focus:bg-white transition-all outline-none" required />
									</div>
									<div className="space-y-1.5">
										<label className="text-[14px] font-bold text-[#0e5587] tracking-[0.17px] ml-4 uppercase">Apellido *</label>
										<input type="text" placeholder="Tu apellido" className="w-full px-6 py-4 bg-gray-50/50 border border-gray-100 rounded-[20px] focus:ring-2 focus:ring-[#0e5587] focus:bg-white transition-all outline-none" required />
									</div>
								</div>
								<div className="space-y-1.5">
									<label className="text-[14px] font-bold text-[#0e5587] tracking-[0.17px] ml-4 uppercase">Correo electrónico *</label>
									<input type="email" placeholder="email@ejemplo.com" className="w-full px-6 py-4 bg-gray-50/50 border border-gray-100 rounded-[20px] focus:ring-2 focus:ring-[#0e5587] focus:bg-white transition-all outline-none" required />
								</div>
								<div className="space-y-1.5">
									<label className="text-[14px] font-bold text-[#0e5587] tracking-[0.17px] ml-4 uppercase">¿Cómo puedo ayudarte? *</label>
									<textarea rows="4" placeholder="Cuéntame sobre tu proyecto..." className="w-full px-6 py-4 bg-gray-50/50 border border-gray-100 rounded-[20px] focus:ring-2 focus:ring-[#0e5587] focus:bg-white transition-all outline-none" required></textarea>
								</div>
								<button type="submit" className="w-full h-[64px] bg-[#0e5587] text-white font-bold text-[20px] rounded-[20px] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)] hover:bg-[#0A4368] transition-all flex items-center justify-center gap-3 active:scale-95">
									Enviar mensaje <i className="fas fa-paper-plane text-lg"></i>
								</button>
							</form>
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
