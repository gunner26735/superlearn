const TeacherDB = require('../model/model_teacher')
const StudentDB = require('../model/model_student')
const CourseDB = require('../model/model_course');
const courseDB = require('../model/model_course');
const {Counter} = require('../model/model_seq')

/*
TO create new Teacher
*/
exports.createTeacher = (req,res)=>{
    
    if (!req.body) {
        res.status(400).send({ message: 'content cannot be empty' });
        return;
      }
      // create teacher
    
      var teacher = new TeacherDB({
        walletAddress: req.body.walletAddress,
        tName: req.body.tName,
        tInstName: req.body.tInstName,
        tSpecialised: req.body.tSpecialised,
        tExperience: req.body.tExperience,
        tPhoto : req.body.tPhoto
      })
    
      teacher
        .save(teacher)
        .then(data => {
          res.status(200).send({ message: "Data inserted successfully" })
        }).catch(err => {
          res.status(500).send({ message: "Some ERROR" })
          return;
        })
}

// TO Find Teacher
exports.findTeacher = (req,res)=>{
    if(req.query.wAddress){
        TeacherDB.findOne({walletAddress : req.query.wAddress}).then(data=>{
            if(!data){
                res.status(404).send("None")
            }else{
                res.send(data);
            }
        }).catch(err=>{
            res.status(500).send({message:err.message || "some error occurred "})
        })
    }
    else{
        TeacherDB.find().then(data=>{
            if(!data){
                res.status(404).send("None")
            }else{
                res.send(data);
            }
        }).catch(err=>{
            res.status(500).send({message:err.message || "some error occurred "})
        })
    }
}

/*
TO create new Student
*/
exports.createStudent = (req,res)=>{
    
    if (!req.body) {
        res.status(400).send({ message: 'content cannot be empty' });
        return;
      }
      // create teacher
    
      var student = new StudentDB({
        walletAddress: req.body.walletAddress,
        sName: req.body.sName,
        sBio: req.body.sBio,
        sUniName: req.body.sUniName,
        tPhoto : req.body.tPhoto
      })
    
      student
        .save(student)
        .then(data => {
          res.status(200).send({ message: "Data inserted successfully" })
        }).catch(err => {
          res.status(500).send({ message: "Some ERROR" })
          return;
        })
}

// TO Find Student
exports.findStudent = (req,res)=>{
    if(req.query.wAddress){
        StudentDB.findOne({walletAddress : req.query.wAddress}).then(data=>{
            if(!data){
                res.status(404).send("None")
            }else{
                res.send(data);
            }
        }).catch(err=>{
            res.status(500).send({message:err.message || "some error occurred "})
        })
    }
    else{
        StudentDB.find().then(data=>{
            if(!data){
                res.status(404).send("None")
            }else{
                res.send(data);
            }
        }).catch(err=>{
            res.status(500).send({message:err.message || "some error occurred "})
        })
    }
}

//To create a course 
exports.createCourse = (req,res)=>{
    if (!req.body) {
        res.status(400).send({ message: 'content cannot be empty' });
        return;
      }
          
    var course = new CourseDB({
    walletAddress: req.body.walletAddress,
    cName: req.body.cName,
    cDesc: req.body.cDesc,
    cField: req.body.cField,
    cDate: req.body.cDate,
    cOutcomes : req.body.cOutcomes
    })

    course
    .save(course)
    .then(data => {
        res.status(200).send({ message: "Data inserted successfully" })
    }).catch(err => {
        res.status(500).send({ message: "Some ERROR" })
        return;
    })
}

//Fetch all Courses
exports.getCourses = (req,res)=>{

    if(req.query.wAddress){
        const wadd =  req.query.wAddress
        courseDB.find({walletAddress : wadd }).then(data=>{
            if(!data){
                res.status(404).send({message:"No, Course is associated with this teacher"})
            }else{
                res.send(data);
            }
        }).catch(err=>{
            res.status(500).send({message:err.message || "some error occurred in finding User."})
        })
    }
    else{
        courseDB.find().then(data=>{
            if(!data){
                res.status(404).send("None")
            }else{
                res.send(data);
            }
        }).catch(err=>{
            res.status(500).send({message:err.message || "some error occurred "})
        })
    }
}

//TO fetch current count
//Fetch all Courses
exports.getCount = (req,res)=>{
    Counter.find().then(data=>{
        if(!data){
            res.status(404).send('None')
        }else{
            res.send(data);
        }
    }).catch(err=>{
        res.status(500).send({message:err.message || "some error occurred in fetchin."})
    })
}
