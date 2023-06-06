'use client'
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Tabs,
  Tab,
  Typography,
  Container,
  Grid,
} from "@mui/material";

function Pricing() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Clásicos", "Full"];

  const TabPane = ({ tabName, tabDescription, tabPrice }) => {
    return (
      <Grid item xs={12} sm={6}>
        <Card
          style={{
            backgroundColor: theme.palette.primary.main,
            height: "100%",
          }}
        >
          <CardHeader title={tabName} />
          <CardContent>
            <Typography variant="h3" gutterBottom>
              {tabPrice}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {tabDescription}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="text"
              color="warning"
              onClick={(e) => e.preventDefault()}
            >
              Agendar
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  };

  return (
    <section>
      <Container>
        <Grid
          container
          spacing={2}
          style={{
            backgroundColor: theme.palette.primary.main,
            height: "100%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} md={4}>
            <Typography variant="h3" align="center" gutterBottom>
            Servicios
            </Typography>
            <Tabs
              value={activeTab}
              onChange={(_, newTab) => setActiveTab(newTab)}
              variant="fullWidth"
            >
              {tabs.map((tab) => (
                <Tab label={tab} key={tab} />
              ))}
            </Tabs>
          </Grid>
          <Grid item xs={12} md={8}>
            <CardContent>
              {tabs.map((tab) => (
                <Grid key={tab} hidden={activeTab !== tabs.indexOf(tab)}>
                  <Grid container spacing={2}>
                    <TabPane
                      tabName="Efecto Rimel"
                      tabDescription="Tienen un acabado muy natural, sobre todo si se colocan en longitudes cortas, se usa 1 extensión encima de cada pestaña natural."
                      tabPrice="$35.000"
                    />
                    <TabPane
                      tabName="Efecto Natural"
                      tabDescription="Este efecto se crea utilizando 2 extensiones cerradas encima de cada pestaña natural, sin embargo sigue siendo una muy buena opción si quieres resultados con este estilo."
                      tabPrice="$35.000"
                    />
                    {activeTab === 1 && (
                      <>
                        <TabPane 
                         tabName="Efecto Full"
                          tabDescription="Tienen un acabado muy natural, sobre todo si se colocan en longitudes cortas, se usa 1 extensión encima de cada pestaña natural."
                          tabPrice="$35.000"
                        />
                        <TabPane
                          tabName="Closed Fans"
                          tabDescription="Este efecto se crea utilizando 2 extensiones cerradas encima de cada pestaña natural, sin embargo sigue siendo una muy buena opción si quieres resultados con este estilo."
                          tabPrice="$35.000"
                        />
                      </>
                    )}
                  </Grid>
                </Grid>
              ))}
            </CardContent>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default function Pricing5() {
  return (
 
      <Pricing />

  );
}