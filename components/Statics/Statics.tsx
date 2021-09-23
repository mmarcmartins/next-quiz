import React from "react";
import { StaticsStyled, ValueStyled, TextStyled } from "./StaticsStyles";

interface StaticsProps {
  value: number | string;
  text: string;
  backgroundColor?: string;
  fontColor?: string;
}

const Statics = ({ value, text, backgroundColor, fontColor }: StaticsProps) => {
  return (
    <StaticsStyled>
      <ValueStyled
        backgroundColor={backgroundColor ?? "#FDD60F"}
        fontColor={fontColor ?? "#333"}
      >
        {value}
      </ValueStyled>
      <TextStyled>{text}</TextStyled>
    </StaticsStyled>
  );
};
export default Statics;
