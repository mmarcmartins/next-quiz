import RespostaModel from "../model/resposta";
import styles from "../styles/Answer.module.css";

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
  const answer = value;
  const correctAnswer = "#F2C866";
  const inCorrectAnswer = "#c55454";
  return (
    <div className={styles.answer} onClick={() => onResponse(index)}>
      <div className="content">
        {value.revelada ? (
          <span className="isCorrect"></span>
        ) : (
          <span className={styles.letter} style={{ backgroundColor }}>
            {letter}
          </span>
        )}
        <span className="value">{answer.valor}</span>
      </div>
      <style jsx>{`
        .value {
          font-weight: bold;
          font-size: 1.3rem;
          color: ${!value.revelada ? "#000" : "#FFF"};
          display: flex;
          flex: 1;
          z-index: 2;
          transition: color 0.3s cubic-bezier(0.35, 0.88, 0.98, 1);
        }

        .isCorrect {
          display: flex;
          position: relative;
          justify-content: center;
          align-items: center;
          height: 40px;
          width: 40px;
          border-radius: 40px;
          margin-right: 20px;
          border: 2px solid #fff;
        }

        .isCorrect:after,
        .isCorrect:before {
          content: "";
          display: block;
          position: absolute;
          width: 20px;
          height: 3px;
          background-color: #fff;
          top: 18px;
          left: 0;
          right: 0;
          margin: auto;
        }

        .isCorrect:after {
          ${answer.certa && "transform: rotate(90deg);"}
        }
        .content {
          display: flex;
          position: relative;
          align-items: center;
          background-color: ${!answer.revelada
            ? "#FFF"
            : answer.certa
            ? correctAnswer
            : inCorrectAnswer};
          padding: 0 25px;
          width: 100%;
          border-radius: 12px;
          margin: 10px;
          min-height: 100px;
          overflow: hidden;
        }
        .content:after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          bottom: -100%;
          background-color: ${backgroundColor};
          z-index: 1;
          transition: bottom 0.3s cubic-bezier(0.35, 0.88, 0.98, 1);
        }
        .content:hover:after {
          ${!answer.revelada && "bottom: 0;"}
        }
        .content:hover > .value {
          color: #fff;
        }
      `}</style>
    </div>
  );
}
