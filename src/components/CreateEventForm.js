import React, { useState } from 'react';
import '../styles/CreateEventForm.css';

const CreateEventForm = ({ onSubmit, onCancel, initialData }) => {
  const [eventName, setEventName] = useState(initialData?.eventName || '');
  const [eventDate, setEventDate] = useState(initialData?.eventDate || '');
  const [startTime, setStartTime] = useState(initialData?.startTime || '');
  const [endTime, setEndTime] = useState(initialData?.endTime || '');
  const [description, setDescription] = useState(initialData?.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      eventName,
      eventDate,
      startTime,
      endTime,
      description,
    });
  };

  return (
    <div className="create-event-form-container">
      <form className="create-event-form" onSubmit={handleSubmit}>
        {/* <h2>{initialData ? 'Edit Event' : 'Create Event'}</h2> */}
        <div className="form-group">
          <label htmlFor="eventName">Event Name</label>
          <input
            type="text"
            id="eventName"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            placeholder="Enter event name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventDate">Event Date</label>
          <input
            type="date"
            id="eventDate"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="startTime">Start Time</label>
          <input
            type="time"
            id="startTime"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endTime">End Time</label>
          <input
            type="time"
            id="endTime"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter event description"
          ></textarea>
        </div>
        <div className="form-actions">
          <button type="submit" className="save-btn">
            {initialData ? 'Save Changes' : 'Create Event'}
          </button>
          <button type="button" className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEventForm;
