CREATE TABLE IF NOT EXISTS USERS (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    user_email VARCHAR(100) NOT NULL,
    user_password VARCHAR(100) NOT NULL,
    user_phone VARCHAR(100) NOT NULL,
    user_address VARCHAR(200) NOT NULL,
    role VARCHAR(10) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
)