// Importa a função createTheme do pacote @mui/material.
import { createTheme } from "@mui/material";

// Cria um tema personalizado utilizando a função createTheme.
const theme = createTheme({
  // Define a paleta de cores do tema
  palette: {
    // Define a cor principal (primária) com o código hexadecimal #ae0fea.
    primary: {
      main: "#ae0fea",
    },
    // Define a cor secundária com o código hexadecimal #c5c5c5.
    secondary: {
      main: "#c5c5c5",
    },
    // Define cores de texto primárias e secundárias.
    text: {
      primary: "#293845",
      secondary: "#9eadba",
    },
  },
  // Define configurações de tipografia, como a fonte utilizada.
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  // Define propriedades de formato, como a borda de componentes.
  shape: {
    borderRadius: "4px",
  },
  // Define estilos específicos para componentes MuiButton, MuiPaper, MuiTextField, MuiTableHead e MuiTableCell.
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "5px",
          fontWeight: "normal",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 39px rgba(0, 0, 0, 0.05)",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          required: false,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-root": {
            fontWeight: "bold",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: "1px solid #d8d8d8",
        },
      },
    },
  },
});

// Exporta o tema criado para que possa ser utilizado em outros arquivos.
export default theme;
