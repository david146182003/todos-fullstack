import mongoose from "mongoose";

async function connectDb(){
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('MogooDb Connected')
    }catch(e){
        console.log(e)
    }
}

export default connectDb