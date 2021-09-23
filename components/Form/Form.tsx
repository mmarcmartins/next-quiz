import QuestaoModel from "../../model/Question";
import { FormStyled } from "./FormStyles";
import Button from "../Button/Button";
import Question from "../Question/Question";

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
    <FormStyled>
      {question && (
        <Question
          valor={question}
          responseTime={100}
          onResponse={onResponse}
          onCompleteTimer={next}
        />
      )}
      <Button text={last ? "Finalizar" : "Próxima"} onClick={next} />
    </FormStyled>
  );
};

export default Form;
