import mongoose from '../plugins/mongoose.js'
import dotenv from '../plugins/dotenv.js'

dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/pasaportes'

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('MongoDB conectado')
  } catch (err) {
    console.error('Error conectando a MongoDB:', err)
    process.exit(1)
  }
}
