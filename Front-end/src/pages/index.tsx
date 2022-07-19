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

const Home: NextPage = () => {
  const {
    Pet__List,
    Selected__Pet,
    setSelected__Pet,
    email,
    setEmail,
    Value,
    setValue,
    message,
    setMessage,
    adopt,
  } = useIndex();
};
export default Home;
