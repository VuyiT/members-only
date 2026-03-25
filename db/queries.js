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

module.exports = {
    insertUser,
    updateMembershipStatusByEmail,
    getUserById,
    getUserByEmail,
}