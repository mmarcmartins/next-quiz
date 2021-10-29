import React, { useState } from 'react';
import { Question } from '../../pages/lobby';

import {
  QuestionInput,
  CreateQuestion,
  AccordionButton,
  QuestionController,
  RemoveQuestion,
} from './QuestionInput.styles';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import AnswerInput from '../AnswerInput/AnswerInput';

interface Questioninput {
  currentQuestionIndex: number;
  setQuestionsValid: (canAddOtherQuestion: boolean) => void;
  currentQuestion: Omit<Question, 'id'>;
}

const QuestionsInput = ({
  currentQuestionIndex,
  currentQuestion,
  setQuestionsValid,
}: Questioninput) => {
  const [current, setCurrent] = useState(currentQuestion.question);
  const [currentAnswers, setCurrentAnswers] = useState(currentQuestion.answers);
  const [isActive, setisActive] = useState(false);
  const handleChangeQuestion = (value: string) => {
    setCurrent(value);
  };

  const setCorrectAnswer = (
    event: React.MouseEvent<HTMLFormElement>,
    index: number,
  ) => {
    event.preventDefault();
    const oldAnswers = currentAnswers;
    oldAnswers[index].correct = true;
    const changeList = currentAnswers.map((answer, currentIndex) => ({
      ...answer,
      correct: currentIndex === index,
    }));
    setCurrentAnswers(changeList);
  };

  const handleAnswerChange = (index: number, value: string) => {
    const oldAnswers = currentAnswers;
    oldAnswers[index].word = value;
    setCurrentAnswers([...oldAnswers]);
  };

  const handleAccordion = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    setisActive(!isActive);
  };

  return (
    <CreateQuestion>
      <QuestionInput>
        <span>{currentQuestionIndex + 1} - </span>
        <input
          type="text"
          className="question-input"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeQuestion(event.target.value)
          }
          value={current}
        />
      </QuestionInput>
      <AnswerInput
        isActive={isActive}
        currentAnswers={currentAnswers}
        currentQuestionIndex={currentQuestionIndex}
        handleAnswerChange={handleAnswerChange}
        setCorrectAnswer={setCorrectAnswer}
      />
      <QuestionController>
        <AccordionButton isActive={isActive} onClick={handleAccordion}>
          <MdOutlineKeyboardArrowDown color="#000" />
          <span>{`${isActive ? 'Esconder' : 'Ver'} respostas`}</span>
        </AccordionButton>
        <RemoveQuestion>
          <span>Excluir questão</span>
        </RemoveQuestion>
      </QuestionController>
    </CreateQuestion>
  );
};

export default QuestionsInput;
