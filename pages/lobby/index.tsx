import React, { useState } from 'react';
import UserCard from '../../components/UserCard/UserCard';
import {
  Container,
  UserList,
  QuestionDiv,
  QuestionForm,
  AddQuestionPlaceholder,
} from './index.style';
import { v4 as uuidv4 } from 'uuid';

import { BsPlusLg } from 'react-icons/bs';
import QuestionsInput from '../../components/QuestionInput/QuestionsInput';

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

const emptyQuestion: Question = {
  id: uuidv4(),
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
};

const index = () => {
  const [questions, setQuestions] = useState<Array<Question>>([emptyQuestion]);
  const [questionsValid, setQuestionsValid] = useState(true);

  const addEmptyQuestion = (event: React.MouseEvent<HTMLFormElement>) => {
    console.log(questionsValid);
    if (!questionsValid) return;
    event.preventDefault();
    setQuestionsValid(false);
    setQuestions([...questions, emptyQuestion]);
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
              key={`${currentIndex}`}
              currentQuestionIndex={currentIndex}
              setQuestionsValid={setQuestionsValid}
            />
          ))}
          <AddQuestionPlaceholder
            onClick={addEmptyQuestion}
            disabled={!questionsValid}
          >
            <div className="icon-placeholder">
              <BsPlusLg />
            </div>
            <span>Adicionar questão</span>
          </AddQuestionPlaceholder>
        </QuestionForm>
      </QuestionDiv>
    </Container>
  );
};

export default index;
