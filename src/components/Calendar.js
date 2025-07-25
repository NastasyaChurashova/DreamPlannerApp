import React, { useRef, useEffect } from "react";
import { useEvents } from "../context/EventContext";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

import "../styles/Calendar.css";

const Calendar = () => {
	const { events } = useEvents();
	const calendarRef = useRef(null);

	const transformedEvents = events.map((e, i) => ({
		id: String(i),
		title: e.title,
		start: `${e.date}T${e.startTime}`,
		end: `${e.date}T${e.endTime}`,
		description: e.description,
	}));

	const handleDateClick = (info) => {
		alert(`Clicked on date: ${info.dateStr}`);
	};

	const handleEventClick = (info) => {
		alert(`Event: ${info.event.title}\n${info.event.extendedProps.description}`);
	};

	return (
		<div className="calendar-container">
			<FullCalendar
				ref={calendarRef}
				plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
				initialView="dayGridMonth"
				headerToolbar={{
					left: "prev,next today",
					center: "title",
					right: "dayGridMonth,timeGridWeek,timeGridDay",
				}}
				events={transformedEvents}
				dateClick={handleDateClick}
				eventClick={handleEventClick}
				height="auto"
			/>
		</div>
	);
};

export default Calendar;
