import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    className?: string;
    children?: React.ReactNode;
}

export default function CtaButton({
    href,
    className,
    children = "Descubre cómo puedo ayudarte",
    type = "button",
    ...props
}: CtaButtonProps) {
    const strictStyles = {
        backgroundColor: '#0E5587',
        color: '#FFFFFF',
        paddingTop: '18px',
        paddingBottom: '18px',
        paddingLeft: '60px',
        paddingRight: '60px',
        borderRadius: '20px',
        fontSize: '18px',
        fontWeight: '700',
        boxShadow: '2px 4px 4px 0px rgba(0,0,0,0.25)',
        border: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        fontFamily: 'inherit',
        whiteSpace: 'nowrap' as const,
        lineHeight: '1',
        minHeight: '64px',
    };

    const hoverStyles = "hover:bg-[#0097b2] hover:shadow-[0px_6px_15px_rgba(0,151,178,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all";

    if (href) {
        return (
            <Link
                href={href}
                className={cn(hoverStyles, className)}
                style={strictStyles}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={cn(hoverStyles, className)}
            style={strictStyles}
            {...props}
        >
            {children}
        </button>
    );
}
