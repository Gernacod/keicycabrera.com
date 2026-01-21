"use client"

import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter()
    const [isAuthorized, setIsAuthorized] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            router.replace('/escritorio')
        } else {
            setIsAuthorized(true)
        }
    }, [router])

    if (!isAuthorized) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-neutral-50">
                <div className="flex flex-col items-center gap-4">
                    <div className="h-8 w-8 border-4 border-neutral-900 border-t-transparent rounded-full animate-spin" />
                    <p className="text-sm font-medium text-neutral-500">Verificando sesión...</p>
                </div>
            </div>
        )
    }
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 no-reset transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <div className="flex flex-col gap-0.5">
                            <span className="text-sm font-semibold">Dashboard</span>
                            <span className="text-xs text-muted-foreground">Bienvenido a tu panel de control</span>
                        </div>
                    </div>
                </header>
                <div className="flex flex-1 flex-col">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
