'use client'

import * as React from "react";
import {
  Button,
  Link,
  Tabs,
  Container,
  Grid,
  Tooltip,
  Typography,
  IconButton,
} from "@mui/material";
import { Instagram as InstagramIcon } from "@mui/icons-material";

const InstagramButton = () => {
  return (
    <IconButton
      href="https://www.instagram.com/lovelashstg/"
      target="_blank"
      rel="noopener"
    >
      <InstagramIcon />
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Love Lash
      </Typography>
    </IconButton>
  );
};

const DemoFooter = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <Grid className="Grid-grid align-items-center mb-5" container>
            <Grid lg={6} item>
              <Typography
                variant="h3"
                className="text-primary font-weight-light mb-2"
              >
                Love Lash
              </Typography>
              <Typography variant="h4" className="mb-0 font-weight-light">
                Pestañas
              </Typography>
            </Grid>
            <Grid className="text-lg-center btn-wrapper" container item lg={6}>
              <InstagramButton />
            </Grid>
          </Grid>
          \n <hr />
          <Grid
            className="align-items-center justify-content-md-between"
            container
          >
            <Grid md={6} item>
              <Typography variant="body2" className="mb-0">
                © 2022{" "}
                <Link
                  href="https://www.creative-tim.com/?ref=adspr-footer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Winnie
                </Link>
                .
              </Typography>
            </Grid>
            <Grid md={6} item>
              <Tabs className="Tabs-footer justify-content-end">
                <Button>
                  <Link
                    href="https://www.creative-tim.com/?ref=adspr-footer"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="body2"
                  >
                    Winnie
                  </Link>
                </Button>
                <Button>
                  <Link
                    href="https://www.creative-tim.com/presentation?ref=adspr-footer"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="body2"
                  >
                    About Us
                  </Link>
                </Button>
                <Button>
                  <Link
                    href="https://www.creative-tim.com/license?ref=adspr-footer"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="body2"
                  >
                    License
                  </Link>
                  {" "}
                </Button>
                {" "}
              </Tabs>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
};

export default DemoFooter;
