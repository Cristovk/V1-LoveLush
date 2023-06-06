import React, { useState } from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';

const availableDates = [
  new Date(2023, 4, 16), // May 16, 2023
  new Date(2023, 4, 17), // May 17, 2023
  new Date(2023, 4, 18), // May 18, 2023
  // ... add more dates here
];

const availableHours = ['9:00', '10:30', '12:00', '13:30'];

const ScheduleComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null || new Date());
  const [selectedHour, setSelectedHour] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setSelectedHour(null);
  };

  const handleHourClick = (hour) => {
    setSelectedHour(hour);
  };

  return (
    <Box m={4}>
      <Typography variant="h4" gutterBottom>
        Select a date:
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {availableDates.map((date) => (
          <Grid item key={date.toISOString()}>
            <Button
              variant={date === selectedDate ? 'contained' : 'outlined'}
              color='primary' 
              onClick={() => handleDateClick(date)}
            >
              {date.toDateString()}
            </Button>
          </Grid>
        ))}
      </Grid>

      {selectedDate && (
        <Box mt={4}>
          <Typography variant="h4" gutterBottom>
            Select an available hour:
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {availableHours.map((hour) => (
              <Grid item key={hour}>
                <Button
                  variant={hour === selectedHour ? 'contained' : 'outlined'}
                  color='primary' 
                  onClick={() => handleHourClick(hour)}
                >
                  {hour}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {selectedHour && (
        <Box mt={4}>
          <Typography variant="h4" gutterBottom>
            Selected date and hour:
          </Typography>
          <Typography variant="body1" gutterBottom>
            Date: {selectedDate.toDateString()}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Hour: {selectedHour}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ScheduleComponent;
