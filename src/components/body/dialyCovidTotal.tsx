import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CountUp from "react-countup";
import { makeStyles } from "@mui/styles";
import CircleIconSvg from "../../svg/circleIcon";

interface DailyCovidTotalProps {
  covidToday: number | undefined;
}

const useStyles = makeStyles({
  rootBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
  },
  boxItem: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  total: {
    fontSize: 70,
  },
});

const DialyCovidTotal: React.FC<DailyCovidTotalProps> = ({ covidToday }) => {
  const classes = useStyles();

  return (
    <Box className={classes.rootBox}>
      <Box className={classes.boxItem}>
        <Typography sx={{ fontWeight: "bold" }} variant="h4">
          ยอดผู้ติดเชื้อวันนี้
        </Typography>
        <CountUp
          end={covidToday === undefined ? 0 : covidToday}
          duration={2}
          decimal=","
          className={classes.total}
        />
      </Box>
      <CircleIconSvg />
    </Box>
  );
};

export default DialyCovidTotal;
