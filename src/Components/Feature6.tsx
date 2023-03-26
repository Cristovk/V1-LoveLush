import React from "react";
import {
Container,
Grid,
Typography,
Button,
Box,
IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import NotificationsIcon from "@mui/icons-material/Notifications";

// Core Components

const FeatureBox = styled("div")(({ theme }) => ({
display: "flex",
alignItems: "center",
}));

const FeatureIcon = styled("div")(({ theme }) => ({
backgroundColor: theme.palette.info.main,
borderRadius: "50%",
padding: theme.spacing(2),
marginRight: theme.spacing(3),
}));

function Feature6() {
return (
<>
<Box sx={{ backgroundColor: "#f8f9fe" }} py={10}>
<Container maxWidth="lg">
<Grid container alignItems="center">
<Grid item md={6}>
<FeatureBox>
<FeatureIcon>
<NotificationsIcon sx={{ fontSize: 60, color: "#fff" }} />
</FeatureIcon>
<div>
<Typography variant="h5" sx={{ fontWeight: "bold" }}>
Aca Irian los dias Disponibles
</Typography>
<Typography variant="body1">
Cuadro de Dias Disponibles
</Typography>
<Button variant="contained" color="primary">
Agenda
</Button>
</div>
</FeatureBox>
</Grid>
<Grid item md={6}>
<img
alt="..."
src={require("assets/img/ill/ill.png").default}
width="100%"
sx={{ ml: { xs: 0, md: 5 } }}
/>
</Grid>
</Grid>
</Container>
</Box>
</>
);
}

export default Feature6;