import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ae0fea",
    },
    secondary: {
      main: "#c5c5c5",
    },
    text: {
      primary: "#293845",
      secondary: "#9eadba",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  shape: {
    borderRadius: "4px",
  },
  components: {
    MuiButton: {},
  },
});
