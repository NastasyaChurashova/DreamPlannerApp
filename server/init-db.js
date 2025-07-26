const { Pool } = require("pg");
require("dotenv").config();

console.log("DB URL:", process.env.DATABASE_URL);

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
});

const createTable = async () => {
	try {
		await pool.query(`
      CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255),
        date DATE,
        start_time TIME,
        end_time TIME,
        description TEXT
      )
    `);
		console.log("Table created successfully");
	} catch (err) {
		console.error("Ошибка:", err);
	} finally {
		await pool.end();
	}
};

createTable();
