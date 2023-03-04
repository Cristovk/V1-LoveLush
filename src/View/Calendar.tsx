import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import { AgendaHeader } from '../Components';

const Agenda = () => {
  const [horariosDisponibles, setHorariosDisponibles] = useState([
    { id: 1, hora: '10:00' },
    { id: 2, hora: '11:00' },
    { id: 3, hora: '12:00' },
    { id: 4, hora: '13:00' },
    { id: 5, hora: '14:00' },
    { id: 6, hora: '15:00' },
    { id: 7, hora: '16:00' },
  ]);

  // funcion si hace click en el boton agendar para agendar cita y la hora se elimina de la lista de horarios disponibles
    const handleAgendar = (id: number) => {
        setHorariosDisponibles((prevHorarios) => prevHorarios.filter((horario) => horario.id !== id));
    };



  return (
    <div>
      <h2>Agendamiento de citas</h2>
      <p>Selecciona una hora disponible:</p>

        <AgendaHeader />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Hora</TableCell>
            <TableCell>Agendar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {horariosDisponibles.map((horario) => (
            <TableRow key={horario.id}>
     
              <TableCell>{horario.hora}</TableCell>
              <TableCell>
                <Button onClick={() => {
                    handleAgendar(horario.id);
                    alert(`Agendado para ${horario.hora}`)}}>Agendar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};


export default Agenda;