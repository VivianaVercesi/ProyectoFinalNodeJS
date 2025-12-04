import {Router} from "express";
import {getProducts,getProductById,createNewProduct,deleteProductById,updateProductById} from "../controllers/productController.js"

const router = Router();

//Obtener todos los productos
router.get('/',getProducts);

//Obtener producto por id
router.get('/:id',getProductById);

//Crear un producto
router.post('/create',createNewProduct);

//Eliminar un producto por id
router.post('/:id',deleteProductById);

//Modificar un producto
router.post('/update',updateProductById);

export default router;
