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
    const { rows } = await pool.query('SELECT * FROM messages');
    return rows;
}

async function getAllMessagesByMembers() {
    const { rows } = await pool.query('SELECT * FROM users INNER JOIN messages ON (users.id = messages.user_id) WHERE users.membership_status = TRUE');
    return rows;
}


module.exports = {
    insertUser,
    updateMembershipStatusByEmail,
    getUserById,
    getUserByEmail,
    insertMessage,
    getAllMessages,
    getAllMessagesByMembers,
}