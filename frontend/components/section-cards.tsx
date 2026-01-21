"use client"

import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card>
                <CardHeader>
                    <CardDescription>Cursos Inscritos</CardDescription>
                    <CardTitle className="text-3xl font-semibold tabular-nums">
                        0
                    </CardTitle>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="flex gap-2 font-medium text-neutral-400">
                        Sin cursos activos
                    </div>
                    <div className="text-muted-foreground">
                        Comienza tu aprendizaje hoy
                    </div>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardDescription>Cursos Completados</CardDescription>
                    <CardTitle className="text-3xl font-semibold tabular-nums">
                        0
                    </CardTitle>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="flex gap-2 font-medium text-neutral-400">
                        Sin completar
                    </div>
                    <div className="text-muted-foreground">
                        Completa lecciones para ver tu progreso
                    </div>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardDescription>Certificados</CardDescription>
                    <CardTitle className="text-3xl font-semibold tabular-nums">
                        0
                    </CardTitle>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="flex gap-2 font-medium text-neutral-400">
                        Sin certificados
                    </div>
                    <div className="text-muted-foreground">
                        Finaliza cursos para obtener tu título
                    </div>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardDescription>Calificación Promedio</CardDescription>
                    <CardTitle className="text-3xl font-semibold tabular-nums">
                        0%
                    </CardTitle>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="flex gap-2 font-medium text-neutral-400">
                        Sin evaluaciones
                    </div>
                    <div className="text-muted-foreground">
                        Realiza quizzes para ver tu nota
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
