import React, {useContext} from "react";
import {AgendaContext} from "../Data/useData";
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Paper,
  IconButton,
} from "@mui/material";
import { styled , useTheme} from "@mui/material/styles";

import NotificationsIcon from "@mui/icons-material/Notifications";

// Core Components

const FeatureBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const FeatureIcon = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: "50%",
  padding: theme.spacing(2),
  marginRight: theme.spacing(3),
}));

function Feature6() {
  
  const {daysAvailable, hourAvailable, appointmentSix} = useContext(AgendaContext);
  const theme = useTheme();


  return (
    <>
      <Box sx={{ backgroundColor: theme.palette.primary.light }}  py={10}>
        <Container maxWidth="lg" style={{border : `2px dotted ${theme.palette.primary.main}`}}
            >
          <Grid container alignItems="center">
            <Grid item md={6}>
              <FeatureBox>
                <FeatureIcon>
                  <NotificationsIcon sx={{ fontSize: 30, color: theme.palette.primary.light }} />
                </FeatureIcon>
              <Grid item md={6}>
                  <Typography variant="h5" sx={{ fontWeight: "bold",  color: theme.palette.secondary.main }}>
                    Proximas fecha
                  </Typography>
                  {/* <Typography variant="body2" sx={{ fontWeight: "bold",  color: theme.palette.secondary.main }}>
                    Quieres ver mas opciones?
                  </Typography>
              
                  <Button variant="contained" color="primary">
                    Agenda
                  </Button> */} 
                </Grid> 
             
              </FeatureBox>
            </Grid>
               {/* en este espacio  crea 3 paper lado a lado que tengan los 3 primeros dias dayAvailable y tengan un boton agenda abajo que envie hacia otra pagina  */}
            <Grid item md={6}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4} >
                  <Paper sx={{ height: 100, backgroundColor: theme.palette.primary.light, 
                              color: theme.palette.common.white,
                              // center items
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              
                              }} elevation={3}>

                 <Typography variant="h6" sx={{ fontWeight: "bold",  color: theme.palette.text.primary }}>
                      {daysAvailable[0]}
                    </Typography>
                    {/* crea una linea divisoria punteada */}
                    <hr style={{border: `1px dashed ${theme.palette.primary.main}`, width: "60%"}}/>
                    
                    <Typography variant="h6" sx={{ fontWeight: "bold",  color: theme.palette.text.primary }}>
                      11:00 am
                    </Typography>
                    {/* <Button variant="contained" 
                      style={{backgroundColor: theme.palette.primary.main, color: theme.palette.common.white,}
                    }
                    >
                      Agenda
                    </Button> */}
                  </Paper>
              </Grid>
              <Grid item xs={12} md={4} >
                  <Paper sx={{ height: 100, backgroundColor: theme.palette.primary.light, 
                              color: theme.palette.common.white,
                              // center items
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              
                              }} elevation={3}>

                 <Typography variant="h6" sx={{ fontWeight: "bold",  color: theme.palette.text.primary }}>
                      {daysAvailable[1]}
                    </Typography>
                    {/* crea una linea divisoria punteada */}
                    <hr style={{border: `1px dashed ${theme.palette.primary.main}`, width: "60%"}}/>
                    
                    <Typography variant="h6" sx={{ fontWeight: "bold",  color: theme.palette.text.primary }}>
                      11:00 am
                    </Typography>
                    {/* <Button variant="contained" 
                      style={{backgroundColor: theme.palette.primary.main, color: theme.palette.common.white,}
                    }
                    >
                      Agenda
                    </Button> */}
                  </Paper>
              </Grid>
              <Grid item xs={12} md={4} >
                  <Paper sx={{ height: 100, backgroundColor: theme.palette.primary.light, 
                              color: theme.palette.common.white,
                              // center items
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              
                              }} elevation={3}>

                 <Typography variant="h6" sx={{ fontWeight: "bold",  color: theme.palette.text.primary }}>
                      {daysAvailable[2]}
                    </Typography>
                    {/* crea una linea divisoria punteada */}
                    <hr style={{border: `1px dashed ${theme.palette.primary.main}`, width: "60%"}}/>
                    
                    <Typography variant="h6" sx={{ fontWeight: "bold",  color: theme.palette.text.primary }}>
                      11:00 am
                    </Typography>
                    {/* <Button variant="contained" 
                      style={{backgroundColor: theme.palette.primary.main, color: theme.palette.common.white,}
                    }
                    >
                      Agenda
                    </Button> */}
                  </Paper>
              </Grid>
                </Grid>
              </Grid>
          </Grid>
          <Grid item md={6} 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          >
         <Typography variant="body2" sx={{ fontWeight: "bold",  color: theme.palette.secondary.main }}>
                    Quieres ver mas opciones?
                  </Typography>
              
                  <Button variant="contained" color="primary">
                    Agenda
                  </Button> 
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Feature6;
