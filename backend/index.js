import express, { json } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import authRouter from './routes/AuthRoute.js'
import userRouter from './routes/UserRoute.js'
import feedbackRouter from './routes/FeedbackRoute.js'
<<<<<<< HEAD
import inventoryRouter from './routes/InventoryRoute.js'
=======
import projectRouter from './routes/ProjectRoute.js'
>>>>>>> c339bccbddfb410495e3d9f82766f04b4e3d07b5

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
<<<<<<< HEAD
app.use('/product',inventoryRouter)
=======
app.use('/project',projectRouter)
>>>>>>> c339bccbddfb410495e3d9f82766f04b4e3d07b5
