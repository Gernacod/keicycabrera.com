# Keicy Cabrera Platform

Plataforma multitenant para Keicy Cabrera - Sistema completo de gestión con frontend y backend.

## 🚀 Tecnologías

### Frontend
- **Next.js 16** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos
- **HeroUI / Radix UI** - Componentes UI
- **Google OAuth** - Autenticación

### Backend
- **Node.js** - Runtime
- **Express** - Framework web
- **MongoDB** - Base de datos
- **JWT** - Autenticación
- **Multer** - Upload de archivos
- **Nodemailer** - Envío de emails

## 📁 Estructura del Proyecto

```
keicycabrera/
├── frontend/          # Aplicación Next.js
│   ├── app/          # Páginas y layouts
│   ├── components/   # Componentes reutilizables
│   ├── lib/          # Utilidades
│   └── public/       # Archivos estáticos
├── backend/           # API Node.js
│   ├── models/       # Modelos MongoDB
│   ├── routes/       # Rutas API
│   ├── middleware/   # Middleware
│   └── uploads/      # Archivos subidos
└── README.md
```

## 🛠️ Instalación y Configuración

### Prerrequisitos
- Node.js 18+
- MongoDB
- Cuenta Google para OAuth

### 1. Clonar el repositorio
```bash
git clone https://github.com/alexandernieves/keicyCabrera.git
cd keicyCabrera
```

### 2. Configurar Backend
```bash
cd backend
npm install
cp .env.example .env
# Configurar variables en .env
npm run dev
```

### 3. Configurar Frontend
```bash
cd frontend
npm install
cp .env.local.example .env.local
# Configurar NEXT_PUBLIC_API_URL y NEXT_PUBLIC_GOOGLE_CLIENT_ID
npm run dev
```

## 🔧 Variables de Entorno

### Backend (.env)
```
MONGODB_URI=mongodb+srv://...
JWT_SECRET=tu-secreto-aqui
GOOGLE_CLIENT_ID=tu-google-client-id
GOOGLE_CLIENT_SECRET=tu-google-client-secret
FRONTEND_URL=https://tu-dominio.com
NODE_ENV=development
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5001
NEXT_PUBLIC_GOOGLE_CLIENT_ID=tu-google-client-id
```

## 🚀 Despliegue

### Backend (Producción)
1. Configurar variables de entorno
2. Ejecutar `npm start`
3. Configurar reverse proxy (nginx/apache)

### Frontend (Producción)
1. Ejecutar `npm run build`
2. Ejecutar `npm start`
3. Configurar servidor web

## 📝 API Endpoints

### Autenticación
- `POST /api/auth/login` - Login con Google
- `POST /api/auth/register` - Registro
- `GET /api/auth/me` - Obtener usuario actual

### Usuarios
- `GET /api/users` - Listar usuarios
- `GET /api/user/:id` - Obtener usuario
- `PUT /api/user/:id` - Actualizar usuario
- `DELETE /api/user/:id` - Eliminar usuario

## 🤝 Contribución

1. Fork del proyecto
2. Crear feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo licencia ISC.
