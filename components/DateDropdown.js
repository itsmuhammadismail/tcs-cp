import TextField from "@mui/material/TextField";
import StaticDateRangePicker from "@mui/lab/StaticDateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import { useEffect, useRef, useState } from "react";
import useVisible from "../hooks/useVisible";
import moment from "moment";
import Button from "./Button";

const DateDropdown = ({ showDropdown, setShowDropdown }) => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState([new Date(), new Date()]);
  const [custom, setCustom] = useState(false);

  const ref = useRef();

  useEffect(() => setVisible(showDropdown), [showDropdown]);

  useEffect(() => console.log(value), [value]);

  useVisible(ref, () => {
    setVisible(false);
    setShowDropdown();
    setCustom(false);
  });

  const handleCustom = () => {
    custom === true ? setCustom(false) : setCustom(true);
  };

  const changeDate = (range) => {
    setVisible(false);
    setShowDropdown();
    setCustom(false);
    if (range === "today") {
      var today = new Date();
      setValue([today, today]);
    } else if (range === "yesterday") {
      var yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
      setValue([yesterday, yesterday]);
    } else if (range === "last 7 days") {
      var today = new Date();
      var last = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      setValue([last, today]);
    } else if (range === "last 30 days") {
      var today = new Date();
      var last = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
      setValue([last, today]);
    } else if (range === "this month") {
      var start = new Date();
      var end = new Date();
      start.setDate(1);
      setValue([start, end]);
    } else if (range === "last month") {
      var today = new Date();
      const lastMonth = today.getMonth() === 0 ? 11 : today.getMonth() - 1;
      const year =
        lastMonth === 0 ? today.getFullYear() - 1 : today.getFullYear();
      var start = new Date(year, lastMonth + 1, 0);
      start.setDate(1);
      var end = new Date(year, lastMonth + 1, 0);
      setValue([start, end]);
    }
  };
  return (
    <>
      {visible && (
        <div
          className="absolute top-[3rem] right-0 bg-white  rounded-2xl z-[100] overflow-hidden"
          style={{ boxShadow: "0px 0px 50px 0px rgba(82,63,105,0.2)" }}
        >
          <div ref={ref} className="flex">
            <ul className="my-4 w-[11rem] ">
              <li
                className="px-4 py-2 bg-[#F3F6F9]  hover:bg-[#F3F6F9]"
                onClick={() => changeDate("today")}
              >
                Today
              </li>
              <li
                className="px-4 py-2  hover:bg-[#F3F6F9]"
                onClick={() => changeDate("yesterday")}
              >
                Yesterday
              </li>
              <li
                className="px-4 py-2  hover:bg-[#F3F6F9]"
                onClick={() => changeDate("last 7 days")}
              >
                Last 7 Days
              </li>
              <li
                className="px-4 py-2  hover:bg-[#F3F6F9]"
                onClick={() => changeDate("last 30 days")}
              >
                Last 30 Days
              </li>
              <li
                className="px-4 py-2  hover:bg-[#F3F6F9]"
                onClick={() => changeDate("this month")}
              >
                This Month
              </li>
              <li
                className="px-4 py-2  hover:bg-[#F3F6F9]"
                onClick={() => changeDate("last month")}
              >
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
          {custom && (
            <div className="border-t-2">
              <div className="flex gap-2 items-center p-2 justify-end">
                {moment(value[0]).format("L")} - {moment(value[1]).format("L")}
                <Button
                  text="Cancel"
                  bgColor="#F3F6F9"
                  color="#3A3A3A"
                  width="8rem"
                />
                <Button
                  text="Apply"
                  bgColor="#F3F6F9"
                  color="#3A3A3A"
                  width="8rem"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default DateDropdown;
