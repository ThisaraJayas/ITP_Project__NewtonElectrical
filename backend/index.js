import express, { json } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import authRouter from './routes/AuthRoute.js'
import userRouter from './routes/UserRoute.js'
import feedbackRouter from './routes/FeedbackRoute.js'
import projectRouter from './routes/ProjectRoute.js'
import packageRouter from './routes/PackageRoute.js'
import serviceRouter from './routes/ServiceRoute.js'
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
app.use('/feedbacks',feedbackRouter)
app.use('/project',projectRouter)
app.use('/package',packageRouter)
app.use('/service',serviceRouter)
