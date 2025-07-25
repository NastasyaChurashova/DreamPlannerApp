import "../styles/CreateEventForm.css";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEvents } from "../context/EventContext";

const CreateEventForm = () => {
	const { addEvent } = useEvents();
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		name: "",
		date: "",
		startTime: "",
		endTime: "",
		description: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addEvent(formData);
		navigate("/");
	};

	return (
		<form onSubmit={handleSubmit} className="create-event-form">

			<div className="form-group">
				<label>Event Name</label>
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
					placeholder="Enter event name"
				/>
			</div>

			<div className="form-group">
				<label>Event Date</label>
				<input type="date" name="date" value={formData.date} onChange={handleChange} required />
			</div>

			<div className="form-group">
				<label>Start Time</label>
				<input type="time" name="startTime" value={formData.startTime} onChange={handleChange} required />
			</div>

			<div className="form-group">
				<label>End Time</label>
				<input type="time" name="endTime" value={formData.endTime} onChange={handleChange} required />
			</div>

			<div className="form-group">
				<label>Description</label>
				<textarea
					name="description"
					value={formData.description}
					onChange={handleChange}
					placeholder="Enter event description"
				/>
			</div>

			<button type="submit" className="save-btn">
				Create Event
			</button>
		</form>
	);
};

export default CreateEventForm;
