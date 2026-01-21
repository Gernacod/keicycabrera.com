'use client';
import React, { useState } from 'react';
import useLinkInterceptor from '@/hooks/useLinkInterceptor';
import Link from 'next/link';

const blogPosts = [
	{
		id: 1,
		title: "Llegan donantes, pero no se quedan: ¿Qué está fallando?",
		date: "diciembre 5, 2024",
		excerpt: "¿Has logrado captar la atención de un donante y conseguir su apoyo, pero al finalizar el ciclo de financiamiento, este...",
		link: "/llegandonantesynosequedan",
		category: "Recaudación"
	},
	{
		id: 2,
		title: "Mentalidad de cumplimiento: Clave para el crecimiento sostenible",
		date: "noviembre 26, 2024",
		excerpt: "Imagina que tu organización es un puente. De un lado, están las comunidades que necesitan apoyo, y del otro, los...",
		link: "/mentalidadecumplimiento",
		category: "MERA"
	},
	{
		id: 3,
		title: "Descifrando a los donantes: Lo que realmente buscan",
		date: "noviembre 20, 2024",
		excerpt: "Con frecuencia, entender lo que un donante realmente quiere puede parecer un misterio insondable. Sin embargo, no es tan complicado...",
		link: "/quebuscanlosdonantes",
		category: "Recaudación"
	},
	{
		id: 4,
		title: "Prepara a tu ONG para el 2025: revisa estos pilares claves.",
		date: "noviembre 14, 2024",
		excerpt: "El mundo está cambiando rápidamente, y las organizaciones no gubernamentales (ONG) no son ajenas a estos cambios. A medida que...",
		link: "/preparateparael2025",
		category: "Planificación"
	},
	{
		id: 5,
		title: "Lo que debes saber sobre Monitoreo, Evaluación, Rendición de Cuentas y Aprendizaje (MERA) 📊",
		date: "agosto 21, 2024",
		excerpt: "En el mundo de los proyectos sociales, el sistema de Monitoreo, Evaluación, Rendición de Cuentas y Aprendizaje (MERA) es fundamental....",
		link: "/sabersobremera",
		image: "/wp-content/uploads/2024/08/Portadas-blog-1.png",
		category: "MERA"
	},
	{
		id: 6,
		title: "La salud mental en emergencias: cómo cuidarnos en contextos difíciles.",
		date: "agosto 7, 2024",
		excerpt: "En el ámbito del trabajo social y humanitario, hay un tema que, aunque muchas veces se conversa, sigue siendo un...",
		link: "/salud-mental-emergencias",
		image: "/wp-content/uploads/2024/08/Screenshot-2024-11-14-at-11.38.58 AM.png",
		category: "Salud Mental"
	},
	{
		id: 7,
		title: "¿Cómo nace un proyecto social? Te lo cuenta una coordinadora de propuestas",
		date: "julio 24, 2024",
		excerpt: "Como coordinadora de propuestas para proyectos sociales, para mi, en resumidas cuentas un proyecto social surge del deseo de mejorar...",
		link: "/naceunproyectosocial",
		image: "/wp-content/uploads/2024/08/Screenshot-2024-11-14-at-11.39.06 AM.png",
		category: "Diseño de Proyectos"
	},
	{
		id: 8,
		title: "Así logré para pasar del sector privado al sector social",
		date: "julio 9, 2024",
		excerpt: "Tal como he mencionado en mi historia, pero principalmente en este post de Instagram, mi carrera profesional inició en el...",
		link: "/sectorprivadoasocial",
		image: "/wp-content/uploads/2024/08/Screenshot-2024-11-14-at-11.38.53 AM.png",
		category: "Desarrollo Profesional"
	}
];

const Blog = () => {
	useLinkInterceptor();
	const [filter, setFilter] = useState('Todos');

	const categories = ['Todos', 'Desarrollo Profesional', 'Diseño de Proyectos', 'MERA', 'Planificación', 'Salud Mental'];

	const filteredPosts = filter === 'Todos'
		? blogPosts
		: blogPosts.filter(post => post.category === filter);

	return (
		<main className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="bg-gray-50 py-20 px-4">
				<div className="container mx-auto max-w-4xl text-center">
					<div className="flex justify-center mb-8">
						<img src="/wp-content/uploads/2024/11/rombo-azul.webp" alt="" className="w-16 h-16 mr-4" />
					</div>
					<h1 className="text-5xl font-bold text-[#184476] mb-6">Blog</h1>
					<h2 className="text-3xl font-semibold text-gray-800 mb-8 font-serif italic">Impulso Social</h2>
					<p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
						En este espacio, proporcionaré <strong>información</strong> para organizaciones y profesionales del sector social, de manera que puedan llevar su carrera y actividades <strong>a niveles que no imaginaban.</strong>
					</p>
				</div>
			</section>

			{/* Filter Section */}
			<section className="py-12 border-b border-gray-100 sticky top-0 bg-white z-20 shadow-sm">
				<div className="container mx-auto px-4 overflow-x-auto">
					<div className="flex justify-center gap-4 whitespace-nowrap min-w-max pb-2">
						{categories.map((cat) => (
							<button
								key={cat}
								onClick={() => setFilter(cat)}
								className={`px-6 py-2 rounded-full font-semibold transition-all ${filter === cat
										? 'bg-[#184476] text-white shadow-md'
										: 'bg-gray-100 text-gray-600 hover:bg-gray-200'
									}`}
							>
								{cat}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Blog Grid */}
			<section className="py-20 px-4">
				<div className="container mx-auto max-w-7xl">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
						{filteredPosts.map((post) => (
							<article key={post.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 flex flex-col h-full transform hover:-translate-y-2">
								{post.image ? (
									<div className="relative aspect-[16/9] overflow-hidden">
										<img
											src={post.image}
											alt={post.title}
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
										/>
										<div className="absolute top-4 left-4 bg-[#184476] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
											{post.category}
										</div>
									</div>
								) : (
									<div className="aspect-[16/9] bg-gray-50 flex items-center justify-center p-8">
										<img src="/wp-content/uploads/2024/11/rombo-azul.webp" alt="" className="w-12 h-12 opacity-20" />
									</div>
								)}
								<div className="p-8 flex flex-col grow">
									<p className="text-sm text-gray-400 mb-4">{post.date}</p>
									<h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight group-hover:text-[#184476] transition-colors">
										{post.title}
									</h3>
									<p className="text-gray-600 mb-8 line-clamp-3">
										{post.excerpt}
									</p>
									<Link
										href={post.link}
										className="mt-auto inline-flex items-center font-bold text-[#184476] group/btn"
									>
										<span>Leer más</span>
										<svg className="w-5 h-5 ml-2 group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
										</svg>
									</Link>
								</div>
							</article>
						))}
					</div>
					{filteredPosts.length === 0 && (
						<div className="text-center py-20">
							<p className="text-2xl text-gray-400 italic">No se encontraron artículos en esta categoría.</p>
						</div>
					)}
				</div>
			</section>
		</main>
	);
};

export default Blog;
