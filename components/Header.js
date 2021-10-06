import { useState } from "react";
import Button from "./Button";
import MenuDrawer from "./MenuDrawer";
import NotificationDrawer from "./NotificationDrawer";
import ProfileDrawer from "./ProfileDrawer";
import Searchbar from "./Searchbar";
import Link from "next/link";

const Header = () => {
  const [state, setState] = useState({
    right: false,
  });
  const [profileState, setProfileState] = useState({
    right: false,
  });
  // const [menuState, setMenuState] = useState({
  //   left: false,
  // });

  // Menu Drawer
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const toggleProfileDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setProfileState({ ...state, [anchor]: open });
  };
  const toggleMenuDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setMenuState({ ...state, [anchor]: open });
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
          <img src="/logo.svg" alt="" className="h-8" />
          <Searchbar />
        </div>
        <div className="flex gap-2">
          <Link href="/booking">
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
          <div className="" onClick={toggleDrawer("right", true)}>
            <Button icon="/icons/bell.svg" width="2.8rem" bgColor="#F3F6F9" />
          </div>
          <div className="" onClick={toggleProfileDrawer("right", true)}>
            <Button icon="/icons/person.svg" width="2.8rem" bgColor="#F3F6F9" />
          </div>
        </div>
      </div>
      <NotificationDrawer state={state["right"]} toggleDrawer={toggleDrawer} />
      <ProfileDrawer
        state={profileState["right"]}
        toggleDrawer={toggleProfileDrawer}
      />
      <MenuDrawer visible={visible} setVisible={setVisible} />
    </header>
  );
};

export default Header;
