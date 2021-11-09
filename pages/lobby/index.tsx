import React, { useState } from 'react';
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

const users = [
  {
    id: 1,
    username: 'Marcelo',
    imagePath: 'img/test.svg',
  },
  {
    id: 2,
    username: 'Anderson',
    imagePath: 'img/test.svg',
  },
  {
    id: 3,
    username: 'Koichi',
    imagePath: 'img/test.svg',
  },
  {
    id: 4,
    username: 'Levi',
    imagePath: 'img/test.svg',
  },
];

export interface Answers {
  word: string;
  correct: boolean;
}
export interface Question {
  id: string;
  question: string;
  answers: Array<Answers>;
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
});

const index = () => {
  const [questions, setQuestions] = useState<Array<Question>>([
    createNewRegister(),
  ]);

  const [questionsValid, setQuestionsValid] = useState(false);

  const removeQuestion = (questionId: string) => {
    if (questions.length === 1) return;
    setQuestions(questions.filter(({ id }) => questionId !== id));
  };

  const addEmptyQuestion = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!questionsValid) return;
    setQuestionsValid(false);
    setQuestions([...questions, createNewRegister()]);
  };

  return (
    <Container>
      <UserList>
        <div className="total-players">
          <span>{users.length}/10</span>
          <h1>JOGADORES</h1>
        </div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <UserCard name={user.username} imagePath={user.imagePath} />
            </li>
          ))}
        </ul>
      </UserList>

      <QuestionDiv>
        <div className="current-user">
          <img className="user-image" src="img/test.svg" />
          <span>Marcelo</span>
        </div>
        <QuestionForm>
          {questions.map((question, currentIndex) => (
            <QuestionsInput
              currentQuestion={question}
              key={`${question.id}`}
              currentQuestionIndex={currentIndex}
              setQuestionsValid={setQuestionsValid}
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
