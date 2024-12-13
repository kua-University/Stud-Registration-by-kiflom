import {Router} from "express"
import {
    createUser,
    getUsers,
    getSingleUser,
    deleteSingleUser,
    updateUserByID} from "../controllers/userControllers"
    
const userRouter = Router()

userRouter.get('/all',getUsers)
userRouter.post('/register',createUser)
userRouter.get('/:userName',getSingleUser)
userRouter.delete('/:userName',deleteSingleUser)
userRouter.put('/:_id',updateUserByID)

export default userRouter