// Importa os componentes estilizados Main__Title e Main__Subtitle do arquivo "styles".
import { Main__Title, Main__Subtitle } from "./styles";

// Define uma interface para as propriedades esperadas pelo componente Title.
interface TitleProps {
  main__title: string;
  main__subtitle: string | JSX.Element;
}

// Declaração do componente funcional Title.
function Title(props: TitleProps) {
  // Retorna dois elementos: Main__Title e Main__Subtitle, preenchidos com os valores das propriedades.
  return (
    <>
      <Main__Title>{props.main__title}</Main__Title>
      <Main__Subtitle>{props.main__subtitle}</Main__Subtitle>
    </>
  );
}

// Exporta o componente Title para ser utilizado em outros lugares do código.
export default Title;
