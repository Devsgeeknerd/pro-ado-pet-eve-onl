import { Main__Title, Main__Subtitle } from "./Title.style";

interface TitleProps {
  main__title: string;
  main__subtitle?: string | JSX.Element;
}

function Title(props: TitleProps) {
  return (
    <>
      <Main__Title>{}</Main__Title>
    </>
  );
}
