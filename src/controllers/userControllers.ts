import { Request,Response } from "express";
import bcrypt from "bcryptjs" 
import userModel from "../model/user"

interface IUser{
    userName: string
    firstName: string
    middleName: string
    lastName: string
    email: string
    password: string
    role: "admin" | "student"
    DOB:Date
    DOR?:Date
}

//creates a brand new user
export const createUser = async (req: Request<IUser>, res: Response)=>{
    try{ 
      const {userName,email,password} = req.body
      const usrexist = await userModel.findOne({userName}) || await userModel.findOne({email})
    if(usrexist){
        res.status(400).json({userAlreadyExists:true})
    }{
        const hashedPassword = bcrypt.hash(password,10)
        const newUser = new userModel({...req.body})
        await newUser.save()
        res.status(201).json({successfulRegistration:true})
      }
    }catch(error){
        console.log(error) 
    }
}


//getting the list of all the users
export const getUsers = async (req:Request,res:Response)=>{
    try {
        const users = await userModel.find();
        res.status(200).json({
            successfullFetching: true,
            data: users
        })
      } catch (error) {
        res.status(500).json({
            successfullFetching: false,
            message: 'Error fetching users',
        })
      }
}

//getting a single user
 
export const getSingleUser = async (req:Request,res:Response)=>{
    try{
        const {userName} = req.params
        const user = await userModel.findOne({userName})
        if(user){
            res.status(201).json({
                userFound : true,
                data : user
            })
        }else{
            res.status(404).json({
                userFound : false,
            })
        }
    }catch (error){
        res.status(404).json({
            unknowError : true
        })
    }
}