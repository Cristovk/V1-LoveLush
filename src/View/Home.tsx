import React from 'react';
import { AppointmentProvider } from '../Data/useData';
import { 
    Grid, 
    Container, 
    Box, 
    Stack 
} from '@mui/material';
import { 
    useTheme 
} from '@mui/material/styles';
// import { 
//     AgendaHeader, 
//     AppointmentsView, 
// } from '../Components/Calendar';
import { 
    Blogs2, 
    DemoFooter, 
    Pricing5, 
    Header4, 
    Feature6, 
} from '../Components';

const Home = () => {
    const theme = useTheme();

    return (
        <Container maxWidth="xl">
            <Grid container justifyContent="center">
                <Stack
                    style={{
                        backgroundColor: theme.palette.text.primary,
                        border: `8px solid ${theme.palette.primary.main}`,
                        width: "100%",
                    }} spacing={0}>
                    <Grid item sx={{ backgroundColor: theme.palette.text.primary }} >
                        <Header4 />
                    </Grid>
                    <Grid item sx={{
                        backgroundImage: `linear-gradient(180deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.light} 100%)`,
                    }}>
                        <Blogs2 />
                    </Grid>
                    <Grid item sx={{ backgroundColor: theme.palette.primary.light }}>
                        <Feature6 />
                    </Grid>
                    <Grid item sx={{ backgroundColor: theme.palette.primary.light }}>
                        <Pricing5 />
                    </Grid>
                    <Grid item sx={{ backgroundColor: theme.palette.primary.light }}>
                        <DemoFooter />
                    </Grid>
                </Stack>
            </Grid>
        </Container>
    )
}

export default Home;
