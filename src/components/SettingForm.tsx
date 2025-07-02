import React from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Switch,
} from "@mui/material";
import Input from "../UI/Input";

interface SettingFormProps {
  username: string;
  notifications: boolean;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  setNotifications: (val: boolean) => void;
  setUsername: (val: string) => void;
  surname: string;
  setSurname: (val: string) => void;
}

const SettingForm: React.FC<SettingFormProps> = ({
  username,
  notifications,
  handleSubmit,
  darkMode,
  setDarkMode,
  setNotifications,
  setUsername,
  surname,
  setSurname,
}) => {
  return (
    <Paper
      sx={{
        padding: 3,
        maxWidth: 400,
        borderRadius: "16px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
            />
          }
          label={`${darkMode ? "Dark Theme" : "Light Theme"}`}
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            />
          }
          label="Enable Notifications"
        />

        <Input label="Username" value={username} onChange={setUsername} />

        <Input label="Surname" value={surname} onChange={setSurname} />

        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 2,
            mx: "auto",
            display: "block",
            borderRadius: "8px",
          }}
        >
          Save Settings
        </Button>
      </form>
    </Paper>
  );
};

export default SettingForm;
