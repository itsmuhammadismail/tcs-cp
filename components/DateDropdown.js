import TextField from "@mui/material/TextField";
import StaticDateRangePicker from "@mui/lab/StaticDateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import { useEffect, useRef, useState } from "react";
import useVisible from "../hooks/useVisible";

const DateDropdown = ({ showDropdown, setShowDropdown }) => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState([null, null]);
  const [custom, setCustom] = useState(false);

  const ref = useRef();

  useEffect(() => setVisible(showDropdown), [showDropdown]);

  useVisible(ref, () => {
    setVisible(false);
    setShowDropdown();
    setCustom(false);
  });

  const handleCustom = () => {
    custom === true ? setCustom(false) : setCustom(true);
  };
  return (
    <>
      {visible && (
        <div
          ref={ref}
          style={{ boxShadow: "0px 0px 50px 0px rgba(82,63,105,0.2)" }}
          className="absolute top-[3rem] right-0 bg-white  rounded-2xl z-[100] flex overflow-hidden"
        >
          <ul className="my-4 w-[11rem] ">
            <li className="px-4 py-2 bg-[#F3F6F9]  hover:bg-[#F3F6F9]">
              Today
            </li>
            <li className="px-4 py-2  hover:bg-[#F3F6F9]">
              Yesterday
            </li>
            <li className="px-4 py-2  hover:bg-[#F3F6F9]">
              Last 7 Days
            </li>
            <li className="px-4 py-2  hover:bg-[#F3F6F9]">
              Last 30 Days
            </li>
            <li className="px-4 py-2  hover:bg-[#F3F6F9]">
              This Month
            </li>
            <li className="px-4 py-2  hover:bg-[#F3F6F9]">
              Last Month
            </li>
            <li
              className="px-4 py-2  hover:bg-[#F3F6F9]"
              onClick={handleCustom}
            >
              Custom Range
            </li>
          </ul>
          {custom && (
            <div className="border-l-2">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDateRangePicker
                  displayStaticWrapperAs="desktop"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(startProps, endProps) => (
                    <>
                      <TextField {...startProps} />
                      <Box sx={{ mx: 2 }}> to </Box>
                      <TextField {...endProps} />
                    </>
                  )}
                />
              </LocalizationProvider>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default DateDropdown;
