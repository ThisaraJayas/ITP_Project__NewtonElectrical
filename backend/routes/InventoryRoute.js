import express from "express";
import { deleteProduct, getOneProduct, getProduct, insertProduct, updateProduct } from "../controllers/InventoryController.js";
const router = express.Router()

router.post('/products',insertProduct)
router.get('/products',getProduct)
router.get('/product/:id',getOneProduct)
router.put('/product/:id',updateProduct)
router.delete('/product/:id',deleteProduct)

export default router