import { Request, Response } from 'express';
import courseModel from "../models/course"
import { ICourse } from "../interfaces/interfaces"  

//get all the users
export const getAllCourses = async (req:Request,res:Response)=>{
    try {
        const courses = await courseModel.find();
        res.status(200).json({
            successfullFetching: true,
            data: courses
        })
      } catch (error) {
        res.status(500).json({
            unknownError: true
        })
      }
}

// add a brand new course to the database
export const createCourse = async (req:any,res:any) => {
  try {
      const { courseCode } = req.body;
      const courseExists = await courseModel.findOne({courseCode});
      
      if (!courseExists) {
          const savedCourse = new courseModel({...req.body});
          await savedCourse.save();
          
          return res.status(200).json({
              successfulRegistration: true,
              data: savedCourse
          });
      } 
      return res.status(409).json({
          successfulRegistration: false,
          courseFound: true
      });
  } catch (error) {
      return res.status(500).json({
          internalError: error
      })
  }
}

// get a single user
export const getCourse = async (req:any,res:any)=>{
    try{
      const {courseCode} = req.params
      const course = await courseModel.findOne({courseCode})
      if(course){
          res.status(200).json({
              courseFound : true,
              data : course
          })
      }else{
          res.status(404).json({
              courseFound : false,
          })
      }
  }catch (error){
      res.status(500).json({
          unknowError : true
      })
  }
}

// Delete a single user
export const deleteSingleCourse = async (req:Request,res:Response) =>{
  try{
      const {courseCode} = req.params
      const deletedCourse = await courseModel.findOneAndDelete({courseCode})
      if(!deletedCourse){
          res.status(404).json({
              successfullDeletion : false
          })
      }else{
          res.status(200).json({
              successfullDeletion : true,
              data: deletedCourse
          })
      }
  }catch(error){
      res.status(500).json({
          unknownError: true
      })
  }
}

// update course detail by Id
export const updateCourse = async (req:any,res:any) =>{
  try{
    const _id = req.params._id 
    const updatedCourse = await courseModel.findByIdAndUpdate(
        _id,
        req.body,
        { new: true, runValidators: true} 
      )
    if(!updateCourse){
        res.status(404).json({
            successfulUpdate : false
        })
    }else{
        res.status(200).json({
            successfullUpdate : true,     
            data : updateCourse
        })
    }
}catch(error){
    res.status(500).json({
        unknownError: true
    })
}
}