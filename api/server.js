const express = require("express");
const envFile = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require('cors')
const connectDB = require('./server/database/connection')

envFile.config({path:".env"});

const app = express();
const PORT = process.env.PORT || 8080;

//mongoDB connection~
connectDB();

app.use(cors());
// to log request
app.use(morgan("tiny"));

//parse request to body-parser
app.use(bodyParser.urlencoded({extended:true}))

//set view
app.set("view engine","ejs");

//load router file
app.use('/',require('./server/routes/router'))


app.listen(process.env.PORT,()=>{console.log('Server runnning on http://localhost:'+process.env.PORT)});
