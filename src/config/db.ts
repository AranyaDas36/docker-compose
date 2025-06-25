import mongoose from "mongoose"

const dbConnect = async () => {
    try{
        await mongoose.connect("mongodb://mongonetwork:27017/newDB")
        console.log("DB connected successfully...")
    }catch(err){
        console.log("Error:", err);
    }
}

export default dbConnect;
