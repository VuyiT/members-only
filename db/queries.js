const pool = require("./pool");

async function insertUser(firstName, lastName, emailAddress, password) {
    await pool.query('INSERT INTO users (first_name, last_name, email_address, password_hash) VALUES ($1, $2, $3, $4)', [firstName, lastName, emailAddress, password]);
}

async function getUserById(id) {
    const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return rows[0];
}

async function getUserByEmail(email) {
    const { rows } = await pool.query("SELECT * FROM users WHERE email_address = $1", [email]);
    return rows[0];
}

async function updateMembershipStatusByEmail(email) {
    await pool.query("UPDATE users SET membership_status = TRUE WHERE email_address = $1", [email]);
}

async function insertMessage(userId, title, text) {
    await pool.query('INSERT INTO messages (user_id, title, message_text) VALUES ($1, $2, $3)', [userId, title, text]);
}

async function getAllMessages() {
    const { rows } = await pool.query(`
        SELECT 
        messages.*,
        json_build_object(
        'id', users.id,
        'firstName', users.first_name,
        'lastName', users.last_name,
        'fullName', users.first_name || ' ' || users.last_name,
        'isMember', users.membership_status
           ) AS author
            FROM messages
            JOIN users ON (users.id = messages.user_id) 
            ORDER BY messages.created_at DESC;
            `);
    return rows;
}


module.exports = {
    insertUser,
    updateMembershipStatusByEmail,
    getUserById,
    getUserByEmail,
    insertMessage,
    getAllMessages,
}