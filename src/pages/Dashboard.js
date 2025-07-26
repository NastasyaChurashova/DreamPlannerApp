import React, { useEffect, useState } from "react";
import Calendar from "../components/Calendar";

const Dashboard = () => {
	const [events, setEvents] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/")
			.then((res) => res.json())
			.then((data) => setEvents(data))
			.catch((err) => console.error("Ошибка при получении данных:", err));
	}, []);
	return (
		<div className="dashboard">
			<ul>
				{Array.isArray(events) &&
					events.map((event) => (
						<li key={event.id}>
							<strong>{event.title}</strong> — {event.date}
						</li>
					))}
			</ul>
			<Calendar />
		</div>
	);
};

export default Dashboard;
