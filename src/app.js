import  express, { application } from "express"
import cors from "cors"

import pool from "./config/db.js"

import { createUsersTable } from "./data/createUsersTable.js"
import authRoutes from "./routes/authRoutes.js"
import placesRoutes from "./routes/placesRoutes.js"
import errorHandler from "./middlewares/errorHandler.js"
import { authMiddleware } from "./middlewares/authMiddleware.js"


const app = express()
const port = process.env.PORT || 5000

//Middlewares
app.use(express.json()) //for json request
app.use(cors())

//Databse Table Creations
createUsersTable()

//Routes
app.use("/api/auth", authRoutes)
app.use("/api/places", authMiddleware, placesRoutes)

//Error Handling
app.use(errorHandler)

//Server Running
app.listen(port, () =>{
    console.log(`Server is listening to port ${port}`)
})