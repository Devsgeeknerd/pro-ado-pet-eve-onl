// Importa módulos vazios do @mui/material (Pode ser uma importação desnecessária ou incompleta).
import {} from "@mui/material";

// Exporta um componente estilizado chamado List__Container usando styled-components.
export const List__Container = styled("ul")`
  // Define a largura como 100%.
  width: 100%;
  // Define a largura máxima como 800 pixels.
  max-width: 800px;
  // Centraliza o elemento horizontalmente.
  margin: 0px auto;
  // Adiciona preenchimento usando o espaçamento do tema (fornecido pelo Material-UI).
  padding: ${({ theme }) => theme.spacing(2)};
`;

// Exporta um componente estilizado chamado List__Item usando styled-components.
export const List__Item = styled("li")`
  // Adiciona margem inferior usando o espaçamento do tema.
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  // Exibe os elementos como flexíveis e define a grade de colunas.
  display: flex;
  grid-template-columns: repeat(2, 1fr);
  // Define o espaçamento entre as colunas da grade usando o espaçamento do tema.
  grid-gap: ${({ theme }) => theme.spacing(5)};

  /* BREAKPOINTS */
  // Adapta os estilos para telas de tamanho médio ou menor.
  ${({ theme }) => theme.breakpoints.down("md")} {
    // Modifica a margem inferior.
    margin-bottom: ${({ theme }) => theme.spacing(5)};
    // Modifica a grade de colunas para uma única coluna.
    grid-template-columns: 1fr;
    // Modifica o espaçamento entre as colunas.
    grid-gap: ${({ theme }) => theme.spacing(2)};
  }
`;

// Exporta um componente estilizado chamado List__Photo usando styled-components.
export const List__Photo = styled("img")`
  // Define a largura como 100%.
  width: 100%;
`;

// Exporta um componente estilizado chamado Information usando styled-components.
export const Information = styled("div")`
  // Exibe os elementos como uma coluna flexível e define o espaçamento entre os itens.
  display: flex;
  flex-direction: column;
  grid-gap: ${({ theme }) => theme.spacing(2)};
`;

// Exporta um componente estilizado chamado Information__Name usando styled-components.
export const Information__Name = styled("h2")`
  // Define a margem como 0 pixels.
  margin: 0px;
`;

// Exporta um componente estilizado chamado Information__Description usando styled-components.
export const Information__Description = styled("p")`
  // Define a margem como 0 pixels.
  margin: 0px;
  // Adiciona a quebra de palavra para evitar que palavras longas quebrem o layout.
  word-break: break-word;
