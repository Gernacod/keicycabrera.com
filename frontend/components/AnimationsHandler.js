'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AnimationsHandler() {
    const pathname = usePathname();

    useEffect(() => {
        const runAnimationLogic = () => {
            const animatedElements = document.querySelectorAll('.elementor-invisible');

            if (animatedElements.length === 0) return;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target;

                        // Get animation data
                        const settingsAttr = el.getAttribute('data-settings');
                        let animationName = '';
                        let delay = 0;

                        if (settingsAttr) {
                            try {
                                const settings = JSON.parse(settingsAttr);
                                animationName = settings._animation || settings.animation;
                                delay = parseInt(settings._animation_delay || settings.animation_delay || 0, 10);
                            } catch (e) {
                                // If parsing fails, just show the element
                                el.classList.remove('elementor-invisible');
                                observer.unobserve(el);
                                return;
                            }
                        }

                        if (animationName) {
                            setTimeout(() => {
                                el.classList.remove('elementor-invisible');
                                el.classList.add('animated', animationName);
                            }, delay);

                            observer.unobserve(el);
                        } else {
                            // Fallback: just make it visible
                            el.classList.remove('elementor-invisible');
                            observer.unobserve(el);
                        }
                    }
                });
            }, {
                root: null,
                threshold: 0.05, // Lower threshold to trigger earlier
                rootMargin: '50px' // Start animation slightly before element enters viewport
            });

            animatedElements.forEach((el) => observer.observe(el));

            return () => observer.disconnect();
        };

        // Run immediately on mount
        const cleanup1 = runAnimationLogic();

        // Run again after a short delay to catch any late-rendered elements
        const timer1 = setTimeout(runAnimationLogic, 100);
        const timer2 = setTimeout(runAnimationLogic, 500);

        return () => {
            if (cleanup1) cleanup1();
            clearTimeout(timer1);
            clearTimeout(timer2);
        };

    }, [pathname]);

    return null;
}
