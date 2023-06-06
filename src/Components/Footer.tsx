import React from "react";
import {
  Button,
  Link,
  Tabs,
  Container,
  Grid,
  Tooltip,
  Typography
} from "@mui/material";
import { IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

const InstagramButton = () => {
  return (
    <IconButton
      href="https://www.instagram.com/lovelashstg/"
      target="_blank"
      rel="noopener"
      // big
      color="primary"
      aria-label="Instagram"
      sx={{ mr: 2, ml: 2 }}
    >
      <InstagramIcon />
      <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
        Love Lash
      </Typography>
    </IconButton>
  );
};

const DemoFooter = () => {
  return (
    <footer className="footer">
      <Container>
        <Grid //centered
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item lg={10} >
            <InstagramButton />
          </Grid>
        </Grid>
        <hr />
      </Container>
    </footer>
  );
};

export default DemoFooter;
