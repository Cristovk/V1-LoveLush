import * as React from "react";
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";

function Blogs2() {
  return (
    <>
      <section className="blogs-2">
        <Container sx={{ my: 5 }}>
          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item md={8}>
              <Typography variant="h3" align="center" gutterBottom>
                Por que Love Lash?
              </Typography>
              <Typography variant="body1" align="center" gutterBottom>
                Nuestro principal objetivo es hacerte sentir bonita, por eso,
                nos enfocamos en escuchar las necesidades de cada clienta
                mediante evaluaciones personalizadas, ofrecemos asesoría para
                entre ambas escoger ese resultado que te de comodidad y que haga
                que te enamores de tí.
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item lg={3}>
              <Card sx={{ height: "100%" }}>
                <div
                  className="full-background"
                  style={{
                    // backgroundImage: URL(${require("assets/img/sections/damian.jpg").default}),
                    height: "100%",
                  }}
                ></div>
                <CardContent>
                  <div className="content-bottom">
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      gutterBottom
                    >
                      Efecto Rimel
                    </Typography>
                    <Typography variant="h5" component="h2">
                      Rimel
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={3}>
              <Card sx={{ height: "100%" }}>
                <div
                  className="full-background"
                  style={{
                    // backgroundImage: url(${require("assets/img/sections/ashim.jpg").default}),
                    height: "100%",
                  }}
                ></div>
                <CardContent>
                  <div className="content-bottom">
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      gutterBottom
                    >
                      Natural
                    </Typography>
                    <Typography variant="h5" component="h2">
                      Natural
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={3}>
              <Card sx={{ height: "100%" }}>
                <div
                  className="full-background"
                  style={{
                    // backgroundImage: url(${require("assets/img/sections/odin.jpg").default}),
                    height: "100%",
                  }}
                ></div>
                <CardContent>
                  <div className="content-bottom">
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      gutterBottom
                    >
                      Full set
                    </Typography>
                    <Typography variant="h5" component="h2">
                      Full Set
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={3}>
              <Card sx={{ height: "100%" }}>
                <div
                  className="full-background"
                  style={{
                    // backgroundImage: url(${require("assets/img/sections/dane.jpg").default}),
                    height: "100%",
                  }}
                ></div>
                <CardContent>
                  <div className="content-bottom">
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      gutterBottom
                    >
                      Closed Fans
                    </Typography>
                    <Typography variant="h5" component="h2">
                      Closed
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}

export default Blogs2;
