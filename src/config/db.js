import pkg from "pg"
const {Pool} = pkg

console.log(
    process.env.DB_USER,
    process.env.DB_HOST,
    process.env.DB_NAME,
    process.env.DB_PORT,
    process.env.DB_PASSWORD
)

const pool = new Pool ({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD
})

pool.on("connect", () => {
    console.log("Connection pool establishedd")
})

export default pool