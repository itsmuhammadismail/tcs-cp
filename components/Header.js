import { useState } from "react";
import Button from "./Button";
import MenuDrawer from "./MenuDrawer";
import NotificationDrawer from "./NotificationDrawer";
import ProfileDrawer from "./ProfileDrawer";
import Searchbar from "./Searchbar";
import Link from "next/link";

const Header = () => {
  // Menu Drawer
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  // Notification Drawer
  const [notiVisible, setNotiVisible] = useState(false);
  const showNotiDrawer = () => {
    setNotiVisible(true);
  };
  // Profile Drawer
  const [profileVisible, setProfileVisible] = useState(false);
  const showProfileDrawer = () => {
    setProfileVisible(true);
  };

  return (
    <header className="border-b">
      <div className="media mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <img
            src="/icons/menu.svg"
            alt=""
            className="h-6 mr-[2rem] 2xl:absolute left-[1rem]"
            onClick={showDrawer}
          />
          <Link href="/">
            <a>
              <img src="/logo.svg" alt="" className="h-8" />
            </a>
          </Link>
          <Searchbar />
        </div>
        <div className="flex gap-2">
          <Link href="/booking/single-booking">
            <a>
              <Button
                text="Booking"
                width="10rem"
                bgColor="#303C4B"
                color="white"
              />
            </a>
          </Link>
          <Button
            text="Reports"
            icon="/icons/reports.svg"
            width="10rem"
            bgColor="#F3F6F9"
            color="black"
          />
          <div className="" onClick={showNotiDrawer}>
            <Button
              icon="/icons/bell.svg"
              width="2.8rem"
              bgColor="#F3F6F9"
              className="button-hover"
              iconClass="iconClass"
            />
          </div>
          <div className="" onClick={showProfileDrawer}>
            <Button
              icon="/icons/person.svg"
              width="2.8rem"
              bgColor="#F3F6F9"
              className="button-hover"
              iconClass="iconClass"
            />
          </div>
        </div>
      </div>
      <NotificationDrawer visible={notiVisible} setVisible={setNotiVisible} />
      <ProfileDrawer visible={profileVisible} setVisible={setProfileVisible} />
      <MenuDrawer visible={visible} setVisible={setVisible} />
    </header>
  );
};

export default Header;
