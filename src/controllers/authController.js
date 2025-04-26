import { registerUserService, authenticateUserService } from "../services/authService.js";
import { handleResponse } from "../utils/utils.js";


export const registerUser = async(req, res, next) => {
    const {userName, userEmail, userPassword, userPhone, userAddress} = req.body
    try{
        const result = await registerUserService(userName, userEmail, userPassword, userPhone, userAddress)
        handleResponse(res, 201, "User Registration Successful")
    }catch(error){
        handleResponse(res, error.status || 500, error.message || "Internal Server error")
        // next(error)
    }
}

export const authenticateUser = async(req, res, next) => {
    const {userEmail, userPassword} = req.body
    try{
        const result = await authenticateUserService(userEmail, userPassword)
        handleResponse(res, 200, "User Log in Successfull", result)
    }catch(error){
        handleResponse(res, error.status || 500, error.message || "Internal Server error")
        // next(error)
    }
}