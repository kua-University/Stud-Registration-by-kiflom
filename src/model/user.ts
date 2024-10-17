
import mongoose,{Document,Schema,model} from 'mongoose';
interface IUser extends Document {
    userName: string
    firstName: string
    middleName: string
    lastName: string
    email: string
    password: string
    role: "admin" | "student"
    DOB:Date
    DOR:Date
    verfied:boolean
}

const userSchema = new Schema({
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
    timestamps: true,  // Automatically creates `createdAt` and `updatedAt`
    }
)

const userModel = mongoose.model<IUser>('User', userSchema);
export default userModel;