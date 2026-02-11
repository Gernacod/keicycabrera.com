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
    const baseStyles = "inline-flex items-center justify-center font-primary font-bold text-[20px] text-white bg-keicy-navy hover:bg-keicy-navy/90 py-4 px-10 rounded-[20px] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)] transition-all active:translate-y-0.5 active:shadow-[1px_2px_2px_0px_rgba(0,0,0,0.25)] whitespace-nowrap";

    if (href) {
        return (
            <Link href={href} className={cn(baseStyles, className)}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={cn(baseStyles, className)} {...props}>
            {children}
        </button>
    );
}
