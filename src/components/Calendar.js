import React from 'react';
import '../styles/Calendar.css';

const Calendar = () => {
  const days = ['Mo', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dates = [
    '', '', '', '', '', '', 1, 2, 3, 4, 5, 6, 7,
    8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, '', '', '', '', ''
  ];

  return (
    <section className="calendar">
      <header>
        <h2>FEBRUARY 2025</h2>
      </header>
      <div className="calendar-grid">
        {days.map((day) => (
          <div key={day} className="day">{day}</div>
        ))}
        {dates.map((date, index) => (
          <div key={index} className={`date ${date === 6 ? 'highlight' : ''}`}>
            {date}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Calendar;
