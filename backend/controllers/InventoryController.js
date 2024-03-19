import Product from "../models/InventoryModel.js"

//insert to database
export const insertProduct = async(req,res)=>{
    const {productTitle,productDescription,productPrice,productDiscount,productQty,availability}=req.body

    const newProduct = new Product({productTitle,productDescription,productPrice,productDiscount,productQty,availability})

    try{
        await newProduct.save()
        res.status(200).json({message: "Product Add Success"})
    }catch(error){
        res.status(500).json({message: "Product Add UnSuccess"})
    }
}
//get product from database
export const getProduct = async(req,res)=>{
    try{
    const products = await Product.find()
    res.status(200).json({products})
    }catch(error){
        res.status(500).json({message:"Canot Get products"})
    }
}
//update
export const updateProduct = async(req,res)=>{
    const {id}=req.params
    const {productTitle,productDescription,productPrice,productDiscount,productQty,availability} = req.body;
    try{
        const productUpdate = await Product.findByIdAndUpdate(id,{
            productTitle,
            productDescription,
            productPrice,
            productDiscount,
            productQty,
            availability,
        },{ new: true })
        if(productUpdate){
            res.status(200).json({message:"Updated Succesfull"})
        }
    }catch(error){
        res.status(500).json({message:"Server Error"})
    }
}
//delete
export const deleteProduct = async(req,res)=>{
    const {id}=req.params
    try{
        const productDelete = await Product.deleteOne({_id:id})
        res.status(200).json({message:"Deleted Success"})
    }catch(error){
        res.status(500).json({message:"Delete Unsuccess"})
    }
}

