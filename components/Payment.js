import Button2 from "./Button2";
import History from "./History";

import { Menu, Dropdown, Button, Space } from "antd";
import { useState } from "react";
import AccountDropdown from "./AccountDropdown";

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const Payment = () => {
  const [accountDropdown, setAccountDropdown] = useState(false);
  const handleAccountDropdown = () => {
    accountDropdown ? setAccountDropdown(false) : setAccountDropdown(true);
  };
  return (
    <div
      style={{ backgroundColor: "#F3F6F9" }}
      className=" flex-col rounded-2xl gap-1 w-full xl:w-[27rem] border-0 py-4 px-6"
    >
      <div className="flex justify-between items-center">
        <h2 className="heading">Payment History</h2>
        <div className="relative flex ">
          <Button2
            text="Select Account"
            icon="/icons/person.svg"
            rightIcon="/icons/down.svg"
            width="9rem"
            color="black"
            bgNone
            onClick={handleAccountDropdown}
          />
          <AccountDropdown
            showDropdown={accountDropdown}
            setShowDropdown={handleAccountDropdown}
          />
        </div>
      </div>

      <p className="mt-8 text-sm">
        Last Payment for the period of (16-Aug to 31-Aug)
      </p>
      <p className="text-red-600 font-semibold text-lg">Rs 1,032,890</p>
      <div className="flex items-center">
        <History />
      </div>
    </div>
  );
};

export default Payment;
