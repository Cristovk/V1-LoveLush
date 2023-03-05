import React from 'react';

import { AppointmentProvider } from './Data/useData';
import { Grid } from '@mui/material';
import { Agenda } from './View';


function App() {
  return (
 
    <AppointmentProvider>
      <Grid container>
        <Grid item xs={12}>
          <Agenda />
        </Grid>
      </Grid>
    </AppointmentProvider>
 
  );
}

export default App;
