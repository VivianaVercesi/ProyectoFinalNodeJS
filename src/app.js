import express from "express";
import dotenv from "dotenv";
dotenv.config();  
import { connectDB } from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

const app = express();

app.use(cors())

// Middlewares
app.use(express.json());

// Archivos estáticos 
app.use(express.static(path.join(__dirname, "public")));

// Conexión a MongoDB
connectDB();

//Rutas API
app.use(['/users','/usuarios'],userRoutes);
app.use(['/products','/productos'],productRoutes);

// Rutas de vistas
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/login.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "views/register.html"));
});

app.get("/products-view", (req, res) => {
    res.sendFile(path.join(__dirname, "views/products.html"));
});

app.use((req,res) => {
    res.status(404).json({error:"Ruta no encontrada"})
})

const PORT = 3000;
app.listen(PORT,()=>console.log(`http://localhost:${PORT}`))
    
