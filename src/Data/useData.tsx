import React, { useEffect, createContext, useState } from 'react';

export const AgendaContext = createContext<any>({});

export const AgendaProvider = (props: any) => {
  const [fechaActual, setFechaActual] = useState(new Date());
  const [horaSeleccionada, setHoraSeleccionada] = useState(null);

  return (
    <AgendaContext.Provider value={{
         fechaActual,
         setFechaActual,
         horaSeleccionada, 
         setHoraSeleccionada 
         }}>

      {props.children}
      
    </AgendaContext.Provider>
  );
};
