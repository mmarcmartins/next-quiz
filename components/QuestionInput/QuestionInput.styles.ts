import styled from 'styled-components';

export const QuestionInput = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-wrap: no-wrap;
  position: relative;
  z-index: 3;
  span {
    font-size: 2em;
    font-weight: 800;
    color: #000;
    margin: 0 20px;
    margin-right: 10px;
  }
`;

export const CreateQuestion = styled.div`
  width: 100%;
  margin-bottom: 20px;
  position: relative;
  &:last-of-type {
    margin-bottom: 0;
  }
  .question-input {
    flex-grow: 1;
    font-size: 1.4em;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.darkBackground};
  }
`;

export const AccordionButton = styled.button`
  display: flex;
  position: relative;
  border: none;
  z-index: 1;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  padding-top: 30px;
  margin-top: -20px;
  border-radius: 0 0 0 10px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  flex: 1;
  span {
    font-size: 1.2em;
    margin: 0 10px;
  }
  svg {
    width: 20px;
    height: 20px;
    transform: ${({ isAccordionActive }) =>
      !isAccordionActive ? 'rotate(180deg)' : 'rotate(0)'};
    transition: transform 0.5s ease-in-out;
  }
  &:hover,
  &:focus {
    cursor: pointer;
    span {
      font-weight: 800;
    }
  }
`;

export const QuestionController = styled.div`
  display: flex;
`;

export const RemoveQuestion = styled.button`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border: none;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.darkBackground};
  border-radius: 0 0 10px 0;
  span {
    color: #fff;
    font-size: 1.2em;
  }
  &:hover,
  &:focus {
    cursor: pointer;
    span {
      font-weight: 800;
    }
  }
`;
