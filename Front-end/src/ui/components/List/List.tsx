import { Button } from "@mui/material";
import { Pet } from "../../../data/@types/Pet";
import { TextService } from "../../../data/services/TextService";
import {
  List__Container,
  List__Item,
  List__Photo,
  Information,
  Information__Name,
  Information__Description,
} from "./styles";

interface ListProps {
  pets: Pet[];
  When__Selected: () => void;
}
