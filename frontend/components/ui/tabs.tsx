"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const TabsContext = React.createContext<{
    value: string
    onValueChange: (value: string) => void
} | null>(null)

function Tabs({
    defaultValue,
    value: valueProp,
    onValueChange: onValueChangeProp,
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement> & {
    defaultValue?: string
    value?: string
    onValueChange?: (value: string) => void
}) {
    const [valueState, setValueState] = React.useState(defaultValue || "")
    const value = valueProp !== undefined ? valueProp : valueState

    const onValueChange = React.useCallback((newValue: string) => {
        if (valueProp === undefined) {
            setValueState(newValue)
        }
        onValueChangeProp?.(newValue)
    }, [valueProp, onValueChangeProp])

    return (
        <TabsContext.Provider value={{ value, onValueChange }}>
            <div
                data-slot="tabs"
                className={cn("flex flex-col gap-2", className)}
                {...props}
            >
                {children}
            </div>
        </TabsContext.Provider>
    )
}

function TabsList({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            data-slot="tabs-list"
            role="tablist"
            className={cn(
                "flex items-center gap-8 border-b border-neutral-100 bg-transparent p-0 mb-6",
                className
            )}
            {...props}
        />
    )
}

function TabsTrigger({
    value,
    className,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }) {
    const context = React.useContext(TabsContext)
    const isActive = context?.value === value

    return (
        <button
            type="button"
            role="tab"
            aria-selected={isActive}
            data-state={isActive ? "active" : "inactive"}
            onClick={() => context?.onValueChange(value)}
            style={{
                background: 'transparent',
                border: 'none',
                boxShadow: 'none',
                outline: 'none'
            }}
            className={cn(
                "relative pb-4 text-xs font-bold uppercase tracking-widest transition-all duration-300",
                "text-neutral-400 hover:text-neutral-600",
                isActive && "text-neutral-900 !text-neutral-900",
                className
            )}
            {...props}
        >
            {props.children}
            {isActive && (
                <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900"
                    style={{ backgroundColor: '#171717 !important' }}
                />
            )}
        </button>
    )
}

function TabsContent({
    value,
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement> & { value: string }) {
    const context = React.useContext(TabsContext)
    if (context?.value !== value) return null

    return (
        <div
            data-slot="tabs-content"
            role="tabpanel"
            className={cn("mt-2 ring-offset-background outline-none", className)}
            {...props}
        >
            {children}
        </div>
    )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
