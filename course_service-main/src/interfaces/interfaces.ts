import {Document,Schema} from "mongoose"
export interface ICourse extends Document{
    title : string
    courseCode : string
    instructor : string
    creditHour : number
    prerequisite? : string[]
}