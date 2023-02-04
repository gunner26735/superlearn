const mongo = require('mongoose')
const teacherDB = require('./model_teacher')

var schema = new mongo.Schema({
    walletAddress : {
        type : String,
        ref : teacherDB,
    },
    cName : {
        type : String,
        default : ''
    },
    cDesc : {
        type : String,
        default : ''
    },
    cDate : {
        type : Date,
        default : NaN
    },
    cOutcomes : {
        type : String,
        default : ''
    }

}) 

const courseDB  = mongo.model('sl_course',schema)

module.exports = courseDB