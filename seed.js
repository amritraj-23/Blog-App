const mongoose = require('mongoose');
const BlogData = require('./models/blogdata');


const data = [
    {
        name:"Amrit",
        title:"Dragon",
        desc:"A dragon is usually represented as a huge, bat-winged, fire-breathing, scaly lizard or snake with a barbed tail. The belief in these creatures apparently arose without the slightest knowledge on the part of the ancients of dinosaurs, which have some remblance to dragons."
    },
    {
        name:"Raj",
        title:"WomenEmpowermwnt",
        desc:"Women's empowerment, or female empowerment, is the process by which women gain influence and equal opportunity to pursue personal, social and economic endeavors, engaging in all parts of society on the same basis as men."
        
    },
    {
        name:"Nicol",
        title:"Elephant",
        desc:"Elephants are the largest existing land animals. Three living species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant. They are an informal grouping within the proboscidean family Elephantidae"
    }
];


const seedDB = async() =>{

   await BlogData.deleteMany({});
   await BlogData.insertMany(data);
   console.log("DB SEEDED");

}

module.exports = seedDB;