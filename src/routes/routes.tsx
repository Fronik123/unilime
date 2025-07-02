import React from "react";
import { Navigate } from "react-router-dom";

import Overview from "../pages/Overview";
import Users from "../pages/Users";
import Settings from "../pages/Settings";

export interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

interface GetRoutesProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export function getRoutes({
  darkMode,
  setDarkMode,
}: GetRoutesProps): RouteConfig[] {
  return [
    {
      path: "/",
      element: <Navigate to="/overview" replace />,
    },
    {
      path: "/overview",
      element: <Overview />,
    },
    {
      path: "/users",
      element: <Users />,
    },
    {
      path: "/settings",
      element: <Settings darkMode={darkMode} setDarkMode={setDarkMode} />,
    },
  ];
}
