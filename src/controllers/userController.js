import * as userService from "../services/userService.js";
//Obtener todos los usuarios
export const getAllUsers = async (req,res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({msg:"Error al obtener usuarios", error: error.message});
    }
}

//Obtener usuario por id
export const getUserById = async (req,res) => {
    try {
        const {id} = req.params;
        const user = await userService.getUserById(id);
        if(!user){
            res.status(404).json({msg:"Usuario no encontrado"})
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({msg:"Error al obtener usuario", error: error.message});
    }
}


//Crear usuario
export const createUser = async (req,res) => {
    try {
        const newUser = await userService.createUser(req.body);
        res.status(201).json({msg:"Usuario creado con éxito", user: newUser});
    } catch (error) {
        res.status(400).json({msg:"Error al crear el usuario", error: error.message});
    }
}


//Login
export const loginUser = async (req,res) => {
    try {
        const {email, password} = req.body;
        const user = await userService.loginUser(email, password);
        res.status(200).json({msg:"Login exitoso", user});
    } catch (error) {
        res.status(401).json({msg:"Error en login", error: error.message});
    }
}


//Actualizar usuario
export const updateUser = async (req,res) => {
    try {
        const {id} = req.params;
        const updated = await userService.updateUser(id, req.body);
        if(!updated) {
            res.status(404).json({msg:"Usuario no encontrado"})
        }
        res.status(200).json({msg:"Usuario actualizado", user: updated});
    } catch (error) {
        res.status(500).json({msg:"Error al actualizar usuario", error: error.message});
    }
}


//Eliminar usuario
export const deleteUser = async (req,res) => {
    try {
        const {id} = req.params;
        const user = await userService.deleteUser(id);
        if(!deleted) {
            res.status(404).json({msg:"Usuario no encontrado"})
        }
        res.status(200).json({msg:"Usuario eliminado correctamente"});
    } catch (error) {
        res.status(500).json({msg:"Error al eliminar usuario", error: error.message});
    }
}

