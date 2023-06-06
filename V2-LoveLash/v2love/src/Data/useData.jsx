import React, { useEffect, createContext, useState, useContext } from 'react';
import  {appointments} from  '../Utils';


export const AgendaContext = createContext({});


export const AppointmentProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [appointment, setAppointment] = useState(appointments);
  const [appointmentSix, setAppointmentSix] = useState([]);
  const [daysAvailable, setDaysAvailable] = useState([]);
  const [hoursAvailable, setHoursAvailable] = useState([]);


  useEffect(() => {
    const Six = appointments.slice(0, 6);
    const days = Six.map((day) => {
      const date = new Date(day.dia * 1000);
      let dias = date.getDate();
      let mes = date.getMonth() + 1;
      let diaMes = `${dias}/${mes}`;
      return diaMes;
    });
    setAppointmentSix(Six);
    setDaysAvailable(days);
  }, [selectedDate]);
  
  useEffect(() => {
    const Six = appointments.slice(0, 6);
    const hours = Six.filter((day) => day.dia ? day.horas : null);
    const hoursAvailables = hours.map((hour) => {
      const horasAvaibleFull =  hour.horas.filter((av) => {
        if(av.available === true ){
          return av.id
        }
      });
      const horasAvaibleId = horasAvaibleFull.map((h) => h.id);
      return horasAvaibleId;
    });
    setHoursAvailable(hoursAvailables);
  }, [selectedDate]);


  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };


  return (
    <AgendaContext.Provider
      value={{
        appointment,
        appointmentSix,
        selectedDate,
        selectedTime,
        handleDateChange,
        daysAvailable,
        hoursAvailable
      }}
    >
      {children}
    </AgendaContext.Provider>
  );
};


export const useData = () =>  useContext(AgendaContext);