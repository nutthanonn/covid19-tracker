import React from "react";
import SelectTypeChart from "./selectTypeChart";

//libraries
import Box from "@mui/material/Box";
import BoxChart from "./boxChart";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";

//stores
import { timelineCaseStore } from "../../../stores/timeLineCaseStore";

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

const MainBoxChart: React.FC = () => {
  const classes = useStyles();

  return (
    <Box>
      <Toolbar>
        <Box className={classes.select} />
        <Box>
          <SelectTypeChart setType={timelineCaseStore} />
        </Box>
      </Toolbar>
      <Box className={classes.chartjs}>
        <BoxChart Timelinestore={timelineCaseStore} />
      </Box>
    </Box>
  );
};

export default MainBoxChart;
