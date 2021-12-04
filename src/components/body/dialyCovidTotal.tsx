import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CountUp from "react-countup";
import { makeStyles } from "@mui/styles";
import CircleIconSvg from "../../svg/circleIcon";

interface DailyCovidTotalProps {
  covidToday: number | undefined;
  provinces: string;
}

const useStyles = makeStyles({
  rootBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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

const DialyCovidTotal: React.FC<DailyCovidTotalProps> = ({
  covidToday,
  provinces,
}) => {
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

        <Typography variant="body2">
          <b>จังหวัด: </b>
          {provinces}
        </Typography>
      </Box>
      <CircleIconSvg />
    </Box>
  );
};

export default DialyCovidTotal;
