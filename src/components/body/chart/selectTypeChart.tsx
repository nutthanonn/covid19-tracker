import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { makeStyles } from "@mui/styles";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TimeLineCaseAllStoreImpl } from "../../../stores/timeLineCaseStore";
import { observer } from "mobx-react";

interface SelectTypeChartProps {
  setType: TimeLineCaseAllStoreImpl;
}

const useStyles = makeStyles({
  root: {
    backgroundColor: "red",
  },
  selectBar: {
    width: 200,
  },
});

const SelectTypeChart: React.FC<SelectTypeChartProps> = observer(
  ({ setType }) => {
    const classes = useStyles();
    const [value, setValue] = useState<string>("default");
    const [month, setMonth] = useState<string[]>([]);

    const changeType = (e: SelectChangeEvent) => {
      const valueType = e.target.value;
      setValue(valueType);
      setType.changeTypeChart(valueType);
    };

    useEffect(() => {
      setMonth(setType.rangeMonthData());
    }, [setType, setType.dataCaseAll]);

    return (
      <Box>
        <FormControl className={classes.selectBar}>
          <InputLabel>เดือน</InputLabel>
          <Select
            value={value}
            IconComponent={MdKeyboardArrowDown}
            onChange={changeType}
            label="เดือน"
          >
            <MenuItem value="default">ทั้งหมด</MenuItem>
            {month.map((item) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Box>
    );
  }
);

export default SelectTypeChart;
