import Jwt from 'jsonwebtoken'

const VerifyToken = (req,res,next)=>{
    const Token = req.cookies['tokenKey']

    if(!Token){
        return res.status(500).json({message:"Unauthorized"})
    }

    Jwt.verify(Token,process.env.TOKEN_KEY,{},(error,decoded)=>{
        if(error){
            return res.status(500).json({message: "Unauthorized"})
        }
        req.userData=decoded
        next()
    })
    if(process.env.NODE_ENV=='production'){
        res.cookie('token', token, { secure: true });
    }
}
export default VerifyToken