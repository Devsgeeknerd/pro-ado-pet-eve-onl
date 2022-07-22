import { styled } from "@mui/material";

export const Header__Container = styled("header")`
  padding: ${({ theme }) => theme.spacing(6)};
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: center;
`;
export const Logo = styled("img")`
  width: 230px;
`;
