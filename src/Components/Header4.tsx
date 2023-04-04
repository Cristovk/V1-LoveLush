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
import { useTheme } from "@mui/material/styles";
import { makeStyles } from '@mui/styles';




function Header4() {
  const theme = useTheme();

  const [navbarOpen, setNavbarOpen] = React.useState(false);



  const handleNavbarToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>

    
        <Container  >
          <Typography   style={{ 
            fontSize: "13rem",
            color: theme.palette.secondary.main,
            display: "flex",
            justifyContent: "center",
            fontFamily: theme.typography.fontFamily


            }} >
            Love Lash
          </Typography>
          {/* <Typography variant="h3" style={{ 
            color: theme.palette.primary.main,
            display: "flex",
            justifyContent: "center",
            }} >
            Pestañas
          </Typography> */}
          {/* <Button
            sx={{ mt: 3 }}
            variant="contained"
            style={{
               backgroundColor: 
              theme.palette.secondary.light, 
              color: theme.palette.primary.main,
             // centrar el boton
              display: "flex",
              justifyContent: "flex-end",

            }}
            >
            Que Deseas
          </Button> */}
        </Container>

    </>
    );
    
  }
  
  export default Header4;
 
  








  {/* <AppBar position="static"> */}
    {/* <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}  style={{color: theme.palette.text.primary}} >
        Love Lash
      </Typography>
      <IconButton
       style={{color: theme.palette.text.primary}}
        sx={{ mr: 2 }}
        onClick={handleNavbarToggle}
      >
        {/* <MenuIcon /> */}
      {/* </IconButton>
      <Collapse in={navbarOpen} timeout="auto" unmountOnExit>
        <List sx={{ display: "flex", flexDirection: "row" }}>
          <ListItem sx={{ px: 3 }}>
            <ListItemText>
              <Button color="inherit" >
                Home
              </Button>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ px: 3 }}>
            <ListItemText>
              <Button color="inherit" >
                Acerca de Nosotros
              </Button>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ px: 3 }}>
            <ListItemText>
              <Button color="inherit" >
                Servicios
              </Button>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ px: 3 }}>
            <ListItemText>
              <Button color="inherit" >
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
  </AppBar> */}