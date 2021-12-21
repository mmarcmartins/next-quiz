import React, { useState, useContext } from 'react';
import ActionButton from '../components/ActionButton/ActionButton';
import { Container, ImageHolder, Image, InputName, UserInfo } from './styles';
import SocketContext from '../contexts/socket';
import { createOrGetRoom } from '../functions/socketHelpers';

const Index = () => {
  const [name, setName] = useState('');
  const { socket } = useContext(SocketContext);
  
  const changeName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const connectPlayer = () => {
    socket.emit('joinRoom', {
      name,
      socketId: socket.id,
      currentRoom: createOrGetRoom(),
      imagePath: 'img/test.svg'
    })
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
