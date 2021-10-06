import { Drawer, Button, Radio, Space } from "antd";
import { useState } from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';

const App = ({ visible, setVisible }) => {
  const [placement, setPlacement] = useState("left");

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Drawer
        width={280}
        placement={placement}
        closable={false}
        onClose={onClose}
        visible={visible}
        key={placement}
        style={{ padding: 0 }}
      >
        <ul className="mt-2">
          <li className="flex gap-[1.5rem] items-center bg-[#F3F6F9] hover:bg-[#F3F6F9] py-4 px-6"><DashboardIcon/> Dashboard</li>
          <li className="flex gap-[1.5rem] items-center hover:bg-[#F3F6F9] py-4 px-6"><DashboardIcon/> Bookings</li>
          <li className="flex gap-[1.5rem] items-center hover:bg-[#F3F6F9] py-4 px-6"><DashboardIcon/> Reports</li>
          <li className="flex gap-[1.5rem] items-center hover:bg-[#F3F6F9] py-4 px-6"><DashboardIcon/> Logout</li>
        </ul>
      </Drawer>
    </>
  );
};

export default App;
