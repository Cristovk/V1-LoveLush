import React from 'react';
import { Box, Paper } from '@mui/material';

const AppointmentsView = (props : any) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Paper sx={{ width: 200, height: 200 }}>Dia 1</Paper>
            <Paper sx={{ width: 200, height: 200 }}>Día 2</Paper>
            <Paper sx={{ width: 200, height: 200 }}>Día 3</Paper>
            <Paper sx={{ width: 200, height: 200 }}>Día 4</Paper>
            <Paper sx={{ width: 200, height: 200 }}>Día 5</Paper>
            <Paper sx={{ width: 200, height: 200 }}>Día 6</Paper>

    </Box>
  );
};

export default AppointmentsView;
