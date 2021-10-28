import React from 'react';
import { UserCardStyle } from './UserCard.styles';

interface IUserCard {
  name: string;
  imagePath: string;
}

const UserCard = ({ name, imagePath }: IUserCard) => {
  return (
    <UserCardStyle>
      <img src={imagePath} />
      <span>{name}</span>
    </UserCardStyle>
  );
};

export default UserCard;
