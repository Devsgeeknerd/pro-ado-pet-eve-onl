import {} from "@mui/material";

export const List__Container = styled("ul")`
  width: 100%;
  max-width: 800px;
  margin: 0px auto;
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const List__Item = styled("li")`
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  display: flex;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${({ theme }) => theme.spacing(5)};

  /* BREAKPOINTS */
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-bottom: ${({ theme }) => theme.spacing(5)};
    grid-template-columns: 1fr;
    grid-gap: ${({ theme }) => theme.spacing(2)};
  }
`;

export const List__Photo = styled("img")`
  width: 100%;
`;

export const Information = styled("")``;
