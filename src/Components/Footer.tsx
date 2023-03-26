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
      >
        <InstagramIcon />
      <Typography variant="h6" component="div"
       sx={{ flexGrow: 1 }}>
        Love Lash
        </Typography>
      </IconButton>
    );
  }








function DemoFooter() {
return (
<>
<footer className="footer">
<Container>
<Grid className="Grid-grid align-items-center mb-5">
<Grid lg={6}>
<h3 className="text-primary font-weight-light mb-2">
Love Lash
</h3>
<h4 className="mb-0 font-weight-light">
Pestañas
</h4>
</Grid>
<Grid className="text-lg-center btn-wrapper" lg={6}>

<InstagramButton />

</Grid>
      </Grid>
      <hr></hr>
      <Grid className="align-items-center justify-content-md-between">
        <Grid md={6}>
          <div className="copyright">
            © 2022{" "}
            <a
              href="https://www.creative-tim.com/?ref=adspr-footer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Winnie
            </a>
            .
          </div>
        </Grid>
        <Grid md={6}>
          <Tabs className="Tabs-footer justify-content-end">
            <Button>
              <Link
                href="https://www.creative-tim.com/?ref=adspr-footer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Winnie
              </Link>
            </Button>
            <Button>
              <Link
                href="https://www.creative-tim.com/presentation?ref=adspr-footer"
                target="_blank"
                rel="noopener noreferrer"
              >
                About Us
              </Link>
            </Button>
         
            <Button>
              <Link
                href="https://www.creative-tim.com/license?ref=adspr-footer"
                target="_blank"
                rel="noopener noreferrer"
              >
                License
              </Link>
            </Button>
          </Tabs>
        </Grid>
      </Grid>
    </Container>
  </footer>
</>
);
}

export default DemoFooter;
