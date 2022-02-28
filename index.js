const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');

// for DataBase Connection
mongoose.connect('mongodb://localhost:27017/BlogApp')
.then(()=>{
    console.log("DB CONNECTED");
}).catch(()=>{
    console.log("FAIL TO CONNECT DB");
})


app.get('/',(req,res)=>{
    res.send("This is Home Page");
})

// seedDB();

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));











app.listen(3000,()=>{
    console.log("Connected To Port 3000");
})