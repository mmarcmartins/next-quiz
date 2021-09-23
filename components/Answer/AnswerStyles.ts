import styled from "styled-components";

const correctAnswer = "#F2C866";
const inCorrectAnswer = "#c55454";

export const AnswerStyled = styled.div`
  display: flex;
  &:hover {
    cursor: pointer;
  }
`;

export const ValueStyled = styled.span`
  font-weight: bold;
  font-size: 1.3rem;
  color: ${({ revealed }) => (!revealed ? "#000" : "#FFF")};
  display: flex;
  flex: 1;
  z-index: 2;
  transition: color 0.3s cubic-bezier(0.35, 0.88, 0.98, 1);
`;

export const LetterStyled = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 40px;
  font-size: 1.3rem;
  font-weight: bold;
  margin-right: 20px;
  z-index: 2;
  border: 2px solid #fff;
  background-color: ${({ background }) => background};
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  background-color: ${({ revealed, isCorrect }) =>
    !revealed ? "#FFF" : isCorrect ? correctAnswer : inCorrectAnswer};
  padding: 0 25px;
  width: 100%;
  border-radius: 12px;
  margin: 10px;
  min-height: 100px;
  overflow: hidden;
  &:hover {
    > ${ValueStyled} {
      color: "#FFF";
    }
    &:after {
      ${({ revealed }) => !revealed && "bottom: 0"};
    }
  }
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: -100%;
    background-color: ${({ background }) => background};
    z-index: 1;
    transition: bottom 0.3s cubic-bezier(0.35, 0.88, 0.98, 1);
  }
`;

export const Result = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 40px;
  margin-right: 20px;
  border: 2px solid #fff;
  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 3px;
    background-color: #fff;
    top: 18px;
    left: 0;
    right: 0;
    margin: auto;
  }
  &:after {
    ${({ isCorrect }) => isCorrect && "transform: rotate(90deg);"}
  }
`;
