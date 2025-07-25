import React, { useMemo } from "react";
import { useEvents } from "../context/EventContext";
import "../styles/Analytics.css";

const Analytics = () => {
	const { events } = useEvents();

	const currentMonth = new Date().getMonth() + 1;
	const currentYear = new Date().getFullYear();

	// Отфильтровать события по текущему месяцу
	const monthlyEvents = useMemo(() => {
		return events.filter((e) => {
			const [day, month, year] = e.date.split(".").map(Number);
			return month === currentMonth && year === currentYear;
		});
	}, [events, currentMonth, currentYear]);

	const totalEvents = monthlyEvents.length;

	const totalMinutes = monthlyEvents.reduce((acc, e) => {
		const [startH, startM] = e.startTime.split(":").map(Number);
		const [endH, endM] = e.endTime.split(":").map(Number);
		const duration = endH * 60 + endM - (startH * 60 + startM);
		return acc + duration;
	}, 0);

	const averageDuration = totalEvents > 0 ? Math.round(totalMinutes / totalEvents) : 0;

	const eventsPerDay = monthlyEvents.reduce((acc, e) => {
		acc[e.date] = (acc[e.date] || 0) + 1;
		return acc;
	}, {});

	return (
		<div className="analytics-page">
			<h2>
				Analytics for {currentMonth < 10 ? "0" + currentMonth : currentMonth}/{currentYear}
			</h2>

			<div className="analytics-stats">
				<div className="stat-box">
					<h3>Total Events</h3>
					<p>{totalEvents}</p>
				</div>
				<div className="stat-box">
					<h3>Total Time</h3>
					<p>
						{Math.floor(totalMinutes / 60)}h {totalMinutes % 60}m
					</p>
				</div>
				<div className="stat-box">
					<h3>Average Duration</h3>
					<p>{averageDuration} min</p>
				</div>
			</div>

			<div className="chart">
				<h3  className="chart__title">Top Days by Events</h3>
				{Object.keys(eventsPerDay).length > 0 ? (
					Object.entries(eventsPerDay).map(([date, count]) => (
						<div key={date} className="bar-row">
							<span className="bar-label">{date}</span>
							<div className="bar" style={{ width: `${count * 20}px` }}>
								{count}
							</div>
						</div>
					))
				) : (
					<p>No data available</p>
				)}
			</div>
		</div>
	);
};

export default Analytics;
