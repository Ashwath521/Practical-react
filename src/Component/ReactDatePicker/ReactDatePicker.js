import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ReactDatePicker() {
  const [selectDate, setSelectDate] = useState(null);
  return (
    <DatePicker
      selected={selectDate}
      onChange={(date) => setSelectDate(date)}
      dateFormat="dd-MM-yyyy"
      minDate={new Date()}
      maxDate={new Date()}
    />
  );
}

export default ReactDatePicker;
