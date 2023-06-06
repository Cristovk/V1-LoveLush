'use client'
import React from "react";
import { AppointmentProvider } from "../Data/useData";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../styles/Theme";
import {Layout} from "../Components/Layout";
import { SideBarEnd } from "@/Components";
import Navigation from 'next/navigation'

export const metaData = {
  title: "V2Love",
  description: "V2Love",
};


export default function RootLayout({ children}) {
  return (
    <html>
      <body>
        <ThemeProvider theme={theme}>
          <AppointmentProvider>
          <SideBarEnd />
          {children}
          </AppointmentProvider>  
        </ThemeProvider>
      </body>
    </html>
  );
}

    // {router.pathname === "/home" ? <Component.Home {...pageProps} /> : null}
    // {router.pathname === "/agenda" ? (
    //   <Component.Agenda {...pageProps} />
    // ) : null}