import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  const MONGO_URI = process.env.MONGO_URI || '';
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ MongoDB conectado exitosamente');
  } catch (error) {
    console.error('❌ Error conectando a MongoDB:', error);
    process.exit(1);
  }
};