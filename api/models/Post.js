const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
 desc : {
     type:String,
     required:true,

 }
 
},
{timestamps: true}
);

module.exports = mongoose.model('Post', PostSchema);