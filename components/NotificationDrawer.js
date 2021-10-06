import { Drawer, Button, Radio, Space } from "antd";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const App = ({ visible, setVisible }) => {
  const [placement, setPlacement] = useState("right");

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      {/* <Space>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space> */}
      <Drawer
        width={350}
        placement={placement}
        closable={false}
        onClose={onClose}
        visible={visible}
        key={placement}
      >
        <div className="p-[24px]">
          <div className="flex justify-between ">
            <h1 className="text-xl">Notifications</h1>
            <div
              onClick={onClose}
              className="bg-[#F3F6F9] w-[1.5rem] h-[1.5rem] flex justify-center items-center rounded-full cursor-pointer"
            >
              <CloseIcon sx={{ color: "#7E8299" }} fontSize="small" />
            </div>
          </div>
          <div className="flex gap-3 align-center my-6 mt-12">
            <div className="bg-[#F3F6F9] w-[3rem] h-[3rem] flex justify-center items-center rounded-full">
              <NotificationsActiveIcon sx={{ color: "#1BC5BD" }} />
            </div>
            <div className="">
              <h5>5 new user generated report</h5>
              <p className="text-[#B5B5C3] text-xs">Reports based on sales</p>
            </div>
          </div>
          <div className="flex gap-3 align-center my-6">
            <div className="bg-[#F3F6F9] w-[3rem] h-[3rem] flex justify-center items-center rounded-full">
              <NotificationsActiveIcon sx={{ color: "#1BC5BD" }} />
            </div>
            <div className="">
              <h5>5 new user generated report</h5>
              <p className="text-[#B5B5C3] text-xs">Reports based on sales</p>
            </div>
          </div>
          <div className="flex gap-3 align-center my-6">
            <div className="bg-[#F3F6F9] w-[3rem] h-[3rem] flex justify-center items-center rounded-full">
              <NotificationsActiveIcon sx={{ color: "#1BC5BD" }} />
            </div>
            <div className="">
              <h5>5 new user generated report</h5>
              <p className="text-[#B5B5C3] text-xs">Reports based on sales</p>
            </div>
          </div>
          <div className="flex gap-3 align-center my-6">
            <div className="bg-[#F3F6F9] w-[3rem] h-[3rem] flex justify-center items-center rounded-full">
              <NotificationsActiveIcon sx={{ color: "#1BC5BD" }} />
            </div>
            <div className="">
              <h5>5 new user generated report</h5>
              <p className="text-[#B5B5C3] text-xs">Reports based on sales</p>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default App;
