'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const useLinkInterceptor = () => {
    const router = useRouter();

    useEffect(() => {
        const handleClick = (e) => {
            const target = e.target.closest('a');
            if (target && target.href) {
                const url = new URL(target.href);

                // Check if the link is local (same origin)
                if (url.origin === window.location.origin) {
                    e.preventDefault();
                    const path = url.pathname + url.search + url.hash;
                    router.push(path);
                    // window.scrollTo(0, 0); // Next.js handles scrolling usually
                }
            }
        };

        // Attach listener to the document
        document.addEventListener('click', handleClick);

        // Cleanup
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [router]);
};

export default useLinkInterceptor;
