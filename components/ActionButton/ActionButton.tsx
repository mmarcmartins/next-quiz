import React from 'react';
import ActionArrow from './ActionArrow';
import { ButtonWrapper } from './ActionButton.styles';
import Link from 'next/link';

interface ActionButtonInterface {
  text: string;
  url?: string;
  onClick?: () => void;
}

const ActionButton = ({ text, url }: ActionButtonInterface) => {
  const renderButton = () => {
    return (
      <ButtonWrapper>
        <div className="btn-content">
          <span>{text}</span>
          <ActionArrow />
        </div>
      </ButtonWrapper>
    );
  };
  return (
    <Link href={url} passHref>
      {renderButton()}
    </Link>
  );
};

export default ActionButton;
