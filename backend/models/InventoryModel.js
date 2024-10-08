import mongoose from "mongoose";

const InventoryScheema=new mongoose.Schema({
    productTitle:{
        type:String,
    },
    productDescription:{
        type:String,
    },
    productPrice: {
        type: String,
      
    },
    productDiscount:{
        type:String,
    },
    productQty:{
        type:String,
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