import React, { useState } from 'react';
import { Paper, IconButton, Typography } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const AgendaHeader = () => {
  const [fechaActual, setFechaActual] = useState(new Date());

  const diasSemana = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];

  const handleFechaAnterior = () => {
    setFechaActual((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate() - 7));
  };

  const handleFechaSiguiente = () => {
    setFechaActual((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate() + 7));
  };

  // los Paper deben ser clickeables y mostrar las horas disponibles de la semana siguiente y anterior

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <IconButton onClick={handleFechaAnterior}>
        <ArrowBack />
      </IconButton>
      {[...Array(7)].map((_, index) => {
        const fecha = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate() + index);
        return (
          <Paper key={index} style={{ width: '120px', margin: '0 8px', padding: '8px' }}>
            <Typography variant="h6" style={{ textAlign: 'center' }}>
              {diasSemana[fecha.getDay()]} {fecha.getDate()}/{fecha.getMonth() + 1}
            </Typography>
          </Paper>
        );
      })}
      <IconButton onClick={handleFechaSiguiente}>
        <ArrowForward />
      </IconButton>
    </div>
  );
};

export default AgendaHeader;