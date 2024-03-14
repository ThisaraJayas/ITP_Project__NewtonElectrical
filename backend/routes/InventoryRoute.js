import express from "express";
import { deleteProduct, getProduct, insertProduct, updateProduct } from "../controllers/InventoryController.js";
const router = express.Router()

router.post('/products',insertProduct)
router.get('/products',getProduct)
router.post('product/:id',updateProduct)
router.delete('product/:id',deleteProduct)

export default router