import RespostaModel from "../../model/Answer";
import {
  AnswerStyled,
  LetterStyled,
  ValueStyled,
  Content,
  Result,
} from "./AnswerStyles";

interface AnswerProps {
  value: RespostaModel;
  index: number;
  letter: string;
  backgroundColor: string;
  onResponse: (index: number) => void;
}

export default function Answer({
  value,
  index,
  letter,
  onResponse,
  backgroundColor,
}: AnswerProps) {
  const { valor, certa, revelada } = value;
  return (
    <AnswerStyled onClick={() => onResponse(index)}>
      <Content
        revealed={revelada}
        isCorrect={certa}
        background={backgroundColor}
      >
        {revelada ? (
          <Result isCorrect={certa}></Result>
        ) : (
          <LetterStyled background={backgroundColor}>{letter}</LetterStyled>
        )}
        <ValueStyled revealed={revelada}>{valor}</ValueStyled>
      </Content>
    </AnswerStyled>
  );
}
