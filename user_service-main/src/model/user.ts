import {Schema,model} from 'mongoose';
import {IUser} from "../interfaces/interfaces"

const userSchema = new Schema<IUser>({
    userName:{
        type : String,
        required :true,
        unique: true,
        trim: true
    },
    firstName: {
        type:String,
        required: true,
        trim: true,
        lowercase: true,
    },
    middleName: {
        type:String,
        required: true,
        trim: true,
        lowercase: true,
    },
    lastName: {
        type:String,
        required: true,
        trim: true,
        lowercase: true,
    },
    gender: {
        type: String,
        required : true, 
        enum : ["male","female"]
    },
    coursesEnrolled: {
        type:[String],
        default: null
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          'Please fill a valid email address',
        ],
    },
      tele: {
        type:String,
        required: true,
    },
    password: {
        type:String,
        required: true,
        lowercase: true,
    },
    role: {
        type: String,
        required: true,
        enum: ['student', 'admin'], 
    },
    DOB: {
        type: Date,
        required: true,
    },
    DOR: {
        type: Date,
        default: Date.now
    },
    verified: {
        type: Boolean,
        required: true,
        default: false  
    } 
},{
    timestamps: true,  
}
)

const userModel = model<IUser>('User', userSchema);
export default userModel;