import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarComponent() {
  const [date, setDate] = useState(new Date());

  // this function indicates the date change
  function onChange(newDate) {
    setDate(newDate);
  }

  return (
    <div>
      {/* this is the final commit */}
      <Calendar onChange={onChange} value={date} />
    </div>
  );
}

export default CalendarComponent;
