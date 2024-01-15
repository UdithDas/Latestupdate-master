// import express
const express=require("express")
const cors=require("cors")
//Initailizing
const app=new express();
const registermodel = require('./registerdetails')
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());
//Api Creation
app.get('/',(request,response)=>{
response.send("hai udith")
})
//For Submit button
app.post('/new',(request,response)=>{
console.log(request.body)
new registermodel(request.body).save();
response.send("Record Sucessfully Saved")
})
//Assign Port
app.listen(3005,(request,response)=>{
    console.log("Port is running in 3005")
    })
//for viewing
app.get('/view',async(request,response)=>{
        var data = await registermodel.find();
        response.send(data)
        })
//for delete
app.put('/remove/:id',async(request,response)=>{
            let id = request.params.id
            await registermodel.findByIdAndUpdate(id,{$set:{status:"INACTIVE"}})
            response.send("Record deleted")
            })    
            
app.put('/sedit/:id', async(request,response)=>{
    let id = request.params.id
    await registermodel.findByIdAndUpdate(id,request.body)
    response.send("Record Deleted")
})
// for retriving data
app.get('/view', async(request, response) => {
    var data = await registermodel.find();
    response.send(data)
})