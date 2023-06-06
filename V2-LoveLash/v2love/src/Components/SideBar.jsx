'use client'
import React from "react";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { AppBar, IconButton, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

const useStyles = makeStyles(() => ({
  appBar: {
    backgroundColor: theme.palette.primary.main,
    position: "fixed",
    left: 0,
    width: "80px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sidebarLabel: {
    fontFamily: "Bebas Neue",
    fontSize: "36px",
    color: theme.palette.text.primary,
    writingMode: "vertical-lr",
    textOrientation: "mixed",
    marginTop: "auto",
  },
  hr: {
    width: "100%",
    height: "3px",
    backgroundColor: theme.palette.text.primary,
    margin: "auto",
    marginTop: "auto",
  },
  accountText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.text.primary,
    fontSize: "16px",
  },
  icon: {
    color: theme.palette.text.primary,
  },
}));

function SideBar() {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <IconButton className={classes.icon}>
        <InstagramIcon />
      </IconButton>
      <Typography className={classes.accountText}>@love_lash</Typography>
      <Typography className={classes.sidebarLabel}>LOVE LASH</Typography>
      <hr className={classes.hr} />
    </AppBar>
  );
}

export default function SideBarEnd() {
  return (<SideBar />);
}
