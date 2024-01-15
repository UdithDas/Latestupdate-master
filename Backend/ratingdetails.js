const mongoose=require("mongoose")



let sc=mongoose.Schema;
const ratingschema = new sc({
    sid:{type:mongoose.Schema.Types.ObjectId,ref:'registration'},
    qualification:String,
    ratingdata:{
        data : String,
        contentType:String,
    }
    
});

var ratingmodel =mongoose.model("certificate",ratingschema)
module.exports =ratingmodel;