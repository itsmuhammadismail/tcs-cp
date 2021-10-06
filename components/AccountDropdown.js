import { useEffect, useRef, useState } from "react";
import useVisible from "../hooks/useVisible";

const AccountDropdown = ({ showDropdown, setShowDropdown }) => {
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
          className="absolute top-[2rem] right-0 bg-white  rounded-2xl z-[100] flex overflow-hidden"
        >
          <ul className="my-4 w-[11rem]">
            <li className="px-4 py-2 bg-[#F3F6F9]  hover:bg-[#F3F6F9] ">
              Account 1
            </li>
            <li className="px-4 py-2 hover:bg-[#F3F6F9] ">
              Account 2
            </li>
            <li className="px-4 py-2 hover:bg-[#F3F6F9]">
              Account 3
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default AccountDropdown;
