const pool = require("./pool");

async function insertUser(firstName, lastName, emailAddress, password) {
    await pool.query('INSERT INTO users (first_name, last_name, email_address, password_hash) VALUES ($1, $2, $3, $4)', [firstName, lastName, emailAddress, password]);
}

async function updateMembershipStatus(id) {
    await pool.query("UPDATE users SET membership_status = TRUE WHERE id = $1", [id]);
}

module.exports = {
    insertUser,
    updateMembershipStatus,
}