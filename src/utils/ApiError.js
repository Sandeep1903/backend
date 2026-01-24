class ApiEroor extends error{
    constructor(
        statuscode,
        message="something went wrong check pls",
        errors = [],
        statck ="",
    ){ super(message)
        this.statuscode = statuscode,
        this.sucees = false;
        this.errors = errors,
        this.message = message,
        this.statck = statck,
        this.data = null
     
    }

}
export default ApiError