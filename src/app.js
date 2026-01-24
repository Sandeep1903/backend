import express from "express"
import cors from "cors"
import CookieParser from "cookie-parser"
const app = express()
 app.use(cors({
    option : process.env.CORS_OPTION,
    Credential:true 
 }))

 app.use(express.json({limit:"20k"}))
 app.use(express.urlencoded({extended: "true", limit : "16k"}))
app.use(express.static("public"))
app.use(CookieParser())
export default app