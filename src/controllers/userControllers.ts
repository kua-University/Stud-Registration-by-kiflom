import { Request,Response } from "express";
import bcrypt from "bcryptjs" 
import userModel from "../model/user"
import { IUser } from "../interfaces/interfaces";

//creates a brand new user
export const createUser = async (req: Request<IUser>, res: Response)=>{
    try{ 
      const {userName,email,password} = req.body
      const usrexist = await userModel.findOne({userName})
    if(usrexist){
        res.status(400).json({userAlreadyExists:true})
    }else{
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = new userModel({...req.body,password: hashedPassword})
        await newUser.save()
        res.status(201).json({successfulRegistration:true})
      }
    }catch(error){
            res.status(500).json({
            unknownError: true
        })
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
            unknownError: true
        })
      }
}

//getting a single user 
export const getSingleUser = async (req:Request,res:Response)=>{
    try{
        const {userName} = req.params
        const user = await userModel.findOne({userName})
        if(user){
            res.status(200).json({
                userFound : true,
                data : user
            })
        }else{
            res.status(404).json({
                userFound : false,
            })
        }
    }catch (error){
        res.status(500).json({
            unknowError : true
        })
    }
}


//removing a single user 
export const deleteSingleUser = async (req:Request,res:Response) =>{
    try{
        const {userName} = req.params
        const deletedUser = await userModel.findOneAndDelete({userName})
        if(!deletedUser){
            res.status(404).json({
                successfullDeletion : false
            })
        }else{
            res.status(200).json({
                successfullDeletion : true,
                data: deletedUser
            })
        }
    }catch(error){
        res.status(500).json({
            unknownError: true
        })
    }
}

//update a single user's detail
export const updateUserByID = async (req:Request,res:Response)=>{
    try{
        const _id = req.params._id
        console.log(req.body)
        const updatedUser = await userModel.findByIdAndUpdate(
            _id,
            req.body,
            { new: true, runValidators: true} 
          );
        if(!updatedUser){
            res.status(404).json({
                successfulUpdate : false
            })
        }else{
            res.status(200).json({
                successfullUpdate : true,     
                data : updatedUser
            })
        }
    }catch(error){
        res.status(500).json({
            unknownError: true
        })
    }
}