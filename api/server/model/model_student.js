const mongo = require('mongoose')

var schema = new mongo.Schema({
    walletAddress : {
        type : String,
    },
    sName : {
        type : String,
        default : ''
    },
    sBio : {
        type : String,
        default : ''
    },
    sUniName : {
        type : String,
        default : ''
    },
    tPhoto : {
        type : String,
        default : ''
    }

}) 

const studentDB  = mongo.model('sl_student',schema)

module.exports = studentDB