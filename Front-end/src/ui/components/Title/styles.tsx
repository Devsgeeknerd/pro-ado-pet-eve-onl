import {} from "@mui/material";

export const Main__Title = styled("h1")`
  margin-top: ${({ theme }) => theme.spacing(5)};
  font-size: 20px;
  text-align: center;
`;

export const Main__Subtitle = styled("h2")`
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: ${({ theme }) => ()};
`;
