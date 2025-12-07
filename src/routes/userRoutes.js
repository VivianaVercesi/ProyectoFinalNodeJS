import { Router } from "express";
import {getAllUsers, getUserById, createUser, loginUser, updateUser, deleteUser} from "../controllers/userController.js";
import { verifyToken, isAdmin } from "../middlewares/auth.js";


const router = Router();

//Obtener todos los usuarios
router.get('/',verifyToken, isAdmin, getAllUsers);

//Obtener usuario por id
router.get('/:id',verifyToken, isAdmin, getUserById);

//Crear un nuevo usuario
router.post('/',createUser);

//Login de usuario
router.post('/login',loginUser);

//Modificar usuario
router.put('/:id',verifyToken, isAdmin, updateUser);

//Eliminar usuario
router.delete('/:id',verifyToken, isAdmin, deleteUser);

export default router;
