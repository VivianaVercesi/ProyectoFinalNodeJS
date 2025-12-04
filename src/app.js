import express from "express";
import userRoutes from "./routes/users.routes.js";

const app = express();
app.use(express.json());

app.use(express.static("public"));

app.use('/users',userRoutes);

const PORT = 3000;
    app.listen(PORT,()=>console.log(`http://localhost:${PORT}`))
    
