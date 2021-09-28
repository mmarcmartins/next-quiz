import React from 'react';
import { Container } from '../styles';

const users = [
  {
    username: 'Marcelo',
    imagePath: 'img/test.svg',
  },
  {
    username: 'Anderson',
    imagePath: 'img/test.svg',
  },
  {
    username: 'Koichi',
    imagePath: 'img/test.svg',
  },
  {
    username: 'Levi',
    imagePath: 'img/test.svg',
  },
];

const index = () => {
  return (
    <Container>
      {users.map((user) => (
        <div>
          <p>{user.username}</p>
          <br />
        </div>
      ))}
    </Container>
  );
};

export default index;
