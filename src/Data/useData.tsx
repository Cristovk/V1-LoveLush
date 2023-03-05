import React, { useEffect, createContext, useState } from 'react';
import  {appointments} from  '../Utils'
export const AgendaContext = createContext<any>({});


export const AppointmentContext = createContext<any>({});



export const AppointmentProvider = ({ children })   => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [appointment, setAppointment] = useState<object[]>([]);
  
  
  useEffect(() => {
    // lee appointments  y guarda los 6 primeros en el state de appointment
    setAppointment(appointments.slice(0, 6));
  }, []);
  
  
  
  // Actualizar los estados de los contextos con las nuevas fechas y citas
  const handleDateChange = (date: number | null) => {
    setSelectedDate(date);
    setSelectedTime(null);
    
  };
  
  // Actualizar el estado de la cita seleccionada
  const handleTimeChange = (time: string | null) => {
    setSelectedTime(time);
  };
  
  // Actualizar el estado de la cita seleccionada
  const handleAppointmentChange = (appointment: object[]) => {
    setAppointment(appointment);
  }

  const handleNext = () => {
    setAppointment(appointments.slice(6, 12));
  };

  const handlePrev = () => {
    setAppointment(appointments.slice(0, 6));
  };

  

  
  return (
    <AgendaContext.Provider
    
    value={{
      appointment,
      selectedDate,
      selectedTime,
      handleDateChange,
      handleTimeChange,
      handleAppointmentChange,
      handleNext,
      handlePrev
    }}
    >
        {children}
      </AgendaContext.Provider>
    );
  };
  


  
  // type AppointmentContextType = {
  //   appointments: { [key: string]: { [key: string]: boolean } };
  //   selectedDate: number | null;
  //   setSelectedDate: (date: number | null) => void;
  //   selectedTime: string | null;
  //   setSelectedTime: (time: string | null) => void;
  // };