import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const SelectTypeChart: React.FC = () => {
  const [value, setValue] = useState<string>("default");
  return (
    <Box>
      <FormControl>
        <Select value={value}>
          <MenuItem value="default">default</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectTypeChart;
