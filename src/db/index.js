import mongoose from "mongoose"
import {DB_NAME} from "./constants"
const connectDB = async () => {
    try {
          const responce = await mongoose.connect("{process.env.mongoose_url}/{DB_NAME}")
          console.log("\n mongoosedb connected DB HOST :{connectionInstance.connection.host}")
    } catch (error) {
        console.log("mongoose connect error" , error);
        process.exit(1)
        
    }
}
export default connectDB