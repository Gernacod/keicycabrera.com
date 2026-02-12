'use client';

import React, { useEffect, useState, useRef } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Avatar
} from "@heroui/react";
import { useRouter, usePathname } from 'next/navigation';

const ChevronDown = ({ fill, size, ...props }) => {
    return (
        <svg
            fill="none"
            height={size || 24}
            viewBox="0 0 24 24"
            width={size || 24}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
        </svg>
    );
};

const Header = () => {
    const [user, setUser] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const closeTimeoutRef = useRef(null);
    const router = useRouter();
    const pathname = usePathname();

    const handleMouseEnter = (label) => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
        setOpenDropdown(label);
    };

    const handleMouseLeave = () => {
        closeTimeoutRef.current = setTimeout(() => {
            setOpenDropdown(null);
        }, 150);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            setUser(null);
        }

        const handleStorageChange = () => {
            const updatedUser = localStorage.getItem('user');
            setUser(updatedUser ? JSON.parse(updatedUser) : null);
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, [pathname]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        router.push('/escritorio');
        window.location.reload();
    };

    const isDashboard = pathname.startsWith('/dashboard');

    const navLinks = [
        { label: 'Inicio', href: '/' },
        { label: 'Sobre mi', href: '/sobremi' },
        { label: 'Consultorías', href: '/consultoria' },
        { label: 'Recursos gratuitos', href: '/recursos-gratuitos' },
        { label: 'Blog', href: '/blog' },
    ];

    const isCursosYClases = pathname === '/cursosyclases';
    const useWhiteText = !isScrolled && isCursosYClases;

    if (isDashboard) {
        return null;
    }

    return (
        <Navbar
            maxWidth="xl"
            className={`fixed top-0 w-full z-[1000] h-[80px] transition-all duration-300 ${isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.05)] border-b border-slate-200"
                : "bg-transparent border-transparent shadow-none"
                }`}
            classNames={{
                base: "overflow-visible",
                wrapper: "px-4 sm:px-6 overflow-visible",
            }}
        >
            <NavbarBrand>
                <Link href="/">
                    <img
                        src={useWhiteText
                            ? "/logo-white.webp"
                            : "/logo-blue.webp"}
                        alt="Keicy Cabrera"
                        className="w-[150px] sm:w-[180px] h-auto transition-all duration-300"
                    />
                </Link>
            </NavbarBrand>

            <NavbarContent className="hidden lg:flex gap-10" justify="center">
                {navLinks.map((link) => {
                    const isDropdown = link.label === 'Consultorías' || link.label === 'Recursos gratuitos';

                    // Determine if the current link or its sub-links are active
                    let isActive = false;
                    if (link.href === '/') {
                        isActive = pathname === '/';
                    } else if (link.label === 'Consultorías') {
                        isActive = pathname === '/consultoria' || pathname === '/cursosyclases';
                    } else if (link.label === 'Recursos gratuitos') {
                        const subPaths = [
                            '/recursos-gratuitos',
                            '/planificatu2025',
                            '/diagnosticocumplimiento',
                            '/ebooksubedenivel',
                            '/ebookrecaudacion',
                            '/ebookdisenodeproyectos',
                            '/ebookreportes'
                        ];
                        isActive = subPaths.some(p => pathname.startsWith(p));
                    } else {
                        isActive = pathname.startsWith(link.href);
                    }

                    const linkContent = (
                        <div className="relative group cursor-pointer py-1">
                            <span className={`relative z-10 font-bold text-[18px] font-['Red_Hat_Display'] transition-colors ${isActive
                                ? (useWhiteText ? 'text-white' : 'text-[#0a8fa4]')
                                : (useWhiteText ? 'text-white' : 'text-[#184476]')
                                } group-hover:text-[#0a8fa4]`}>
                                {link.label}
                            </span>
                            <div className={`absolute bottom-[-8px] left-0 w-full h-[3px] ${useWhiteText ? 'bg-white' : 'bg-[#0a8fa4]'
                                } transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                }`} />
                        </div>
                    );

                    if (isDropdown) {
                        return (
                            <Dropdown
                                key={link.href}
                                placement="bottom"
                                showArrow={false}
                                isOpen={openDropdown === link.label}
                                onOpenChange={(isOpen) => {
                                    if (isOpen) setOpenDropdown(link.label);
                                }}
                            >
                                <NavbarItem
                                    onMouseEnter={() => handleMouseEnter(link.label)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <DropdownTrigger>
                                        <button
                                            className="bg-transparent border-none p-0 outline-none appearance-none"
                                            onClick={() => {
                                                // Optional: Navigate on click if desired, or just let it toggle
                                                // router.push(link.href);
                                            }}
                                        >
                                            {linkContent}
                                        </button>
                                    </DropdownTrigger>
                                </NavbarItem>
                                <DropdownMenu
                                    aria-label={`${link.label} Submenu`}
                                    className={`${link.label === 'Consultorías' ? 'w-[320px]' : 'w-[380px]'} bg-white border border-slate-200 shadow-2xl rounded-2xl p-2 z-[9999]`}
                                    itemClassName="h-auto py-3 px-4 transition-all duration-200 data-[hover=true]:bg-slate-50 rounded-xl"
                                    onMouseEnter={() => handleMouseEnter(link.label)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {link.label === 'Consultorías' ? (
                                        <>
                                            <DropdownItem
                                                key="consultoria"
                                                description="Acompañamiento estratégico"
                                                onPress={() => router.push('/consultoria')}
                                                showDivider
                                                classNames={{
                                                    title: "text-[16px] font-bold text-[#184476]",
                                                    description: "text-[13px] text-slate-500 mt-1"
                                                }}
                                            >
                                                Consultoría
                                            </DropdownItem>
                                            <DropdownItem
                                                key="cursos"
                                                description="Formaciones y programas"
                                                onPress={() => router.push('/cursosyclases')}
                                                classNames={{
                                                    title: "text-[16px] font-bold text-[#184476]",
                                                    description: "text-[13px] text-slate-500 mt-1"
                                                }}
                                            >
                                                Cursos y clases
                                            </DropdownItem>
                                        </>
                                    ) : (
                                        <>
                                            <DropdownItem
                                                key="planifica"
                                                description="Taller gratuito para organizar tus metas"
                                                onPress={() => router.push('/planificatu2025')}
                                                showDivider
                                                classNames={{
                                                    title: "text-[16px] font-bold text-[#184476]",
                                                    description: "text-[13px] text-slate-500 mt-1"
                                                }}
                                            >
                                                Planifica tu 2025
                                            </DropdownItem>
                                            <DropdownItem
                                                key="diagnostico"
                                                description="Evalúa el estado de tu organización"
                                                onPress={() => router.push('/diagnosticocumplimiento')}
                                                showDivider
                                                classNames={{
                                                    title: "text-[16px] font-bold text-[#184476]",
                                                    description: "text-[13px] text-slate-500 mt-1"
                                                }}
                                            >
                                                Diagnóstico de Cumplimiento
                                            </DropdownItem>
                                            <DropdownItem
                                                key="ebook-nivel"
                                                description="Sube de nivel en el sector social"
                                                onPress={() => router.push('/ebooksubedenivel')}
                                                showDivider
                                                classNames={{
                                                    title: "text-[16px] font-bold text-[#184476]",
                                                    description: "text-[13px] text-slate-500 mt-1"
                                                }}
                                            >
                                                EBook: Sube de Nivel
                                            </DropdownItem>
                                            <DropdownItem
                                                key="ebook-recaudacion"
                                                description="Estrategias efectivas para captar fondos"
                                                onPress={() => router.push('/ebookrecaudacion')}
                                                showDivider
                                                classNames={{
                                                    title: "text-[16px] font-bold text-[#184476]",
                                                    description: "text-[13px] text-slate-500 mt-1"
                                                }}
                                            >
                                                EBook: Recaudación de Fondos
                                            </DropdownItem>
                                            <DropdownItem
                                                key="ebook-proyectos"
                                                description="Guía paso a paso para tus propuestas"
                                                onPress={() => router.push('/ebookdisenodeproyectos')}
                                                showDivider
                                                classNames={{
                                                    title: "text-[16px] font-bold text-[#184476]",
                                                    description: "text-[13px] text-slate-500 mt-1"
                                                }}
                                            >
                                                EBook: Diseño de Proyectos
                                            </DropdownItem>
                                            <DropdownItem
                                                key="ebook-reportes"
                                                description="Redacción técnica para donantes"
                                                onPress={() => router.push('/ebookreportes')}
                                                classNames={{
                                                    title: "text-[16px] font-bold text-[#184476]",
                                                    description: "text-[13px] text-slate-500 mt-1"
                                                }}
                                            >
                                                EBook: Redacción de Reportes
                                            </DropdownItem>
                                        </>
                                    )}
                                </DropdownMenu>
                            </Dropdown>
                        );
                    }

                    return (
                        <NavbarItem key={link.href}>
                            <Link href={link.href}>
                                {linkContent}
                            </Link>
                        </NavbarItem>
                    );
                })}
            </NavbarContent>

            <NavbarContent justify="end">
                {user ? (
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                className={`transition-transform ${useWhiteText ? 'ring-white' : ''}`}
                                color="primary"
                                name={user.firstName}
                                size="sm"
                                src={user.avatarUrl}
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="profile" className="h-14 gap-2">
                                <p className="font-semibold">Iniciado como</p>
                                <p className="font-semibold text-[#184476]">{user.email}</p>
                            </DropdownItem>
                            <DropdownItem
                                key="dashboard"
                                color="primary"
                                onPress={() => router.push(user.role === 'OWNER' ? '/dashboard/owner' : '/dashboard/member')}
                            >
                                Mi Escritorio
                            </DropdownItem>
                            <DropdownItem key="logout" color="danger" onPress={handleLogout}>
                                Cerrar Sesión
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                ) : (
                    <NavbarItem>
                        <Button
                            as={Link}
                            href="/escritorio"
                            className={`font-bold rounded-full px-8 py-2 transition-all font-['Red_Hat_Display'] shadow-lg ${useWhiteText
                                ? "bg-white text-[#184476] hover:bg-gray-100"
                                : "bg-[#184476] text-white hover:bg-[#d6c072]"
                                }`}
                        >
                            Acceder
                        </Button>
                    </NavbarItem>
                )}
            </NavbarContent>
        </Navbar>
    );
};

export default Header;
