import React from "react";
import Home from "./pages/home";
import Nav from "./components/header/nav";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#f6f6f2",
  },
});

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Nav />
      <CssBaseline />
      <Home />
    </Box>
  );
};

export default App;
