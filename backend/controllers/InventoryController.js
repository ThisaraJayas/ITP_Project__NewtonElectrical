import Product from "../models/InventoryModel.js"

//insert to database
export const insertProduct = async(req,res)=>{
    const {productTitle,productDescription,productPrice,productDiscount,productQty,availability,productImage}=req.body

    const newProduct = new Product({productTitle,productDescription,productPrice,productDiscount,productQty,availability,productImage})

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

export const getOneProduct = async(req,res)=>{
    const {id}=req.params
    try{
    const products = await Product.findById({_id:id})
    res.status(200).json({products})
    }catch(error){
        res.status(500).json({message:"Canot Get products"})
    }
}
//update
export const updateProduct = async(req,res)=>{
    const {id}=req.params
    const {productTitle,productDescription,productPrice,productQty,availability} = req.body;
    try{
        const products = await Product.findByIdAndUpdate(id,{
            productTitle,
            productDescription,
            productPrice,
            productQty,
            availability,
        },{ new: true })
        if(products){
            res.status(200).json({products})
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

