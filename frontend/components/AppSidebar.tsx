import * as React from "react"
import { IconDashboard, IconBook, IconFileText, IconUsers, IconChartBar, IconCreditCard, IconSettings, IconLogout, IconDotsVertical, IconUserCircle, IconNotification, IconBrandCodesandbox, IconStar, IconClipboardCheck, IconHeart, IconHistory, IconMessageDots, IconLoader2 } from "@tabler/icons-react"
import { useRouter, useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    useSidebar,
} from "@/components/ui/sidebar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentView = searchParams.get('view')
    const { isMobile } = useSidebar()
    const [userData, setUserData] = React.useState<any>(null)
    const [logoutLoading, setLogoutLoading] = React.useState(false)
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
        const user = localStorage.getItem('user')
        if (user) {
            setUserData(JSON.parse(user))
        }
    }, [])

    if (!mounted) return null

    const handleLogout = async () => {
        setLogoutLoading(true)
        // Simulate a small delay for the premium feel
        await new Promise(resolve => setTimeout(resolve, 1500))

        localStorage.clear()
        window.location.replace('/escritorio')
    }

    const role = userData?.role || 'MEMBER'

    const menuItems = [
        {
            title: "Escritorio",
            icon: IconDashboard,
            url: `/dashboard/${role.toLowerCase()}`,
            roles: ['OWNER', 'ADMIN', 'MEMBER'],
            view: null
        },
        {
            title: "Mi Perfil",
            icon: IconUserCircle,
            url: `/dashboard/member?view=profile`,
            roles: ['MEMBER'],
            view: 'profile'
        },
        {
            title: "Cursos Inscritos",
            icon: IconBook,
            url: `/dashboard/member?view=courses`,
            roles: ['MEMBER'],
            view: 'courses'
        },
        {
            title: "Reseñas",
            icon: IconStar,
            url: `/dashboard/member?view=reviews`,
            roles: ['MEMBER'],
            view: 'reviews'
        },
        {
            title: "Mis Intentos",
            icon: IconClipboardCheck,
            url: `/dashboard/member?view=quizzes`,
            roles: ['MEMBER'],
            view: 'quizzes'
        },
        {
            title: "Lista de Deseos",
            icon: IconHeart,
            url: `/dashboard/member?view=wishlist`,
            roles: ['MEMBER'],
            view: 'wishlist'
        },
        {
            title: "Historial de Pedidos",
            icon: IconHistory,
            url: `/dashboard/member?view=orders`,
            roles: ['MEMBER'],
            view: 'orders'
        },
        {
            title: "Pregunta y Respuesta",
            icon: IconMessageDots,
            url: `/dashboard/member?view=qa`,
            roles: ['MEMBER'],
            view: 'qa'
        },
        // Original items for other roles
        {
            title: "Mis Cursos",
            icon: IconBook,
            url: `/dashboard/owner?view=courses`,
            roles: ['ADMIN', 'OWNER'],
            view: 'courses'
        },
        {
            title: "Documentos",
            icon: IconFileText,
            url: `/dashboard/owner?view=documents`,
            roles: ['ADMIN', 'OWNER'],
            view: 'documents'
        },
        {
            title: "Gestionar Usuarios",
            icon: IconUsers,
            url: `/dashboard/owner?view=users`,
            roles: ['ADMIN', 'OWNER'],
            view: 'users'
        },
        {
            title: "Reportes",
            icon: IconChartBar,
            url: `/dashboard/owner?view=reports`,
            roles: ['ADMIN', 'OWNER'],
            view: 'reports'
        },
        {
            title: "Facturación",
            icon: IconCreditCard,
            url: `/dashboard/owner?view=billing`,
            roles: ['OWNER'],
            view: 'billing'
        },
        {
            title: "Configuración",
            icon: IconSettings,
            url: `/dashboard/${role.toLowerCase()}?view=settings`,
            roles: ['OWNER', 'MEMBER'],
            view: 'settings'
        },
        {
            title: "Mensajes",
            icon: IconMessageDots,
            url: `/dashboard/owner?view=messages`,
            roles: ['OWNER'],
            view: 'messages'
        }
    ]

    const filteredItems = menuItems.filter(item => item.roles.includes(role))

    const isActive = (item: any) => {
        if (item.view === null) return !currentView;
        return currentView === item.view;
    }

    const getInitials = (firstName?: string, lastName?: string) => {
        if (!firstName) return 'U'
        return `${firstName.charAt(0)}${lastName?.charAt(0) || ''}`.toUpperCase()
    }

    return (
        <Sidebar variant="inset" collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            size="lg"
                            className="hover:bg-transparent"
                        >
                            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-neutral-900 text-neutral-50 shadow-sm">
                                <IconBrandCodesandbox className="size-4" />
                            </div>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">Plataforma</span>
                                <span className="truncate text-xs text-muted-foreground">Dashboard</span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Navegación</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {filteredItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        onClick={() => item.url !== "#" && router.push(item.url)}
                                        tooltip={item.title}
                                        isActive={isActive(item)}
                                        className="data-[active=true]:!bg-neutral-100 data-[active=true]:!text-neutral-900 hover:!bg-neutral-100 transition-colors"
                                    >
                                        <item.icon className="!size-4" />
                                        <span>{item.title}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="p-2 border-t border-neutral-100">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton
                                    size="lg"
                                    className="!h-[60px] !bg-transparent hover:!bg-transparent active:!bg-transparent data-[state=open]:!bg-transparent focus:!bg-transparent focus-visible:!bg-transparent !ring-0 !outline-none border-none px-2 min-w-0"
                                >
                                    <div className="flex items-center w-full gap-3 min-w-0">
                                        <Avatar className="h-9 w-9 rounded-xl shrink-0 border border-neutral-100 shadow-sm">
                                            <AvatarImage src={userData?.avatar} alt={userData?.firstName} />
                                            <AvatarFallback className="rounded-xl bg-neutral-900 text-white font-bold text-xs uppercase">
                                                {getInitials(userData?.firstName, userData?.lastName)}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden min-w-0">
                                            <span className="truncate font-bold text-neutral-900 text-sm leading-tight">
                                                {userData?.firstName || userData?.lastName
                                                    ? `${userData.firstName || ''} ${userData.lastName || ''}`.trim()
                                                    : userData?.username || 'Usuario'}
                                            </span>
                                            <span className="truncate text-[11px] text-neutral-500 font-medium leading-tight">
                                                {userData?.email}
                                            </span>
                                        </div>
                                        <IconDotsVertical className="size-4 text-neutral-400 shrink-0 group-data-[collapsible=icon]:hidden" />
                                    </div>
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-xl p-2"
                                side={isMobile ? "bottom" : "right"}
                                align="end"
                                sideOffset={4}
                            >
                                <DropdownMenuItem
                                    onClick={() => router.push(`/dashboard/${role.toLowerCase()}?view=settings`)}
                                    className="rounded-lg py-2.5 focus:!bg-neutral-50 focus:!text-neutral-900 !outline-none !ring-0 cursor-pointer"
                                >
                                    <IconSettings className="mr-3 size-4 text-neutral-500" />
                                    <span className="font-medium text-neutral-700">Configuración</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="my-1 bg-neutral-100" />
                                <DropdownMenuItem
                                    onClick={handleLogout}
                                    className="rounded-lg py-2.5 text-red-500 focus:!bg-red-50 focus:!text-red-600 !outline-none !ring-0 cursor-pointer"
                                >
                                    <IconLogout className="mr-3 size-4" />
                                    <span className="font-medium">Cerrar Sesión</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>

            <AnimatePresence>
                {logoutLoading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-white p-8 rounded-3xl shadow-2xl flex flex-col items-center gap-4 border border-neutral-100"
                        >
                            <div className="relative">
                                <IconLoader2 className="size-12 text-neutral-900 animate-spin" />
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-lg font-bold text-neutral-900">Cerrando sesión</span>
                                <span className="text-sm text-neutral-500 font-medium tracking-tight">Espera un momento, por favor...</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Sidebar>
    )
}
