import React from 'react';
import UserCard from '../../components/UserCard/UserCard';
import { Container, UserList, QuestionForm } from './index.style';

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

const index = () => {
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

      <QuestionForm>
        <img className="user-image" src="img/test.svg" />
      </QuestionForm>
    </Container>
  );
};

export default index;
