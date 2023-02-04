const mongo = require('mongoose')
const teacherDB = require('./model_teacher')
const sequencing = require('./model_seq')

var schema = new mongo.Schema({
    _id :Number,
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
    cField : {
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

schema.pre("save", function (next) {
        let doc = this;
        sequencing.getSequenceNextValue("_id").
        then(counter => {
            console.log("count", counter);
            if(!counter) {
                sequencing.insertCounter("_id")
                .then(counter => {
                    doc._id = counter;
                    console.log(doc)
                    next();
                })
                .catch(error => next(error))
            } else {
                doc._id = counter;
                next();
            }
        })
        .catch(error => next(error))
    });


const courseDB  = mongo.model('sl_course',schema)

module.exports = courseDB