import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link, useLocation } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";
import type { SideBarItem } from "../types/user.types";

const drawerWidth = 240;

interface SidebarT {
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarT> = ({ onClose }) => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width:768px)");

  const menuItems: SideBarItem[] = [
    { text: "Overview", icon: <DashboardIcon />, path: "/overview" },
    { text: "Users", icon: <PeopleIcon />, path: "/users" },
    { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
  ];

  return (
    <Box
      sx={{
        height: "100vh",
        boxSizing: "border-box",
      }}
    >
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            borderRadius: "16px",
            margin: `${isMobile ? "0" : "12px"}`,
            height: `${isMobile ? "none" : "calc(100vh - 24px)"}`,
            boxSizing: "border-box",
            borderColor: theme.custom.borderLightGray,
            borderStyle: "solid",
            borderWidth: "1px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <AccountCircle sx={{ width: 60, height: 60, margin: 2 }} />
        </Box>

        <List>
          {menuItems.map(({ text, icon, path }) => (
            <ListItemButton
              key={text}
              component={Link}
              to={path}
              onClick={onClose}
              selected={location.pathname === path}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: theme.custom.primeryBlue,
                  color: "white",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                  },
                  borderRadius: "16px",
                },
                "&.MuiListItemButton-root": {
                  "&:hover": {
                    borderRadius: "16px",
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: (theme) => theme.custom.primeryBlue,
                  ".Mui-selected &": {
                    color: theme.custom.primeryWhite,
                  },
                }}
              >
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
