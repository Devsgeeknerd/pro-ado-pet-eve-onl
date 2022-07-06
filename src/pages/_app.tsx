import "../ui/styles/global.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import theme from "../ui/themes/theme";
import Header from "../ui/components/Header/Header";

function MyApp({ Component, pageProps }: AppPorps) {
  return <ThemeProvider theme={theme}></ThemeProvider>;
}
