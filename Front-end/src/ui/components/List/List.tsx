// Importa o componente Button do Material-UI.
import { Button } from "@mui/material";
// Importa o tipo Pet do arquivo de definições de tipos.
import { Pet } from "../../../data/@types/Pet";
// Importa o serviço de texto para limitar o tamanho do histórico do animal de estimação.
import { TextService } from "../../../data/services/TextService";
// Importa os componentes estilizados do arquivo de estilos.
import {
  List__Container,
  List__Item,
  List__Photo,
  Information,
  Information__Name,
  Information__Description,
} from "./styles";

// Define as propriedades esperadas para o componente List.
interface ListProps {
  // Uma lista de animais de estimação.
  pets: Pet[]; 
  // Função para lidar com a seleção de um animal de estimação.
  When__Selected: (pet: Pet) => void; 
}

// Define o componente funcional List.
function List(props: ListProps) {
  // Tamanho máximo para limitar o histórico do animal de estimação.
  const maximum__size = 200; 
  
  return (
    // Renderiza um contêiner de lista.
    <List__Container>
      {props.pets.map((pet) => (
        // Para cada animal de estimação na lista, renderiza um item de lista.
        <List__Item key={pet.id}>
          {/* Exibe a foto do animal de estimação. */}
          <List__Photo src={pet.photo} alt={pet.name} />
          {/* Exibe informações sobre o animal de estimação. */}
          <Information>
            {/* Exibe o nome do animal de estimação. */}
            <Information__Name>{pet.name}</Information__Name>
            {/* Exibe uma descrição limitada do histórico do animal de estimação. */}
            <Information__Description>
              {TextService.Limit__Text(pet.history, maximum__size)}
            </Information__Description>
            {/* Exibe um botão de adoção com largura total. */}
            <Button
              variant={"contained"}
              fullWidth
              // Chama a função de seleção ao clicar no botão.
              onClick={() => props.When__Selected(pet)} 
            >
              Adotar {pet.name} {/* Exibe o nome do animal de estimação no botão. */}
            </Button>
          </Information>
        </List__Item>
      ))}
    </List__Container>
  );
}

// Exporta o componente List.
export default List;
