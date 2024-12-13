import {Router} from "express"
import {
    getAllCourses,createCourse,getCourse,deleteSingleCourse,updateCourse
} from "../controllers/courseController"

const courseRouter = Router()

courseRouter.get("/all", getAllCourses)
courseRouter.post("/add", createCourse)
courseRouter.get("/:courseCode",getCourse)
courseRouter.delete("/:courseCode",deleteSingleCourse)
courseRouter.put("/:_id",updateCourse)
export default courseRouter