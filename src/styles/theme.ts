import { createTheme } from "@mui/material/styles";
import colors from "./colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#fff ",
      paper: "#e2e2e2",
      // paper: "#F7F7F7",
    },
  },
  custom: {
    primeryBlue: colors.primary,
    borderLightGray: colors.lightGray,
    primeryWhite: colors.white,
    primaryBlack: colors.black,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      // default: "#fff ",
      // paper: "#F7F7F7",
    },
  },

  custom: {
    primeryBlue: colors.primary,
    borderLightGray: colors.black,
    primeryWhite: colors.white,
    primaryBlack: colors.black,
  },
});
