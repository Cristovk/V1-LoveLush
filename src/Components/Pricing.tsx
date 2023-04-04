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

function Pricing5() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Clásicos", "Full"];

  return (
    <section>
      <Container>
      
        <Grid container spacing={2} 
         style={{backgroundColor: theme.palette.primary.main,
         height: "100%",
         flexDirection: "column",
         alignItems: "center",
         
         }}>
          <Grid item xs={12} md={4}>
            <Typography variant="h3" align="center" gutterBottom>
              Servicios
             </Typography>
            <Tabs
              value={activeTab}
              onChange={(_, newTab) => setActiveTab(newTab)}
              variant="fullWidth"
            >
              {tabs.map((tab, index) => (
                <Tab label={tab} key={index} />
              ))}
            </Tabs>
         
          </Grid>
          <Grid item xs={12} md={8}>
            <CardContent>
              {tabs.map((tab, index) => (
                <Grid key={index} hidden={activeTab !== index}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Card
                        style={{
                          backgroundColor: theme.palette.primary.main,
                          height: "100%",
                        }}
                      >
                        <CardHeader title="Efecto Full" />
                        <CardContent>
                          <Typography variant="h3" gutterBottom>
                            $35.000
                          </Typography>
                          <ul>
                            <li>
                              <Typography variant="subtitle2">
                                Tienen un acabado muy natural,
                              </Typography>{" "}
                              <Typography variant="subtitle2">
                                sobre todo si se colocan en longitudes cortas,
                                se usa 1 extensión encima de cada pestaña
                                natural.
                              </Typography>
                            </li>
                          </ul>
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
                    <Grid item xs={12} sm={6}>
                      <Card
                        style={{
                          backgroundColor: theme.palette.primary.main,
                          height: "100%",
                        }}
                      >
                        <CardHeader title="Efecto Natural" />
                        <CardContent>
                          <Typography variant="h3" gutterBottom>
                            $35.000
                          </Typography>
                          <ul>
                            <li>
                              <Typography variant="subtitle2">
                                Este efecto se crea utilizando 2 extensiones
                                cerradas encima de cada pestaña natural,
                              </Typography>
                              <Typography variant="subtitle2">
                                sin embargo sigue siendo una muy buena opción si
                                quieres resultados con este estilo.
                              </Typography>
                            </li>
                          </ul>
                          <CardActions>
                            <Button
                              variant="text"
                              color="warning"
                              onClick={(e) => e.preventDefault()}
                            >
                              Agendar
                            </Button>
                          </CardActions>
                        </CardContent>
                      </Card>
                    </Grid>
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

export default Pricing5;
