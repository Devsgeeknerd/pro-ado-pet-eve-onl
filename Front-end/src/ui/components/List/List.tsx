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
  When__Selected: (pet: Pet) => void;
}

function List(props: ListProps) {
  const maximum__size = 200;
  return (
    <List__Container>
      {props.pets.map((pet) => (
        <List__Item key={pet.id}>
          <List__Photo src={pet.photo} alt={pet.name} />
          <Information>
            <Information__Name>{pet.name}</Information__Name>
            <Information__Description>
              {TextService.Limit__Text(pet.history, maximum__size)}
            </Information__Description>
            <Button variant={"contained"} fullWidth onClick={() => props.When__Selected(Pet)}>Adotar {}
      ))}
    </List__Container>
  );
}
