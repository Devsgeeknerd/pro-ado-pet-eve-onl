// Importa a função `styled` do Material-UI para criar estilos estilizados.
import { styled } from "@mui/material";

// Cria um componente estilizado para o contêiner do cabeçalho.
export const Header__Container = styled("header")`
  padding: ${({ theme }) =>
    theme.spacing(6)}; // Adiciona espaçamento interno ao cabeçalho.
  border-bottom: 1px solid #f0f0f0; // Adiciona uma borda na parte inferior do cabeçalho.
  display: flex; // Configura o contêiner do cabeçalho como um contêiner flexível.
  justify-content: center; // Centraliza o conteúdo horizontalmente dentro do contêiner.
`;

// Cria um componente estilizado para o logotipo.
export const Logo = styled("img")`
  width: 230px; // Define a largura máxima do logotipo.
`;
