import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";
import { DatePicker, TimePicker, DateTimePicker } from "@mui/x-date-pickers";

const MuiDateTime = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  console.log("fecha", selectedDate);
  console.log("hora", selectedTime);
  console.log("hora", selectedDateTime);

  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="Date Picker"
        renderInput={(params) => <TextField {...params} />}
        value={selectedDate}
        onChange={(newValue) => {
          setSelectedDate(newValue);
        }}
      />

      <TimePicker
        label="Time Picker"
        renderInput={(params) => <TextField {...params} />}
        value={selectedTime}
        onChange={(newValue) => {
          setSelectedTime(newValue);
        }}
      />

      <DateTimePicker
        label="Time Date Picker"
        renderInput={(params) => <TextField {...params} />}
        value={selectedDateTime}
        onChange={(newValue) => {
            setSelectedDateTime(newValue);
        }}
      />
    </Stack>
  );
};

export default MuiDateTime;
