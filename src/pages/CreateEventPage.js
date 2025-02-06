import React, { useState } from "react";
import CreateEventForm from "../components/CreateEventForm";
import '../styles/CreateEventPage.css';

const CreateEventPage = () => {
  const [event, setEvent] = useState(null);

  const handleCreate = (data) => {
    console.log("Event created:", data);
    setEvent(data);
    alert("Event created successfully!");
  };

  const handleCancel = () => {
    console.log("Event creation canceled.");
  };

  return (
    <div className="create-event-page">
      <h1>Create Event</h1>
      <CreateEventForm onSubmit={handleCreate} onCancel={handleCancel} />
    </div>
  );
};

export default CreateEventPage;
