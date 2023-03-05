
import React, { useContext } from 'react';
import { Grid, Paper, Typography , useMediaQuery} from '@mui/material';
import { makeStyles,  useTheme} from '@material-ui/core/styles';
import { AppointmentContext } from '../Data/useData';

const useStyles  = makeStyles((theme: { spacing: (arg0: number) => any; palette: { text: { secondary: any; }; primary: { main: any; }; common: { white: any; }; }; }) => ({

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
  const { appointment, 
    selectedDate, 
    selectedTime, 
    handleDateChange, 
    handleTimeChange, 
    handlePrev, 
    handleNext
   } = useContext(AppointmentContext);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const handleAppointmentClick = (date, time) => {
    handleDateChange(date);
    handleTimeChange(time);
  };

  return (
    <Grid container spacing={3} sx={{ backgroundColor: '#de4344' }}>
      <Grid item xs={12}>
        <Typography variant="h4">Agenda</Typography>
      </Grid>
      {/* {appointment.map(({ date, hours }) => (
        <Grid key={date} item xs={12} md={isSmallScreen ? 6 : isMediumScreen ? 4 : 2}>
          <Paper className={`${classes.paper} ${selectedDate === date ? classes.selectedPaper : ''}`} onClick={() => handleAppointmentClick(date, null)}>
            <Typography variant="h6">{new Date(date).toLocaleDateString()}</Typography>
            {selectedDate === date && (
              <div className={classes.hours}>
                {hours.map((hour) => (
                  <Paper
                    key={hour}
                    className={`${classes.paper} ${selectedTime === hour ? classes.selectedPaper : ''}`}
                    onClick={() => handleAppointmentClick(date, hour)}
                  >
                    <Typography variant="subtitle1">{hour}</Typography>
                  </Paper>
                ))}
              </div>
            )}
          </Paper>
        </Grid>
      ))}
      */}
      <Grid item xs={6} md={2}>
        <Paper className={classes.paper} onClick={handlePrev}>
          <Typography variant="subtitle1">Anteriores</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} md={2}>
        <Paper className={classes.paper} onClick={handleNext}>
          <Typography variant="subtitle1">Siguientes</Typography>
        </Paper>
      </Grid> 
    </Grid>
  );
};

export default Agenda;
