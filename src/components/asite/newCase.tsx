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

import { NewCaseInterface } from "../../interfaces/newCase";

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
});

const NewCase: React.FC<NewCaseInterface> = ({
  new_case,
  new_case_excludeabroad,
  new_death,
  new_recovered,
}) => {
  const classes = useStyles();
  const totalCaseData = [
    new_case,
    new_case_excludeabroad,
    new_recovered,
    new_death,
  ];
  const totalCaseString = [
    "ผู้ติดเชื้อรายใหม่: ",
    "ในประเทศ: ",
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
    const data: string | undefined = newFormat?.slice(0, -3);
    if (number === 0) {
      return "-";
    }
    return data;
  };

  return (
    <Container className={classes.root}>
      <Box>
        {totalCaseData.map((item, index) => {
          return (
            <Box key={index}>
              <motion.div
                key={item}
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
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default NewCase;
