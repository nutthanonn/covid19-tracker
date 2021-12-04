import React, { useEffect, useState } from "react";
import DialyCovidTotal from "./dialyCovidTotal";
import TotalCase from "../asite/totalCase";
import NewCase from "../asite/newCase";

//material-ui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

//store
import { DialyCovidImpl } from "../../stores/dailyCovidToday";
import { observer } from "mobx-react";

///interface
import { DialyCovidValues } from "../../interfaces/dailyCovid";

interface MainProps {
  dialyStore: DialyCovidImpl;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
  },
});

const Main: React.FC<MainProps> = observer(({ dialyStore }) => {
  const [check, setCheck] = useState<boolean>(false);
  const [dataDialy, setDataDialy] = useState<DialyCovidValues>();
  const classes = useStyles();

  useEffect(() => {
    async function fetch() {
      await dialyStore.dataCovid();
      await dialyStore.dataCovidProvincesToday();
      setDataDialy(dialyStore.data[0]);
    }

    fetch();
  }, [dialyStore, check]);

  useEffect(() => {
    setDataDialy(dialyStore.changeProvinces());
    console.log("Hello");
  }, [setDataDialy, dialyStore.setProvince, dialyStore]);

  return (
    <Box>
      <Grid container className={classes.root}>
        <Grid item md={4}>
          <TotalCase
            total_case={dataDialy?.total_case}
            total_case_excludeabroad={dataDialy?.total_case_excludeabroad}
            total_death={dataDialy?.total_death}
            total_recovered={dataDialy?.total_recovered}
          />
        </Grid>
        <Grid item md={4}>
          <DialyCovidTotal
            covidToday={dataDialy?.new_case}
            provinces={dialyStore?.setProvince}
          />
        </Grid>
        <Grid item md={4}>
          <NewCase
            new_case={dataDialy?.new_case}
            new_case_excludeabroad={dataDialy?.new_case_excludeabroad}
            new_death={dataDialy?.new_death}
            new_recovered={dataDialy?.new_recovered}
          />
        </Grid>
      </Grid>
    </Box>
  );
});

export default Main;
