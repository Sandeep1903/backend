const db_talk = (fn) =>  async(req , res , next) => {
    try {
        await fn(req,res,next)
    }catch (error) {
        res.status(error.code || 500)
    }
}
export default db_talk

/*  2nd Method 
const db_talk =(requesthandler) => {
    (req,res,next) => {
        Promise.reslove(requesthandler(res,res,next)).catch((err) =>next(err))
    }
}*/