'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';

interface AnimatedCounterProps {
    value: number;
    duration?: number;
    delay?: number;
    prefix?: string;
    suffix?: string;
    className?: string;
}

export default function AnimatedCounter({
    value,
    duration = 2,
    delay = 0,
    prefix = "",
    suffix = "",
    className = ""
}: AnimatedCounterProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            const timeout = setTimeout(() => {
                const controls = animate(count, value, {
                    duration: duration,
                    ease: "easeOut",
                });
                return controls.stop;
            }, delay * 1000);
            return () => clearTimeout(timeout);
        }
    }, [isInView, value, count, duration, delay]);

    // Use a listener to update the state so we can render normally
    useEffect(() => {
        return rounded.onChange((v) => setDisplayValue(v));
    }, [rounded]);

    return (
        <span ref={ref} className={className}>
            {prefix}{displayValue}{suffix}
        </span>
    );
}
