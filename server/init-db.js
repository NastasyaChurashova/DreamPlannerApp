const { Pool } = require("pg");
require("dotenv").config();

console.log("DB URL:", process.env.DATABASE_URL);

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: { rejectUnauthorized: false },
});

const createTables = async () => {
	try {
		// USERS
		await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        phone VARCHAR(20),
        role VARCHAR(10) CHECK (role IN ('admin', 'user')) NOT NULL DEFAULT 'user',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

		// MEETINGS
		await pool.query(`
      CREATE TABLE IF NOT EXISTS meetings (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        start_time TIMESTAMP NOT NULL,
        end_time TIMESTAMP NOT NULL,
        location VARCHAR(255),
        created_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
        is_recurring BOOLEAN DEFAULT false,
        recurrence_rule TEXT
      );
    `);

		// BOOKINGS
		await pool.query(`
      CREATE TABLE IF NOT EXISTS bookings (
        id SERIAL PRIMARY KEY,
        meeting_id INTEGER REFERENCES meetings(id) ON DELETE CASCADE,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        status VARCHAR(10) CHECK (status IN ('pending', 'confirmed', 'cancelled')) NOT NULL DEFAULT 'pending',
        booked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        notes TEXT
      );
    `);

		console.log("✅ Таблицы успешно созданы!");
	} catch (err) {
		console.error("❌ Ошибка при создании таблиц:", err);
	} finally {
		await pool.end();
	}
};

createTables();
