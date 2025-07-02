import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      primeryBlue: string;
      borderLightGray: string;
      primeryWhite: string;
      primaryBlack: string;
    };
  }

  interface ThemeOptions {
    custom?: {
      primeryBlue?: string;
      borderLightGray?: string;
      primeryWhite?: string;
      primaryBlack?: string;
    };
  }
}
