import React from 'react';
import { AppointmentProvider } from '../Data/useData';
import { Grid , Container, Box, Stack} from '@mui/material';
import { useTheme } from '@mui/material/styles';


import { 
    AgendaHeader,
    AppointmentsView,
    Blogs2,
    DemoFooter,
    Pricing5,
    Header4,
    Feature6,
    } from '../Components';

 

    const Home = () => {
        const theme = useTheme();

        
        return (

        <Stack
        style={{  backgroundColor: theme.palette.text.primary, 
                  border: `8px solid ${theme.palette.primary.main}`,
                  display: "flex",
                    justifyContent: "center"
        }} 
        spacing={0}
        >
       
            <Grid item   style={{  backgroundColor: theme.palette.text.primary }} >
            <Header4/>
            </Grid>
            
            <Grid item   style={{ 
                
                backgroundImage: `linear-gradient(180deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.light} 100%)`,
            }} >
            <Blogs2/>
            </Grid> 
            {/* <AppointmentsView/> */}
            <Grid item   style={{  backgroundColor: theme.palette.primary.light, }}>
            <Feature6/>
            </Grid>
            <Grid item   style={{  backgroundColor: theme.palette.primary.light, }}>
            <Pricing5/>
            </Grid>
            <Grid item  style={{  backgroundColor: theme.palette.primary.light, }}>
            <DemoFooter/>
            </Grid>
        </Stack>
       
        )
    }

    export default Home