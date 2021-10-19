import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan"


const app =express()
app.use(express.json())
app.use(express.urlencoded())
app.use (cors())
app.use(morgan("dev"));

//db conncetion 

mongoose.connect("mongodb://localhost:27017/mybookDB",{
    useNewUrlParser:true,
    useUnifiedTopology: true
},()=>{console.log("DB connected")})

const userSchema = mongoose.Schema ({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("user", userSchema)

//Login$Register approutes
app.get("/",(req,res)=>{
    res.send("my API")
})

app.post("/login", (req,res)=>{
    const {email,password} = req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password === user.password){
                res.send({message:"loginsuccesful",user:user})
            }else{
                res.send({message:"pass no match"})
            }
        }else{
            res.send({message:"user not registered"})
        }
    })
} )
app.post("/register",(req,res)=>{
    const{name,email,password}=req.body
    const user = new User({
        name,email,password
    })
    user.save(err=>{
        if(err){
            res.send(err)
        }else{
            res.send({message : "successfully Registered"})
        }
    })
});

//book schema
const bookSchema = mongoose.Schema({
    Title:{
        type:String,
        require:true,
    },
    Author:{
        type:String,
        require:true,
        
    },
    Description:{
        type:String,
        require:true,
    },
    createdTime:{
        type:Date,
        default:Date.now
    }

})

const bookrouter = new mongoose.model("schema", bookSchema)
//bookroutes

//create
app.post("/info/add",async(req,res)=>{
    console.log(req.body); 
    var data = new bookrouter({
        Title: req.body.Title,
        Author:req.body.Author,
        Description:req.body.Description
    })
    await data.save();
    res.json(data);
});

//getAll
app.get("/info/get",async (req,res)=>
{
    var findData= await bookrouter.find();
    res.json(findData);
});
//update
app.put("/info/update",async(req,res)=>{
    var update = await bookrouter.update({_id:req.body._id},{$set:{
        Title: req.body.Title,
        Author:req.body.Author,
        Description:req.body.Description
    }});
    res.json(update);
});

//delete
app.delete("/info/del/:id",async(req,res)=> {
    var deldata = await bookrouter.findByIdAndRemove(req.params._id).then(e=>{
        res.json({message:"Book Record Deleted Successfully"})
    })
});
 


//listen
app.listen(9000,()=>{
    console.log("BE started at port 9000")
})
