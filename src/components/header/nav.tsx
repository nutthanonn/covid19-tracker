import React from "react";
import SelectProvinces from "./selectProvinces";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import moment from "moment";
import "moment/locale/th";
import { makeStyles } from "@mui/styles";

import { dialyStore } from "../../stores/dailyCovidToday";

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
        <Typography className={classes.title} variant="h4">
          COVID-19
        </Typography>
        <SelectProvinces dialyStoreProvinces={dialyStore} />
        <Typography>
          <strong>{moment().format("lll")}</strong>
        </Typography>
      </Toolbar>
    </div>
  );
};

export default Nav;
