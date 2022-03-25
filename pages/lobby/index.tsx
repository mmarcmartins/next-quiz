import React, { useState, useContext } from 'react';
import UserCard from '../../components/UserCard/UserCard';
import {
  Container,
  UserList,
  QuestionDiv,
  QuestionForm,
  AddQuestionPlaceholder,
} from './index.style';

import { BsPlusLg } from 'react-icons/bs';
import QuestionsInput from '../../components/QuestionInput/QuestionsInput';
import { nanoid } from 'nanoid';
import PlayButton from '../../components/PlayButton/PlayButton';
import UserContext from '../../contexts/users';

const fixUsers = [
  {
    socketId: 1,
    username: 'Marcelo',
    imagePath: 'img/test.svg',
  },
  {
    socketId: 2,
    username: 'Anderson',
    imagePath: 'img/test.svg',
  }
];

export interface Answers {
  word: string;
  correct: boolean;
}
export interface Question {
  id: string;
  question: string;
  answers: Array<Answers>;
  isValid: boolean;
}

const createNewRegister = (): Question => ({
  id: nanoid(),
  question: '',
  answers: [
    {
      word: '',
      correct: false,
    },
    {
      word: '',
      correct: false,
    },
    {
      word: '',
      correct: false,
    },
    {
      word: '',
      correct: false,
    },
  ],
  isValid: false,
});

const index = () => {
  const [questions, setQuestions] = useState<Array<Question>>([
    createNewRegister(),
  ]);

  const isSomeQuestionsInvalid = () =>
    questions.some((question) => !question.isValid);

  const removeQuestion = (questionId: string) => {
    if (questions.length === 1) return;
    setQuestions(questions.filter(({ id }) => questionId !== id));
  };

  const setQuestionStatus = (isValid: boolean, currentIdQuestion: string) => {
    const newQuestions = questions.map((question) =>
      question.id === currentIdQuestion
        ? { ...question, isValid }
        : { ...question },
    );
    setQuestions(newQuestions);
  };

  const addEmptyQuestion = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSomeQuestionsInvalid()) return;
    setQuestions([...questions, createNewRegister()]);
  };

  const { users, currentUser }  = useContext(UserContext)

  return (
    <Container>
      <UserList>
        <div className="total-players">
          <span>{users.length}/10</span>
          <h1>JOGADORES</h1>
        </div>
        <ul>
          {users.map((user) => (
            <li key={user.socketId}>
              <UserCard name={user.name} imagePath={user.imagePath} />
            </li>
          ))}
        </ul>
        <PlayButton onClick={() => console.log('click')} text="JOGAR" />
      </UserList>

      <QuestionDiv>
        <div className="current-user">
          <img className="user-image" src={currentUser.imagePath} />
          <span>{currentUser.name}</span>
        </div>
        <QuestionForm>
          {questions.map((question, currentIndex) => (
            <QuestionsInput
              currentQuestion={question}
              key={`${question.id}`}
              currentQuestionIndex={currentIndex}
              setQuestionsValid={setQuestionStatus}
              removeQuestion={removeQuestion}
            />
          ))}
        </QuestionForm>
        <AddQuestionPlaceholder onClick={addEmptyQuestion} disabled={false}>
          <div className="icon-placeholder">
            <BsPlusLg />
          </div>
          <span>Adicionar questão</span>
        </AddQuestionPlaceholder>
      </QuestionDiv>
    </Container>
  );
};

export default index;
