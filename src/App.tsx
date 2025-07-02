import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import Sidebar from "./components/Sidebar";
import MenuIcon from "@mui/icons-material/Menu";

import { getRoutes } from "./routes/routes";

interface AppProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const drawerWidth = 240;

const App: React.FC<AppProps> = ({ darkMode, setDarkMode }) => {
  const theme = useTheme();
  const routes = getRoutes({ darkMode, setDarkMode });
  const isMobile = useMediaQuery("(max-width:768px)");

  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  const drawerContent = <Sidebar onClose={toggleDrawer} />;

  return (
    <Router>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        {isMobile && (
          <AppBar
            position="static"
            sx={{ background: theme.custom.primeryBlue }}
          >
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        )}

        <Box sx={{ display: "flex", flexGrow: 1, overflow: "hidden" }}>
          {!isMobile && (
            <Box sx={{ width: drawerWidth, flexShrink: 0 }}>
              {drawerContent}
            </Box>
          )}

          <Box component="main" sx={{ flexGrow: 1, p: 3, overflowY: "auto" }}>
            <Routes>
              {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </Box>

          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={toggleDrawer}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                borderRadius: "16px",
              },
            }}
          >
            {drawerContent}
          </Drawer>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
