import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TimeLineCaseAllStoreImpl } from "../../../stores/timeLineCaseStore";

interface SelectTypeChartProps {
  setType: TimeLineCaseAllStoreImpl;
}

const SelectTypeChart: React.FC<SelectTypeChartProps> = ({ setType }) => {
  const [value, setValue] = useState<string>("default");

  const changeType = (e: SelectChangeEvent) => {
    const valueType = e.target.value;
    setValue(valueType);
    setType.changeTypeChart(valueType);
  };

  return (
    <Box>
      <FormControl>
        <Select
          value={value}
          IconComponent={MdKeyboardArrowDown}
          onChange={changeType}
        >
          {/* map-function */}
          <MenuItem value="default">default</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectTypeChart;
