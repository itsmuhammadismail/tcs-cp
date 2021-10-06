import { useEffect, useRef, useState } from "react";
import useVisible from "../hooks/useVisible";

const SingleBookingDropdown = ({ showDropdown, setShowDropdown }) => {
  const [visible, setVisible] = useState(false);

  const ref = useRef();

  useEffect(() => setVisible(showDropdown), [showDropdown]);

  useVisible(ref, () => {
    setVisible(false);
    setShowDropdown();
  });

  return (
    <>
      {visible && (
        <div
          ref={ref}
          style={{ boxShadow: "0px 0px 50px 0px rgba(82,63,105,0.2)" }}
          className="absolute top-[3rem] right-0 bg-white  rounded-2xl z-[100] flex overflow-hidden text-xs"
        >
          <ul className="my-4 w-[11rem]">
            <li className="px-4 py-2 bg-[#F3F6F9]  hover:bg-[#F3F6F9] ">
              Bulk Import
            </li>
            <li className="px-4 py-2 hover:bg-[#F3F6F9] ">Single Booking</li>
            <li className="px-4 py-2 hover:bg-[#F3F6F9]">Re-print CN Label</li>
            <li className="px-4 py-2 hover:bg-[#F3F6F9]">
              Cancel Booking Records
            </li>
            <li className="px-4 py-2 hover:bg-[#F3F6F9]">
              Generate Load Sheet
            </li>
            <li className="px-4 py-2 hover:bg-[#F3F6F9]">
              Complain/Service Request
            </li>
            <li className="px-4 py-2 hover:bg-[#F3F6F9]">Create Events</li>
            <li className="px-4 py-2 hover:bg-[#F3F6F9]">Pickup Request</li>
            <li className="px-4 py-2 hover:bg-[#F3F6F9]">Create Return</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SingleBookingDropdown;
