'use client'
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";



import damianImg from "../styles/assets/img/damian.png";
import ashimImg from "../styles/assets/img/ashim.jpeg";
import odinImg from "../styles/assets/img/odin.png";
import daneImg from "../styles/assets/img/dane.jpeg";

function Blogs2() {
  const theme = useTheme();

  return (
    <section className="blogs-2">
      <Container sx={{ my: 5 }}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item md={8} sx={{ textAlign: "center", mb: 5 }}>
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              style={{ color: theme.palette.primary.main }}
            >
              Por que Love Lash?\n            </Typography>
            <Typography
              variant="body1"
              style={{ color: theme.palette.text.primary }}
              gutterBottom
            >
              Nuestro principal objetivo es hacerte sentir bonita, por eso,
              nos enfocamos en escuchar las necesidades de cada clienta mediante
              evaluaciones personalizadas, ofrecemos asesoría para entre ambas
              escoger ese resultado que te de comodidad y que haga que te enamores
              de tí.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item lg={3}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <img src={damianImg} alt="Efecto Rimel" style={{ height: "100%" }} />
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
              <CardContent>
                <img src={ashimImg} alt="Natural" style={{ height: "100%" }} />
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
              <CardContent>
                <img src={odinImg} alt="Full set" style={{ height: "100%" }} />
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
              <CardContent>
                <img src={daneImg} alt="Closed Fans" style={{ height: "100%" }} />
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
  );
}

export default Blogs2;
