import mongoose from "mongoose";

const CartModel =new mongoose.Schema({
    cartId:{
        type:String,
    },
    productId:{
        type:String,
    },
    totalPrice: {
        type: String,
      
    },
    productDiscount:{
        type:String,
    },
    cartQty:{
        type:String,
    },
},{timestamps: true})
const ShoppingCart = mongoose.model('cart',CartModel ) 
export default Product