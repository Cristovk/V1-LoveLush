import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Collapse,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Header4() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const handleNavbarToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <AppBar position="static" className="header-4 skew-separator">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Creative Tim
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleNavbarToggle}
          >
            <MenuIcon />
          </IconButton>
          <Collapse in={navbarOpen} timeout="auto" unmountOnExit>
            <List sx={{ display: "flex", flexDirection: "row" }}>
              <ListItem sx={{ px: 3 }}>
                <ListItemText>
                  <Button color="inherit" href="#pablo">
                    Home
                  </Button>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ px: 3 }}>
                <ListItemText>
                  <Button color="inherit" href="#pablo">
                    Acerca de Nosotros
                  </Button>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ px: 3 }}>
                <ListItemText>
                  <Button color="inherit" href="#pablo">
                    Products
                  </Button>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ px: 3 }}>
                <ListItemText>
                  <Button color="inherit" href="#pablo">
                    Contactanos
                  </Button>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ px: 3 }}>
                <ListItemText>
                  <Button color="inherit" href="https://twitter.com/CreativeTim">
                    <i className="fab fa-twitter"></i>
                  </Button>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ px: 3 }}>
                <ListItemText>
                  <Button color="inherit" href="https://www.facebook.com/CreativeTim">
                    <i className="fab fa-facebook-square"></i>
                  </Button>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ px: 3 }}>
                <ListItemText>
                  <Button
                    color="inherit"
                    href="https://www.instagram.com/CreativeTimOfficial"
                  >
                    <i className="fab fa-instagram"></i>
                  </Button>
                </ListItemText>
              </ListItem>
            </List>
          </Collapse>
        </Toolbar>
      </AppBar>
      <div className="page-header header-video">
        <div className="overlay"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          src={require("assets/videos/Lights - 26607.mp4")}
        //   type="video/mp4"
        />
        <Container className="text-center">
          <Typography variant="h1" className="video-text">
            Love Lash
          </Typography>
          <Typography variant="h1" className="display-3 text-white">
            Pestañas
          </Typography>
          <Button
            variant="contained"
            color="warning"
            href="#Blogs2"
            startIcon={<i className="ni ni-button-play" />}
          >
            Que Deseas
          </Button>
        </Container>
        </div>
    </>
    );

}

export default Header4;
