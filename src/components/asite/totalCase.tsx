import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";
import { RiVirusLine } from "react-icons/ri";
import { FaViruses } from "react-icons/fa";
import { GiLoveInjection, GiDeadHead } from "react-icons/gi";

import { TotalCaseInterface } from "../../interfaces/totalCase";

//framer-motion
const animation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

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
  totalCaseBox: {
    marginTop: 50,
  },
});

const TotalCase: React.FC<TotalCaseInterface> = ({
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

  const Icon = [
    <RiVirusLine color="green" size="30" />,
    <FaViruses color="green" size="30" />,
    <GiLoveInjection color="red" size="30" />,
    <GiDeadHead color="gray" size="30" />,
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
      <Box className={classes.totalCaseBox}>
        {totalCaseData.map((item, index) => {
          return (
            <motion.div
              variants={animation}
              animate="visible"
              initial="hidden"
              transition={{ duration: index * 0.5 }}
            >
              <Card className={classes.cardTotal}>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6">
                    {totalCaseString[index]}
                    <b>{stringFormat(item)}</b> ราย {Icon[index]}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </Box>
    </Container>
  );
};

export default TotalCase;
