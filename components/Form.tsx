import QuestaoModel from "../model/questao";
import styles from "../styles/Form.module.css";
import Button from "./Button";
import Question from "./Question";

interface FormProps {
  question: QuestaoModel;
  last: boolean;
  responseQuestion: (question: QuestaoModel) => void;
  next: () => void;
}

const Form = ({ question, last, responseQuestion, next }: FormProps) => {
  const onResponse = (index: number) => {
    if (question.notAnswers) {
      responseQuestion(question.setAnswer(index));
    }
  };
  return (
    <div className={styles.form}>
      {question && (
        <Question
          valor={question}
          responseTime={3}
          onResponse={onResponse}
          onCompleteTimer={next}
        />
      )}
      <Button text={last ? "Finalizar" : "Próxima"} onClick={next} />
    </div>
  );
};

export default Form;
