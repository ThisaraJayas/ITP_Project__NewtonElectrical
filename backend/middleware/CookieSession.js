import Jwt from 'jsonwebtoken'

export const setTokenCookie = (res, userId, email)=>{
    const token = Jwt.sign({id: userId, email},process.env.TOKEN_KEY,{
        expiresIn: "1d",
    })
    res.cookie("tokenKey",token,{
        httpOnly:true,
        maxAge: 86400000,
        secure: process.env.NODE_ENV ==="production",
    })
}
export default setTokenCookie