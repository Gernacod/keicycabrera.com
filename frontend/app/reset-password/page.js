'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { API_BASE_URL } from '@/lib/api-config';
import {
    Card,
    CardBody,
    CardHeader
} from "@heroui/react";
import { AlertCircle, X, CheckCircle2, Eye, EyeOff, Lock } from 'lucide-react';

function Toast({ message, type = 'error', onClose }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-6 right-6 z-[9999] w-full max-w-[320px] px-4 sm:px-0"
        >
            <div className={`flex items-center gap-3 p-4 rounded-2xl shadow-2xl backdrop-blur-md border ${type === 'error'
                ? 'bg-red-50/90 border-red-100 text-red-800'
                : 'bg-emerald-50/90 border-emerald-100 text-emerald-800'
                }`}>
                {type === 'error' ? <AlertCircle className="w-5 h-5 shrink-0" /> : <CheckCircle2 className="w-5 h-5 shrink-0" />}
                <p className="flex-grow text-sm font-bold tracking-tight">{message}</p>
                <button onClick={onClose} className="p-1 hover:bg-black/5 rounded-full transition-colors">
                    <X className="w-4 h-4" />
                </button>
            </div>
        </motion.div>
    );
}

function TextField({
    label,
    name,
    type = 'text',
    placeholder,
    value,
    onChange,
    required,
    error
}) {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

    return (
        <div className="flex flex-col gap-1 w-full">
            <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-slate-700">{label}</span>
                <div className="relative group">
                    <input
                        name={name}
                        type={inputType}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        required={required}
                        className={`h-14 w-full !rounded-2xl !border-0 bg-slate-50 px-5 text-slate-900 shadow-sm outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:shadow-md focus:ring-2 ${error ? '!ring-2 !ring-red-500 !bg-red-50/30' : '!ring-0 focus:ring-[#184476]/20'
                            } ${isPassword ? 'pr-12' : ''}`}
                    />
                    {isPassword && (
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 !text-slate-500 hover:!text-[#184476] hover:!bg-transparent rounded-xl transition-all"
                            tabIndex="-1"
                        >
                            {showPassword ? (
                                <EyeOff className="w-5 h-5" />
                            ) : (
                                <Eye className="w-5 h-5" />
                            )}
                        </button>
                    )}
                </div>
            </label>
        </div>
    );
}

function ResetPasswordForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState(null);

    useEffect(() => {
        if (!token) {
            setToast({ message: 'Enlace de restablecimiento inválido.', type: 'error' });
        }
    }, [token]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setToast({ message: 'Las contraseñas no coinciden.', type: 'error' });
            return;
        }

        if (password.length < 6) {
            setToast({ message: 'La contraseña debe tener al menos 6 caracteres.', type: 'error' });
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(`${API_BASE_URL}/api/auth/reset-password/${token}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Error al restablecer la contraseña.');
            }

            setToast({ message: '¡Contraseña actualizada con éxito! Redirigiendo...', type: 'success' });
            setTimeout(() => {
                router.push('/escritorio');
            }, 3000);
        } catch (err) {
            setToast({ message: err.message, type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="kc-auth min-h-screen bg-[#F0F5F9] flex flex-col font-sans">
            <AnimatePresence>
                {toast && (
                    <Toast
                        message={toast.message}
                        type={toast.type}
                        onClose={() => setToast(null)}
                    />
                )}
            </AnimatePresence>

            <div className="flex-grow flex items-center justify-center p-6 py-24">
                <Card className="w-full max-w-[480px] border-none shadow-[0_20px_60px_rgba(59,130,246,0.08)] bg-white rounded-[3rem] overflow-hidden">
                    <CardHeader className="flex flex-col gap-2 p-12 pb-6 text-center">
                        <div className="size-16 bg-blue-50 text-[#184476] rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Lock className="size-8" />
                        </div>
                        <h1 className="text-3xl font-black text-[#184476] tracking-tight mb-2">
                            Nueva Contraseña
                        </h1>
                        <p className="text-gray-400 font-medium">
                            Crea una contraseña segura para volver a acceder a tu cuenta.
                        </p>
                    </CardHeader>
                    <CardBody className="p-12 pt-0 overflow-visible">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-4">
                            <TextField
                                label="Nueva Contraseña"
                                type="password"
                                placeholder="Mínimo 6 caracteres"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <TextField
                                label="Confirmar Nueva Contraseña"
                                type="password"
                                placeholder="Repite tu contraseña"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <button
                                type="submit"
                                disabled={loading || !token}
                                className="mt-2 h-14 w-full !rounded-2xl !border-0 bg-gradient-to-r from-[#184476] to-[#0A4368] text-lg font-bold uppercase tracking-wider !text-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60"
                            >
                                {loading ? 'Actualizando…' : 'Actualizar Contraseña'}
                            </button>
                            <button
                                type="button"
                                onClick={() => router.push('/escritorio')}
                                className="text-sm font-bold text-slate-400 hover:text-[#184476] transition-colors uppercase tracking-widest text-center"
                            >
                                Volver al inicio
                            </button>
                        </form>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default function ResetPasswordPage() {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <ResetPasswordForm />
        </Suspense>
    );
}
