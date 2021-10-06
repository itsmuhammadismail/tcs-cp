
import PieChart from "./charts/PieChart";
import Button2 from "./Button2";
import DetailedView from "./DetailedView";
import { useState } from "react";
import DateDropdown from "./DateDropdown";

const Orders = () => {
  const [dateDropdown, setDateDropdown] = useState(false);
  const handleDateDropdown = () => {
    dateDropdown ? setDateDropdown(false) : setDateDropdown(true);
  };
  return (
    <div
      style={{ backgroundColor: "#F3F6F9" }}
      className="flex flex-col flex-1 rounded-2xl gap-1 min-w-[17rem]  border-0 py-4 px-6 orders-height"
    >
      <div className="flex justify-between">
        <h1 className="heading">Shipment Details</h1>
        <div className="relative flex ">
          <Button2
            text="Today Sep, 15"
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
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex-1 h-[20rem]	">
          <PieChart />{" "}
        </div>
        <DetailedView />
      </div>
    </div>
  );
};

export default Orders;
