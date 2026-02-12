'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { SectionCards } from '@/components/section-cards';
import { EscritorioSkeleton } from '@/components/dashboard-skeleton';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
    IconUsers,
    IconEdit,
    IconTrash,
    IconSearch,
    IconFilter,
    IconDots,
    IconCheck,
    IconX,
    IconShield,
    IconUser,
    IconMessageDots,
    IconPhone,
    IconMail
} from '@tabler/icons-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { API_BASE_URL } from '@/lib/api-config';

const UsersView = () => {
    console.log("🚀 UsersView Premium V4 Loaded");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [editingUser, setEditingUser] = useState(null);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(null);

    const fetchUsers = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_BASE_URL}/api/users`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            if (response.ok) {
                setUsers(data);
            } else {
                toast.error(data.error || 'Error al obtener usuarios');
            }
        } catch (error) {
            toast.error('Error de conexión');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleUpdateRole = async (userId, newRole) => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_BASE_URL}/api/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ role: newRole })
            });
            if (response.ok) {
                toast.success('Rol actualizado');
                fetchUsers();
                setEditingUser(null);
            } else {
                const data = await response.json();
                toast.error(data.error || 'Error al actualizar');
            }
        } catch (error) {
            toast.error('Error de conexión');
        }
    };

    const handleDeleteUser = async (userId) => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_BASE_URL}/api/users/${userId}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (response.ok) {
                toast.success('Usuario eliminado');
                fetchUsers();
                setIsDeleteDialogOpen(null);
            } else {
                const data = await response.json();
                toast.error(data.error || 'Error al eliminar');
            }
        } catch (error) {
            toast.error('Error de conexión');
        }
    };

    const filteredUsers = users.filter(user =>
    (user.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (loading) return <EscritorioSkeleton />;

    return (
        <div className="flex flex-col gap-8">
            {/* Users Table with Integrated Search */}
            <Card className="!border-none !shadow-xl !bg-white/70 !backdrop-blur-2xl rounded-[40px] overflow-hidden !ring-1 !ring-neutral-100/50 transition-all duration-500">
                {/* Integrated Search Header */}
                <div className="px-10 py-8 border-b border-neutral-100/50 bg-white/30">
                    <div className="relative max-w-md group">
                        <IconSearch className="absolute left-5 top-1/2 -translate-y-1/2 size-5 text-neutral-400 group-focus-within:text-neutral-900 transition-colors" />
                        <input
                            type="text"
                            placeholder="Buscar por nombre o email..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-14 pr-6 py-4 rounded-[22px] border-none bg-white text-sm font-bold focus:ring-8 focus:ring-neutral-900/5 transition-all outline-none shadow-sm hover:shadow-md placeholder:text-neutral-300 placeholder:font-medium"
                        />
                    </div>
                </div>

                <Table className="!border-none !border-collapse-separate !border-spacing-0">
                    <TableHeader className="!border-none !bg-transparent">
                        <TableRow className="!border-none hover:!bg-transparent border-b border-neutral-50/50">
                            <TableHead className="w-[300px] !font-black !text-neutral-400 uppercase text-[10px] tracking-[0.3em] pl-12 h-20 !border-none">Usuario</TableHead>
                            <TableHead className="!font-black !text-neutral-400 uppercase text-[10px] tracking-[0.3em] h-20 !border-none">Rol</TableHead>
                            <TableHead className="!font-black !text-neutral-400 uppercase text-[10px] tracking-[0.3em] h-20 !border-none">Registro</TableHead>
                            <TableHead className="!font-black !text-neutral-400 uppercase text-[10px] tracking-[0.3em] h-20 !border-none">Estado</TableHead>
                            <TableHead className="text-right pr-12 !font-black !text-neutral-400 uppercase text-[10px] tracking-[0.3em] h-20 !border-none">Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="!border-none">
                        {filteredUsers.map((user) => (
                            <TableRow key={user._id} className="group !border-none transition-all duration-300 hover:!bg-white/80">
                                <TableCell className="pl-10 py-6 !border-none">
                                    <div className="flex items-center gap-5">
                                        <div className="h-12 w-12 rounded-[18px] bg-neutral-900 flex items-center justify-center text-white text-xs font-black shrink-0 shadow-xl shadow-neutral-200 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                                            {user.firstName?.charAt(0)}{user.lastName?.charAt(0)}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm font-black text-neutral-800 group-hover:text-black transition-colors">{user.firstName} {user.lastName}</span>
                                            <span className="text-[11px] text-neutral-400 font-bold tracking-tight">{user.email}</span>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="!border-none">
                                    <Badge className={cn(
                                        "rounded-xl px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.1em] !border-none shadow-sm",
                                        user.role === 'OWNER' ? "bg-neutral-900 text-white" :
                                            user.role === 'ADMIN' ? "bg-amber-100 text-amber-700" :
                                                "bg-neutral-100 text-neutral-500 shadow-none"
                                    )}>
                                        {user.role}
                                    </Badge>
                                </TableCell>
                                <TableCell className="!border-none">
                                    <span className="text-xs text-neutral-500 font-bold">
                                        {new Date(user.createdAt).toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' })}
                                    </span>
                                </TableCell>
                                <TableCell className="!border-none">
                                    <div className="flex items-center gap-3">
                                        <div className={cn("size-2.5 rounded-full", user.isActive ? "bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.4)] animate-pulse" : "bg-neutral-300")} />
                                        <span className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">
                                            {user.isActive ? 'Activo' : 'Inactivo'}
                                        </span>
                                    </div>
                                </TableCell>
                                <TableCell className="text-right pr-10 !border-none">
                                    <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="size-10 rounded-2xl text-neutral-400 hover:text-neutral-900 hover:bg-white hover:shadow-md transition-all h-10 w-10"
                                            onClick={() => setEditingUser(user)}
                                        >
                                            <IconEdit className="size-5" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="size-10 rounded-2xl text-neutral-300 hover:text-red-600 hover:bg-red-50 hover:shadow-md transition-all h-10 w-10"
                                            onClick={() => setIsDeleteDialogOpen(user)}
                                        >
                                            <IconTrash className="size-5" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>

            {editingUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/20 backdrop-blur-[2px]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl border border-neutral-100"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-bold text-neutral-900">Editar Usuario</h3>
                            <Button variant="ghost" size="icon" className="rounded-xl" onClick={() => setEditingUser(null)}>
                                <IconX className="size-5" />
                            </Button>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-50/50">
                                <div className="h-12 w-12 rounded-xl bg-neutral-900 flex items-center justify-center text-white text-sm font-bold shrink-0">
                                    {editingUser.firstName?.charAt(0)}{editingUser.lastName?.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-neutral-800">{editingUser.firstName} {editingUser.lastName}</p>
                                    <p className="text-xs text-neutral-500 font-medium">{editingUser.email}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Asignar Rol</label>
                                <div className="grid grid-cols-2 gap-3">
                                    {['MEMBER', 'ADMIN', 'OWNER'].map((role) => (
                                        <button
                                            key={role}
                                            onClick={() => handleUpdateRole(editingUser._id, role)}
                                            className={cn(
                                                "p-4 rounded-2xl border-2 text-left transition-all",
                                                editingUser.role === role
                                                    ? "border-neutral-900 bg-neutral-50"
                                                    : "border-neutral-100 hover:border-neutral-200"
                                            )}
                                        >
                                            <p className="text-xs font-bold text-neutral-900">{role}</p>
                                            <p className="text-[10px] text-neutral-500 mt-1">
                                                {role === 'OWNER' ? 'Acceso total al sistema' :
                                                    role === 'ADMIN' ? 'Gestión limitada' : 'Acceso estándar'}
                                            </p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}

            {isDeleteDialogOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/20 backdrop-blur-[2px]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-3xl p-8 w-full max-w-sm shadow-2xl border border-neutral-100 text-center"
                    >
                        <div className="mx-auto size-16 rounded-2xl bg-red-50 flex items-center justify-center text-red-600 mb-6">
                            <IconTrash className="size-8" />
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-2">¿Eliminar usuario?</h3>
                        <p className="text-sm text-neutral-500 mb-8 font-medium px-4">
                            Esta acción no se puede deshacer. Se eliminarán todos los datos asociados a <strong>{isDeleteDialogOpen.email}</strong>.
                        </p>
                        <div className="flex gap-3">
                            <Button variant="outline" className="flex-1 rounded-xl font-bold py-6 border-neutral-100 hover:bg-neutral-50" onClick={() => setIsDeleteDialogOpen(null)}>
                                Cancelar
                            </Button>
                            <Button className="flex-1 rounded-xl bg-red-600 text-white font-bold py-6 hover:bg-red-700 shadow-lg shadow-red-200" onClick={() => handleDeleteUser(isDeleteDialogOpen._id)}>
                                Eliminar
                            </Button>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

const MessagesView = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMessages = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_BASE_URL}/api/messages`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            if (response.ok) {
                setMessages(data);
            } else {
                toast.error('Error al obtener los mensajes');
            }
        } catch (error) {
            toast.error('Error de conexión');
            console.error('Error fetching messages:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    const toggleRead = async (id) => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_BASE_URL}/api/messages/${id}/read`, {
                method: 'PATCH',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (response.ok) {
                toast.success('Estado actualizado');
                fetchMessages();
            } else {
                toast.error('Error al actualizar el estado');
            }
        } catch (error) {
            toast.error('Error de conexión');
            console.error(error);
        }
    };

    const deleteMessage = async (id) => {
        if (!window.confirm('¿Eliminar este mensaje?')) return;
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_BASE_URL}/api/messages/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (response.ok) {
                toast.success('Mensaje eliminado');
                fetchMessages();
            } else {
                toast.error('Error al eliminar el mensaje');
            }
        } catch (error) {
            toast.error('Error de conexión');
            console.error(error);
        }
    };

    if (loading) return <EscritorioSkeleton />;

    return (
        <div className="flex flex-col gap-8">
            <Card className="!border-none !shadow-xl !bg-white/70 !backdrop-blur-2xl rounded-[40px] overflow-hidden !ring-1 !ring-neutral-100/50">
                <div className="p-10 border-b border-neutral-100/50 bg-white/30">
                    <h3 className="text-xl font-bold text-neutral-900">Buzón de Contacto</h3>
                    <p className="text-sm text-neutral-500 font-medium">Gestiona las consultas recibidas desde la sección Sobre Mí.</p>
                </div>

                <div className="divide-y divide-neutral-100/50">
                    {messages.length === 0 ? (
                        <div className="p-20 text-center">
                            <IconMessageDots className="size-12 text-neutral-200 mx-auto mb-4" />
                            <p className="text-neutral-400 font-bold uppercase text-xs tracking-widest">No hay mensajes nuevos</p>
                        </div>
                    ) : (
                        messages.map((msg) => (
                            <div key={msg._id} className={cn(
                                "p-8 transition-all hover:bg-white/80 group",
                                msg.status === 'UNREAD' ? "bg-blue-50/30" : ""
                            )}>
                                <div className="flex justify-between items-start gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h4 className="font-black text-neutral-900">{msg.firstName} {msg.lastName}</h4>
                                            {msg.status === 'UNREAD' && (
                                                <Badge className="bg-blue-600 text-white !border-none text-[8px] font-black uppercase tracking-widest">Nuevo</Badge>
                                            )}
                                        </div>
                                        <div className="flex flex-wrap gap-4 mb-4">
                                            <div className="flex items-center gap-2 text-xs text-neutral-500 font-bold">
                                                <IconMail className="size-4" /> {msg.email}
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-neutral-500 font-bold">
                                                <IconPhone className="size-4" /> {msg.phone}
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium">
                                                {new Date(msg.createdAt).toLocaleDateString()}
                                            </div>
                                        </div>
                                        <div className="bg-white/50 p-6 rounded-2xl border border-neutral-100/50 text-neutral-700 text-sm leading-relaxed">
                                            {msg.content}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="rounded-xl font-bold text-xs uppercase tracking-widest"
                                            onClick={() => toggleRead(msg._id)}
                                        >
                                            {msg.status === 'UNREAD' ? 'Marcar como leído' : 'Leído'}
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="rounded-xl font-bold text-xs uppercase tracking-widest text-red-500 hover:bg-red-50 hover:text-red-600"
                                            onClick={() => deleteMessage(msg._id)}
                                        >
                                            <IconTrash className="size-4 mr-2" /> Eliminar
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </Card>
        </div>
    );
};

const PlaceholderView = ({ title, description }) => (
    <div className="flex flex-col gap-6">
        <div className="rounded-xl border border-neutral-100 bg-white p-12 text-center">
            <h2 className="text-2xl font-bold text-neutral-800 mb-2">{title}</h2>
            <p className="text-neutral-500">{description}</p>
        </div>
    </div>
);

const EscritorioView = () => (
    <div className="flex flex-col gap-6">
        <div className="grid gap-4">
            <SectionCards />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <div className="col-span-4">
                <div className="rounded-3xl bg-white/50 backdrop-blur-sm p-8 shadow-sm border-none">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-lg font-bold text-neutral-900 font-sans">Gestión de Usuarios Recientes</h3>
                            <p className="text-xs text-neutral-400 font-medium mt-1">Últimos registros en la plataforma.</p>
                        </div>
                        <Button variant="ghost" className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-900">
                            Ver todos
                        </Button>
                    </div>
                    <div className="space-y-3">
                        {[
                            { name: "Ana Castro", initials: "AC", role: "ADMIN", time: "Hace 2 horas" },
                            { name: "Luis Martínez", initials: "LM", role: "MEMBER", time: "Hace 5 horas" }
                        ].map((user, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/40 hover:bg-white transition-all group border border-transparent hover:border-neutral-100 hover:shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-xl bg-neutral-900 flex items-center justify-center text-white text-xs font-bold shadow-md">
                                        {user.initials}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-neutral-800 transition-colors group-hover:text-black">{user.name}</p>
                                        <div className="flex items-center gap-2 mt-0.5">
                                            <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">{user.role}</span>
                                            <span className="size-1 rounded-full bg-neutral-200" />
                                            <span className="text-[10px] text-neutral-400 font-medium">{user.time}</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-xl border border-neutral-100 hover:bg-neutral-900 hover:text-white transition-all shadow-sm">
                                    Perfil
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="col-span-3">
                <div className="rounded-3xl bg-white/50 backdrop-blur-sm p-8 shadow-sm border-none h-full">
                    <h3 className="text-lg font-bold text-neutral-900 mb-8 font-sans">Estadísticas del Sistema</h3>
                    <div className="space-y-4">
                        {[
                            { label: "Total de usuarios", value: "1,234", trend: "+12%" },
                            { label: "Administradores", value: "8", trend: "0%" },
                            { label: "Miembros activos", value: "1,156", trend: "+5%" },
                            { label: "Nuevos este mes", value: "89", trend: "+24%" }
                        ].map((stat, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white hover:bg-neutral-50/50 transition-all border border-neutral-50 shadow-sm cursor-default">
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[11px] text-neutral-400 font-bold uppercase tracking-wider">{stat.label}</span>
                                    <span className="text-xl font-black text-neutral-900">{stat.value}</span>
                                </div>
                                <div className={cn(
                                    "px-2 py-1 rounded-lg text-[10px] font-bold",
                                    stat.trend.startsWith('+') ? "bg-emerald-50 text-emerald-600" : "bg-neutral-50 text-neutral-400"
                                )}>
                                    {stat.trend}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-4 rounded-2xl bg-neutral-900 text-white overflow-hidden relative group">
                        <div className="relative z-10">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Estado del Servidor</p>
                            <p className="text-sm font-bold">Operativo (99.9%)</p>
                        </div>
                        <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:scale-110 transition-transform">
                            <div className="size-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

function DashboardContent() {
    const searchParams = useSearchParams();
    const view = searchParams.get('view');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 300);
        return () => clearTimeout(timer);
    }, [view]);

    const renderView = () => {
        switch (view) {
            case 'courses':
                return <PlaceholderView title="Gestión de Cursos" description="Aquí podrás crear, editar y organizar todos tus cursos." />;
            case 'documents':
                return <PlaceholderView title="Biblioteca de Documentos" description="Gestiona los recursos descargables y archivos de la plataforma." />;
            case 'users':
                return <UsersView />;
            case 'messages':
                return <MessagesView />;
            case 'reports':
                return <PlaceholderView title="Reportes y Analítica" description="Visualiza el rendimiento detallado de la plataforma y tus ventas." />;
            case 'billing':
                return <PlaceholderView title="Facturación y Pagos" description="Control de ingresos, suscripciones y transacciones de clientes." />;
            case 'settings':
                return <PlaceholderView title="Configuración Global" description="Ajustes técnicos, correos y parámetros del sistema." />;
            default:
                return <EscritorioView />;
        }
    };

    const getViewTitle = () => {
        switch (view) {
            case 'courses': return 'Gestión de Cursos';
            case 'documents': return 'Documentos';
            case 'users': return 'Gestionar Usuarios';
            case 'messages': return 'Mensajes de Contacto';
            case 'reports': return 'Reportes';
            case 'billing': return 'Facturación';
            case 'settings': return 'Configuración';
            default: return 'Panel del Propietario';
        }
    };

    if (isLoading) {
        return (
            <div className="flex flex-1 flex-col gap-6 p-6">
                <div className="flex flex-col gap-1 mb-2">
                    <div className="h-8 w-48 bg-neutral-100 animate-pulse rounded-md" />
                    <div className="h-4 w-64 bg-neutral-100 animate-pulse rounded-md mt-1" />
                </div>
                <EscritorioSkeleton />
            </div>
        );
    }

    return (
        <div className="flex flex-1 flex-col gap-8 p-8 max-w-[1600px] mx-auto w-full">
            <header className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400 mb-1">
                    <span>Dashboard</span>
                    <span className="size-1 rounded-full bg-neutral-300" />
                    <span className="text-neutral-900">{getViewTitle()}</span>
                </div>
                <h1 className="text-3xl font-black tracking-tight text-neutral-900">{getViewTitle()}</h1>
                <p className="text-neutral-500 text-sm font-medium">Gestiona y supervisa toda la actividad de tu plataforma desde un solo lugar.</p>
            </header>

            <AnimatePresence mode="wait">
                <motion.div
                    key={view || 'escritorio'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    {renderView()}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default function OwnerDashboard() {
    return (
        <Suspense fallback={<EscritorioSkeleton />}>
            <DashboardContent />
        </Suspense>
    );
}
