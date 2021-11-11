import styled from 'styled-components';

export const Answers = styled.div`
  background-color: #fff;
  width: 100%;
  height: ${({ isAccordionActive }) => (isAccordionActive ? '0' : '368px')};
  padding: 0 20px 0 20px;
  position: relative;
  z-index: 2;
  overflow: hidden;
  transition: height 0.5s ease-in-out;
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
  border: 2px solid #fff;
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
    padding-top: 10px;

    width: 100%;
    height: 100%;
    border: 1px solid ${({ backgroundColor }) => backgroundColor};
    background-color: ${({ backgroundColor }) => backgroundColor};
    border-radius: 50%;
    opacity: ${({ isSelectedAnswer }) => (isSelectedAnswer ? 1 : 0)};
    transition: opacity 0.2s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    .checkMark {
      opacity: 1;
    }
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.darkBackground};
  }
  svg {
    width: 50px;
    height: 25px;
    padding-right: 5px;
  }
`;

export const IsCorrectAnswer = styled.button`
  width: 50px;
  height: 50px;
`;
