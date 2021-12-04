import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import moment from "moment";
import "moment/locale/th";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#c2edce",
    top: 0,
    position: "sticky",
    zIndex: 10,
  },
  title: {
    flexGrow: 1,
  },
});

const Nav: React.FC = () => {
  const classes = useStyles();
  moment.locale("th");

  return (
    <div className={classes.root}>
      <Toolbar>
        <Box className={classes.title}>
          <Typography variant="h4">COVID-19</Typography>
        </Box>
        <Box>
          <Typography>
            <strong>{moment().format("lll")}</strong>
          </Typography>
        </Box>
      </Toolbar>
    </div>
  );
};

export default Nav;
