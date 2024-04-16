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
        type:String,
    },
    productQty:{
        type:String,
        required:true,
    },
    availability:{
        type:String,
        default:"Available"
    },
    productImage:{
        type:String,
        default:"https://www.yiwubazaar.com/resources/assets/images/default-product.jpg"
    }
},{timestamps: true})
const Product = mongoose.model('Product',InventoryScheema ) 
export default Product