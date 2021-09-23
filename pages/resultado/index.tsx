import React from "react";
import { useRouter } from "next/router";
import Statics from "../../components/Statics/Statics";
import { ResultStyled, StaticsStyled, Title } from "./styles";

const Resultado = () => {
  const router = useRouter();

  const totalQuestions = +router.query.totalQuestions;
  const correctAnswers = +router.query.correctAnswers;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  return (
    <ResultStyled>
      <Title>Resultado</Title>
      <StaticsStyled>
        <Statics text="Perguntas" value={totalQuestions} />
        <Statics
          backgroundColor="#BCE596"
          text="Certas"
          value={correctAnswers}
        />
        <Statics
          backgroundColor="#85D4F2"
          text="Percentual"
          value={`${percentage}%`}
        />
      </StaticsStyled>
    </ResultStyled>
  );
};

export default Resultado;
