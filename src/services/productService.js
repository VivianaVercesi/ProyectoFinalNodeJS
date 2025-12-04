import Product from "../models/productModel.js";

//Obtener todos los productos
export const getProducts = async () => {
    const products = await Product.find();
    return products;
}

//Obtener producto por id
export const getProductById = async (id) => {
    const product = await Product.findById(id);
    return product;
}

//Crear un nuevo producto
export const createNewProduct = async (data) => {
    const newProduct = await Product.create(data);
    return newProduct;
}

//Eliminar producto por id
export const deleteProductById = async (id) => {
    const deleted = await Product.findByIdAndDelete(id);
    return deleted;
}

//Actualizar producto por id
export const updateProductById = async (id) => {
    const updated = await Product.findByIdAndUpdate(id,data,{new: true});
}