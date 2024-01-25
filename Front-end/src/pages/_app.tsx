// Importa estilos globais e tipos necessários do Next.js.
import "../ui/styles/globals.css";
import type { AppProps } from "next/app";

// Importa o ThemeProvider do Material-UI para aplicar o tema personalizado.
import { ThemeProvider } from "@mui/material";
import theme from "../ui/themes/theme";

// Importa o componente Header, que provavelmente contém a barra de navegação.
import Header from "../ui/components/Header/Header";

// Função principal que representa a aplicação.
function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Aplica o tema personalizado aos componentes descendentes usando o ThemeProvider.
    <ThemeProvider theme={theme}>
      {/* Componente Header que pode conter a barra de navegação da aplicação. */}
      <Header />

      {/* Componente principal representando a página atual. */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// Exporta a aplicação como componente principal.
export default MyApp;
