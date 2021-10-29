import styled from 'styled-components';

export const Answers = styled.div`
  background-color: #fff;
  width: 100%;
  margin-top: ${({ isActive }) => (isActive ? '-15px' : '-368px')};
  padding: 15px 20px 0 20px;
  position: relative;
  z-index: 2;
  transition: margin 0.5s ease-in-out;
  &.active {
    margin-top: -15px;
  }
`;

export const Answer = styled.div`
  display: flex;
  padding: 20px 0;

  .answer-input {
    width: 100%;
  }
`;

export const AnswerOption = styled.button`
  width: 50px;
  height: 48px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 50%;
  margin-right: 20px;
  position: relative;
  border: none;
  span {
    color: #fff;
    font-weight: 800;
    font-size: 1.5em;
    padding: 5px;
    display: block;
  }
  .checkMark {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    padding-top: 15px;
    width: 50px;
    height: 48px;
    background-color: ${({ backgroundColor }) => backgroundColor};
    border-radius: 50%;
    opacity: ${({ isSelectedAnswer }) => (isSelectedAnswer ? 1 : 0)};
    transition: opacity 0.2s ease-in-out;
  }
  &:hover,
  &:focus {
    cursor: pointer;
    .checkMark {
      opacity: 1;
    }
  }
`;

export const IsCorrectAnswer = styled.button`
  width: 50px;
  height: 50px;
`;
