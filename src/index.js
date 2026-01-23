import dotenv from 'dotenv';
dotenv.config({ 
    path: '/.env'
 });
 import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']); // Force Google DNS
import connectDB from './db/index.js'



connectDB() 
.then(() => {
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`the server is lsiting: ${process.env.PORT}`)
    })

})
.catch((err) => {
    console.log("DB is not connect",err);
})
