import { Router } from "express";
import {getAllUsers, getUserById, createUser, loginUser, updateUser, deleteUser} from "../controllers/userController.js";

const router = Router();

//Obtener todos los usuarios
router.get('/',getAllUsers);

//Obtener usuario por id
router.get('/:id',getUserById);

//Crear un nuevo usuario
router.post('/',createUser);

//Login de usuario
router.post('/login',loginUser);

//Modificar los datos de un usuario
router.put('/:id',);

//Eliminar un usuario
router.delete('/:id',);

export default router;
