import {Router} from "express"
import {createUser,getUsers,getSingleUser} from "../controllers/userControllers"
const userRouter = Router()

userRouter.get('/all',getUsers)
userRouter.post('/:userName',getSingleUser)
userRouter.post('/register',createUser)

export default userRouter