import jwt from "jsonwebtoken"
import CryptoJS from "crypto-js"

export const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status,
        message,
        data
    })
}

export const hashPassword = (password) => {
    return CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex)
}

export const tokenGenerate = (userData) => {
    const token = jwt.sign(
        {
            id: userData.userId,
            user: userData,
            role: userData.role
        },
        process.env.SECRETE,
        {
            expiresIn: "24h"
        }
    )

    return token
}