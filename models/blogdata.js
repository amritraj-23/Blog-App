const mongoose = require('mongoose');


const data = mongoose.Schema({
    name : {
        type:String,
        required:true,
        trim:true
    },
    title: {
        type : String,
        required:true,
        trim:true

    },
    desc:{
        type:String,
        required:true,
        trim:true

    }
});



const BlogData = new mongoose.model('BlogData',data);

module.exports = BlogData;