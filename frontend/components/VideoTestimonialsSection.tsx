import React, { useRef, useState, useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight, MousePointer2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const videos = [
    {
        id: 1,
        name: "Pedro Perez",
        date: "Diciembre 2024",
        image: "/wp-content/uploads/elementor/thumbs/Keicy-Cabrera-q2y7f5q7...jpg",
        videoUrl: "/wp-content/uploads/2025/01/VIDEO-2024-10-25-12-30-14.mp4",
        overlay: "bg-[rgba(0,29,34,0.6)]"
    },
    {
        id: 2,
        name: "Maria Perez",
        date: "Mayo 2025",
        image: "/wp-content/uploads/2024/11/liliana.jpg",
        videoUrl: "/wp-content/uploads/2025/01/VIDEO-2024-10-25-12-30-14.mp4",
        overlay: "bg-[rgba(0,29,34,0.6)]"
    },
    {
        id: 3,
        name: "Juan Corrales",
        date: "Enero 2025",
        image: "/wp-content/uploads/2025/04/images-2.jpg",
        videoUrl: "/wp-content/uploads/2025/01/VIDEO-2024-10-25-12-30-14.mp4",
        overlay: "bg-[rgba(0,29,34,0.6)]"
    },
    {
        id: 4,
        name: "Ana Martínez",
        date: "Marzo 2025",
        image: "/wp-content/uploads/2024/11/liliana.jpg",
        videoUrl: "/wp-content/uploads/2025/01/VIDEO-2024-10-25-12-30-14.mp4",
        overlay: "bg-[rgba(0,130,153,0.6)]"
    },
    {
        id: 5,
        name: "Carlos Ruiz",
        date: "Febrero 2025",
        image: "/wp-content/uploads/elementor/thumbs/Keicy-Cabrera-q2y7f5q7...jpg",
        videoUrl: "/wp-content/uploads/2025/01/VIDEO-2024-10-25-12-30-14.mp4",
        overlay: "bg-[rgba(0,130,153,0.6)]"
    },
    {
        id: 6,
        name: "Elena Gómez",
        date: "Abril 2025",
        image: "/wp-content/uploads/2025/04/images-2.jpg",
        videoUrl: "/wp-content/uploads/2025/01/VIDEO-2024-10-25-12-30-14.mp4",
        overlay: "bg-[rgba(0,130,153,0.6)]"
    }
];

export default function VideoTestimonialsSection() {
    const [width, setWidth] = useState(0);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const innerSliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (innerSliderRef.current && sliderRef.current) {
            setWidth(innerSliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
        }
    }, [videos]);

    const scroll = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const scrollAmount = 400;
            sliderRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="bg-white py-[80px] px-6 md:px-[60px] font-['Red_Hat_Display',sans-serif] overflow-hidden relative">
            <div className="max-w-[1440px] mx-auto flex flex-col xl:flex-row gap-[50px] items-center">

                {/* Left Side: Title and Controls */}
                <div className="flex flex-col shrink-0 w-full xl:w-[415px] xl:text-right items-center xl:items-end">
                    <ScrollReveal direction="left" distance={50}>
                        <h2 className="text-[40px] md:text-[52px] font-bold leading-[1.05] text-[#0e5587] tracking-[0.6271px]">
                            Testimonios de participantes en formaciones
                        </h2>
                    </ScrollReveal>

                    {/* Navigation Buttons - Hidden on small screen, matched style */}
                    <ScrollReveal direction="up" delay={0.4} className="hidden xl:flex gap-4 mt-12">
                        <button
                            onClick={() => scroll('left')}
                            className="w-[60px] h-[60px] rounded-full border-2 border-[#0e5587] flex items-center justify-center text-[#0e5587] hover:bg-[#0e5587] hover:text-white transition-all active:scale-95"
                        >
                            <ChevronLeft className="w-8 h-8" strokeWidth={2.5} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-[60px] h-[60px] rounded-full bg-[#0e5587] flex items-center justify-center text-white hover:bg-[#0e5587]/90 transition-all shadow-md active:scale-95"
                        >
                            <ChevronRight className="w-8 h-8" strokeWidth={2.5} />
                        </button>
                    </ScrollReveal>

                    {/* Mobile indicator */}
                    <div className="flex xl:hidden items-center gap-2 mt-6 text-[#0097b2] animate-pulse">
                        <MousePointer2 className="w-4 h-4" />
                        <span className="text-[14px] font-bold uppercase tracking-wider">Desliza para ver más</span>
                    </div>
                </div>

                {/* Right Side: Slider */}
                <div
                    ref={sliderRef}
                    className="flex-1 w-full overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
                >
                    <motion.div
                        ref={innerSliderRef}
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="flex gap-[20px] py-10"
                    >
                        {videos.map((video) => (
                            <motion.div
                                key={video.id}
                                className="min-w-[310px] h-[580px] relative rounded-[20px] overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] group shrink-0"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setSelectedVideo(video.videoUrl)}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={video.image}
                                        alt={video.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className={`absolute inset-0 transition-opacity group-hover:opacity-80 ${video.overlay}`} />
                                </div>

                                {/* Bottom Content (Left Aligned as per Figma) */}
                                <div className="absolute bottom-[20px] left-[20px] z-20 text-white pointer-events-none">
                                    <h3 className="text-[24px] font-semibold tracking-[0.2894px] leading-tight mb-1">
                                        {video.name}
                                    </h3>
                                    <p className="text-[20px] font-normal tracking-[0.2412px] leading-tight">
                                        {video.date}
                                    </p>
                                </div>

                                {/* Play Button (Centered) */}
                                <div className="absolute inset-0 flex items-center justify-center z-10">
                                    <div className="w-[80px] h-[80px] bg-[#0e5587] rounded-full flex items-center justify-center shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)] transition-all group-hover:scale-110">
                                        <Play className="w-[42px] h-[42px] text-white fill-current ml-1" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Video Modal Player */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-[1000px] aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <video
                                src={selectedVideo}
                                controls
                                autoPlay
                                className="w-full h-full object-contain"
                            />
                            <button
                                onClick={() => setSelectedVideo(null)}
                                className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/80"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
