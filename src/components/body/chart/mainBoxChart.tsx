import React from "react";
import SelectTypeChart from "./selectMonthChart";

//libraries
import Box from "@mui/material/Box";
import BoxChart from "./boxChart";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";

//stores
import { timelineCaseStore } from "../../../stores/timeLineCaseStore";

const useStyles = makeStyles({
  tool: {
    marginTop: 150,
    backgroundColor: "#ebe8e7",
  },
  select: {
    flexGrow: 1,
  },
  chartjs: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 50,
  },
});

const MainBoxChart: React.FC = () => {
  const classes = useStyles();

  return (
    <Box>
      <Toolbar className={classes.tool}>
        <Box className={classes.select}>
          รายงานสถานการณ์ COVID-19 ระลอก 3 (ตั้งแต่ 01/04/2021 – ปัจจุบัน)
          ทั้งประเทศ
        </Box>
        <Box sx={{ padding: 1 }}>
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
