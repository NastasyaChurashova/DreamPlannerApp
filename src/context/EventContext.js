import React, { createContext, useState, useContext } from "react";

// 1. Создание контекста
const EventContext = createContext();

// 2. Хук для удобного использования контекста
export const useEvents = () => useContext(EventContext);

// 3. Провайдер, оборачивающий приложение
export const EventProvider = ({ children }) => {
	const [events, setEvents] = useState([]);

	// Добавление события
	const addEvent = (event) => {
		setEvents((prevEvents) => [...prevEvents, event]);
	};

	// Можно легко расширить: editEvent, deleteEvent и т.д.
	return <EventContext.Provider value={{ events, addEvent }}>{children}</EventContext.Provider>;
};
export { EventContext };
