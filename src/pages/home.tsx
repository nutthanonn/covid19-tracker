import React from "react";
import Box from "@mui/material/Box";
import Main from "../components/body/main";
import { dialyStore } from "../stores/dailyCovidToday";

const Home: React.FC = () => {
  return (
    <Box>
      <Main dialyStore={dialyStore} />
    </Box>
  );
};

export default Home;
