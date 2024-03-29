import React, { useEffect, createContext, useState } from 'react';
import  {appointments} from  '../Utils'
export const AgendaContext = createContext<any>({});


export const AppointmentProvider = ({ children })   => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [appointment , setAppointment] = useState(appointments);
  const [appointmentSix, setAppointmentSix] = useState<any>([]);
  const [daysAvailable, setDaysAvailable] = useState<string []>([]);
  const [hoursAvailable, setHoursAvailable] = useState<string [][]>([]);
  
  
  useEffect(() => {
    const Six = appointments.slice(0, 6);
    const days = Six.map((day) => {
      const date = new Date(day.dia * 1000 );
      let dia = date.getDate();
      let mes = date.getMonth() + 1;
      let diaMes = `${dia}/${mes}`;
      return diaMes
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
    
        console.log('Horas Disponibles',hoursAvailable);
        console.log('Horas typo', hoursAvailable)
    setHoursAvailable(hoursAvailables);
  
  }, [selectedDate]);


  // Actualizar los estados de los contextos con las nuevas fechas y citas
  const handleDateChange = (date: number | null) => {
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
      hoursAvailable,


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