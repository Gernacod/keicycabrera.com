'use client';
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll the window to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[99] w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full bg-[#0e5587] text-white flex items-center justify-center shadow-[0_4px_15px_rgba(14,85,135,0.4)] hover:bg-[#0097b2] hover:scale-110 active:scale-95 transition-all duration-300 group"
                    aria-label="Volver arriba"
                >
                    <ChevronUp className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={2.5} />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
