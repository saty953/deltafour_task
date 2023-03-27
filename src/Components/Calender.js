import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarComponent() {
  const [date, setDate] = useState(new Date());

  function onChange(newDate) {
    setDate(newDate);
  }

  return (
    <div>
      <Calendar onChange={onChange} value={date} />
    </div>
  );
}

export default CalendarComponent;
