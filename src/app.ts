import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()
const app = express()
const port = process.env.PORT  || 5000 
const mongoDbUrl:string = process.env.MONGODB_CONNECT_STRING as string;   

mongoose.connect(mongoDbUrl).then(()=>{
  console.log("mongodb connected successfully")
  app.listen(port,()=>{
  console.log("server running")
  })
}
).catch((error)=>{
  console.log("error while connecting to the database")
})