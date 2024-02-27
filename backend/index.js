import express, { json } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import UserRouter from './routes/UserRoute.js'

const app = express()
app.use(express.json())

app.listen(3000, ()=>{
    console.log("Server Running on Port 3000");
})
app.get('/hello',(req,res)=>{
    res.json('Helloi')
})

app.use('/user',UserRouter)
