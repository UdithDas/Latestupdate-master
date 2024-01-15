const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://udithdas09:udith@cluster0.vmuwoau.mongodb.net/R1?retryWrites=true&w=majority")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));
let sc=mongoose.Schema;
const registerschema = new sc(
{
restuarantid:String,    
restuarant:String,
cuisine:String,
restuaranttype:String,
contactno:Number,
manager:String,
nooftables:Number,
country:String,
state:String,
district:String,
userid:String,
password:String,
status:String
}
);
var registermodel =mongoose.model("register",registerschema)
module.exports=registermodel;