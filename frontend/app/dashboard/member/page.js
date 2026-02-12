'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { SectionCards } from '@/components/section-cards';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { IconBook, IconStar, IconClipboardCheck, IconHeart, IconHistory, IconMessageDots, IconUser, IconSettings, IconChevronRight, IconPlayerPlay, IconCamera, IconTrash, IconDeviceFloppy, IconUpload, IconBrandFacebook, IconBrandX, IconBrandLinkedin, IconWorld, IconBrandGithub } from '@tabler/icons-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { EscritorioSkeleton, ProfileSkeleton, TableSkeleton } from '@/components/dashboard-skeleton';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { API_BASE_URL } from '@/lib/api-config';

const EmptyState = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col items-center justify-center py-20 text-center px-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-neutral-50 mb-6">
            <Icon className="size-10 text-neutral-300" />
        </div>
        <h3 className="text-lg font-bold text-neutral-900 mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground max-w-[280px] mx-auto">{description}</p>
    </div>
);

// --- Sub-components for each view ---

const EscritorioView = () => (
    <div className="flex flex-col gap-6">
        <SectionCards />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
                <CardHeader>
                    <CardTitle>Actividad Reciente</CardTitle>
                    <CardDescription>Tus últimas acciones en la plataforma.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="py-12 flex flex-col items-center justify-center text-center">
                        <div className="size-12 rounded-full bg-neutral-50 flex items-center justify-center mb-4">
                            <IconHistory className="size-6 text-neutral-300" />
                        </div>
                        <p className="text-sm font-medium text-neutral-900">Sin actividad reciente</p>
                        <p className="text-xs text-muted-foreground">Tus progresos aparecerán aquí.</p>
                    </div>
                </CardContent>
            </Card>
            <Card className="col-span-3">
                <CardHeader>
                    <CardTitle>Resumen Rápido</CardTitle>
                    <CardDescription>Métricas clave de tu aprendizaje.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        {[
                            { label: "Cursos en progreso", value: "0" },
                            { label: "Certificados emitidos", value: "0" },
                            { label: "Promedio de calificación", value: "—/—" },
                            { label: "Tasa de finalización", value: "0%" }
                        ].map((stat, i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-neutral-50/50 border border-transparent hover:border-neutral-100 hover:bg-neutral-50 transition-all">
                                <span className="text-sm text-muted-foreground font-medium">{stat.label}</span>
                                <span className="text-sm font-bold text-neutral-900">{stat.value}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
);

const ProfileView = ({ userData: initialUserData }) => {
    const [userData, setUserData] = useState(initialUserData);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [activeTab, setActiveTab] = useState('perfil');

    // Form states
    const [formData, setFormData] = useState({
        firstName: initialUserData?.firstName || '',
        lastName: initialUserData?.lastName || '',
        username: initialUserData?.username || '',
        phoneNumber: initialUserData?.phoneNumber || '',
        occupation: initialUserData?.occupation || '',
        bio: initialUserData?.bio || ''
    });

    // Password states
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    // Social states
    const [socialLinks, setSocialLinks] = useState({
        facebook: initialUserData?.socialLinks?.facebook || '',
        twitter: initialUserData?.socialLinks?.twitter || '',
        linkedin: initialUserData?.socialLinks?.linkedin || '',
        website: initialUserData?.socialLinks?.website || '',
        github: initialUserData?.socialLinks?.github || ''
    });

    // Image previews
    const [avatarPreview, setAvatarPreview] = useState(initialUserData?.avatar || null);
    const [coverPreview, setCoverPreview] = useState(initialUserData?.coverPhoto || null);

    useEffect(() => {
        if (initialUserData) {
            setUserData(initialUserData);
            setFormData({
                firstName: initialUserData.firstName || '',
                lastName: initialUserData.lastName || '',
                username: initialUserData.username || '',
                phoneNumber: initialUserData.phoneNumber || '',
                occupation: initialUserData.occupation || '',
                bio: initialUserData.bio || ''
            });
            setSocialLinks({
                facebook: initialUserData.socialLinks?.facebook || '',
                twitter: initialUserData.socialLinks?.twitter || '',
                linkedin: initialUserData.socialLinks?.linkedin || '',
                website: initialUserData.socialLinks?.website || '',
                github: initialUserData.socialLinks?.github || ''
            });
            setAvatarPreview(initialUserData.avatar || null);
            setCoverPreview(initialUserData.coverPhoto || null);
        }
    }, [initialUserData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = async (e, type) => {
        const file = e.target.files[0];
        if (!file) return;

        // Preview
        const reader = new FileReader();
        reader.onloadend = () => {
            if (type === 'avatar') setAvatarPreview(reader.result);
            else setCoverPreview(reader.result);
        };
        reader.readAsDataURL(file);

        // Upload
        const formDataUpload = new FormData();
        formDataUpload.append(type, file);

        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_BASE_URL}/api/user/upload-images`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` },
                body: formDataUpload
            });

            const data = await response.json();
            if (response.ok) {
                // Update local user data
                const updatedUser = { ...userData, [type]: data[type] };
                setUserData(updatedUser);
                localStorage.setItem('user', JSON.stringify({ ...JSON.parse(localStorage.getItem('user')), [type]: data[type] }));
                setMessage({ text: 'Imagen actualizada', type: 'success' });
            } else {
                setMessage({ text: data.error || 'Error al subir imagen', type: 'error' });
            }
        } catch (error) {
            setMessage({ text: 'Error de conexión', type: 'error' });
        }
    };

    const handleProfileSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_BASE_URL}/api/user/profile`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (response.ok) {
                setMessage({ text: 'Perfil actualizado con éxito', type: 'success' });
                // Update local storage and state
                const fullUpdatedUser = { ...userData, ...data.user };
                setUserData(fullUpdatedUser);
                localStorage.setItem('user', JSON.stringify({ ...JSON.parse(localStorage.getItem('user')), ...data.user }));
            } else {
                setMessage({ text: data.error || 'Error al actualizar', type: 'error' });
            }
        } catch (error) {
            setMessage({ text: 'Error de conexión', type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_BASE_URL}/api/user/change-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(passwordData)
            });

            const data = await response.json();
            if (response.ok) {
                setMessage({ text: 'Contraseña actualizada con éxito', type: 'success' });
                setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
            } else {
                setMessage({ text: data.error || 'Error al actualizar contraseña', type: 'error' });
            }
        } catch (error) {
            setMessage({ text: 'Error de conexión', type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    const handleSocialSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_BASE_URL}/api/user/social-links`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(socialLinks)
            });

            const data = await response.json();
            if (response.ok) {
                setMessage({ text: 'Enlaces sociales actualizados', type: 'success' });
                // Update local storage
                localStorage.setItem('user', JSON.stringify({
                    ...JSON.parse(localStorage.getItem('user')),
                    socialLinks: data.socialLinks
                }));
            } else {
                setMessage({ text: data.error || 'Error al actualizar', type: 'error' });
            }
        } catch (error) {
            setMessage({ text: 'Error de conexión', type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-6 max-w-5xl mx-auto w-full">
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-neutral-900 font-sans">Ajustes</h2>

                {/* Tabs Minimalistas */}
                <div className="flex items-center gap-8 border-b border-neutral-100 bg-transparent p-0 mb-4 overflow-x-auto no-scrollbar">
                    {['Perfil', 'Contraseña', 'Perfiles sociales'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab.toLowerCase())}
                            className={cn(
                                "relative pb-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap",
                                activeTab === tab.toLowerCase() ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-600"
                            )}
                        >
                            {tab}
                            {activeTab === tab.toLowerCase() && (
                                <motion.div
                                    layoutId="profile-tab-underline"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900"
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {activeTab === 'perfil' && (
                <div className="flex flex-col gap-8">
                    {/* Imagens Header Section */}
                    <div className="relative">
                        {/* Cover Photo */}
                        <div className="relative group h-64 w-full rounded-2xl bg-neutral-100 overflow-hidden shadow-sm border border-neutral-100">
                            {coverPreview ? (
                                <img src={coverPreview} alt="Cover" className="h-full w-full object-cover" />
                            ) : (
                                <div className="h-full w-full bg-gradient-to-br from-neutral-200 to-neutral-50 flex items-center justify-center">
                                    <IconUpload className="size-10 text-neutral-300" />
                                </div>
                            )}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <label className="cursor-pointer bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest text-neutral-900 hover:bg-white transition-all shadow-xl flex items-center gap-2">
                                    <IconCamera className="size-4" />
                                    <span>Subir una foto de portada</span>
                                    <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageUpload(e, 'coverPhoto')} />
                                </label>
                            </div>
                            {coverPreview && (
                                <button className="absolute top-4 right-4 p-2 rounded-xl bg-white/90 backdrop-blur-sm text-neutral-600 hover:text-red-500 transition-all shadow-lg opacity-0 group-hover:opacity-100">
                                    <IconTrash className="size-5" />
                                </button>
                            )}
                        </div>

                        {/* Avatar */}
                        <div className="absolute -bottom-8 left-8">
                            <div className="relative group size-36 rounded-full border-4 border-white bg-white shadow-2xl overflow-hidden">
                                {avatarPreview ? (
                                    <img src={avatarPreview} alt="Avatar" className="h-full w-full object-cover shrink-0" />
                                ) : (
                                    <div className="h-full w-full bg-neutral-100 flex items-center justify-center">
                                        <IconUser className="size-12 text-neutral-300" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-[2px]">
                                    <label className="cursor-pointer p-2 bg-white rounded-full text-neutral-900 hover:scale-110 transition-all shadow-xl">
                                        <IconCamera className="size-5" />
                                        <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageUpload(e, 'avatar')} />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="mt-1 flex justify-end px-4">
                            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">
                                Tamaño: 200x200 (perfil) | 700x430 (portada)
                            </p>
                        </div>
                    </div>

                    {/* Form Section */}
                    <Card className="mt-4 border-none shadow-none bg-transparent">
                        <CardContent className="p-0">
                            <form onSubmit={handleProfileSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-bold text-neutral-700 font-sans tracking-tight">Nombre</label>
                                    <input
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder="Ej. Keicy"
                                        className="h-12 w-full px-4 rounded-xl border border-neutral-100 bg-neutral-50/50 text-sm font-medium focus:bg-white focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-200 transition-all outline-none shadow-sm"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-bold text-neutral-700 font-sans tracking-tight">Apellidos</label>
                                    <input
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder="Ej. Cabrera"
                                        className="h-12 w-full px-4 rounded-xl border border-neutral-100 bg-neutral-50/50 text-sm font-medium focus:bg-white focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-200 transition-all outline-none shadow-sm"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-bold text-neutral-700 font-sans tracking-tight">Nombre de usuario</label>
                                    <input
                                        name="username"
                                        value={formData.username}
                                        onChange={handleInputChange}
                                        placeholder="keicycabrera"
                                        className="h-12 w-full px-4 rounded-xl border border-neutral-100 bg-neutral-200/20 text-sm font-medium text-neutral-500 cursor-not-allowed outline-none"
                                        readOnly
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-bold text-neutral-700 font-sans tracking-tight">Número de teléfono</label>
                                    <input
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleInputChange}
                                        placeholder="Número de teléfono"
                                        className="h-12 w-full px-4 rounded-xl border border-neutral-100 bg-neutral-50/50 text-sm font-medium focus:bg-white focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-200 transition-all outline-none shadow-sm"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5 md:col-span-2">
                                    <label className="text-sm font-bold text-neutral-700 font-sans tracking-tight">Habilidad/Ocupación</label>
                                    <input
                                        name="occupation"
                                        value={formData.occupation}
                                        onChange={handleInputChange}
                                        placeholder="Ej. Diseñador de interfaces y experiencias de usuario"
                                        className="h-12 w-full px-4 rounded-xl border border-neutral-100 bg-neutral-50/50 text-sm font-medium focus:bg-white focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-200 transition-all outline-none shadow-sm"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5 md:col-span-2">
                                    <label className="text-sm font-bold text-neutral-700 font-sans tracking-tight">Biografía</label>
                                    <div className="rounded-xl border border-neutral-100 bg-neutral-50/50 overflow-hidden focus-within:ring-2 focus-within:ring-neutral-900/10 focus-within:bg-white transition-all shadow-sm">
                                        <div className="flex items-center gap-1 p-2 border-b border-neutral-100 bg-neutral-50/80">
                                            {/* WYSIWYG Mock toolbar */}
                                            {['B', 'I', 'U'].map(btn => (
                                                <button key={btn} type="button" className="size-8 rounded-lg flex items-center justify-center text-xs font-bold text-neutral-600 hover:bg-white transition-all">{btn}</button>
                                            ))}
                                            <div className="h-4 w-px bg-neutral-200 mx-1" />
                                            <IconMessageDots className="size-4 text-neutral-400 mx-2" />
                                        </div>
                                        <textarea
                                            name="bio"
                                            value={formData.bio}
                                            onChange={handleInputChange}
                                            rows={6}
                                            className="w-full p-4 bg-transparent text-sm font-medium outline-none resize-none"
                                            placeholder="Cuenta algo sobre ti..."
                                        />
                                    </div>
                                </div>

                                <div className="md:col-span-2 flex flex-col gap-4 mt-4">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-neutral-700 font-sans tracking-tight">Mostrar el nombre públicamente como</label>
                                        <select className="h-12 w-full px-4 rounded-xl border border-neutral-100 bg-neutral-50/50 text-sm font-medium focus:bg-white outline-none shadow-sm appearance-none">
                                            <option>{formData.firstName} {formData.lastName}</option>
                                            <option>{formData.username}</option>
                                            <option>{formData.firstName}</option>
                                        </select>
                                        <p className="text-[11px] text-muted-foreground leading-relaxed mt-1">
                                            El nombre a mostrar se visualiza en todos los campos públicos, como el nombre del autor, el nombre del instructor, el nombre del estudiante y el nombre que se imprimirá en el certificado.
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4 mt-4">
                                        <Button
                                            type="submit"
                                            disabled={loading}
                                            className="h-12 px-8 rounded-[20px] !bg-[#184476] !text-white font-bold text-sm hover:!bg-[#184476] transition-all shadow-lg disabled:opacity-50 border-none"
                                        >
                                            {loading ? 'Guardando...' : 'Actualizar el perfil'}
                                        </Button>

                                        {message && (
                                            <p className={cn(
                                                "text-sm font-bold",
                                                message.type === 'success' ? "text-emerald-600" : "text-red-500"
                                            )}>
                                                {message.text}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            )}

            {activeTab === 'contraseña' && (
                <div className="flex flex-col gap-8 max-w-2xl">
                    <Card className="border-none shadow-none bg-transparent">
                        <CardContent className="p-0">
                            <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-6">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-bold text-neutral-700 font-sans tracking-tight">Contraseña actual</label>
                                    <input
                                        type="password"
                                        value={passwordData.currentPassword}
                                        onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                                        placeholder="Ingresa tu contraseña actual"
                                        className="h-12 w-full px-4 rounded-xl border border-neutral-100 bg-neutral-50/50 text-sm font-medium focus:bg-white focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-200 transition-all outline-none shadow-sm"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-bold text-neutral-700 font-sans tracking-tight">Nueva contraseña</label>
                                    <input
                                        type="password"
                                        value={passwordData.newPassword}
                                        onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                                        placeholder="Mínimo 6 caracteres"
                                        className="h-12 w-full px-4 rounded-xl border border-neutral-100 bg-neutral-50/50 text-sm font-medium focus:bg-white focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-200 transition-all outline-none shadow-sm"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-bold text-neutral-700 font-sans tracking-tight">Confirmar nueva contraseña</label>
                                    <input
                                        type="password"
                                        value={passwordData.confirmPassword}
                                        onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                                        placeholder="Repite la nueva contraseña"
                                        className="h-12 w-full px-4 rounded-xl border border-neutral-100 bg-neutral-50/50 text-sm font-medium focus:bg-white focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-200 transition-all outline-none shadow-sm"
                                    />
                                </div>

                                <div className="flex items-center gap-4 mt-2">
                                    <Button
                                        type="submit"
                                        disabled={loading}
                                        className="h-12 px-8 rounded-[20px] !bg-[#184476] !text-white font-bold text-sm hover:!bg-[#184476] transition-all shadow-lg disabled:opacity-50 border-none"
                                    >
                                        {loading ? 'Actualizando...' : 'Cambiar contraseña'}
                                    </Button>

                                    {message && (
                                        <p className={cn(
                                            "text-sm font-bold",
                                            message.type === 'success' ? "text-emerald-600" : "text-red-500"
                                        )}>
                                            {message.text}
                                        </p>
                                    )}
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            )}

            {activeTab === 'perfiles sociales' && (
                <div className="flex flex-col gap-8 w-full max-w-2xl">
                    <Card className="border-none shadow-none bg-transparent">
                        <CardHeader className="px-0 pb-6">
                            <CardTitle className="text-lg font-bold text-neutral-800">Enlaces a perfiles sociales</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <form onSubmit={handleSocialSubmit} className="flex flex-col gap-6">
                                {[
                                    { id: 'facebook', label: 'Facebook', icon: IconBrandFacebook, placeholder: 'https://facebook.com/username' },
                                    { id: 'twitter', label: 'X', icon: IconBrandX, placeholder: 'https://x.com/username' },
                                    { id: 'linkedin', label: 'LinkedIn', icon: IconBrandLinkedin, placeholder: 'https://linkedin.com/username' },
                                    { id: 'website', label: 'Web', icon: IconWorld, placeholder: 'https://example.com/' },
                                    { id: 'github', label: 'GitHub', icon: IconBrandGithub, placeholder: 'https://github.com/username' }
                                ].map((item) => (
                                    <div key={item.id} className="flex items-center gap-6">
                                        <div className="flex items-center gap-4 w-40 shrink-0">
                                            <item.icon className="size-5 text-neutral-900" />
                                            <span className="text-sm font-semibold text-neutral-700">{item.label}</span>
                                        </div>
                                        <input
                                            value={socialLinks[item.id]}
                                            onChange={(e) => setSocialLinks({ ...socialLinks, [item.id]: e.target.value })}
                                            placeholder={item.placeholder}
                                            className="h-12 flex-1 px-4 rounded-xl border border-neutral-100 bg-neutral-50/50 text-sm font-medium focus:bg-white focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-200 transition-all outline-none shadow-sm"
                                        />
                                    </div>
                                ))}

                                <div className="flex items-center gap-4 mt-4">
                                    <Button
                                        type="submit"
                                        disabled={loading}
                                        className="h-12 px-8 rounded-[20px] !bg-[#184476] !text-white font-bold text-sm hover:!bg-[#184476] transition-all shadow-lg disabled:opacity-50 border-none"
                                    >
                                        {loading ? 'Guardando...' : 'Actualizar perfiles'}
                                    </Button>

                                    {message && (
                                        <p className={cn(
                                            "text-sm font-bold",
                                            message.type === 'success' ? "text-emerald-600" : "text-red-500"
                                        )}>
                                            {message.text}
                                        </p>
                                    )}
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
};

const CoursesView = () => (
    <div className="flex flex-col gap-6">
        <Card>
            <CardHeader>
                <CardTitle>Cursos Inscritos</CardTitle>
                <CardDescription>Listado de cursos en los que estás participando.</CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="all" className="w-full">
                    <TabsList>
                        <TabsTrigger value="all">Todos los cursos</TabsTrigger>
                        <TabsTrigger value="active">Activos</TabsTrigger>
                        <TabsTrigger value="completed">Completados</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all" className="mt-6">
                        <EmptyState
                            icon={IconBook}
                            title="No tienes cursos inscritos"
                            description="Aquí aparecerán los cursos que compres para comenzar tu formación."
                        />
                    </TabsContent>
                    <TabsContent value="active" className="mt-6">
                        <EmptyState
                            icon={IconPlayerPlay}
                            title="Sin cursos activos"
                            description="Actualmente no tienes cursos en progreso."
                        />
                    </TabsContent>
                    <TabsContent value="completed" className="mt-6">
                        <EmptyState
                            icon={IconStar}
                            title="Cero cursos completados"
                            description="Cuando finalices un curso, podrás ver tu progreso y certificados aquí."
                        />
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    </div>
);

const ReviewsView = () => (
    <Card>
        <CardHeader>
            <CardTitle>Mis Reseñas</CardTitle>
            <CardDescription>Opiniones que has dejado en los cursos.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="text-center py-20 text-muted-foreground">
                <IconStar className="mx-auto h-12 w-12 opacity-20 mb-4" />
                <p>Aún no has escrito ninguna reseña.</p>
            </div>
        </CardContent>
    </Card>
);

const QuizzesView = () => (
    <Card>
        <CardHeader>
            <CardTitle>Mis intentos de cuestionarios</CardTitle>
            <CardDescription>Historial de tus evaluaciones y resultados.</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
            <EmptyState
                icon={IconClipboardCheck}
                title="Sin cuestionarios realizados"
                description="Aquí verás los resultados de tus evaluaciones una vez que las completes."
            />
        </CardContent>
    </Card>
);

const WishlistView = () => (
    <Card>
        <CardHeader>
            <CardTitle>Lista de Deseos</CardTitle>
            <CardDescription>Cursos que te interesan para el futuro.</CardDescription>
        </CardHeader>
        <CardContent>
            <EmptyState
                icon={IconHeart}
                title="Tu lista de deseos está vacía"
                description="Añade cursos que te interesen para verlos aquí más tarde."
            />
        </CardContent>
    </Card>
);

const OrdersView = () => (
    <Card>
        <CardHeader>
            <CardTitle>Historial de Pedidos</CardTitle>
            <CardDescription>Registro de tus compras en la plataforma.</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
            <EmptyState
                icon={IconHistory}
                title="No hay pedidos registrados"
                description="Aquí aparecerá el historial detallado de tus compras y facturas."
            />
        </CardContent>
    </Card>
);

const QAView = () => (
    <Card>
        <CardHeader>
            <CardTitle>Pregunta y Respuesta</CardTitle>
            <CardDescription>Interacciones con instructores y otros estudiantes.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="text-center py-20 text-muted-foreground">
                <IconMessageDots className="mx-auto h-12 w-12 opacity-20 mb-4" />
                <p>No has realizado ninguna pregunta aún.</p>
            </div>
        </CardContent>
    </Card>
);

const SettingsView = () => {
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    const handleDeleteAccount = async () => {
        setIsDeleting(true);
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_BASE_URL}/api/user/account`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (response.ok) {
                // Clear all local data
                localStorage.clear();
                // Redirect to home
                window.location.href = '/';
            } else {
                toast.error('Error al eliminar la cuenta. Inténtalo de nuevo.');
            }
        } catch (error) {
            console.error('Error deleting account:', error);
            toast.error('Error de conexión.');
        } finally {
            setIsDeleting(false);
            setShowDeleteDialog(false);
        }
    };

    return (
        <div className="flex flex-col gap-6 max-w-2xl mx-auto w-full animate-in fade-in duration-500">
            <Card className="border-red-100 bg-red-50/20 shadow-none overflow-hidden rounded-2xl">
                <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-bold text-red-600">Zona de Peligro</CardTitle>
                    <CardDescription className="text-red-500/80 font-medium">
                        Eliminar tu cuenta es una acción permanente. Perderás el acceso a todos tus cursos, certificados y datos de progreso de forma inmediata e irreversible.
                    </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                    <Button
                        onClick={() => setShowDeleteDialog(true)}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold uppercase tracking-widest text-[10px] h-12 px-8 rounded-xl shadow-lg shadow-red-500/10 border-none transition-all hover:scale-[1.02]"
                    >
                        Eliminar mi cuenta definitivamente
                    </Button>
                </CardContent>
            </Card>

            <AnimatePresence>
                {showDeleteDialog && (
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => !isDeleting && setShowDeleteDialog(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white p-8 shadow-2xl border border-neutral-100"
                        >
                            <div className="flex flex-col items-center text-center gap-6">
                                <div className="h-20 w-20 rounded-2xl bg-red-50 flex items-center justify-center rotate-3 scale-110">
                                    <IconTrash className="size-10 text-red-500 -rotate-3" />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h2 className="text-xl font-bold text-neutral-900 font-sans tracking-tight">¿Estás completamente seguro?</h2>
                                    <p className="text-sm text-neutral-500 leading-relaxed font-medium">
                                        Esta acción no se puede deshacer. Todos tus certificados, cursos y datos personales serán borrados de nuestros servidores para siempre.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-10 flex gap-3">
                                <Button
                                    variant="outline"
                                    disabled={isDeleting}
                                    onClick={() => setShowDeleteDialog(false)}
                                    className="flex-1 rounded-xl font-bold uppercase tracking-wider text-[10px] h-12 border-neutral-200 hover:bg-neutral-50"
                                >
                                    No, mantener cuenta
                                </Button>
                                <Button
                                    onClick={handleDeleteAccount}
                                    disabled={isDeleting}
                                    className="flex-1 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold uppercase tracking-wider text-[10px] h-12 shadow-lg shadow-red-500/20 border-none"
                                >
                                    {isDeleting ? 'Eliminando...' : 'Sí, eliminar todo'}
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

// --- Main Dashboard Component ---

function DashboardContent() {
    const searchParams = useSearchParams();
    const view = searchParams.get('view');
    const [userData, setUserData] = useState(null);
    const [isViewLoading, setIsViewLoading] = useState(true);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUserData(JSON.parse(user));
        }

        // Simulate initial load or fetching load
        const timer = setTimeout(() => {
            setIsViewLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    // Also trigger loading state when view changes
    useEffect(() => {
        setIsViewLoading(true);
        const timer = setTimeout(() => {
            setIsViewLoading(false);
        }, 600);
        return () => clearTimeout(timer);
    }, [view]);

    const renderView = () => {
        if (isViewLoading) {
            switch (view) {
                case 'profile': return <ProfileSkeleton />;
                case 'courses':
                case 'reviews':
                case 'quizzes':
                case 'wishlist':
                case 'orders':
                case 'qa': return <TableSkeleton />;
                default: return <EscritorioSkeleton />;
            }
        }

        switch (view) {
            case 'profile': return <ProfileView userData={userData} />;
            case 'courses': return <CoursesView />;
            case 'reviews': return <ReviewsView />;
            case 'quizzes': return <QuizzesView />;
            case 'wishlist': return <WishlistView />;
            case 'orders': return <OrdersView />;
            case 'qa': return <QAView />;
            case 'settings': return <SettingsView />;
            default: return <EscritorioView />;
        }
    };

    const getViewTitle = () => {
        switch (view) {
            case 'profile': return 'Mi Perfil';
            case 'courses': return 'Cursos Inscritos';
            case 'reviews': return 'Mis Reseñas';
            case 'quizzes': return 'Intentos de Cuestionarios';
            case 'wishlist': return 'Lista de Deseos';
            case 'orders': return 'Historial de Pedidos';
            case 'qa': return 'Preguntas y Respuestas';
            case 'settings': return 'Ajustes de Cuenta';
            default: return 'Escritorio';
        }
    };

    return (
        <div className="flex flex-1 flex-col gap-6 p-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">{getViewTitle()}</h1>
                    <p className="text-muted-foreground">Bienvenido a tu panel de control personal.</p>
                </div>
            </div>
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

export default function MemberDashboard() {
    return (
        <Suspense fallback={
            <div className="flex items-center justify-center min-h-[400px]">
                <p className="text-muted-foreground animate-pulse">Cargando dashboard...</p>
            </div>
        }>
            <DashboardContent />
        </Suspense>
    );
}
