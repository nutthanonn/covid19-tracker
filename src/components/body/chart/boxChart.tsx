import React, { useEffect, useState } from "react";

//libraries
import Box from "@mui/material/Box";
import Chart from "chart.js/auto";
import { makeStyles } from "@mui/styles";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { TimeLineCaseAllStoreImpl } from "../../../stores/timeLineCaseStore";

interface BoxChartProps {
  Timelinestore: TimeLineCaseAllStoreImpl;
}

const useStyles = makeStyles({
  root: {
    width: 1000,
  },
});

const BoxChart: React.FC<BoxChartProps> = ({ Timelinestore }) => {
  const [state, setState] = useState<any>([]);
  const [month, setMonth] = useState<string[]>([]);
  Chart.register(CategoryScale);

  useEffect(() => {
    async function fetch() {
      await Timelinestore.data();
      const res = Timelinestore.yearData();
      setMonth(Timelinestore.rangeMonthData());
      setState(res);
    }
    fetch();
  }, [setState, Timelinestore]);

  const data = {
    labels: month,
    datasets: [
      {
        label: "จำนวนผู้ติดเชื้อทั้งหมดในเดือน",
        data: state,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  const classes = useStyles();
  return (
    <Box>
      <Line data={data} className={classes.root} />
    </Box>
  );
};

export default BoxChart;
