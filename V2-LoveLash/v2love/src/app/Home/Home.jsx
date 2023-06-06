'use client'

import React from 'react';
import { Grid, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import {
  Feature6,
  Pricing5,
  DemoFooter,
} from '../../Components';

// import { AgendaHeader, AppointmentsView } from '../Components';

const Casa = () => {
  const theme = useTheme();

  return (
    <Grid container style={{ justifyContent: 'center' }}>
      <Stack
        direction='column'
        alignItems='center'
        bgcolor={theme.palette.background.default}
        border={`8px solid ${theme.palette.primary.main}`}
        width='100%'
        spacing={0}
        sx={{ minHeight: '100vh' }}
      >
        {/* <AgendaHeader />
        <AppointmentsView /> */}
        {/* <Blogs2 /> */}
        <Feature6 />
        <Pricing5 />
        <DemoFooter />
      </Stack>
    </Grid>
  );
};

export default function Home() {
  return <Casa />;
}
