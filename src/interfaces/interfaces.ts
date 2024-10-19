import {Document} from "mongoose"
export interface IUser {
    userName: string
    firstName: string
    middleName: string
    lastName: string
    email: string
    password: string
    role: "admin" | "student"
    DOB:Date
    DOR?:Date
    verified?:boolean
}
