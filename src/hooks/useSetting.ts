import { useState } from "react";

export function useSetting() {
  const [notifications, setNotifications] = useState(true);
  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");

  return {
    notifications,
    username,
    surname,
    setNotifications,
    setUsername,
    setSurname,
  };
}
