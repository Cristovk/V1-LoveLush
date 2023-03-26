
import React, { useContext } from 'react';
import { Grid, Paper, Box, Typography , useMediaQuery} from '@mui/material';
import { makeStyles,  useTheme} from '@material-ui/core/styles';
import {AgendaContext} from '../Data/useData';

const useStyles  = makeStyles((theme) => ({

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
      selectedDate,
      selectedTime,
      handleDateChange,
      daysAvailable,
      hoursAvailable,

   } = useContext(AgendaContext);



  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const handleAppointmentClick = (date, time) => {
    handleDateChange(date);
    // handleTimeChange(time);
  };
  
  console.log( 'Dias avatibles', daysAvailable)     
  
  return (
    <Grid container spacing={3} sx={{ backgroundColor: '#de4344' }}>
      <Grid item xs={12}>
        <Typography variant="h4">Agenda</Typography>
      </Grid>

      <Grid item xs={6} md={2}>
        <Paper className={classes.paper} >
          <Typography variant="subtitle1">Anteriores</Typography>
        </Paper>
      </Grid>

      <Grid 
        container
        spacing={3}
        direction='row'
        justifyContent='center'
        alignItems={isSmallScreen ? 'center' : 'flex-start'}
        >
      {daysAvailable.map((day : number) => (

        <Paper className={classes.paper} key={day}>
          <Typography variant="h6">{day}</Typography>
        </Paper>
      ))}

      </Grid>
      <Grid item xs={6} md={2}>
        <Paper className={classes.paper}>
          <Typography variant="subtitle1">Siguientes</Typography>
        </Paper>
      </Grid> 
    </Grid>
  );
};

export default Agenda;
