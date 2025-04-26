import pool from "../config/db.js"
import { tokenGenerate, hashPassword } from "../utils/utils.js"


export const registerUserService = async(userName, userEmail, userPassword, userPhone, userAddress) => {
    
    const existingUser = await pool.query(
        "SELECT * FROM USERS WHERE user_email = $1",
        [userEmail]
    )

    if(existingUser.rows.length > 0){
        const error = new Error("This email is already registered")
        error.status = 403
        throw error
    }

    const hashedPassword = hashPassword(userPassword)
 
    const result = await pool.query(
        "INSERT INTO USERS (user_name, user_email, user_password, user_phone, user_address, role) VALUES ($1, $2, $3, $4, $5, 'user') RETURNING *",
        [userName, userEmail, hashedPassword, userPhone, userAddress]
    )

    return result.rows[0]
}

export const authenticateUserService = async(userEmail, inputPassword) => {
    const result = await pool.query(
        "SELECT * FROM USERS WHERE user_email=$1",
        [userEmail]
    )
    if(result.rows.length < 1){
        const error = new Error("User not found")
        error.status = 404

        throw error
    }
    
    const hashedPassword = hashPassword(inputPassword)


    if( result.rows[0].user_password !== hashedPassword){
        const error = new Error("Invalid Email or Password")
        error.status = 401

        throw error
    }

    const {user_password, created_at, ...safeUser} = result.rows[0]

    const token = tokenGenerate(safeUser)

    return {token, user: safeUser}
}