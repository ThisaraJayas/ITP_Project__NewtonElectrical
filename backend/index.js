import express, { json } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import authRouter from './routes/AuthRoute.js'
import userRouter from './routes/UserRoute.js'

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO_DB).then(()=>{
    console.log("Database Connected Succesfully..");
}).catch((err)=>{
    console.log(err);
})

app.listen(3000, ()=>{
    console.log("Server Running on Port 3000");
})
app.get('/hello',(req,res)=>{
    res.json('Helloi')
})

app.use('/auth',authRouter)
app.use('/user',userRouter)
