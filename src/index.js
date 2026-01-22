import mongoose from "mongoose"
import { DB_NAME }from './constants'
import express from "express"
import connectDB from "./db"

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