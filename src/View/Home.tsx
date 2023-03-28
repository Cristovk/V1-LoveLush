import React from 'react';
import { AppointmentProvider } from '../Data/useData';
import { Grid , Container, Box} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { 
    AgendaHeader,
    AppointmentsView,
    Blogs2,
    DemoFooter,
    Pricing5,
    Header4,
    
    } from '../Components';

    

    const Home = () => {
        const theme = useTheme();

        
        return (

        <Grid 
        container
        style={{ 
            backgroundColor: theme.palette.secondary.light,
        }} >
        <Grid item xs={12} >
            <Header4/>
            <Blogs2/>
            <AppointmentsView/>
            <Pricing5/>
            <DemoFooter/>
            </Grid>
        </Grid>
        )
    }

    export default Home