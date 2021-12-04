import React, { useEffect, useState } from "react";
import DialyCovidTotal from "./dialyCovidTotal";
import TotalCase from "../asite/totalCase";

//material-ui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

//store
import { DialyCovidImpl } from "../../stores/dailyCovid";
import { observer } from "mobx-react";

///interface
import { DialyCovidValues } from "../../interfaces/dailyCovid";

interface MainProps {
  dialyStore: DialyCovidImpl;
}

const useStyles = makeStyles({});

const Main: React.FC<MainProps> = ({ dialyStore }) => {
  const [dataDialy, setDataDialy] = useState<DialyCovidValues>();
  const classes = useStyles();

  useEffect(() => {
    async function fetch() {
      await dialyStore.dataCovid();
      setDataDialy(dialyStore.data[0]);
    }
    fetch();
  }, [dialyStore]);

  return (
    <Box>
      <Grid container>
        <Grid item md={4} sx={{ border: 1 }}>
          <TotalCase
            total_case={dataDialy?.total_case}
            total_case_excludeabroad={dataDialy?.total_case_excludeabroad}
            total_death={dataDialy?.total_death}
            total_recovered={dataDialy?.total_recovered}
          />
        </Grid>
        <Grid item md={4} sx={{ border: 1 }}>
          <DialyCovidTotal covidToday={dataDialy?.new_case} />
        </Grid>
        <Grid item md={4} sx={{ border: 1 }}></Grid>
      </Grid>
    </Box>
  );
};

export default observer(Main);
