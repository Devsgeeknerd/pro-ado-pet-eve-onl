import {
  List__Container,
  List__Item,
  List__Photo,
  Information,
  Information__Name,
  Information__Description,
} from "./List.style";
import { Button } from "@mui/material";
import { Pet } from "../../../data/@types/Pet";
import { TextService } from "../../../data/services/TextService";

interface ListProps {
  pets: Pet[];
  When__Selected: (pet: Pet) => void;
}

function List(props: ListProps) {
  const Maximum__Size = 200;
  return (
    <List__Container>
      {props.pets.map((pet) => (
        <List__Item></List__Item>
      ))}
    </List__Container>
  );
}
