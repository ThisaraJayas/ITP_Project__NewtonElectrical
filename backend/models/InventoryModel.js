import mongoose from "mongoose";

const InventoryScheema=new mongoose.Schema({
    productTitle:{
        type:String,
        required: true,
    },
    productDescription:{
        type:String,
        required:true,
    },
    productPrice: {
        type: String,
        required: true,
      
    },
    productDiscount:{
        type:Number,
    },
    productQty:{
        type:String,
        required:true,
    },
    availability:{
        type:String,
        default:"Available"
    }
},{timestamps: true})
const Product = mongoose.model('Product',InventoryScheema ) 
export default Product