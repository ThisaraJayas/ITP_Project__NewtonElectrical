import express, { json } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
import authRouter from './routes/AuthRoute.js'
import userRouter from './routes/UserRoute.js'
import feedbackRouter from './routes/FeedbackRoute.js'
import projectRoutes from './routes/ProjectRoute.js'
import SheduleRouter from './routes/SheduleRoute.js'
import packageRouter from './routes/PackageRoute.js'
import serviceRouter from './routes/ServiceRoute.js'
import jobRouter from './routes/JobRoute.js';
import cvRouter from './routes/CVRoute.js';
import InventoryRouter from './routes/InventoryRoute.js'

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies

// CORS configuration
const corsOptions = {
    origin: '*', // Your front-end origin
    credentials: true, // Allow credentials (cookies, authentication)
    optionsSuccessStatus: 200 // Legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions)); // Apply CORS middleware

// Connect to MongoDB
mongoose.connect(process.env.MONGO_DB).then(()=>{
    console.log("Database Connected Succesfully..");
}).catch((err)=>{
    console.log(err);
})

// Routes
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/feedbacks', feedbackRouter);
app.use('/project', projectRoutes);
app.use('/shedule', SheduleRouter);
app.use('/package', packageRouter);
app.use('/service', serviceRouter);
app.use('/jobs', jobRouter);
app.use('/cv', cvRouter);
app.use('/product',InventoryRouter)

// Example route
app.get('/hello', (req, res) => {
    res.json({ message: 'Hello World!' });
});

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
