import React, { useState } from "react";
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
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Clasicos", "Full"];

  return (
    <section
      className="pricing-5"
      id="pricing-6"
      // style={{
      //   backgroundImage: `url(${require("assets/img/ill/bg_pricing5.svg")})`,
      // }}
    >
      <Container className="pt-5">
        <Grid container spacing={2}>
          <Grid item md={4} className="d-flex justify-content-center flex-column">
            <Typography variant="h3" className="mt-3" gutterBottom>
              Servicios
            </Typography>
            <Tabs
              value={activeTab}
              onChange={(_, newTab) => setActiveTab(newTab)}
              variant="fullWidth"
              textColor="primary"
              indicatorColor="primary"
              aria-label="pricing tab"
              className="my-4 nav-pills-primary"
            >
              {tabs.map((tab, index) => (
                <Tab label={tab} key={index} />
              ))}
            </Tabs>
            <Typography variant="subtitle1" gutterBottom>
              Algun texto
            </Typography>
          </Grid>
          <Grid item md={8} className="ml-auto mr-auto">
            <CardContent className="tab-space">
              {tabs.map((tab, index) => (
                <div key={index} hidden={activeTab !== index}>
                  <Grid container spacing={2}>
                    <Grid item md={6}>
                      <Card className="card-pricing bg-white border-0 text-center mb-4">
                        <CardHeader title="Clasica" className="bg-transparent" />
                        <CardContent>
                          <Typography variant="h3" gutterBottom>
                            $35.000
                          </Typography>
                          <ul className="list-unstyled my-4">
                            <li className="align-items-center">
                              <Typography variant="subtitle1" className="text-primary font-weight-bold">
                                Tienen un acabado muy natural,
                              </Typography>{" "}
                              <Typography variant="subtitle2">
                                sobre todo si se colocan en longitudes cortas, se usa 1 extensión encima de cada
                                pestaña natural.
                              </Typography>
                            </li>
                          </ul>
                        </CardContent>
                        <CardActions className="bg-transparent">
                          <Button variant="contained" color="primary" onClick={(e) => e.preventDefault()}>
                            Agendar
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                    <Grid item md={6}>
                      <Card className="card-pricing bg-white border-0 text-center mb-4">
                        <CardHeader title="Efecto Natural" className="bg-transparent" />
                        <CardContent>
                          <Typography variant="h3" gutterBottom>
                            $35.000
                          </Typography>
                          <ul className="list-unstyled my-4">
                            <li className="align-items-center">
                              <Typography variant="subtitle1" className="text-primary font-weight-bold">
                                Este efecto se crea utilizando 2 extensiones cerradas encima de cada pestaña
                                natural,
                              </Typography>{" "}
                              <Typography variant="subtitle2">
                                sin embargo sigue siendo una muy buena opción si quieres resultados con este
                                estilo.
                            </Typography>
                            </li>
                            </ul>
                        </CardContent>
                        </Card>
                        </Grid>
                        </Grid>
                        </div>
                        ))}
                        </CardContent>
                        </Grid>
                        </Grid>
                        </Container>
                        </section>

                
                );
                }
                export default Pricing5;
