import React from 'react';
import { AppointmentProvider } from './Data/useData';
import { Grid } from '@mui/material';
import { Agenda, Home} from './View';
import { ThemeProvider,useTheme } from '@mui/material/styles';
import { theme } from './Theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <AppointmentProvider>
      <Grid container   >
        
          <Home/>
        
      </Grid>
    </AppointmentProvider>
    </ThemeProvider>
 
  );
}

export default App;
