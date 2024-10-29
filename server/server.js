import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDBE from './configs/mongodb.js'
import userRouter from './routes/userRoutes.js'





const PORT = process.env.PORT || 4000
const app=express()

await connectDBE()  

//Intialize Middleware
app.use(express.json())
app.use(cors())
 
///API ROUTES

app.get('/',(req,res)=>res.send("Api Working"))

app.use('/api/user',userRouter)

app.listen(PORT,()=>console.log("Server Running on port " +PORT))