require("dotenv").config();
const { Client } = require("pg");
const fs = require("node:fs");
const path = require("node:path");



async function main() {
    console.log("seeding...");
    const client = new Client({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DATABASE,
    });
    try {
        await client.connect();
        const sqlPath = path.join(__dirname, "schema.sql");
        const SQL = fs.readFileSync(sqlPath, "utf8");
        await client.query(SQL);
        console.log("done");
    } catch (err) {
        console.error("Error during seeding: ", err);
    }
    finally {
        await client.end();
    }
}

main();