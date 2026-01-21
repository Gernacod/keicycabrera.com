'use client';
import React from 'react';
import Link from 'next/link';

const FlipBox = ({ icon, frontTitle, frontDescription, backDescription, link }) => {
    return (
        <div className="group h-[400px] [perspective:1000px] w-full">
            <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-lg rounded-xl overflow-hidden">
                {/* Front Side */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-white [backface-visibility:hidden] text-center border border-gray-100 rounded-xl">
                    {icon && (
                        <div className="text-4xl text-[#184476] mb-6">
                            <i className={icon}></i>
                        </div>
                    )}
                    <h3 className="text-xl font-bold text-[#184476] uppercase tracking-wider mb-4 leading-tight">
                        {frontTitle}
                    </h3>
                    <div className="text-gray-600 leading-relaxed font-medium">
                        {frontDescription}
                    </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 h-full w-full bg-[#184476] p-8 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center text-center rounded-xl">
                    <Link href={link} className="absolute inset-0 z-10" />
                    <div className="relative z-0 italic leading-relaxed">
                        {backDescription}
                        <div className="mt-4 font-bold border-b border-white inline-block">
                            Ver más...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlipBox;
