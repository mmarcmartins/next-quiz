import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/Resultado.module.css";
import Statics from "../components/Statics";

const resultado = () => {
  const router = useRouter();

  const totalQuestions = +router.query.totalQuestions;
  const correctAnswers = +router.query.correctAnswers;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  return (
    <div className={styles.resultado}>
      <h1 className={styles.title}>Resultado</h1>
      <div className={styles.statics}>
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
      </div>
    </div>
  );
};

export default resultado;
