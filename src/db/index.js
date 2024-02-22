import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"



const connectDB = async ()=>{

    try{
       const connectionInstence =  await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`)
       console.log(`\n MongoDb connected !! Db Host: ${connectionInstence.connection.host}`);

    }catch(error){
        console.log("Mongo DB Connection failed", error);
        process.exit(1)
    }
}
export default connectDB