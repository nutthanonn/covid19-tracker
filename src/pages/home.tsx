import React from "react";
import Box from "@mui/material/Box";
import Main from "../components/body/main";
import { dialyStore } from "../stores/dailyCovidToday";
import MainBoxChart from "../components/body/chart/mainBoxChart";
import Mainfooter from "../components/footer/mainFooter";

const Home: React.FC = () => {
  return (
    <Box>
      <Main dialyStore={dialyStore} />
      <Box>
        <MainBoxChart />
      </Box>
      <Box>
        <Mainfooter />
      </Box>
    </Box>
  );
};

export default Home;
