'use client'

import React, { useContext } from "react";
import { AgendaContext } from "../Data/useData";
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Paper,
  IconButton,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import NotificationsIcon from "@mui/icons-material/Notifications";

const FeatureBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const FeatureIcon = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: "50%",
  padding: theme.spacing(2),
  marginRight: theme.spacing(3),
}));

const AvailableDate = ({ day, time }) => {
  const theme = useTheme();

  return (
    <Grid item xs={12} md={4}>
      <Paper
        sx={{
          height: 100,
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.common.white,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        elevation={3}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: theme.palette.text.primary }}
        >
          {day}
        </Typography>
        <hr
          style={{
            border: `1px dashed ${theme.palette.primary.main}`,
            width: "60%",
          }}
        />
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: theme.palette.text.primary }}
        >
          {time}
        </Typography>
      </Paper>
    </Grid>
  );
};

const Feature = () => {
  const { daysAvailable, hourAvailable, appointmentSix } =
    useContext(AgendaContext);
  const theme = useTheme();

  return (
    <>
      <Box sx={{ backgroundColor: theme.palette.primary.light }} py={10}>
        <Container
          maxWidth="lg"
          style={{ border: `2px dotted ${theme.palette.primary.main}` }}
        >
          <Grid container alignItems="center">
            <Grid item md={6}>
              <FeatureBox>
                <FeatureIcon>
                  <NotificationsIcon
                    sx={{
                      fontSize: 30,
                      color: theme.palette.primary.light,
                    }}
                  />
                </FeatureIcon>
                <Grid item md={6}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      color: theme.palette.secondary.main,  }}
                  >
                    Próximas fechas
                  </Typography>
                </Grid>
              </FeatureBox>
            </Grid>

            <Grid item md={6}>
              <Grid container spacing={2}>
                <AvailableDate
                  day={daysAvailable[0]}
                  time={"11:00 am"}
                />
                <AvailableDate
                  day={daysAvailable[1]}
                  time={"11:00 am"}
                />
                <AvailableDate
                  day={daysAvailable[2]}
                  time={"11:00 am"}
                />
              </Grid>
            </Grid>

            <Grid
              item
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "bold",
                  color: theme.palette.secondary.main,
                }}
              >
                ¿Quieres ver más opciones?
              </Typography>

              <Button variant="contained" color="primary">
                Agenda
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};



export default function Feature6() {
  return <Feature />;
}
