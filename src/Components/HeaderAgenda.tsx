import React, { useState } from 'react';
import { Paper, IconButton, Typography } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const AgendaHeader = (props:any) => {



  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 1,
        m: 1,
      }}
    >
      <IconButton onClick={props.handlePrev}>
        <ArrowBack />
      </IconButton>
      <Typography>{props.date.toLocaleDateString()}</Typography>
      <IconButton onClick={props.handleNext}>
        <ArrowForward />
      </IconButton>
    </Paper>
  );
};

export default AgendaHeader;