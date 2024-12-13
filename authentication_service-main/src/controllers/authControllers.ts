import { Request,Response } from "express"
import bcrypt from "bcryptjs"
import userModel from "../models/user"

export const login = async (req:any,res:any) =>{
    try {
        const { userName, password } = req.body;
        // const hashedPassword = await bcrypt.hash(password,10)
        const user = await userModel.findOne({ userName });
        if (!user) {
          return res.status(401).json({ successfulAuthentication:false });
        }
        const isMatch = password == user.password;
        // const isMatch = await bcrypt.compare(password,user.password)
        if (!isMatch) {
          return res.status(401).json({ successfulAuthentication:false 
        });
        }
        return res.status(200).json({ successfulAuthentication:true});
      
    } catch (error) {
        return res.status(500).json({
            successfulAuthentication: false
        })
    }
}