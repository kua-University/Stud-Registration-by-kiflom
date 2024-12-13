import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import courseRouter from "./routes/courseRouter"
dotenv.config()

const app = express()
const port = process.env.PORT || 3050
const mongoDbUrl : string = process.env.MONGODB_CONNECT_STRING as string

app.use(express.json())
app.use(express.urlencoded())

mongoose.connect(mongoDbUrl).then(()=>{
    console.log("mongodb connected successfully")
    app.listen(port,()=>{
        console.log(`server is running on port ${port}`)
    })
}).catch(error =>{
    console.log("database connection unsuccessful")
    process.exit(1)
})

app.use("/courses",courseRouter)