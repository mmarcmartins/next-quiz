import React from 'react';
import { ButtonWrapper } from './Playbutton.style';

interface PlayButtonInterface {
  text: string;
  onClick: () => void;
}

const PlayButton = ({ text, onClick }: PlayButtonInterface) => {
  return (
    <ButtonWrapper onClick={onClick}>
      <span>{text}</span>
    </ButtonWrapper>
  );
};

export default PlayButton;
