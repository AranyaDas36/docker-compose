import mongoose from "mongoose"

const dbConnect = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/newDB")
        console.log("DB connected successfully...")
    }catch(err){
        console.log("Error:", err);
    }
}

export default dbConnect;
