import React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import BoxChart from "./boxChart";
import SelectTypeChart from "./selectTypeChart";
import Toolbar from "@mui/material/Toolbar";

const useStyles = makeStyles({
  select: {
    flexGrow: 1,
  },
  chartjs: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});

const MainBoxChart = () => {
  const classes = useStyles();

  return (
    <Box>
      <Toolbar>
        <Box className={classes.select} />
        <Box>
          <SelectTypeChart />
        </Box>
      </Toolbar>
      <Box className={classes.chartjs}>
        <BoxChart />
      </Box>
    </Box>
  );
};

export default MainBoxChart;
