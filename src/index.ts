import express from "express"
import dbConnect from "./config/db";
import User from "./models/user";

const app = express();

app.use(express.json());

app.get("/", async (req, res)=>{

    try{
        const response = await User.find({})
        res.json({
            response
        })
    }catch(err){
        console.log("err:", err);
        res.status(500).json({
            err: "Something went wrong"
        })
    }

    
})

app.post("/postUser", async (req, res)=>{

    const {name, age} = req.body;

    try{
        const newUser = await User.create({name, age});
        res.json({
            Msg: "New user has been created"
        })
    }catch(err){
        console.log("err:", err);
        res.status(500).json({
            err: "Something went wrong"
        })
    }
})

dbConnect();
app.listen(3000);