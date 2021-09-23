import QuestaoModel from "../../model/Question";
import Answer from "../Answer/Answer";
import Timer from "../Timer/Timer";
import Wording from "../Wording/Wording";

const letras = [
  { valor: "A", cor: "#F2C866" },
  { valor: "B", cor: "#F266BA" },
  { valor: "C", cor: "#85D4F2" },
  { valor: "D", cor: "#BCE596" },
];

interface QuestionProps {
  valor: QuestaoModel;
  onResponse: (index: number) => void;
  onCompleteTimer: () => void;
  responseTime?: number;
}

export default function Question({
  valor,
  onResponse,
  onCompleteTimer,
  responseTime,
}: QuestionProps) {
  const question = valor;

  const renderAnswers = () =>
    question.respostas.map((answer, i) => (
      <Answer
        value={answer}
        key={`${question.id}-${i}`}
        index={i}
        letter={`${letras[i].valor}`}
        backgroundColor={`${letras[i].cor}`}
        onResponse={onResponse}
      />
    ));

  return (
    <div>
      <Timer
        duration={responseTime ?? 10}
        onComplete={() => onCompleteTimer()}
        key={valor.id}
      />
      <div>
        <Wording text={question.enunciado} />
      </div>
      {renderAnswers()}
    </div>
  );
}
