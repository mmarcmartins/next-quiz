import React, { useState } from 'react';
import ActionButton from '../components/ActionButton/ActionButton';
import { Container, ImageHolder, Image, InputName, UserInfo } from './styles';

const Index = () => {
  const [name, setName] = useState('');

  const changeName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

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
        <ActionButton text="JOGAR" url="/room" />
      </div>
    </Container>
  );
};

export default Index;
