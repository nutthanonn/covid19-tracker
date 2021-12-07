import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@mui/styles";
import { FaFacebook } from "react-icons/fa";
import { HiDatabase } from "react-icons/hi";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#388087",
    bottom: 0,
    left: 0,
    marginTop: 200,
  },
  title: {
    color: "white",
    flexGrow: 1,
  },
  Icon: {
    color: "white",
  },
});

const MainFooter: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Toolbar>
        <Typography className={classes.title}>NUTTHANON</Typography>
        <IconButton>
          <Typography
            component="a"
            href="https://covid19.ddc.moph.go.th/"
            target="_blank"
            className={classes.Icon}
          >
            <FaFacebook />
          </Typography>
        </IconButton>
      </Toolbar>
    </Box>
  );
};

export default MainFooter;
