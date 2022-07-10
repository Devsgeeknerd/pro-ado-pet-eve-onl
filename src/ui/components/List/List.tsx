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
        <List__Item key={pet.id}>
          <List__Photo src={pet.photo} alt={pet.name} />
          <Information>
            <Information__Name>{pet.name}</Information__Name>
            <Information__Description>
              {TextService.Limit__Text(pet.history, Maximum__Size)}
            </Information__Description>
            <Button
              variant={"contained"}
              fullWidth
              onClick={() => props.When__Selected(pet)}
            >
              Adotar {}
            </Button>
          </Information>
        </List__Item>
      ))}
    </List__Container>
  );
}
