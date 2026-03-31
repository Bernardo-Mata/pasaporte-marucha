import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

const app: Application = express();

// ==========================================
// 1. MIDDLEWARES DE SEGURIDAD
// ==========================================
app.use(helmet());

// Configuración estricta de CORS usando nuestra variable de entorno
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true, // Permite el envío de cookies de sesión o JWT
}));

// Parseo del body en formato JSON
app.use(express.json());

// ==========================================
// 2. RATE LIMITING
// ==========================================
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Límite de 100 peticiones por IP
  message: { error: 'Demasiadas peticiones desde esta IP, por favor intenta de nuevo más tarde.' }
});

// Aplicamos el límite solo a las rutas de la API
app.use('/api', limiter);

// ==========================================
// 3. RUTAS
// ==========================================
// Ruta de prueba para verificar que todo funciona
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Servidor funcionando correctamente 🚀' });
});

// Aquí iremos agregando nuestras rutas reales más adelante, por ejemplo:
// import authRoutes from './routes/auth.routes';
// app.use('/api/auth', authRoutes);

export default app;