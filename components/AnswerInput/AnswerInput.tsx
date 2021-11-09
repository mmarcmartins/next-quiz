import React from 'react';
import { Answers as IAnswers } from '../../pages/lobby';

import { Answer, Answers, AnswerOption } from './AnswerInput.styles';
import { BsCheckLg } from 'react-icons/bs';

const letters = [
  { valor: 'A', cor: '#F2C866' },
  { valor: 'B', cor: '#F266BA' },
  { valor: 'C', cor: '#85D4F2' },
  { valor: 'D', cor: '#BCE596' },
];

interface IAnswerInput {
  isAccordionActive: boolean;
  currentAnswers: IAnswers[];
  questionId: string;
  currentQuestionIndex: string;
  handleAnswerChange: (index: number, value: string) => void;
  setCorrectAnswer: (
    event: React.MouseEvent<HTMLFormElement>,
    index: number,
  ) => void;
}

const AnswerInput = ({
  isAccordionActive,
  currentAnswers,
  currentQuestionIndex,
  handleAnswerChange,
  setCorrectAnswer,
  questionId,
}: IAnswerInput) => {
  return (
    <Answers isAccordionActive={isAccordionActive}>
      {currentAnswers.map((answer, index) => (
        <Answer key={`${questionId}-${index}`}>
          <AnswerOption
            onClick={(event: React.MouseEvent<HTMLFormElement>) =>
              setCorrectAnswer(event, index)
            }
            isSelectedAnswer={answer.correct}
            backgroundColor={letters[index].cor}
          >
            <span>{letters[index].valor}</span>
            <div className="checkMark">
              <BsCheckLg color="#FFF" />
            </div>
          </AnswerOption>
          <input
            type="text"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleAnswerChange(index, event.target.value)
            }
            className="question-input"
            value={answer.word}
          />
        </Answer>
      ))}
    </Answers>
  );
};

export default AnswerInput;
