"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

function Progress({
    value,
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement> & { value?: number }) {
    return (
        <div
            className={cn(
                "bg-secondary relative h-2 w-full overflow-hidden rounded-full",
                className
            )}
            {...props}
        >
            <div
                className="bg-primary h-full w-full flex-1 transition-all"
                style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
            />
        </div>
    )
}

export { Progress }
