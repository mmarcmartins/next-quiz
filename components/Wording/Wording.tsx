import { WordingStyled, TextStyled } from "./WordingStyles";

interface WordingProps {
  text: string;
}

export default function Wording({ text }: WordingProps) {
  return (
    <WordingStyled>
      <TextStyled>{text}</TextStyled>
    </WordingStyled>
  );
}
