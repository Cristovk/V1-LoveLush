'use client'
import React from 'react';
import { Box, Paper } from '@mui/material';


const AppointmentsView = (props) => {
  const days = ['Día 1', 'Día 2', 'Día 3', 'Día 4', 'Día 5', 'Día 6'];


  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
      {days.map((day) => (
        <Paper sx={{ width: 200, height: 200, borderRadius: 16 }} elevation={3}>
        {day}
        </Paper>
        ))}
    </Box>
    
  );
};


export default AppointmentsView;

