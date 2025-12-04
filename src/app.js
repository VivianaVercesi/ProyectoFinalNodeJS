import express from "express";
import dotenv from "dotenv";
dotenv.config();  
import { connectDB } from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";


const app = express();
app.use(express.json());

app.use(cors())

// Middlewares
app.use(express.json());

// Conexión a MongoDB
connectDB();

app.use(['/users','/usuarios'],userRoutes);
app.use(['/products','/productos'],productRoutes);

app.use((req,res) => {
    res.status(400).json({error:"Ruta no encontrada"})
})

const PORT = 3000;
app.listen(PORT,()=>console.log(`http://localhost:${PORT}`))
    
