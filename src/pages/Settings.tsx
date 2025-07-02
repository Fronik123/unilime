import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useSetting } from "../hooks/useSetting";
import SettingForm from "../components/SettingForm";

interface SettingsProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

const Settings: React.FC<SettingsProps> = ({ darkMode, setDarkMode }) => {
  const theme = useTheme();

  const {
    notifications,
    username,
    surname,
    setNotifications,
    setSurname,
    setUsername,
  } = useSetting();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    alert(
      `Settings saved\nTheme: ${
        darkMode ? "Dark" : "Light"
      }\nNotifications: ${notifications}\nUsername: ${username} \nSurname: ${surname}`
    );
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Typography variant="h3" mb={3} sx={{ color: theme.custom.primeryBlue }}>
        Settings
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <SettingForm
          username={username}
          setDarkMode={setDarkMode}
          surname={surname}
          darkMode={darkMode}
          setSurname={setSurname}
          notifications={notifications}
          setNotifications={setNotifications}
          setUsername={setUsername}
          handleSubmit={handleSubmit}
        />
      </Box>
    </Box>
  );
};

export default Settings;
