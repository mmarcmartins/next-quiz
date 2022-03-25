import React, { useState, useContext } from 'react';
import ActionButton from '../components/ActionButton/ActionButton';
import { Container, ImageHolder, Image, InputName, UserInfo } from './styles';
import SocketContext from '../contexts/socket';
import UserContext from '../contexts/users';

import { createOrGetRoom } from '../functions/socketHelpers';
import { useRouter } from 'next/router';

const Index = () => {
  const [name, setName] = useState('');
  const router = useRouter();
  const socket = useContext(SocketContext);
  const currentUser = useContext(UserContext);
  
  const changeName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const connectPlayer = async () => {
    const currentRoom = createOrGetRoom();
    const newUser = { name, currentRoom , imagePath: 'img/test.svg' }
    socket.auth = { ...newUser };
    await socket.connect();
    currentUser.setCurrentUser({socketId: socket.id,...newUser})
    router.push(`/lobby?r=${currentRoom}`);
  }

  return (
    <Container>
      <div className="centerContent">
        <UserInfo>
          <ImageHolder>
            <Image src="img/test.svg" alt="123" />
          </ImageHolder>
          <InputName
            placeholder="Um nome muito legal"
            value={name}
            onChange={changeName}
          />
        </UserInfo>
        <ActionButton text="INICIAR SALA" onClick={connectPlayer} />
      </div>
    </Container>
  );
};

export default Index;
