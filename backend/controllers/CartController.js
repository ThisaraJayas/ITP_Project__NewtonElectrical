
export const insertToCard = async(req,res)=>{
    const {cartId,productId,totalPrice,productDiscount,cartQty}=req.body

    const newCart = new Cart({cartId,productId,totalPrice,productDiscount,cartQty})

    try{
        await newCart.save()
        res.status(200).json({newCart, message:"Added to Cart"})
    }catch(error){
        res.status(500).json({message: "Feedback UnSuccess"})
    }
}