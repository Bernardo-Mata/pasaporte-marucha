import dotenv from 'dotenv';
dotenv.config();
import app from './app';
// 👇 Importamos desde nuestra carpeta libs usando ruta relativa
import { connectDB } from './plugins'; 

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  // Inicializamos la base de datos usando nuestro "wrapper"
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
};

startServer();