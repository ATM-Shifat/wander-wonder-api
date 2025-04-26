
import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next) => {
    try{
        const token = req.headers['authorization'].split(" ")[1]

        if(!token){
            return res.status(401).json({
                message: "No Token Provided"
            })
            
        }

        jwt.verify(token, process.env.SECRETE, (err, decode) => {
            if(err) return res.status(401).json({ mesage: "Invalid Token"})
            req.userId = decode.user.user_id
            next()
        })


    }catch(err){
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}