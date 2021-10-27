import { Drawer, Button, Radio, Space } from "antd";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from "@mui/icons-material/Email";
import { useCookies } from "react-cookie";

const App = ({ visible, setVisible }) => {
  const [placement, setPlacement] = useState("right");
  const [cookie, removeCookie] = useCookies(["token"]);

  const onClose = () => {
    setVisible(false);
  };

  const logout = () => {
    removeCookie("token");
    window.location.href = "/";
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
            <h1 className="text-xl">User Profile</h1>
            <div
              onClick={onClose}
              className="bg-[#F3F6F9] w-[1.5rem] h-[1.5rem] flex justify-center items-center rounded-full cursor-pointer"
            >
              <CloseIcon sx={{ color: "#7E8299" }} fontSize="small" />
            </div>
          </div>

          <div className="flex gap-4 my-8">
            <img src="/profile.jfif" alt="" className="rounded-xl h-[7rem]" />
            <div className="">
              <h2 className="text-lg">Muhammad Ismail</h2>
              <p className="text-[#B5B5C3] ">TCS Pvt Ltd</p>
              <p className="text-xs flex gap-2 items-center ">
                <EmailIcon sx={{ color: "#7E8299" }} fontSize="small" />
                <span>ismail@tcs.com.pk</span>
              </p>
              <button
                className="bg-[#FFE2E5] text-[#F64E60] w-[6rem] h-[2rem] rounded-xl font-semibold mt-2"
                onClick={logout}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default App;
