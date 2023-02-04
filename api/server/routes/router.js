const express = require('express');
const route = express.Router();
const controller = require('../controller/control')

//api calls
route.get("/api",(req,res)=>{
    res.json({
        message : "HELLO"
    })
})
//to create new teacher  
route.post("/api/reg_teacher",controller.createTeacher);
//to find teacher using waddress
route.get("/api/get_teacher",controller.findTeacher);
//to create new student
route.post("/api/reg_student",controller.createStudent);
//to find teacher using waddress
route.get("/api/get_student",controller.findStudent);
//to create a course associated with Teacher
route.post("/api/create_course",controller.createCourse);
//fetch all courses 
route.get("/api/course",controller.getCourses)
//to get courseId count
route.get("/api/count",controller.getCount)

module.exports = route