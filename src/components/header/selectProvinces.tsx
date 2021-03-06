import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { makeStyles } from "@mui/styles";
import { MdLocationPin } from "react-icons/md";

import { observer } from "mobx-react";
import { DialyCovidImpl } from "../../stores/dailyCovidToday";

interface SelectProvincesProps {
  dialyStoreProvinces: DialyCovidImpl;
}

const useStyles = makeStyles({
  root: {
    minWidth: 300,
  },
});

const SelectProvinces: React.FC<SelectProvincesProps> = ({
  dialyStoreProvinces,
}) => {
  const classes = useStyles();
  const [value, setValue] = useState<string>("");
  const [province, setProvince] = useState<string[]>([]);

  useEffect(() => {
    async function fetch() {
      await dialyStoreProvinces.dataCovidProvincesToday();
      setProvince(dialyStoreProvinces.province());
    }
    fetch();
  }, [dialyStoreProvinces]);

  const changeProvinces = (event: SelectChangeEvent) => {
    const provinces = event.target.value;
    setValue(provinces);
    dialyStoreProvinces.setNewProvince(provinces);
  };

  return (
    <Box className={classes.root}>
      <FormControl fullWidth>
        <InputLabel id="select-label">เลือกจังหวัดของคุณ</InputLabel>
        <Select
          value={value}
          onChange={changeProvinces}
          size="small"
          labelId="select-label"
          label="เลือกจังหวัดของคุณ"
        >
          <MenuItem value="ทั้งหมด">
            ทั้งหมด &nbsp; <MdLocationPin />
          </MenuItem>
          {province.map((item) => {
            return (
              <MenuItem value={item} key={item}>
                {item} &nbsp; <MdLocationPin />
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default observer(SelectProvinces);
