class ApiResponse {
    constructor (statuscode , data , message = "sucess"){
        this.statuscode = statuscode,
        this.data = data,
        this.message = "sucess",
        this.sucess = statuscode<400
    }
}

export default ApiResponce