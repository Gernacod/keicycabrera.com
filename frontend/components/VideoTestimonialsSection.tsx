import React from 'react';
import { Play } from 'lucide-react';

const videos = [
    {
        id: 1,
        name: "Pedro Perez",
        date: "Diciembre 2024",
        image: "/wp-content/uploads/elementor/thumbs/Keicy-Cabrera-q2y7f5q7...jpg", // Placeholder, ideally replace with specific video thumb
    },
    {
        id: 2,
        name: "Maria Perez",
        date: "Mayo 2025",
        image: "/wp-content/uploads/2024/11/liliana.jpg", // Placeholder
    },
    {
        id: 3,
        name: "Pedro Perez",
        date: "Diciembre 2024",
        image: "/wp-content/uploads/2025/04/images-2.jpg", // Placeholder
    },
];

export default function VideoTestimonialsSection() {
    return (
        <section className="bg-white py-[80px] px-4 font-primary overflow-hidden">
            <div className="max-w-[1440px] mx-auto flex flex-col xl:flex-row items-center justify-center gap-[60px]">

                {/* Left Title */}
                <div className="flex flex-col justify-center max-w-[400px] text-center xl:text-left shrink-0">
                    <h2 className="text-[40px] md:text-[52px] font-bold leading-[1.1] text-keicy-navy tracking-[0.6271px]">
                        Testimonios de participantes en formaciones
                    </h2>
                </div>

                {/* Right Cards */}
                <div className="flex flex-wrap md:flex-nowrap gap-[30px] justify-center items-center w-full">
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            className="relative w-[300px] h-[500px] rounded-[20px] overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex flex-col items-center justify-between group cursor-pointer shrink-0"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={video.image}
                                    alt={video.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-[#001D22]/60" />
                            </div>

                            {/* Play Button (Centered manually based on design spacer approach or absolute center) */}
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <div className="w-[80px] h-[80px] bg-[#0e5587] rounded-full flex items-center justify-center shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)] transition-transform group-hover:scale-110">
                                    <Play className="w-[42px] h-[42px] text-white fill-current ml-1" />
                                </div>
                            </div>

                            {/* Content text at bottom */}
                            <div className="relative z-10 mt-auto w-full p-[30px] flex flex-col items-center text-center gap-[4px] text-white">
                                <h3 className="text-[24px] font-semibold tracking-[0.2894px] leading-tight">
                                    {video.name}
                                </h3>
                                <p className="text-[20px] font-normal tracking-[0.2412px] leading-tight">
                                    {video.date}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
