import {Document,Schema} from "mongoose"
export interface IUser extends Document{
    userName: string
    firstName: string
    middleName: string
    lastName: string
    gender: "male" | "female"
    email: string
    tele: string
    password: string
    role: "admin" | "student"
    coursesEnrolled?: string[]
    DOB:Date
    DOR?:Date
    verified?:boolean
}
