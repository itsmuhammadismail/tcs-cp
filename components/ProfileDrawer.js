import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import EmailIcon from '@mui/icons-material/Email';

export default function ProfileDrawer({ state, toggleDrawer }) {
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
      className="p-8"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="flex justify-between ">
        <h1 className="text-xl">User Profile</h1>
        <div
          onClick={toggleDrawer(anchor, false)}
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
          <p className="text-xs flex gap-2 items-center "><EmailIcon sx={{ color: "#7E8299" }} fontSize="small" /><span>ismail@tcs.com.pk</span></p>
          <button className="bg-[#FFE2E5] text-[#F64E60] w-[6rem] h-[2rem] rounded-xl font-semibold mt-2">Sign Out</button>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      {/* <Button onClick={toggleDrawer("right", true)}>left</Button> */}
      <Drawer
        anchor={"right"}
        open={state}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}
