import pool from "../config/db.js";

export const createUsersTable =  async() => {
    const queryText = `
    CREATE TABLE IF NOT EXISTS USERS (
        user_id SERIAL PRIMARY KEY,
        user_name VARCHAR(100) NOT NULL,
        user_email VARCHAR(100) NOT NULL,
        user_password VARCHAR(100) NOT NULL,
        user_phone VARCHAR(100) NOT NULL,
        user_address VARCHAR(200) NOT NULL,
        role VARCHAR(10) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
    )`

    try{
        await pool.query(queryText)
        console.log("Users table created successfully")
    }catch(error){
        console.error("Error creating users table: ", error)
    }

}
