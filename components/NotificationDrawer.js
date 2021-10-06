import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from '@mui/icons-material/Close';
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

export default function NotificationDrawer({ state, toggleDrawer }) {
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
      className="p-8"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="flex justify-between ">
        <h1 className="text-xl">Notifications</h1>
        <div
          onClick={toggleDrawer(anchor, false)}
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
