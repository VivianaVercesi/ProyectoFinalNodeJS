import * as productService from "../services/productService";

export const getProducts = async (req,res) => {
    try {
        const products = await productService.getProducts();
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({msg:"Error al obtener los productos", error: error.message})
    }
}

export const getProductById = async (req,res) => {
    try {
        const {id} = req.params;
        const product = await productService.getProductById(id)
        if (!product) {
            res.status(404).json({msg:"Producto no encontrado"})
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({msg:"Error al obtener el producto"})
    }
}

export const createNewProduct = async (req,res) => {
    try {
        const newProduct = await productService.createNewProduct(req.body)
        res.status(201).json({msg:"Se ha creado el producto",producto:newProduct});
    } catch (error) {
        res.status(400).json({msg:"Error al crear un nuevo producto",error: error.message})
    }
}

export const deleteProductById = async (req,res) => {
    try {
        const {id} = req.params;
        const deleted = await productService.deleteProductById(id)
        if (!deleted) {
            res.status(404).json({msg:"Producto no encontrado"})
        }
        res.status(200).json({msg:"Producto eliminado correctamente"})
    } catch (error) {
        res.status(500).json({msg:"Error al eliminar el producto"})
    }
}

export const updateProductById = async (req,res) => {
    try {
        const {id} = req.params;
        const updated = await productService.updateProductById(id,req.body)
        if (!updated) {
            res.status(404).json({msg:"Producto no encontrado"})
        }
        res.status(200).json({msg:"Producto actualizado correctamente"})
    } catch (error) {
        res.status(500).json({msg:"Error al actualizar el producto"})
    }
}