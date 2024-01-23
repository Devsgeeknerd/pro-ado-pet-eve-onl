// Importa módulos vazios do @mui/material (Pode ser uma importação desnecessária ou incompleta).
import {} from "@mui/material";

// Exporta um componente estilizado chamado Main__Title usando styled-components.
export const Main__Title = styled("h1")`
  // Define a margem superior usando o espaçamento do tema (fornecido pelo Material-UI).
  margin-top: ${({ theme }) => theme.spacing(5)};
  // Define o tamanho da fonte como 20 pixels.
  font-size: 20px;
  // Centraliza o texto.
  text-align: center;
`;

// Exporta um componente estilizado chamado Main__Subtitle usando styled-components.
export const Main__Subtitle = styled("h2")`
  // Define a cor do texto usando a paleta de cores do tema para o texto secundário.
  color: ${({ theme }) => theme.palette.text.secondary};
  // Define a margem inferior usando o espaçamento do tema.
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  // Define o tamanho da fonte como 18 pixels.
  font-size: 18px;
  // Define o peso da fonte como normal.
  font-weight: normal;
  // Centraliza o texto.
  text-align: center;
`;
