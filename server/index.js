require("dotenv").config({ path: "./server/.env" });
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

console.log("PORT из .env:", process.env.PORT);

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: { rejectUnauthorized: false },
});

app.get("/api/events", async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM events ORDER BY date");
		res.json(result.rows);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

app.post("/api/events", async (req, res) => {
	const { title, date, startTime, endTime, description } = req.body;
	try {
		const result = await pool.query(
			"INSERT INTO events (title, date, start_time, end_time, description) VALUES ($1, $2, $3, $4, $5) RETURNING *",
			[title, date, startTime, endTime, description],
		);
		res.json(result.rows[0]);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

app.listen(process.env.PORT, () => {
	console.log(`Server running on http://localhost:${process.env.PORT}`);
});
