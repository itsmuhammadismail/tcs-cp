import { Drawer, Button, Radio, Space } from "antd";
import { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { useCookies } from "react-cookie";

const App = ({ visible, setVisible }) => {
  const [placement, setPlacement] = useState("left");
  const [open, setOpen] = useState(false);
  const [cookie, removeCookie] = useCookies(["token"]);

  const onClose = () => {
    setVisible(false);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const logout = () => {
    removeCookie("token");
    window.location.href = "/";
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
        <div className="flex flex-col t h-full">
          <img src="/logo.svg" alt="" className="h-8 m-6 self-start" />
          <div className="flex-1">
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton>
                <ListItemIcon>
                  <img src="/drawer/dashboard.svg" alt="" className="h-[1.3rem]" />
                </ListItemIcon>
                <ListItemText className="text-sm" primary="Dashboard" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <img src="/drawer/reports.svg" alt="" className="" />
                </ListItemIcon>
                <ListItemText primary="Reports" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <img src="/drawer/setup.svg" alt="" className="" />
                </ListItemIcon>
                <ListItemText primary="Setup" />
              </ListItemButton>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <img src="/drawer/account.svg" alt="" className="" />
                </ListItemIcon>
                <ListItemText primary="My Account" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                    <ListItemText primary="Profile" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                    <ListItemText primary="Services" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                    <ListItemText primary="Manage Users" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </div>
          <div className="drawer-logout" onClick={logout}>
            <List>
              <ListItemButton>
                <ListItemIcon>
                  <img src="/drawer/logout.svg" alt="" className="" />
                </ListItemIcon>
                <ListItemText primary="Sign Out" />
              </ListItemButton>
            </List>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default App;
