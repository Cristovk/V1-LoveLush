'use client'

import React, { useContext } from 'react';
import { Box, Grid, Paper, Typography, useMediaQuery } from '@mui/material';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AgendaContext } from '../../Data/useData';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    cursor: 'pointer',
  },
  selectedPaper: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  hours: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
}));

const Agenda = () => {
  const classes = useStyles();
  const {
    appointment,
    daysAvailable,
    handleDateChange,
    hoursAvailable,
    selectedDate,
    selectedTime,
  } = useContext(AgendaContext);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(min-width:600px) and (max-width:960px)');

  return (
    <Box sx={{ backgroundColor: '#de4344' }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4">Agenda</Typography>
        </Grid>

        <Grid item xs={6} md={2}>
          <Paper className={classes.paper}>
            <Typography variant="subtitle1">Anteriores</Typography>
          </Paper>
        </Grid>

        <Grid container spacing={3} alignItems={isSmallScreen ? 'center' : 'flex-start'}>
          {daysAvailable.map((day) => (
            <Grid item xs={6} md={2} key={day}>
              <Paper className={classes.paper}>
                <Typography variant="h6">{day}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Grid item xs={6} md={2}>
          <Paper className={classes.paper}>
            <Typography variant="subtitle1">Siguientes</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Agenda;
