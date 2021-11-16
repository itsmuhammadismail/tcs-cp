import PieChart from "./charts/PieChart";
import Button2 from "./Button2";
import DetailedView from "./DetailedView";
import { useState } from "react";
import DateDropdown from "./DateDropdown";
import moment from "moment";

const Orders = () => {
  const [dateDropdown, setDateDropdown] = useState(false);
  const [dateValue, setDateValue] = useState(
    `Today ${moment().format("MMM, DD")}`
  );
  const [selected, setSelected] = useState("today");

  const handleDateDropdown = () => {
    dateDropdown ? setDateDropdown(false) : setDateDropdown(true);
  };

  const handleSelected = (name) => {
    setSelected(name);
    if (name === "today") setDateValue(`Today ${moment().format("MMM, DD")}`);
    else if (name === "yesterday")
      setDateValue(
        `Yesterday ${moment(new Date(Date.now() - 24 * 60 * 60 * 1000)).format(
          "MMM, DD"
        )}`
      );
    else if (name === "last 7 days") setDateValue("Last 7 Days");
    else if (name === "last 30 days") setDateValue("Last 30 Days");
    else if (name === "this month") setDateValue("This Month");
    else if (name === "last month") setDateValue("Last Month");
    else setDateValue(name);
  };

  return (
    <div
      style={{ backgroundColor: "#F3F6F9" }}
      className="flex flex-col flex-1 rounded-2xl gap-1 min-w-[17rem]   border-0 py-4 px-6 orders-height"
    >
      <div className="flex justify-between">
        <h1 className="heading">Shipment Details</h1>
        <div className="relative flex ">
          <Button2
            text={dateValue}
            icon="/icons/calender.svg"
            rightIcon="/icons/down.svg"
            width="9rem"
            bgNone
            color="black"
            onClick={handleDateDropdown}
          />
          <DateDropdown
            showDropdown={dateDropdown}
            setShowDropdown={handleDateDropdown}
            selected={selected}
            handleSelected={handleSelected}
          />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-center ">
        <div className="flex-1 	">
          <PieChart />{" "}
        </div>
        <DetailedView />
      </div>
    </div>
  );
};

export default Orders;
