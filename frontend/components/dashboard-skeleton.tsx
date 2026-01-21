import { Skeleton } from "@/components/ui/skeleton"

export function EscritorioSkeleton() {
    return (
        <div className="flex flex-col gap-6 animate-in fade-in duration-500">
            {/* Stats Cards Skeleton */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="rounded-xl border border-neutral-100 bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between space-y-0 pb-2">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-4 w-4 rounded-full" />
                        </div>
                        <div className="pt-2">
                            <Skeleton className="h-8 w-16 mb-1" />
                            <Skeleton className="h-3 w-32" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                {/* Main Content Skeleton */}
                <div className="col-span-4 rounded-xl border border-neutral-100 bg-white shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-neutral-50 flex flex-col gap-2">
                        <Skeleton className="h-6 w-48" />
                        <Skeleton className="h-4 w-64" />
                    </div>
                    <div className="p-8 space-y-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-start gap-4">
                                <Skeleton className="h-10 w-10 rounded-full shrink-0" />
                                <div className="space-y-2 flex-1 pt-1">
                                    <Skeleton className="h-4 w-3/4" />
                                    <Skeleton className="h-3 w-1/2" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar Stats Skeleton */}
                <div className="col-span-3 rounded-xl border border-neutral-100 bg-white shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-neutral-50 flex flex-col gap-2">
                        <Skeleton className="h-6 w-32" />
                        <Skeleton className="h-4 w-48" />
                    </div>
                    <div className="p-6 space-y-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-neutral-50/50">
                                <Skeleton className="h-4 w-32" />
                                <Skeleton className="h-4 w-12" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export function ProfileSkeleton() {
    return (
        <div className="flex flex-col gap-6 max-w-5xl mx-auto w-full animate-in fade-in duration-500">
            <div className="flex flex-col gap-4">
                <Skeleton className="h-8 w-32" />
                <div className="flex items-center gap-8 border-b border-neutral-100 pb-4">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-32" />
                </div>
            </div>

            <div className="flex flex-col gap-8">
                {/* Images Skeleton */}
                <div className="relative">
                    <Skeleton className="h-64 w-full rounded-2xl" />
                    <div className="absolute -bottom-8 left-8">
                        <Skeleton className="size-36 rounded-full border-4 border-white" />
                    </div>
                </div>

                {/* Form Elements Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="space-y-2">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-12 w-full rounded-xl" />
                        </div>
                    ))}
                    <div className="md:col-span-2 space-y-2">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-40 w-full rounded-xl" />
                    </div>
                    <div className="md:col-span-2 flex gap-4 pt-4">
                        <Skeleton className="h-12 w-48 rounded-[20px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export function TableSkeleton() {
    return (
        <div className="rounded-xl border border-neutral-100 bg-white shadow-sm overflow-hidden animate-in fade-in duration-500">
            <div className="p-6 border-b border-neutral-50 space-y-2">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-64" />
            </div>
            <div className="p-0">
                <div className="border-b border-neutral-100 bg-neutral-50/50 px-6 py-3 flex gap-4">
                    <Skeleton className="h-4 w-1/4" />
                    <Skeleton className="h-4 w-1/4" />
                    <Skeleton className="h-4 w-1/4" />
                    <Skeleton className="h-4 w-1/4" />
                </div>
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="px-6 py-4 flex gap-4 border-b border-neutral-50 last:border-0">
                        <Skeleton className="h-5 w-1/4" />
                        <Skeleton className="h-5 w-1/4" />
                        <Skeleton className="h-5 w-1/4" />
                        <Skeleton className="h-5 w-1/4" />
                    </div>
                ))}
            </div>
        </div>
    )
}
