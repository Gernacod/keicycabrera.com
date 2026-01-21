'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useGoogleOneTapLogin, useGoogleLogin } from '@react-oauth/google';
import { motion, AnimatePresence } from 'framer-motion';
import { API_BASE_URL } from '@/lib/api-config';
import {
	Card,
	CardBody,
	CardHeader,
	Progress
} from "@heroui/react";
import { AlertCircle, X, CheckCircle2, Eye, EyeOff } from 'lucide-react';

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

function PasswordStrength({ password }) {
	const getStrength = (pass) => {
		let score = 0;
		if (!pass) return 0;
		if (pass.length >= 8) score += 25;
		if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) score += 25;
		if (/\d/.test(pass)) score += 25;
		if (/[@$!%*?&#]/.test(pass)) score += 25;
		return score;
	};

	const strength = getStrength(password);

	// Strength configuration
	const configs = {
		0: { color: 'bg-slate-200', text: 'text-slate-400', label: 'Muy Débil' },
		25: { color: 'bg-red-500', text: 'text-red-500', label: 'Débil' },
		50: { color: 'bg-amber-500', text: 'text-amber-500', label: 'Media' },
		75: { color: 'bg-blue-500', text: 'text-blue-500', label: 'Buena' },
		100: { color: 'bg-green-500', text: 'text-green-500', label: 'Excelente' }
	};

	const config = configs[strength] || configs[0];

	if (!password) return null;

	return (
		<div className="flex flex-col gap-2 mt-2 px-1">
			<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
				<div
					className={`h-full transition-all duration-500 ease-out ${config.color}`}
					style={{ width: `${strength}%` }}
				/>
			</div>
			<div className="flex justify-between items-center">
				<span className={`text-[10px] font-black uppercase tracking-widest ${config.text}`}>
					SEGURIDAD: {config.label}
				</span>
				<span className="text-[10px] font-bold text-slate-400">
					{strength}%
				</span>
			</div>
		</div>
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
	autoComplete,
	error,
	showStrength = false
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
						autoComplete={autoComplete}
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
			{showStrength && <PasswordStrength password={value} />}
		</div>
	);
}

export default function EscritorioPage() {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const handleGoogleSuccess = async (googleResponse) => {
		setLoading(true);

		// Map response based on source (One Tap uses .credential, Custom Button uses .access_token)
		const payload = googleResponse.credential
			? { credential: googleResponse.credential }
			: { access_token: googleResponse.access_token };

		try {
			const response = await fetch(`${API_BASE_URL}/api/auth/google`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || 'Autenticación con Google fallida');
			}

			localStorage.setItem('token', data.token);
			localStorage.setItem('user', JSON.stringify(data.user));
			showNotification('¡Bienvenido de nuevo!', 'success');

			if (data.user.role === 'OWNER') {
				router.push('/dashboard/owner?success=true');
			} else {
				router.push('/dashboard/member?success=true');
			}
		} catch (err) {
			const errorMessage = err.message === 'Failed to fetch'
				? 'No se pudo conectar con el servidor. Intenta de nuevo en unos momentos.'
				: err.message;
			showNotification(errorMessage);
		} finally {
			setLoading(false);
		}
	};

	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		// Suppress non-fatal GSI errors to prevent Turbopack overlays in tunnels
		const handleRejection = (event) => {
			if (event.reason && (
				(event.reason.name === 'AbortError' && event.reason.message.includes('signal is aborted')) ||
				(event.reason.message && event.reason.message.includes('origin is not allowed'))
			)) {
				event.preventDefault();
			}
		};

		// Also intercept console.error for GSI origin issues
		const originalError = console.error;
		console.error = (...args) => {
			if (args[0] && typeof args[0] === 'string' && args[0].includes('origin is not allowed')) {
				return;
			}
			originalError.apply(console, args);
		};

		window.addEventListener('unhandledrejection', handleRejection);
		const timer = setTimeout(() => setIsMounted(true), 1500);
		return () => {
			clearTimeout(timer);
			window.removeEventListener('unhandledrejection', handleRejection);
			console.error = originalError;
		};
	}, []);

	const loginWithGoogle = useGoogleLogin({
		onSuccess: (codeResponse) => handleGoogleSuccess(codeResponse),
		onError: () => {
			console.log('Google login failed or closed');
		},
		flow: 'implicit',
	});

	useGoogleOneTapLogin({
		onSuccess: handleGoogleSuccess,
		onError: (error) => {
			// Silently fail for One Tap as it can be interrupted by browser/FedCM
			// This prevents Turbopack from picking it up as a fatal error
			console.log('One Tap disabled or interrupted:', error);
		},
		disabled: !isMounted || !process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
		use_fedcm_for_prompt: false,
	});

	const [formData, setFormData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
		firstName: '',
		lastName: '',
		organizationName: ''
	});

	const [formErrors, setFormErrors] = useState({});
	const [toast, setToast] = useState(null);
	const [activeTab, setActiveTab] = useState("login");
	const [isForgotPassword, setIsForgotPassword] = useState(false);
	const [forgotEmail, setForgotEmail] = useState('');

	// Auto-hide toast
	useEffect(() => {
		if (toast) {
			const timer = setTimeout(() => setToast(null), 5000);
			return () => clearTimeout(timer);
		}
	}, [toast]);

	const validateEmail = (email) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	const showNotification = (message, type = 'error') => {
		setToast({ message, type });
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		let newValue = value;
		let error = '';

		// Validation: Letters only for specific fields
		if (['firstName', 'lastName', 'organizationName'].includes(name)) {
			newValue = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
		}

		if (name === 'email' && value && !validateEmail(value)) {
			error = 'invalid_email';
			// We don't show toast on every keystroke, just store the error state
		}

		setFormData(prev => ({ ...prev, [name]: newValue }));
		setFormErrors(prev => ({ ...prev, [name]: error }));
	};

	const handleSubmit = async (e) => {
		if (e) e.preventDefault();

		// Final validations before submitting
		if (formErrors.email) {
			showNotification('Por favor, introduce un correo electrónico válido');
			return;
		}

		if (activeTab === 'register' && formData.password !== formData.confirmPassword) {
			showNotification('Las contraseñas no coinciden');
			return;
		}

		setLoading(true);

		if (isForgotPassword) {
			try {
				const response = await fetch(`${API_BASE_URL}/api/auth/forgot-password`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ email: forgotEmail }),
				});

				const data = await response.json();

				if (!response.ok) {
					throw new Error(data.error || 'Error al procesar la solicitud');
				}

				showNotification('Se ha enviado un correo para restablecer tu contraseña.', 'success');
				setIsForgotPassword(false);
			} catch (err) {
				showNotification(err.message);
			} finally {
				setLoading(false);
			}
			return;
		}

		const isLogin = activeTab === "login";
		const endpoint = isLogin ? 'login' : 'register';
		const payload = isLogin
			? { email: formData.email, password: formData.password }
			: {
				email: formData.email,
				password: formData.password,
				firstName: formData.firstName,
				lastName: formData.lastName,
				organizationName: formData.organizationName
			};

		try {
			const response = await fetch(`${API_BASE_URL}/api/auth/${endpoint}`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			});

			const data = await response.json();

			if (!response.ok) {
				const errorMsg = data.message || data.error || (isLogin ? 'Correo o contraseña incorrectos' : 'Error al registrarse');
				if (isLogin) {
					setFormErrors({ email: 'error', password: 'error' });
				}
				throw new Error(errorMsg);
			}

			localStorage.setItem('token', data.token);
			localStorage.setItem('user', JSON.stringify(data.user));
			showNotification(isLogin ? '¡Sesión iniciada!' : '¡Cuenta creada con éxito!', 'success');

			if (data.user.role === 'OWNER') {
				router.push('/dashboard/owner?success=true');
			} else {
				router.push('/dashboard/member?success=true');
			}

		} catch (err) {
			const finalMessage = (err.message === 'Failed to fetch' && activeTab === 'login')
				? 'Correo o contraseña incorrectos'
				: err.message === 'Failed to fetch'
					? 'Error al procesar la solicitud. Intenta de nuevo.'
					: err.message;

			if (activeTab === 'login') {
				setFormErrors({ email: 'error', password: 'error' });
			}
			showNotification(finalMessage);
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
						<h1 className="text-4xl font-black text-[#184476] tracking-tight mb-2">
							{activeTab === "login" ? '¡Bienvenido!' : '¡Regístrate!'}
						</h1>
						<p className="text-gray-400 font-medium text-lg">
							{activeTab === "login"
								? 'Accede a tus cursos y herramientas de impacto'
								: 'Únete a la comunidad de líderes que cambian realidades'}
						</p>
					</CardHeader>
					<CardBody className="p-12 pt-0 overflow-visible">
						<div className="mt-4">
							<div className="flex items-center justify-center gap-8 border-b border-slate-100 bg-transparent p-0 mb-2 overflow-hidden select-none">
								<button
									type="button"
									onClick={() => setActiveTab('login')}
									className={`relative pb-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 outline-none ${activeTab === 'login' ? '!text-[#184476]' : 'text-slate-400 hover:!text-[#184476] focus:!text-[#184476] active:!text-[#184476]'
										}`}
								>
									ACCEDER
									{activeTab === 'login' && (
										<motion.div
											layoutId="auth-tab-underline"
											className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#184476]"
										/>
									)}
								</button>
								<button
									type="button"
									onClick={() => setActiveTab('register')}
									className={`relative pb-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 outline-none ${activeTab === 'register' ? '!text-[#184476]' : 'text-slate-400 hover:!text-[#184476] focus:!text-[#184476] active:!text-[#184476]'
										}`}
								>
									REGISTRARSE
									{activeTab === 'register' && (
										<motion.div
											layoutId="auth-tab-underline"
											className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#184476]"
										/>
									)}
								</button>
							</div>
						</div>

						{activeTab === 'login' ? (
							<form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-8">
								{!isForgotPassword ? (
									<>
										<TextField
											label="Correo electrónico"
											name="email"
											type="email"
											placeholder="nombre@ejemplo.com"
											required
											autoComplete="email"
											value={formData.email}
											onChange={handleChange}
											error={formErrors.email}
										/>
										<div className="flex flex-col gap-2">
											<TextField
												label="Contraseña"
												name="password"
												type="password"
												placeholder="Tu clave secreta"
												required
												autoComplete="current-password"
												value={formData.password}
												onChange={handleChange}
												error={formErrors.password}
											/>
											<button
												type="button"
												onClick={() => setIsForgotPassword(true)}
												className="self-end text-sm font-semibold text-[#184476] hover:!text-[#184476] hover:underline transition-colors"
											>
												¿Has olvidado tu contraseña?
											</button>
										</div>
										<button
											type="submit"
											disabled={loading}
											className="mt-2 h-14 w-full !rounded-2xl !border-0 bg-gradient-to-r from-[#184476] to-[#0A4368] text-lg font-bold uppercase tracking-wider !text-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60"
										>
											{loading ? 'Cargando…' : 'Iniciar Sesión'}
										</button>
									</>
								) : (
									<motion.div
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										className="flex flex-col gap-6"
									>
										<p className="text-sm text-slate-500 text-center mb-2">
											Ingresa tu correo y te enviaremos un enlace para recuperar tu cuenta.
										</p>
										<TextField
											label="Correo electrónico"
											name="forgotEmail"
											type="email"
											placeholder="nombre@ejemplo.com"
											required
											value={forgotEmail}
											onChange={(e) => setForgotEmail(e.target.value)}
										/>
										<button
											type="submit"
											disabled={loading || !forgotEmail}
											className="h-14 w-full !rounded-2xl !border-0 bg-gradient-to-r from-[#184476] to-[#0A4368] text-lg font-bold uppercase tracking-wider !text-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60"
										>
											{loading ? 'Enviando…' : 'Enviar Enlace'}
										</button>
										<button
											type="button"
											onClick={() => setIsForgotPassword(false)}
											className="text-sm font-bold text-slate-400 hover:!text-[#184476] transition-colors uppercase tracking-widest"
										>
											Volver al inicio de sesión
										</button>
									</motion.div>
								)}

								{!isForgotPassword && (
									<>
										<div className="relative my-2">
											<div className="absolute inset-0 flex items-center">
												<span className="w-full border-t border-slate-200"></span>
											</div>
											<div className="relative flex justify-center text-xs uppercase">
												<span className="bg-white px-2 text-slate-400 font-medium">O continúa con</span>
											</div>
										</div>

										<button
											type="button"
											onClick={() => loginWithGoogle()}
											className="flex items-center justify-center gap-3 h-14 w-full !rounded-2xl border-2 border-slate-100 bg-white text-slate-700 font-bold uppercase tracking-wider shadow-sm transition-all hover:bg-slate-50 hover:border-slate-200 active:scale-[0.98]"
										>
											<svg width="20" height="20" viewBox="0 0 24 24">
												<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
												<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
												<path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" fill="#FBBC05" />
												<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
											</svg>
											Continuar con Google
										</button>
									</>
								)}
							</form>
						) : (
							<form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-8">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<TextField
										label="Nombre"
										name="firstName"
										placeholder="Juan"
										required
										autoComplete="given-name"
										value={formData.firstName}
										onChange={handleChange}
										error={formErrors.firstName}
									/>
									<TextField
										label="Apellido"
										name="lastName"
										placeholder="Pérez"
										required
										autoComplete="family-name"
										value={formData.lastName}
										onChange={handleChange}
										error={formErrors.lastName}
									/>
								</div>
								<TextField
									label="Organización"
									name="organizationName"
									placeholder="Nombre de tu proyecto"
									autoComplete="organization"
									value={formData.organizationName}
									onChange={handleChange}
									error={formErrors.organizationName}
								/>
								<TextField
									label="Correo electrónico"
									name="email"
									type="email"
									placeholder="tu@email.com"
									required
									autoComplete="email"
									value={formData.email}
									onChange={handleChange}
									error={formErrors.email}
								/>
								<TextField
									label="Contraseña"
									name="password"
									type="password"
									placeholder="Crea una clave"
									required
									autoComplete="new-password"
									value={formData.password}
									onChange={handleChange}
									error={formErrors.password}
									showStrength={true}
								/>
								<TextField
									label="Confirmar Contraseña"
									name="confirmPassword"
									type="password"
									placeholder="Repite tu clave"
									required
									autoComplete="new-password"
									value={formData.confirmPassword}
									onChange={handleChange}
								/>
								<button
									type="submit"
									disabled={loading}
									className="mt-2 h-14 w-full !rounded-2xl !border-0 bg-gradient-to-r from-[#184476] to-[#0A4368] text-lg font-bold uppercase tracking-wider !text-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60"
								>
									{loading ? 'Cargando…' : 'Crear Cuenta Gratis'}
								</button>

								<div className="relative my-2">
									<div className="absolute inset-0 flex items-center">
										<span className="w-full border-t border-slate-200"></span>
									</div>
									<div className="relative flex justify-center text-xs uppercase">
										<span className="bg-white px-2 text-slate-400 font-medium">O regístrate con</span>
									</div>
								</div>

								<button
									type="button"
									onClick={() => loginWithGoogle()}
									className="flex items-center justify-center gap-3 h-14 w-full !rounded-2xl border-2 border-slate-100 bg-white text-slate-700 font-bold uppercase tracking-wider shadow-sm transition-all hover:bg-slate-50 hover:border-slate-200 active:scale-[0.98]"
								>
									<svg width="20" height="20" viewBox="0 0 24 24">
										<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
										<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
										<path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" fill="#FBBC05" />
										<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
									</svg>
									Registrarse con Google
								</button>
							</form>
						)}
					</CardBody>
				</Card>
			</div>
		</div>
	);
}
