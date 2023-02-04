const mongo = require('mongoose')

var schema = new mongo.Schema({
    walletAddress : {
        type : String,
    },
    tName : {
        type : String,
        default : ''
    },
    tInstName : {
        type : String,
        default : ''
    },
    tSpecialised : {
        type : String,
        default : ''
    },
    tExperience : {
        type : Number,
        default : 0
    },
    tPhoto : {
        type : String,
        default : ''
    }

}) 

const teacherDB  = mongo.model('sl_teacher',schema)

module.exports = teacherDB