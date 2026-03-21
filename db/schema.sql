DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    first_name VARCHAR ( 50 ) NOT NULL,
    last_name VARCHAR ( 50 ) NOT NULL,
    email_address VARCHAR ( 255 ) UNIQUE NOT NULL,
    password_hash VARCHAR ( 255 ),
    membership_status BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id INTEGER NOT NULL,
    title VARCHAR ( 100 ) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    message_text TEXT NOT NULL,
    CONSTRAINT fk_users_cascade
    FOREIGN KEY ( user_id ) REFERENCES users( id )
    ON DELETE CASCADE
);