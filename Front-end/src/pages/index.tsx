// Importa tipos necessários do Next.js e componentes do Material-UI.
import type { NextPage } from "next";
import Title from "../ui/components/Title/Title";
import List from "../ui/components/List/List";
import { useIndex } from "../data/hooks/page/useIndex";
import {
  Dialog,
  TextField,
  Grid,
  DialogActions,
  Button,
  Snackbar,
} from "@mui/material";

// Declaração da página principal.
const Home: NextPage = () => {
  // Utiliza o hook personalizado useIndex para obter dados e funcionalidades necessárias.
  const {
    Pet__List,
    Selected__Pet,
    setSelected__Pet,
    email,
    setEmail,
    value,
    setValue,
    message,
    setMessage,
    adopt,
  } = useIndex();

  return (
    <>
      {/* Componente de título reutilizável com subtítulo formatado. */}
      <Title
        main__title=""
        main__subtitle={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente.</strong>
          </span>
        }
      />

      {/* Componente de lista de pets com manipulador de seleção. */}
      <List pets={Pet__List} When__Selected={(pet) => setSelected__Pet(pet)} />

      {/* Diálogo para adoção de pets com campos de entrada e botões de ação. */}
      <Dialog
        open={Selected__Pet !== null}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
        onClose={() => setSelected__Pet(null)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label={"E-mail"}
              type={"email"}
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={"Quantia por mês"}
              type={"number"}
              fullWidth
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 5 }}>
          <Button color={"secondary"} onClick={() => setSelected__Pet(null)}>
            Cancelar
          </Button>
          <Button variant={"contained"} onClick={() => adopt()}>
            {" "}
            Confirmar adoção
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar para exibir mensagens de feedback após ações. */}
      <Snackbar
        open={message.length > 0}
        message={message}
        autoHideDuration={2400}
        onClose={() => setMessage("")}
      />
    </>
  );
};

// Exporta a página principal.
export default Home;
