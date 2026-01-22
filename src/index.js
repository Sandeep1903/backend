import dotenv from 'dotenv';
dotenv.config({ 
    path: '/.env'
 });
 import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']); // Force Google DNS
import connectDB from './db/index.js'



connectDB() 

/*
 ( async () => {
    try {
       await mongoose.connect("{process.env.mongoose_url}/ {DB_NAME}")
       app.on("error" , (error) => {
         console.log("ERROR:" , error);
         throw error
       })
       app.listen(process.env.port,() => {
          console.log("app is listening on port {process.env.port}")
       })
    } catch (error) {
        console.log("ERROR" , error)
        throw error
        
    }
 })()
*/