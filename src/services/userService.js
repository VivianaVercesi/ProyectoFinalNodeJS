import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//Obtener todos los usuarios
export const getAllUsers = async (params) => {
    return await User.find();
}

//Obtener usuario por id
export const getUserById = async (id) => {
    return await User.findById(id);
}

//Crear usuario
export const createUser = async (userData) => {
    const {email, password, name, role} = userData
    
    const userExist = await User.findOne({email});
    if (userExist) throw new Error("Email ya registrado");
    
    const hashedPassword = await bcrypt.hash(password,10);
    
    const newUser = new User({
        email,
        name,
        password: hashedPassword,
        role: role || "user" 
    })
    return await newUser.save();
}

//Login de usuario
export const loginUser = async (email, password) => {
    const user = await User.findOne({email});
    if (!user) throw new Error("Usuario no encontrado");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Contraseña incorrecta");

     // Crear token
    const token = jwt.sign(
        {
            id: user._id,
            email: user.email,
            role: user.role
        },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES }
    );
    return {token, user};
}

//Actualizar usuario
export const updateUser = async (id,userData) => {
    if (data.password) {
        data.password = await bcrypt.hash(data.password, 10);
    }
    return await User.findByIdAndUpdate(id,userData, {new: true});
}


//Eliminar usuario
export const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
}