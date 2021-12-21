import React from 'react';
import ActionArrow from './ActionArrow';
import { ButtonWrapper } from './ActionButton.styles';
import Link from 'next/link';

interface ActionButtonInterface {
  text: string;
  url?: string;
  onClick?: () => void;
}

const renderButton = (text: string, onClick?: () => void) => {
  return (
    <ButtonWrapper onClick={onClick}>
      <div className="btn-content">
        <span>{text}</span>
        <ActionArrow />
      </div>
    </ButtonWrapper>
  );
};

const ActionButton = ({ text, url, onClick }: ActionButtonInterface) => {
  return (
    onClick ?  
    renderButton(text, onClick) :  
    <Link href={url} passHref>
      {renderButton(text)}
    </Link>
  );
};

export default ActionButton;
