import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid } from '@mui/material';
import { Agenda } from './View';


function App() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Agenda />
      </Grid>
    </Grid>
  );
}

export default App;
