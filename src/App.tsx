import React from "react";
import { Route , Routes} from "react-router-dom";
import { AppointmentProvider } from "./Data/useData";
import { Grid } from "@mui/material";
import { Agenda, Home } from "./View";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppointmentProvider>
        <Routes>
       
          <Route path="/" element={<Home/>} />
         <Route path="/agenda" element={<Agenda/>} />
   
        </Routes>
      </AppointmentProvider>
    </ThemeProvider>
  );
}

export default App;
