import React, { useEffect, useState } from 'react';
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
  currentQuestion: Question;
  removeQuestion: (questionId: string) => void;
}

const QuestionsInput = ({
  currentQuestionIndex,
  currentQuestion,
  setQuestionsValid,
  removeQuestion,
}: Questioninput) => {
  const [currentWord, setCurrentWord] = useState(currentQuestion.question);
  const [currentAnswers, setCurrentAnswers] = useState(currentQuestion.answers);
  const [isInputValid, setIsInputValid] = useState(false);
  const [isAccordionActive, setisAccordionActive] = useState(false);

  const handleChangeQuestion = (value: string) => {
    setCurrentWord(value);
  };

  const haveEmptyFields = () =>
    currentWord.trim() === '' ||
    currentAnswers.some((answer) => answer.word.trim() === '');

  const setCorrectAnswer = (
    event: React.MouseEvent<HTMLFormElement>,
    index: number,
  ) => {
    event.preventDefault();
    const hasEmptyFields = haveEmptyFields();

    if (hasEmptyFields) return;

    const changeList = currentAnswers.map((answer, currentIndex) => ({
      ...answer,
      correct: currentIndex === index,
    }));
    setIsInputValid(!hasEmptyFields);
    setCurrentAnswers(changeList);
  };

  useEffect(() => {
    if (!isInputValid) {
      setCurrentAnswers(
        currentAnswers.map((answer) => ({ ...answer, correct: false })),
      );
    }
    setQuestionsValid(isInputValid);
  }, [isInputValid]);

  const handleAnswerChange = (index: number, value: string) => {
    const oldAnswers = [...currentAnswers];
    oldAnswers[index].word = value;
    if (value.trim() === '') {
      setIsInputValid(false);
    }
    setCurrentAnswers([...oldAnswers]);
  };

  const handleAccordion = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    setisAccordionActive(!isAccordionActive);
  };

  const handleRemoveQuestion = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    removeQuestion(currentQuestion.id);
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
          value={currentWord}
        />
      </QuestionInput>
      <AnswerInput
        questionId={currentQuestion.id}
        isAccordionActive={isAccordionActive}
        currentAnswers={currentAnswers}
        currentQuestionIndex={currentQuestion.id}
        handleAnswerChange={handleAnswerChange}
        setCorrectAnswer={setCorrectAnswer}
      />
      <QuestionController>
        <AccordionButton
          isAccordionActive={isAccordionActive}
          onClick={handleAccordion}
        >
          <MdOutlineKeyboardArrowDown color="#000" />
          <span>{`${isAccordionActive ? 'Esconder' : 'Ver'} respostas`}</span>
        </AccordionButton>
        <RemoveQuestion onClick={handleRemoveQuestion}>
          <span>Excluir questão</span>
        </RemoveQuestion>
      </QuestionController>
    </CreateQuestion>
  );
};

export default QuestionsInput;
