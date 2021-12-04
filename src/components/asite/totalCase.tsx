import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";

interface TotalCase {
  total_case: number | undefined;
  total_case_excludeabroad: number | undefined;
  total_death: number | undefined;
  total_recovered: number | undefined;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  cardTotal: {
    marginTop: 20,
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const TotalCase: React.FC<TotalCase> = ({
  total_case,
  total_case_excludeabroad,
  total_death,
  total_recovered,
}) => {
  const classes = useStyles();
  const totalCaseData = [
    total_case,
    total_case_excludeabroad,
    total_recovered,
    total_death,
  ];
  const totalCaseString = [
    "ผู้ติดเชื้อทั้งหมด: ",
    "ในประเทศไทย: ",
    "รักษาหายแล้ว: ",
    "ผู้เสียชีวิตทั้งหมด: ",
  ];

  const stringFormat = (number: number | undefined) => {
    const newFormat: string | undefined = number
      ?.toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,");
    return newFormat?.slice(0, -3);
  };

  return (
    <Container className={classes.root}>
      <Box>
        <Typography className={classes.title} variant="h3">
          Total Case
        </Typography>
      </Box>
      {totalCaseData.map((item, index) => {
        return (
          <Card className={classes.cardTotal}>
            <CardContent>
              <Typography variant="h5">
                {totalCaseString[index]}
                <b>{stringFormat(item)}</b> ราย
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Container>
  );
};

export default TotalCase;
