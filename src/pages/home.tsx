import React from "react";
import Box from "@mui/material/Box";
import Main from "../components/body/main";
import { dialyStore } from "../stores/dailyCovid";

const Home: React.FC = () => {
  return (
    <Box>
      <Main dialyStore={dialyStore} />
    </Box>
  );
};

export default Home;
