import React from "react";
import { motion } from "framer-motion";

const CircleIconSvg = ({ size = 500, color = "#badfe7" }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <motion.circle
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 3 }}
      cx="12"
      cy="12"
      r="10"
    ></motion.circle>
  </motion.svg>
);
export default CircleIconSvg;
