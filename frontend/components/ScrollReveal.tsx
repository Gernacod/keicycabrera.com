'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    delay?: number;
    duration?: number;
    distance?: number;
    scale?: number;
    className?: string;
}

export default function ScrollReveal({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.8,
    distance = 50,
    scale = 0.9,
    className = ""
}: ScrollRevealProps) {
    const directions: Record<string, { x?: number; y?: number }> = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance },
        none: {}
    };

    return (
        <motion.div
            className={className}
            initial={{
                opacity: 0,
                scale: scale,
                rotate: direction === 'none' ? 0 : (direction === 'left' ? 2 : -2),
                ...directions[direction]
            }}
            whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                x: 0,
                y: 0
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                type: "spring",
                stiffness: 70,
                damping: 15,
                mass: 1,
                delay: delay,
                duration: duration
            }}
        >
            {children}
        </motion.div>
    );
}
